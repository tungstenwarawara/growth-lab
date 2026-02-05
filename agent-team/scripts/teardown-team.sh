#!/bin/bash
# ============================================================
# Agent Team — Teardown Script
#
# Usage:
#   ./teardown-team.sh [--clean]
#
# Options:
#   --clean   ワークスペース（.agent-team/）も削除する
# ============================================================

set -euo pipefail

SESSION="agent-team"

echo "================================================"
echo "  Agent Team — Teardown"
echo "================================================"

# --- セッション終了 ---
if tmux has-session -t "$SESSION" 2>/dev/null; then
    tmux kill-session -t "$SESSION"
    echo "  Killed tmux session: $SESSION"
else
    echo "  No active session found: $SESSION"
fi

# --- ワークスペースのクリーンアップ（オプション）---
if [ "${1:-}" = "--clean" ]; then
    if [ -d ".agent-team" ]; then
        echo ""
        echo "  Cleaning workspace..."
        rm -rf .agent-team/tasks/*
        rm -rf .agent-team/messages/*
        rm -rf .agent-team/status/*
        rm -rf .agent-team/output/*
        echo "  Cleaned: .agent-team/{tasks,messages,status,output}"
    else
        echo "  No .agent-team/ directory found."
    fi
fi

echo ""
echo "  Done."
echo "================================================"
