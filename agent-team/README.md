# Agent Team Framework

MCP + tmux ハイブリッドアーキテクチャによる Claude Code マルチエージェントフレームワーク。

「チーム」メタファーで、複数の Claude Code インスタンスが **並列で自律的に** タスクを遂行します。

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

## ライセンス

MIT
