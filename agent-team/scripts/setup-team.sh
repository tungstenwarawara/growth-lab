#!/bin/bash
# ============================================================
# Agent Team — Setup Script
# MCP + tmux ハイブリッドアーキテクチャ
#
# Usage:
#   ./setup-team.sh <template-dir> [project-dir]
#
# Example:
#   ./agent-team/scripts/setup-team.sh ./agent-team/templates/dev-team .
#   ./agent-team/scripts/setup-team.sh ./agent-team/templates/dev-team /path/to/project
# ============================================================

set -euo pipefail

# --- 引数チェック ---
TEMPLATE_DIR="${1:?Usage: setup-team.sh <template-dir> [project-dir]}"
PROJECT_DIR="${2:-.}"

# 絶対パスに変換
TEMPLATE_DIR="$(cd "$TEMPLATE_DIR" && pwd)"
PROJECT_DIR="$(cd "$PROJECT_DIR" && pwd)"

SESSION="agent-team"

echo "================================================"
echo "  Agent Team — Setup"
echo "================================================"
echo "  Template:  $TEMPLATE_DIR"
echo "  Project:   $PROJECT_DIR"
echo "  Session:   $SESSION"
echo "================================================"

# --- team.yaml の存在確認 ---
if [ ! -f "$TEMPLATE_DIR/team.yaml" ]; then
    echo "Error: team.yaml not found in $TEMPLATE_DIR"
    exit 1
fi

# --- ワークスペース作成 ---
echo ""
echo "[1/4] Creating workspace..."
mkdir -p "$PROJECT_DIR/.agent-team"/{tasks,messages,status,output}
echo "  Created .agent-team/{tasks,messages,status,output}"

# --- 既存セッションの確認 ---
if tmux has-session -t "$SESSION" 2>/dev/null; then
    echo ""
    echo "Warning: Session '$SESSION' already exists."
    read -p "Kill existing session? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        tmux kill-session -t "$SESSION"
        echo "  Killed existing session."
    else
        echo "  Aborted."
        exit 0
    fi
fi

# --- tmux セッション作成 ---
echo ""
echo "[2/4] Creating tmux session..."
tmux new-session -d -s "$SESSION" -c "$PROJECT_DIR"

# --- ペイン分割（2x2 レイアウト）---
#
#  ┌──────────┬──────────┐
#  │  Lead    │ Frontend │
#  │ (pane 0) │ (pane 1) │
#  ├──────────┼──────────┤
#  │ Backend  │ Reviewer │
#  │ (pane 2) │ (pane 3) │
#  └──────────┴──────────┘
#
tmux split-window -h -t "$SESSION" -c "$PROJECT_DIR"
tmux split-window -v -t "$SESSION:0.0" -c "$PROJECT_DIR"
tmux split-window -v -t "$SESSION:0.1" -c "$PROJECT_DIR"

echo "  Created 4 panes (2x2 layout)"

# --- 各ペインにエージェントを起動 ---
echo ""
echo "[3/4] Launching agents..."

launch_agent() {
    local pane=$1
    local role_name=$2
    local role_file="$TEMPLATE_DIR/roles/${role_name}.md"

    if [ ! -f "$role_file" ]; then
        echo "  Warning: Role file not found: $role_file"
        return
    fi

    # ペインにタイトルを設定
    tmux select-pane -t "$SESSION:0.${pane}" -T "$role_name"

    # Claude Code を起動して初期プロンプトを送信
    tmux send-keys -t "$SESSION:0.${pane}" "cd $PROJECT_DIR && claude" Enter

    # Claude の起動を待つ
    sleep 2

    # ロールファイルのパスを送信（Claude に読ませる）
    local prompt="私のロール定義を読んでください: $role_file
そして .agent-team/ ディレクトリの状態を確認して、作業を開始してください。"

    tmux send-keys -t "$SESSION:0.${pane}" "$prompt" Enter

    echo "  Launched: $role_name (pane $pane)"
}

# Lead (pane 0) → Frontend (pane 2) → Backend (pane 1) → Reviewer (pane 3)
# ※ tmux の split 順序により pane 番号がずれる点に注意
launch_agent 0 "lead"
launch_agent 2 "frontend"
launch_agent 1 "backend"
launch_agent 3 "reviewer"

# --- 完了 ---
echo ""
echo "[4/4] Setup complete!"
echo ""
echo "================================================"
echo "  Agent Team is ready!"
echo ""
echo "  Attach:    tmux attach -t $SESSION"
echo "  Detach:    Ctrl+B, D"
echo "  Teardown:  ./agent-team/scripts/teardown-team.sh"
echo ""
echo "  Pane layout:"
echo "    0: Lead      | 2: Frontend"
echo "    1: Backend   | 3: Reviewer"
echo ""
echo "  Switch panes: Ctrl+B, Arrow keys"
echo "================================================"
