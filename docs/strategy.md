# 投資回収マスタープラン v2：AI Agent Team × Build in Public 戦略

> **戦略ピボット（2026年2月）：** 従来のSaaS量産戦略から、AIエージェントチームのフレームワーク＋サービス戦略に転換。
> MCP + tmux ハイブリッドアーキテクチャで、$200/月のClaude Max内で最大の価値を生み出す。

---

## 1. プロジェクト概要

### 1.1 オーナー情報

- **名前：** 藤原由大
- **状況：** 会社員として働きながら、個人で収益を立てたい
- **使用環境：** MacBook（2026年購入）+ Claude Max Plan（$200/月）
- **主要ツール：** Claude Code（自律的なプロダクト開発の中核）

### 1.2 投資回収ターゲット

| 項目 | 金額 | 備考 |
|---|---|---|
| MacBook | ¥250,000 | 2026年購入、一括回収対象 |
| Claude Max Plan | $200/月 ≒ ¥30,000/月 | 年間 ¥360,000 |
| **年間投資合計** | **¥610,000** | |
| **月あたり必要回収額** | **≒ ¥51,000** | |

### 1.3 戦略コンセプト（v2）

**「AI Agent Team × Build in Public」**

従来のSaaS量産アプローチから転換。「自律的に価値を生み出し続けるエージェントチーム」のフレームワークを構築し、そのフレームワーク自体の販売＋フレームワークを使ったサービス提供の二刀流で収益化する。

**最終的に目指す状態：**
- Agent Team フレームワークがOSSとして認知される
- フレームワーク＋テンプレート＋サービスから月¥100,000以上
- 「AIエージェント × 個人開発」の第一人者としてのポジション確立
- Build in Publicの過程自体がコンテンツ資産になる

---

## 2. なぜエージェントか：戦略ピボットの理由

### 2.1 SaaS市場の構造変化

従来のSaaS（OGP生成、README生成など）は、AIの進化により急速にコモディティ化している。ChatGPTやClaude自体がこれらの機能を持つため、薄いラッパーSaaSの生存率は低い。

### 2.2 エージェント領域のチャンス

| 観点 | 従来SaaS | AI Agent領域 |
|---|---|---|
| 市場タイミング | レッドオーシャン | 黎明期・ブルーオーシャン |
| 競合 | 大量の類似サービス | まだ少数・実験段階 |
| 技術的優位性 | Claude Code活用は差にならない | Claude Code自体がコア技術 |
| コンテンツ価値 | 「○○を作ってみた」程度 | 「AIエージェントチームを構築した」は高い注目度 |
| Dog Fooding | 使うかもしれない | 自分の開発に毎日使う |
| ストック性 | MRR（チャーンリスク高） | フレームワーク＋テンプレート＋知識資産 |

### 2.3 $200/月が武器になる理由

Claude Max $200/月 = エージェントチームの「工場」。

- 一般開発者はAPI従量課金で同じことをしようとすると$500-1000+/月かかる
- $200固定でエージェントチームを回せること自体が差別化
- 「$200/月でここまでできる」が最強のBuild in Publicコンテンツ

---

## 3. コアプロダクト：Agent Team Framework

### 3.1 コンセプト

**「チーム」メタファーによるClaude Codeマルチエージェントフレームワーク**

軍隊的な階層（将軍/家老/足軽）ではなく、フラットなチーム構造を採用。
誰でも理解できるプロフェッショナルな組織モデル。

### 3.2 チーム構造

```
Director（人間）
  │  方向性の決定、最終判断
  ▼
Team Lead（Claude Code instance）
  │  タスク分解、進捗管理、品質担保
  │
  ├── Member A（Claude Code instance）
  │     特定の専門領域を担当
  │
  ├── Member B（Claude Code instance）
  │     特定の専門領域を担当
  │
  └── Reviewer（Claude Code instance）
        成果物のレビュー、フィードバック
```

**チーム構成のバリエーション：**

| チーム名 | Lead | Members | Reviewer | 用途 |
|---|---|---|---|---|
| Dev Team | Architect | Frontend, Backend | Code Reviewer | プロダクト開発 |
| Content Team | Editor | Writer, SEO Analyst | Fact Checker | コンテンツ制作 |
| Research Team | Analyst | Researcher ×2 | Synthesizer | 技術調査・分析 |
| Launch Team | PM | Developer, Marketer | QA | プロダクトローンチ |

