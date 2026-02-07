# 現状 vs ベストプラクティス 乖離分析

**作成日**: 2026-02-08
**目的**: 現在の Agent Team Framework と最新ベストプラクティスの差分を特定し、統合計画を策定

---

## 1. 現状サマリー

### 実装済み機能

| 機能 | 実装状態 | ファイル/場所 |
|------|---------|--------------|
| Agent Team Framework v0.2 | ✅ 完了 | `/agent-team/` |
| Self-Improvement Loop Phase 1-2 | ✅ 完了 | `/.agent-team/learning/` |
| 大賢者通知システム | ✅ 完了 | `/engine/great-sage-notify.md` |
| スキル吸収機能 | ✅ 完了 | `/engine/skill-absorber.md` |
| YAML ファイル通信 | ✅ 完了 | `/tasks/`, `/messages/`, `/status/` |
| 公式 Agent Teams 統合 | ✅ 設定のみ | `/.claude/settings.json` |
| LP サイト | ✅ デプロイ済み | `/portfolio/` |
| カスタムエージェント定義 | ✅ 基本のみ | `/.claude/agents/` |

### 未実装/部分実装

| 機能 | 状態 | ベストプラクティスでの位置づけ |
|------|------|------------------------------|
| Skills（公式形式） | ❌ 未実装 | 自律学習の中核 |
| Memory フィールド | ❌ 未使用 | エージェント間の永続記憶 |
| Hooks（品質ゲート） | ❌ 未実装 | 自動検証の仕組み |
| MCP Explorer（能動的） | △ 受動的 | 自律的なツール発見 |
| Git Worktrees | ❌ 未実装 | 並列開発の補完 |
| Headless Mode（CI/CD） | ❌ 未実装 | 自律的な価値生産 |
| モデル選択戦略 | △ 部分的 | コスト最適化 |

---

## 2. 乖離詳細分析

### 2.1 ディレクトリ構造の違い

```
【現状】                              【ベストプラクティス】
growth-lab/                           growth-lab/
├── .agent-team/                      ├── .claude/
│   └── learning/                     │   ├── agents/        ← 両方に存在
│       ├── config/                   │   ├── skills/        ← 現状なし！
│       ├── proposals/                │   │   ├── auto-learner/
│       ├── patterns/                 │   │   ├── mcp-explorer/
│       └── engine/                   │   │   └── project-memory/
│                                     │   └── commands/      ← 両方に存在
├── .claude/                          │
│   ├── agents/                       ├── .mcp.json          ← 現状なし
│   ├── settings.json                 │
│   └── commands/                     └── settings.json に hooks
│
└── agent-team/templates/
    └── dev-team/roles/               ← ベストプラクティスにない独自実装
```

**問題点**:
1. 公式の `.claude/skills/` 構造を使っていない
2. `memory` フィールドを活用していない
3. Hooks が未設定
4. `.mcp.json` による MCP 管理をしていない

### 2.2 エージェント定義の違い

**現状のエージェント定義** (`/.claude/agents/team-lead.md`):
```markdown
# Team Lead
あなたは Agent Team の Team Lead です...
（memory フィールドなし）
```

**ベストプラクティスのエージェント定義**:
```yaml
---
name: architect
description: システム設計、ADR作成...
model: opus
tools:
  - Read
  - Glob
  - Write
memory: project  ← これが重要！
---
あなたはシニアアーキテクトです...
```

**問題点**:
1. YAML フロントマターがない
2. `memory` フィールドで永続記憶を活用していない
3. `model` 指定がない（コスト最適化されていない）
4. `tools` 制限がない（セキュリティリスク）

### 2.3 Skills vs Self-Improvement Loop

| 観点 | 現状（Self-Improvement Loop） | ベストプラクティス（Skills） |
|------|------------------------------|---------------------------|
| **場所** | `/.agent-team/learning/` | `/.claude/skills/` |
| **形式** | 独自 YAML | 公式 Markdown + YAML |
| **自動学習** | ✅ 実装済み | ✅ Auto-Learner スキル |
| **MCP探索** | △ 受動的レジストリ | ✅ MCP Explorer スキル |
| **Memory** | ❌ ファイルベースのみ | ✅ project/user Memory |
| **統合度** | 独自実装 | Claude Code ネイティブ |

**問題点**:
- 我々の実装は「車輪の再発明」になっている部分がある
- 公式の Skills + Memory を使えば、より少ないコードで同等の機能が得られる

### 2.4 Agent Teams の活用度

**現状**:
```json
// .claude/settings.json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  },
  "teammateMode": "in-process"
}
```
→ 設定のみで、実際のチーム運用はテストしていない

**ベストプラクティス**:
- PM → Architect → Implementer → Tester の工程別チーム
- 各チームメイトに `memory` フィールド
- 共有タスクリストで協調
- tmux/iTerm2 でスプリットペイン表示

**問題点**:
- Agent Teams を「設定した」だけで「運用していない」
- 我々の tmux スクリプトと公式 Agent Teams が重複している

---

## 3. 統合戦略

### 3.1 方針: 公式機能をベースに、独自の付加価値を乗せる

