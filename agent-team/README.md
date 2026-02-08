# Agent Team Framework

MCP + tmux ハイブリッドアーキテクチャによる Claude Code マルチエージェントフレームワーク。

「チーム」メタファーで、複数の Claude Code インスタンスが **並列で自律的に** タスクを遂行します。

> **v0.2 New**: Claude Code 公式 Agent Teams 機能との統合をサポート

## 実行モード

| モード | 環境 | 特徴 |
|--------|------|------|
| **tmux モード** | ローカルターミナル | 視覚的な4ペイン、手動切り替え |
| **Official Agent Teams** | Claude Code 2.1+ | 自動オーケストレーション、タスク共有 |
| **SDK サブエージェント** | Claude Agent SDK | Task ツールによる並列実行 |

## 特徴

- **チームメタファー** — Director → Lead → Members → Reviewer のフラットな構造
- **MCP + tmux ハイブリッド** — MCP でツール統合、tmux でプロセス並列実行
- **$200/月で動作設計** — Claude Max の制約内で最大効率を引き出す
- **ファイルベース通信** — YAML ファイルでエージェント間通信（トークン消費ゼロ）
- **テンプレート駆動** — 用途別のチーム構成テンプレートですぐに始められる

## アーキテクチャ

```
Director（人間）
  │
  ▼
┌─────────────────────────────────────────────┐
│              tmux session: agent-team         │
│                                              │
│  ┌──────────┬──────────┐                    │
│  │  Lead    │ Frontend │                    │
│  │ (pane 0) │ (pane 1) │                    │
│  ├──────────┼──────────┤                    │
│  │ Backend  │ Reviewer │                    │
│  │ (pane 2) │ (pane 3) │                    │
│  └──────────┴──────────┘                    │
│       │          │          │               │
│       ▼          ▼          ▼               │
│  ┌──────────────────────────────────────┐   │
│  │    .agent-team/ (Shared Workspace)    │   │
│  │    tasks/ messages/ status/ output/   │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

## クイックスタート

### 1. チームを起動する

```bash
# Dev Team テンプレートでチームを起動
./agent-team/scripts/setup-team.sh ./agent-team/templates/dev-team .
```

### 2. セッションにアタッチする

```bash
tmux attach -t agent-team
```

### 3. Director としてタスクを投入する

Lead のペイン（pane 0）に切り替えて、タスクを指示します:

```
認証機能を実装してください。
- ログインページ（メール + パスワード）
- サインアップページ
- パスワードリセット
Supabase Auth を使用。
```

Lead がタスクを分解し、Frontend / Backend に自動的にアサインします。

### 4. チームを終了する

```bash
./agent-team/scripts/teardown-team.sh         # セッションのみ終了
./agent-team/scripts/teardown-team.sh --clean  # ワークスペースも削除
```

## テンプレート

| テンプレート | 構成 | 用途 |
|---|---|---|
| **dev-team** | Lead + Frontend + Backend + Reviewer | フルスタック開発 |
| content-team | _(coming soon)_ | コンテンツ制作 |
| research-team | _(coming soon)_ | 技術調査・分析 |
| launch-team | _(coming soon)_ | プロダクトローンチ |

## ファイル構成

```
agent-team/
├── README.md           # このファイル
├── scripts/
│   ├── setup-team.sh   # チーム起動スクリプト
│   └── teardown-team.sh# 終了スクリプト
├── templates/
│   └── dev-team/
│       ├── team.yaml   # チーム構成定義
│       └── roles/
│           ├── lead.md       # Team Lead の指示書
│           ├── frontend.md   # Frontend Developer の指示書
│           ├── backend.md    # Backend Developer の指示書
│           └── reviewer.md   # Code Reviewer の指示書
└── examples/
    ├── task.yaml       # タスク定義の例
    ├── message.yaml    # メッセージの例
    └── status.yaml     # ステータスファイルの例