### 3.3 既存ツールとの差別化

| 項目 | multi-agent-shogun | Claude Flow | Agent Team（本プロジェクト） |
|---|---|---|---|
| メタファー | 将軍/家老/足軽 | Pilot/Worker | チーム/リード/メンバー |
| アーキテクチャ | tmux + YAML | 独自オーケストレーション | **MCP + tmux ハイブリッド** |
| コスト想定 | Max x5~x20推奨 | API従量課金 | **$200/月で動作設計** |
| 通信方式 | YAML file | 独自プロトコル | **YAML + MCP channels** |
| 日本語対応 | ○ | △ | **◎（Japanese-first）** |
| テンプレート | 限定的 | なし | **実務向けテンプレート充実** |
| ターゲット | 開発者全般 | 企業/大規模 | **個人開発者・小規模チーム** |

---

## 4. アーキテクチャ：MCP + tmux ハイブリッド

### 4.1 なぜハイブリッドか

| 方式 | 長所 | 短所 |
|---|---|---|
| MCP単体 | 構造化されたツールアクセス、型安全 | プロセス管理ができない |
| tmux単体 | プロセス分離、並列実行 | 通信が粗い（send-keys） |
| **ハイブリッド** | **両方の長所を活かせる** | 初期セットアップの複雑さ |

### 4.2 アーキテクチャ全体図

```
┌─────────────────────────────────────────────┐
│                tmux session: team            │
│                                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐   │
│  │ pane 0   │ │ pane 1   │ │ pane 2   │   │
│  │ Lead     │ │ Member A │ │ Member B │   │
│  │          │ │          │ │          │   │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘   │
│       │            │            │          │
│       ▼            ▼            ▼          │
│  ┌─────────────────────────────────────┐   │
│  │     Shared Filesystem (YAML)        │   │
│  │  tasks/ status/ output/ messages/   │   │
│  └─────────────────────────────────────┘   │
│       │            │            │          │
│       ▼            ▼            ▼          │
│  ┌─────────────────────────────────────┐   │
│  │         MCP Servers                 │   │
│  │  filesystem | git | memory | web    │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### 4.3 コンポーネント詳細

**1. Team Config（team.yaml）**
```yaml
team:
  name: dev-team
  max_concurrent: 3

  lead:
    role: architect
    instructions: .claude/roles/architect.md
    mcp_servers: [filesystem, git, memory]

  members:
    - name: frontend
      instructions: .claude/roles/frontend.md
      mcp_servers: [filesystem, web-fetch]
    - name: backend
      instructions: .claude/roles/backend.md
      mcp_servers: [filesystem, database]

  reviewer:
    role: code-reviewer
    instructions: .claude/roles/reviewer.md
    mcp_servers: [filesystem, git]
```

**2. Task Queue（tasks/ディレクトリ）**
```yaml
# tasks/001-implement-auth.yaml
id: "001"
title: "認証機能の実装"
assigned_to: backend
status: in_progress  # pending | in_progress | review | done
priority: high
dependencies: []
output_path: "src/lib/auth/"
```

**3. Communication（messages/ディレクトリ）**
```yaml
# messages/lead-to-frontend-001.yaml
from: lead
to: frontend
type: task_assignment
content: "ログインフォームを実装してください。仕様は tasks/002 を参照。"
timestamp: "2026-02-05T10:30:00Z"
```

**4. tmux Orchestrator（setup.sh）**
- セッション作成、ペイン分割
- 各ペインでClaude Codeを起動（ロール別のinstructions付き）
- ファイル監視でタスク変更を検知

### 4.4 $200/月のコスト最適化設計

| 施策 | 効果 |
|---|---|
| ファイルベース通信（YAML） | 通信のトークン消費ゼロ |
| 同時稼働は2-3エージェントに制限 | rate limit内で安定稼働 |
| ロール別CLAUDE.md（500-800トークン） | コンテキスト消費を最小化 |
| MCP Memory Server で共有記憶 | 同じ情報を何度も読まない |
| イベント駆動（ポーリングなし） | 待機時のトークン消費ゼロ |
| タスク完了後はエージェントを停止 | 不要なAPI消費を防止 |

---

## 5. 収益モデル：1つのコアから5つの収益源

### 5.1 収益構造の全体像

```
      ┌─────────────────────────────┐
      │  Agent Team Framework (Core) │
      └──────────────┬──────────────┘
                     │
    ┌────────────────┼────────────────┐
    ▼                ▼                ▼
 ストック型          ハイブリッド       フロー型
    │                │                │
    ├─ ① テンプレート販売    ├─ ③ Zenn Book    ├─ ⑤ エージェント開発サービス
    ├─ ② Framework Premium  └─ ④ コンテンツ収益
    │
    └── すべてがフレームワークの実績証明になる
