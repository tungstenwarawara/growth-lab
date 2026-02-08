# Growth Lab プロジェクトログ

最終更新: 2026-02-06

---

## ビジョン

### 究極の目標
**「大賢者」を作る** — 転スラのリムルのように、スキルを吸収し続けて成長するAIパートナー

```
あなた（魔王リムル）
    │
    ▼
Agent Team Framework（大賢者）
    │
    │ スキルを吸収・自己改善
    │
    ▼
価値を生む → 人が集まる → コミュニティ（国）を作る
```

### 投資回収目標
- **総投資額**: ¥610,000（MacBook ¥250,000 + Claude Max $200×12ヶ月）
- **目標達成**: Month 8
- **現在**: ¥0（販売開始前）

---

## 戦略の変遷

### v1: Micro-SaaS 量産（却下）
- ChatGPT/Claude にコモディティ化される危機
- 差別化が難しい

### v2: Agent Team Framework + Services（採用）
- AIエージェント領域はブルーオーシャン
- $200/月の制約が逆に差別化要因
- 開発過程がコンテンツになる（Build in Public）

---

## 技術的決定

### アーキテクチャ選定

| 選択肢 | 採用 | 理由 |
|--------|------|------|
| 軍隊メタファー（将軍/足軽） | ❌ | 好みじゃない |
| **チームメタファー（Director/Lead/Members）** | ✅ | フラットで現代的 |
| API ベース通信 | ❌ | トークン消費が大きい |
| **YAML ファイル通信** | ✅ | トークン消費ゼロ |
| 単一エージェント | ❌ | 並列処理できない |
| **MCP + tmux ハイブリッド** | ✅ | 並列 + ツール統合 |

### チーム構成（dev-team）

```
Director（人間）
    │
    ▼
┌─────────────────────────────────────┐
│           Agent Team                │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌────┐ │
│  │ Lead │ │Front │ │Back  │ │Rev │ │
│  │      │ │ end  │ │ end  │ │iew │ │
│  └──────┘ └──────┘ └──────┘ └────┘ │
│              │                      │
│              ▼                      │
│     .agent-team/（共有ワークスペース）│
└─────────────────────────────────────┘
```

---

## 実装済み機能

### Framework v0.1
- `team.yaml` 構成ファイル
- 4ロール定義（lead, frontend, backend, reviewer）
- tmux セットアップ/終了スクリプト
- YAML 通信プロトコル（tasks, messages, status）

### Framework v0.2
- Claude Code 公式 Agent Teams 連携
- `.claude/settings.json` で有効化
- `.claude/agents/` カスタムエージェント定義
- 3つの実行モード（tmux / Official / SDK）

### Self-Improvement Loop Phase 1
- `.agent-team/learning/` ディレクトリ構造
- `config/safety.yaml` — 安全設定
- `config/approval-rules.yaml` — 承認フロー
- `config/rate-limits.yaml` — レート制限
- `triggers/` — 3種類のトリガー定義
- `mcp-registry.yaml` — MCPサーバーレジストリ
- Team Lead ロール更新（Self-Improvement セクション追加）

### LP サイト
- Next.js 15 + Tailwind CSS v4 + shadcn/ui
- Vercel にデプロイ済み
- ダークテーマ

---

## 失敗と学び

### 失敗 1: Tailwind CSS v4 エラー
```
ReferenceError: border-border is not defined
```
**原因**: v3 の書き方を v4 で使った
**解決**: `@theme` ブロックで CSS 変数を定義
**学び**: メジャーバージョンアップ時は公式ドキュメント優先

### 失敗 2: Vercel 自動デプロイされない
**原因**: Branch Tracking が別ブランチを向いていた
**解決**: 設定変更 + 空コミットでトリガー
**学び**: CI/CD 設定は最初に確認

### 失敗 3: claude -p が動かない
**原因**: サンドボックス環境で子プロセスの API アクセス制限
**発見**: Task ツールがサブエージェントとして使える
**学び**: 制約から新しい発見が生まれる

---

## 発見と驚き

### 発見 1: YAML 通信のパワー
オーケストレーションのトークン消費がゼロになる重要性

### 発見 2: 公式 Agent Teams 機能の存在
```bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
```
フレームワークを捨てずに統合できた

### 発見 3: Task ツール = サブエージェント
Web 環境でも並列エージェント実行が可能

---

## 収益化戦略

| 収益源 | 状態 | 目標 |
|--------|------|------|
| テンプレート販売（Gumroad/BOOTH） | 未開始 | ¥50,000/月 |
| Framework Premium（月額） | 未開始 | ¥30,000/月 |
| Zenn Book | 未開始 | ¥20,000/月 |
| コンテンツ収益 | 未開始 | ¥10,000/月 |
| エージェント開発代行 | 未開始 | ¥50,000/案件 |

---

## 今後の計画

### 直近（今日）
1. Self-Improvement Loop Phase 2 実装
2. 「解析完了。スキル〇〇を獲得」の実現