```

## 通信プロトコル

エージェント間の通信はすべて `.agent-team/` ディレクトリ内のYAMLファイルで行います。

### タスク（`.agent-team/tasks/`）

```yaml
id: "001"
title: "ログインフォームの実装"
assigned_to: frontend
status: pending  # pending → in_progress → review → done
priority: high
description: |
  実装の詳細...
```

### メッセージ（`.agent-team/messages/`）

```yaml
from: lead
to: frontend
type: task_assignment
content: "タスク001を開始してください"
```

### ステータス（`.agent-team/status/`）

```yaml
agent: frontend
status: working  # idle | working | blocked | done
current_task: "001"
```

## コスト最適化

| 施策 | 効果 |
|---|---|
| ファイルベース通信 | オーケストレーションのトークン消費ゼロ |
| 同時稼働 2-3 エージェント | rate limit 内で安定稼働 |
| コンパクトなロール定義 | コンテキスト消費を最小化 |
| イベント駆動 | 待機時のトークン消費ゼロ |
| タスク完了後にエージェント停止 | 不要な API 消費を防止 |

## tmux 操作チートシート

| 操作 | キー |
|---|---|
| セッションにアタッチ | `tmux attach -t agent-team` |
| セッションからデタッチ | `Ctrl+B` → `D` |
| ペイン切り替え | `Ctrl+B` → 矢印キー |
| ペイン一覧 | `Ctrl+B` → `Q` |
| 全ペイン同時入力 | `Ctrl+B` → `:setw synchronize-panes on` |

---

## 公式 Agent Teams 連携（v0.2）

Claude Code 2.1+ には公式のマルチエージェント機能が搭載されています。
このフレームワークのロール定義・通信プロトコルと組み合わせて使用できます。

### セットアップ

```bash
# 1. 環境変数で有効化
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1

# または .claude/settings.json に設定
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  },
  "teammateMode": "in-process"
}
```

### カスタムエージェント定義

`.claude/agents/` にロール定義を配置:

```
.claude/agents/
├── team-lead.md       # Team Lead
├── frontend-member.md # Frontend Developer
├── backend-member.md  # Backend Developer
└── reviewer.md        # Code Reviewer
```

### 使用方法

```bash
# エージェントを指定して起動
claude --agent team-lead

# または JSON で動的に定義
claude --agents '{
  "lead": {
    "description": "Team Lead for task coordination",
    "prompt": "You are the Team Lead...",
    "model": "sonnet"
  },
  "reviewer": {
    "description": "Code reviewer for quality checks",
    "prompt": "You are the Reviewer...",
    "model": "haiku"
  }
}'
```

### チーム起動（自然言語）

```bash
claude "Create a dev team with:
- Lead to coordinate tasks
- Frontend to build UI
- Backend to implement API
- Reviewer to check code quality

Use YAML files in .agent-team/ for communication."
```

### tmux モード vs 公式 Agent Teams

| 観点 | tmux モード | 公式 Agent Teams |
|------|-------------|------------------|
| **視認性** | 4ペイン同時表示 | シングル表示 + 切り替え |
| **自動化** | 手動切り替え | 自動オーケストレーション |
| **タスク共有** | ファイルベース | 組み込みタスクリスト |
| **コンテキスト** | 各ペイン独立 | 各チームメイト独立 |
| **セットアップ** | スクリプト実行 | 自然言語で起動 |

**推奨**:
- 視覚的に監視したい場合 → **tmux モード**
- 自動化を重視する場合 → **公式 Agent Teams**
- 両方の利点が欲しい場合 → **tmux + 公式機能の併用**

---

## SDK サブエージェント連携

Claude Agent SDK 環境では、Task ツールがサブエージェントとして動作します。

```typescript
// Task ツールでメンバーを並列起動
const [frontendResult, backendResult] = await Promise.all([
  task({
    subagent_type: "Explore",
    description: "Frontend implementation",
    prompt: "Implement the login form component...",
    model: "haiku"
  }),
  task({
    subagent_type: "Explore",
    description: "Backend implementation",
    prompt: "Implement the auth API endpoint...",
    model: "haiku"
  })
]);
```

この方法は Web 環境やサンドボックス環境でも動作します。

---

## ライセンス

MIT