```
【Before】独自実装中心
┌─────────────────────────────────┐
│  Agent Team Framework（独自）   │
│  ├── tmux スクリプト            │
│  ├── YAML 通信                  │
│  └── Self-Improvement Loop     │
└─────────────────────────────────┘

【After】公式機能 + 独自の付加価値
┌─────────────────────────────────┐
│  Claude Code 公式機能           │
│  ├── Agent Teams               │
│  ├── Skills                    │
│  ├── Memory                    │
│  └── Hooks                     │
├─────────────────────────────────┤
│  独自の付加価値（差別化）        │
│  ├── 大賢者通知システム         │
│  ├── 転スラ世界観               │
│  ├── $200/月コスト最適化        │
│  └── Build in Public           │
└─────────────────────────────────┘
```

### 3.2 統合ステップ

**Step 1: Skills 構造への移行**
```
/.claude/skills/
├── great-sage/              # 大賢者スキル（既存の engine/ を移行）
│   ├── SKILL.md
│   ├── skill-absorber.md
│   └── notify.md
├── auto-learner/            # パターン学習
│   ├── SKILL.md
│   └── patterns/
├── mcp-explorer/            # MCP 探索
│   ├── SKILL.md
│   └── registry.md
└── project-memory/          # プロジェクト記憶
    ├── SKILL.md
    └── decisions.md
```

**Step 2: エージェント定義の更新**
```yaml
# /.claude/agents/team-lead.md
---
name: team-lead
description: プロジェクト統括、タスク分解、進捗管理
model: opus
tools:
  - Read
  - Glob
  - Grep
  - Write
memory: project
---
# Team Lead — 大賢者

あなたは Agent Team の Team Lead（大賢者）です...
```

**Step 3: Hooks の追加**
```json
// settings.json に追加
{
  "hooks": {
    "preToolExecution": [
      {
        "matcher": "Write|Edit",
        "command": "npm run lint -- --fix $FILE"
      }
    ],
    "postToolExecution": [
      {
        "matcher": "Write|Edit",
        "command": "npm run typecheck"
      }
    ]
  }
}
```

**Step 4: .mcp.json の作成**
```json
{
  "mcpServers": {
    "filesystem": { ... },
    "github": { ... },
    "memory": { ... }
  }
}
```

### 3.3 残すもの（独自の差別化要素）

| 要素 | 残す理由 |
|------|---------|
| 大賢者通知 | 転スラ世界観＝ユニークな UX |
| スキル吸収フロー | 「解析完了」の体験 |
| YAML 通信プロトコル | トークンゼロ＝コスト優位性 |
| $200/月設計 | 差別化ポイント |
| Build in Public | マーケティング戦略 |

### 3.4 捨てるもの（公式機能に置き換え）

| 要素 | 理由 |
|------|------|
| 独自の tmux スクリプト | 公式 Agent Teams の方が高機能 |
| `/agent-team/templates/` の一部 | `.claude/agents/` に統合 |
| 手動 Memory 管理 | `memory: project` で自動化 |

---

## 4. 今後の計画（更新版）

### Phase 1: 公式機能への移行（今週）

| タスク | 優先度 | 工数 |
|--------|--------|------|
| `.claude/skills/` 構造を作成 | 高 | 2h |
| エージェント定義に YAML フロントマター追加 | 高 | 1h |
| `.mcp.json` を作成 | 中 | 30m |
| Hooks を settings.json に追加 | 中 | 30m |

### Phase 2: Zenn 記事公開（今週）

| タスク | 優先度 | 工数 |
|--------|--------|------|
| ドラフトを最終調整 | 高 | 2h |
| 公式機能との統合を反映 | 高 | 1h |
| スクリーンショット追加 | 中 | 30m |
| 公開 | 高 | 10m |

### Phase 3: テンプレート販売（来週）

| タスク | 優先度 | 工数 |
|--------|--------|------|
| Skills パッケージとして整理 | 高 | 2h |
| Gumroad/BOOTH セットアップ | 高 | 1h |
| 販売ページ作成 | 高 | 2h |

### Phase 4: task-manager 統合（再来週）

| タスク | 優先度 | 工数 |
|--------|--------|------|
| ライフリポジトリに Skills 導入 | 中 | 2h |
| リポジトリ横断 Memory 設計 | 中 | 2h |
| 日記自動生成テスト | 中 | 1h |

### Phase 5: CI/CD 統合（3週目以降）

| タスク | 優先度 | 工数 |
|--------|--------|------|
| Headless Mode テスト | 低 | 1h |
| GitHub Actions 連携 | 低 | 2h |
| 自動 Issue 修正パイプライン | 低 | 3h |

---

## 5. 結論

### 乖離の本質

> **我々は公式機能を知らずに「車輪の再発明」をしていた部分がある**
>
> しかし、その過程で得た「大賢者」という世界観と「スキル吸収」という UX は、
> 公式機能だけでは得られない独自の価値である。

### 統合の方針

> **公式機能をベースに、独自の付加価値を乗せる**
>
> - Skills + Memory + Hooks + Agent Teams = 公式のパワーを借りる
> - 大賢者 + 転スラ世界観 + $200/月設計 = 差別化

### 次のアクション

1. **今すぐ**: Phase 1 の公式機能移行を開始
2. **今週中**: Zenn 記事を公開（公式機能との統合を反映）
3. **来週**: テンプレート販売開始

---

*この分析に基づき、project-log.md と strategy.md を更新する*