```

### 5.2 各収益源の詳細

**① Agent Team テンプレート販売（ストック型・即金）**
- 内容：チーム構成YAML、ロール別CLAUDE.md、MCP設定、セットアップスクリプト一式
- 価格：¥3,000-5,000/テンプレート、¥12,000/バンドル
- 販売先：Gumroad、BOOTH
- テンプレート例：
  - Dev Team（フルスタック開発チーム）
  - Content Team（技術記事制作チーム）
  - Research Team（技術調査チーム）
  - Launch Team（ローンチ準備チーム）
  - Refactor Team（リファクタリングチーム）

**② Framework Premium（ストック型・MRR）**
- 内容：新テンプレートの毎月追加、モニタリングダッシュボード、優先サポート
- 価格：¥1,500/月
- Month 4以降にローンチ予定（まずOSSで信頼を構築）

**③ Zenn Book:「Claude Code Agent Team 実践ガイド」（ストック型・ロングテール）**
- 内容：MCP + tmuxハイブリッドでエージェントチームを構築する完全ガイド
- 価格：¥1,500-2,500
- AIエージェントは今最もホットな話題 → 高い需要が期待できる

**④ コンテンツ収益（ストック型）**
- Zenn記事：週1本（開発過程、技術Tips）
- Twitter/X：毎日投稿（Build in Public）
- note：月2本（Month 3以降、非エンジニア向け）
- 収益：Zenn PV収入、アフィリエイト、スポンサー

**⑤ エージェント開発サービス（フロー型・高単価）**
- 内容：Agent Teamを使って、クライアントのMVP構築・自動化設計を代行
- 価格：¥30,000-80,000/プロジェクト
- 月1-2件想定（本業との両立）
- $200/月のClaude Maxが「工場」として機能

### 5.3 フライホイール

```
Framework開発
  → Build in Public（Twitter/Zenn）
    → オーディエンス増加
      → テンプレート購入 & サービス依頼
        → 実績・フィードバック
          → Framework改善
            → より良いコンテンツ
              → さらにオーディエンス増加 ←── ループ
