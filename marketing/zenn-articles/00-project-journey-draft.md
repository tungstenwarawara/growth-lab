---
title: "【実践記録】MCP + tmux でAIエージェントチームを作った話（失敗と発見）"
emoji: "🤖"
type: "tech"
topics: ["claude", "mcp", "ai", "tmux", "個人開発"]
published: false
---

# はじめに

この記事は、**Agent Team Framework** という AIエージェントチームのフレームワークを作る過程で経験した失敗・発見・学びをまとめたものです。

**投資回収チャレンジ**: MacBook（¥250,000）+ Claude Max（$200/月）の投資を、個人収益で回収する挑戦の記録でもあります。

---

## 1. やってきたこと

### 1.1 戦略転換：SaaS量産 → Agent Team Framework

従来のMicro-SaaS量産戦略から、AIエージェントチームのフレームワーク構築に戦略を転換しました。

**理由**:
- SaaSはChatGPTやClaude自体に吸収されコモディティ化
- AIエージェント領域はまだ黎明期（ブルーオーシャン）
- $200/月のClaude Maxという制約が差別化要因になる

### 1.2 Agent Team Framework v0.1

**アーキテクチャ**:
```
tmux session (4ペイン)
├── Pane 0: Lead (タスク分解・進捗管理)
├── Pane 1: Frontend (UI実装)
├── Pane 2: Backend (API・DB実装)
└── Pane 3: Reviewer (コードレビュー)
  ↓
共有ワークスペース（YAML通信）
  ↓
MCP Servers（filesystem, git, web-fetch, database, memory）
```

**コスト設計**:
- 同時稼働：最大3エージェント
- ファイル通信：トークン消費ゼロ
- イベント駆動：ポーリングなし

### 1.3 公式 Agent Teams との統合 (v0.2)

開発中に気づいたのですが、Claude Code には既に公式の Agent Teams 機能がありました。

```bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
```

フレームワークを捨てるのではなく、**3つの実行モード** として統合しました:

| モード | 環境 | 特徴 |
|--------|------|------|
| tmux | ローカル | 4ペイン視覚化 |
| Official Agent Teams | Claude Code 2.1+ | 自動オーケストレーション |
| SDK サブエージェント | Claude Agent SDK | Web環境対応 |

---

## 2. 失敗したこと

### 2.1 Tailwind CSS v4 の罠

**エラー**:
```
ReferenceError: border-border is not defined
```

v3 の知識で書いたら動かない。v4 では `@theme` ブロックが必須です。

**解決**:
```css
/* ❌ v3 的な書き方 */
@tailwind base;

/* ✅ v4 の書き方 */
@import 'tailwindcss';

@theme {
  --color-border: hsl(217.2 32.6% 17.5%);
}
```

**教訓**: メジャーバージョンアップ時は公式ドキュメントを最優先に。

### 2.2 Vercel デプロイの手動トリガー

Private repo で Vercel が自動ビルドせず、`chore: trigger Vercel redeploy` という恥ずかしいコミットを残す羽目に。

---

## 3. 驚いたこと

### 3.1 YAML ファイル通信の力

オーケストレーションのトークン消費がゼロになることの重要性に気づきました。

**従来の API ベース通信**:
```
Lead → "Frontend にこのタスクをアサインして" → API 呼び出し → トークン消費
```

**ファイルベース通信**:
```
Lead が .agent-team/tasks/001.yaml に書き込み
Frontend が読み取り → 実行 → status/ 更新
→ トークンゼロ！
```

### 3.2 Task ツールがサブエージェント

Claude Agent SDK の `task()` 関数で並列実行できることに気づきました:

```typescript
const [frontend, backend] = await Promise.all([
  task({ subagent_type: "Explore", prompt: "..." }),
  task({ subagent_type: "Explore", prompt: "..." })
]);
```

Web 環境でも動作する！

---

## 4. 学んだこと

### 4.1 フレームワーク開発 = コンテンツ

フレームワーク自体が最強のマーケティング資産:
- 開発過程は Twitter/Zenn のネタ
- Zenn Book は「実践ガイド」として販売可能
- GitHub Stars は信頼度の指標

### 4.2 $200/月 の制約は強い味方

予算制約が設計の質を高める:
- ファイルベース通信（トークン消費ゼロ）
- 同時稼働 2-3 エージェント制限 → 明確な責任分離
- イベント駆動 → 効率化

**逆説**: 高予算なら「とりあえず多数のエージェント起動」になりがちだが、制約があるから「本当に必要な最小限」が見える。

---

## 5. 数字

| 項目 | 数値 |
|------|------|
| 総コミット数 | 14 |
| 変更行数 | +6,700 |
| TypeScript コンポーネント | 12 ファイル |
| 投資回収目標 | ¥610,000 |
| 目標達成月 | Month 8 |

---

## 次のステップ

1. Self-Improvement Loop の実装（エージェントが自分自身を改善）
2. Zenn Book 執筆・販売
3. GitHub に Framework を OSS 公開
4. 初テンプレート販売

---

## まとめ

**Agent Team Framework は、$200/月で最大の価値を生み出すための実験です。**

- 戦略転換：SaaS量産 → Agent Team Framework + Services
- 技術選定：MCP + tmux + YAML = 最小コストで最大効率
- マーケティング：開発過程そのものがコンテンツ

この開発ジャーニーは、AIエージェント × 個人開発の可能性を示す具体的なケーススタディになるはずです。

---

*執筆：2026年2月*
*プロジェクト：Growth Lab — AI Agent Team × Build in Public*

## ハッシュタグ

#AIエージェント #ClaudeCode #BuildInPublic #個人開発 #MCP