### 短期（今週）
3. Zenn 記事公開（「大賢者を作る」物語）
4. テンプレート販売開始

### 中期
5. task-manager（ライフリポジトリ）との統合
6. リポジトリ横断パーソナリティ分析

### 長期
7. コミュニティ形成（「国」づくり）
8. 大賢者の完成

---

## コミット履歴

| Hash | メッセージ |
|------|-----------|
| 24359ef | feat: Self-Improvement Loop Phase 1 実装 |
| 6fa6045 | docs: Self-Improvement Loop 設計ドキュメントとZenn記事ドラフト追加 |
| eac4ea2 | feat: Claude Code 公式 Agent Teams 機能との統合 (v0.2) |
| def77a4 | chore: trigger Vercel redeploy |
| 479efbb | feat: ダッシュボードを日本語化 |

---

## ファイル構成（現在）

```
growth-lab/
├── CLAUDE.md                   # プロジェクトルール
├── README.md                   # ダッシュボード
│
├── agent-team/                 # Framework 本体
│   ├── README.md               # v0.2 ドキュメント
│   ├── templates/dev-team/     # 開発チームテンプレート
│   ├── scripts/                # セットアップスクリプト
│   └── examples/               # YAML 例
│
├── .agent-team/                # 実行時ワークスペース
│   ├── tasks/
│   ├── messages/
│   ├── status/
│   └── learning/               # 🆕 Self-Improvement Loop
│       ├── config/
│       ├── triggers/
│       ├── proposals/
│       ├── patterns/
│       └── mcp-registry.yaml
│
├── .claude/                    # Claude Code 設定
│   ├── settings.json           # Agent Teams 有効化
│   ├── agents/                 # カスタムエージェント
│   └── prompts/
│
├── portfolio/                  # LP サイト（Next.js）
│
├── docs/
│   ├── strategy.md             # 戦略ドキュメント
│   ├── design/
│   │   └── self-improvement-loop.md
│   └── project-log.md          # このファイル
│
└── marketing/
    └── zenn-articles/
        └── 00-project-journey-draft.md
```

---

## 2026-02-08: Phase 1 完了 — 公式機能への移行

### Zenn 記事公開
- URL: https://zenn.dev/mikkabouzu_log/articles/a39fd6228ae729
- 大賢者システムの紹介

### 公式 Skills 構造への移行

```
.claude/skills/
├── great-sage/SKILL.md      # 大賢者スキル（スキル吸収、通知）
├── auto-learner/SKILL.md    # 自動学習スキル（パターン蓄積）
├── mcp-explorer/SKILL.md    # MCP探索スキル
└── project-memory/SKILL.md  # プロジェクト記憶スキル
```

### エージェント定義の更新

全エージェントに YAML フロントマターを追加:

```yaml
---
name: team-lead
model: opus
memory: project  # ← 公式 Memory 機能を活用
tools: [Read, Glob, Grep, Write, Edit]
---
```

| エージェント | モデル | 役割 |
|-------------|--------|------|
| team-lead | opus | 統括、スキル吸収検知 |
| frontend-member | sonnet | UI実装 |
| backend-member | sonnet | API/DB実装 |
| reviewer | haiku | コードレビュー（低コスト） |

### 新規作成ファイル

- `.mcp.json` — MCP サーバー構成管理
- `.claude/settings.json` — Hooks、Permissions、コスト最適化設定

### 乖離分析

`docs/gap-analysis-2026-02-08.md` で現状とベストプラクティスの差分を分析。

**結論**: 公式機能をベースに、独自の付加価値（大賢者、転スラ世界観）を乗せる

---

## ファイル構成（2026-02-08 更新）

```
growth-lab/
├── CLAUDE.md
├── README.md
├── .mcp.json                     # 🆕 MCP構成管理
│
├── .claude/
│   ├── settings.json             # 🔄 Hooks, Permissions 追加
│   ├── agents/                   # 🔄 YAML フロントマター追加
│   │   ├── team-lead.md
│   │   ├── frontend-member.md
│   │   ├── backend-member.md
│   │   └── reviewer.md
│   ├── skills/                   # 🆕 公式 Skills 構造
│   │   ├── great-sage/
│   │   ├── auto-learner/
│   │   ├── mcp-explorer/
│   │   └── project-memory/
│   └── commands/
│       └── optimize-image.md     # 獲得したスキル
│
├── .agent-team/
│   └── learning/
│       ├── config/
│       ├── engine/               # 大賢者エンジン
│       ├── proposals/
│       ├── notifications/
│       └── history/
│
├── docs/
│   ├── project-log.md            # このファイル
│   ├── gap-analysis-2026-02-08.md # 🆕 乖離分析
│   └── design/
│
└── marketing/
    └── zenn-articles/
```

---

*最終更新: 2026-02-08*
*このログは開発の進捗に応じて更新されます*