```

旧戦略との決定的な違い：**フレームワーク自体の開発がコンテンツになる。** 従来は「SaaSを作ってからZenn記事を書く」だったが、今は「フレームワークを作る過程そのものが記事になり、フレームワークを使って記事を書くこともできる」。

### 5.4 収益シミュレーション（ベースケース）

| 月 | テンプレート | Zenn Book | Premium | サービス | コンテンツ | **月合計** | **累計** |
|---|---|---|---|---|---|---|---|
| M1 | ¥5,000 | ¥0 | ¥0 | ¥0 | ¥0 | **¥5,000** | ¥5,000 |
| M2 | ¥15,000 | ¥25,000 | ¥0 | ¥0 | ¥5,000 | **¥45,000** | ¥50,000 |
| M3 | ¥20,000 | ¥15,000 | ¥0 | ¥30,000 | ¥5,000 | **¥70,000** | ¥120,000 |
| M4 | ¥15,000 | ¥15,000 | ¥10,000 | ¥50,000 | ¥5,000 | **¥95,000** | ¥215,000 |
| M5 | ¥15,000 | ¥10,000 | ¥15,000 | ¥50,000 | ¥10,000 | **¥100,000** | ¥315,000 |
| M6 | ¥10,000 | ¥10,000 | ¥20,000 | ¥50,000 | ¥10,000 | **¥100,000** | ¥415,000 |
| M7 | ¥10,000 | ¥10,000 | ¥25,000 | ¥60,000 | ¥15,000 | **¥120,000** | ¥535,000 |
| M8 | ¥10,000 | ¥10,000 | ¥30,000 | ¥60,000 | ¥15,000 | **¥125,000** | ¥660,000 |

**ベースケース：Month 8で投資回収完了（¥660,000）**
**旧戦略比：2ヶ月前倒し**

加速要因：
- Zenn Bookの初月売上（AIエージェントはホットトピック）
- サービス収入が旧SaaS MRRより早期に立ち上がる
- テンプレートは旧テンプレートより需要がある

---

## 6. 実行ロードマップ

### Phase 0：基盤構築（Week 1-2）

**目標：** フレームワークMVP + Build in Public開始

**タスク：**
- [ ] Agent Team フレームワークのコア設計
- [ ] MCP + tmux ハイブリッドの基本動作実装
- [ ] Team Config（YAML）フォーマット策定
- [ ] 最初のチームテンプレート（Dev Team）作成
- [ ] GitHubリポジトリ公開（OSS）
- [ ] Twitter/X Build in Public 開始（初日からポスト）
- [ ] フレームワークの名称決定

### Phase 1：コンテンツ先行 + 初売上（Month 1-2）

**目標：月 ¥20,000-50,000 + Twitter/X フォロワー 500人**

**タスク：**
- [ ] Zenn記事第1弾：「MCP + tmuxでAIエージェントチームを作る」
- [ ] Zenn記事第2弾：「$200/月でマルチエージェントを運用する方法」
- [ ] テンプレート第1弾（Dev Team）販売開始
- [ ] テンプレート第2弾（Content Team）作成・販売
- [ ] Zenn Book 執筆開始
- [ ] Twitter/X 毎日投稿（開発ログ + 数字公開）
- [ ] Zenn Book リリース（Month 2）

### Phase 2：サービス開始 + Framework v1.0（Month 3-4）

**目標：月 ¥70,000-100,000 + フォロワー 1,000人**

**タスク：**
- [ ] エージェント開発サービスのサービスページ作成
- [ ] 初のサービス案件獲得（Twitter/Zenn経由）
- [ ] Framework v1.0 リリース（安定版）
- [ ] Premium プラン設計・ローンチ
- [ ] テンプレートを5種類まで拡充
- [ ] Zenn記事 週1本ペース維持
- [ ] noteへの展開開始

### Phase 3：スケール＆最適化（Month 5-8）

**目標：月 ¥100,000-130,000 + フォロワー 2,000人 + 投資回収完了**

**タスク：**
- [ ] Framework Premium サブスクライバー拡大
- [ ] サービス案件の安定受注（月1-2件）
- [ ] コミュニティ構築（Discord or GitHub Discussions）
- [ ] テンプレートバンドル・高単価パッケージ展開
- [ ] 自動化の徹底（SNS投稿、レポート生成をAgent Teamで）
- [ ] YouTube参入検討（フォロワー1,000人超の場合）
- [ ] **Month 8：投資回収完了 🎯**

---

## 7. チャネル戦略

### 7.1 コンテンツの軸：「AIエージェントチームで個人開発を変える」

旧戦略の「Claude Codeで投資回収」から、より具体的で注目度の高いテーマに転換。

### 7.2 Twitter/X

**投稿フォーマット例：**
```
【Agent Team 開発ログ Day XX】

今日やったこと：
- エージェントチーム3体で認証機能を並列実装
- 所要時間：人間なら8時間 → 2時間で完了

ここまでの売上：¥XX,XXX / 目標 ¥610,000

$200/月のClaude Maxでここまでできる。

#AIエージェント #ClaudeCode #BuildInPublic #個人開発
```

**KPI（据え置き）：**
- Month 1：フォロワー 500人
- Month 3：フォロワー 1,000人
- Month 6：フォロワー 2,000人

### 7.3 Zenn

**記事テーマ（高需要が見込めるもの）：**
1. 「MCP + tmuxでAIエージェントチームを構築する完全ガイド」
2. 「$200/月のClaude Maxでマルチエージェントを運用するコスト設計」
3. 「multi-agent-shogunとの違い：チームメタファーの設計思想」
4. 「AIエージェントチームでMVPを3日で作った話」
5. 「ファイルベース通信でトークン消費を90%削減する方法」

**有料Book：**
- タイトル：「Claude Code Agent Team 実践ガイド：$200/月で最強の開発チームを作る」
- 価格：¥1,500-2,500
- 内容：アーキテクチャ設計からテンプレート活用まで

### 7.4 個人開発 プロダクト方針（改訂）

**プロダクト選定基準（改訂版）：**
1. Agent Teamフレームワークを活用して構築できること
2. フレームワークの実績証明になること
3. Build in Publicコンテンツのネタになること
4. $200/月のClaude Max内で運用可能なこと
5. 自分自身がユーザーになれること（Dog Fooding）

---

## 8. 技術スタック

### 8.1 Agent Team Framework

| レイヤー | 技術 | 理由 |
|---|---|---|
| プロセス管理 | tmux | 並列エージェント実行、セッション永続化 |
| ツール統合 | MCP (Model Context Protocol) | 構造化されたツールアクセス |
| エージェント間通信 | YAML files (filesystem) | トークン消費ゼロ、シンプル |
| 設定管理 | YAML | 人間が読みやすい、編集しやすい |
| セットアップ | Shell scripts (Bash) | どの環境でも動作 |

### 8.2 プロダクト開発スタック（据え置き）

| レイヤー | 技術 |
|---|---|
| Frontend | Next.js 15 (App Router) + Tailwind CSS v4 + shadcn/ui |
| Backend | Supabase (Auth, Database, Edge Functions) |
| Hosting | Vercel |
| Payment | Stripe |
| Analytics | Plausible or Umami |
| Domain/CDN | Cloudflare |

### 8.3 開発ワークフロー（改訂版）

```
1. Director（人間）がタスクを定義
2. Agent Team Lead がタスクを分解・アサイン
3. Members が並列で実装
4. Reviewer がレビュー・フィードバック
5. Director が最終確認
6. Vercel にデプロイ
7. Build in Public で過程を発信
```

---

## 9. リポジトリ構成（改訂版）

```
growth-lab/
├── CLAUDE.md                       # プロジェクトルール
├── README.md                       # プロジェクトダッシュボード
├── .claude/
│   ├── prompts/                    # 再利用可能プロンプト
│   └── commands/                   # カスタムコマンド
│
├── agent-team/                     # Agent Team Framework（コア）
│   ├── README.md                   # フレームワーク説明
│   ├── templates/                  # チームテンプレート
│   │   ├── dev-team/
│   │   ├── content-team/
│   │   ├── research-team/
│   │   └── launch-team/
│   ├── roles/                      # ロール別 instructions
│   │   ├── lead.md
│   │   ├── frontend.md
│   │   ├── backend.md
│   │   ├── reviewer.md
│   │   └── writer.md
│   ├── scripts/                    # tmux セットアップスクリプト
│   │   ├── setup-team.sh
│   │   └── teardown-team.sh
│   └── examples/                   # 使用例
│
├── products/                       # フレームワークで構築したプロダクト
│   └── (Agent Teamで構築するプロダクト群)
│
├── marketing/                      # マーケティング資産
│   ├── content-calendar.md
│   ├── sns-posts/
│   ├── zenn-articles/
│   ├── zenn-book/
│   ├── note-articles/
│   └── landing-pages/
│
├── analytics/                      # 分析・KPI
│   ├── monthly-report.md
│   ├── revenue-tracking.md
│   ├── kpi-dashboard.md
│   └── user-feedback/
│
├── automation/                     # 自動化スクリプト
│   ├── sns-scheduler/
│   ├── analytics-reporter/
│   └── deploy-scripts/
│
├── portfolio/                      # ポートフォリオサイト
│
└── docs/                           # ドキュメント
    ├── strategy.md                 # この戦略書
    ├── brand-guide.md
    └── playbooks/
```

---

## 10. KPI＆マイルストーン（改訂版）

### 10.1 毎週追跡する指標

**収益系：**
- 累計売上 vs 目標（¥610,000）
- テンプレート販売数 & 収益
- Zenn Book 販売数 & 収益
- サービス受注数 & 収益
- Premium サブスクライバー数 & MRR

**プロダクト系：**
- Framework GitHub Stars
- テンプレート販売数
- サービス案件数

**マーケティング系：**
- Twitter/X フォロワー数 & エンゲージメント
- Zenn 記事 PV & いいね
- Zenn Book ダウンロード数

### 10.2 マイルストーン（改訂版）

| # | マイルストーン | 目標時期 | 達成条件 |
|---|---|---|---|
| 1 | Framework MVP公開 | Week 2 | GitHubにOSSとして公開 |
| 2 | 初売上 | Month 1 | テンプレートまたはZennで¥1以上 |
| 3 | Twitter 500 Followers | Month 1 | |
| 4 | 月¥20,000達成 | Month 2 | テンプレート + Zenn Book |
| 5 | Zenn Book リリース | Month 2 | |
| 6 | GitHub Stars 100 | Month 3 | |
| 7 | サービス初受注 | Month 3 | |
| 8 | Twitter 1,000 Followers | Month 3 | |
| 9 | 月¥70,000達成 | Month 4 | |
| 10 | Premium ローンチ | Month 4 | |
| 11 | 月¥100,000達成 | Month 5 | |
| 12 | Twitter 2,000 Followers | Month 6 | |
| 13 | **投資回収完了** | **Month 8** | **累計¥610,000達成** |

---

## 11. リスクと対策

| リスク | 影響度 | 発生確率 | 対策 |
|---|---|---|---|
| フレームワークが刺さらない | 高 | 中 | テンプレート＋Zenn Bookで最低ラインの収益確保。OSSで認知を取れば後から収益化方法は増やせる |
| Claude Max の仕様変更 | 高 | 低 | API従量課金でも動作する設計にしておく。ドキュメント化で知識資産は残る |
| 類似フレームワークの台頭 | 中 | 高 | 先行者利益 + Japanese-first + Build in Publicコミュニティで差別化 |
| 本業が忙しくなる | 中 | 高 | Agent Team自体で自動化。週末集中型にシフト可能 |
| サービス案件がこない | 中 | 中 | Zenn/Twitterでの実績公開が営業になる。フレームワーク利用者からの自然な問い合わせを期待 |
| バーンアウト | 中 | 中 | Agent Teamで自動化を徹底。自分が楽しめる領域に集中 |

---

## 12. 成功のための鉄則（改訂版）

### 鉄則1：「フレームワーク開発 = コンテンツ」
フレームワークを作る過程がZenn記事になり、Twitterのネタになり、Zenn Bookの章になる。開発とマーケティングを分けない。

### 鉄則2：「$200/月を証明しろ」
「$200/月でここまでできる」を数字で証明し続ける。これが最強の差別化であり、最も共感されるBuild in Publicコンテンツ。

### 鉄則3：「チームに任せろ」
Agent Teamが動き始めたら、人間はDirectorに徹する。方向性を決め、市場と対話し、結果を発信する。実装はチームの仕事。

### 鉄則4：「Dog Foodingを怠るな」
自分の全ての開発・コンテンツ制作にAgent Teamを使う。使わないフレームワークは売れない。

### 鉄則5：「フライホイールを回せ」
開発→発信→集客→収益→実績→発信。特にAgent Team領域では、実際に動くデモ＋数字の公開が最も強い集客装置。

---

## 13. 次のアクション（今すぐやること）

1. **Agent Team Framework のコア設計を開始する** — team.yaml フォーマット策定
2. **MCP + tmux ハイブリッドの PoC を作る** — 最小構成で動作確認
3. **Twitter/X で Build in Public を開始する** — 「AIエージェントチーム構築チャレンジ」宣言
4. **Zenn記事第1弾の下書きを作成する** — 「MCP + tmuxでAgent Teamを作る」
5. **GitHubリポジトリをOSSとして公開する** — README + 基本構成

---

*最終更新：2026年2月*
*戦略ピボット：v1（SaaS量産）→ v2（Agent Team Framework + Services）*
