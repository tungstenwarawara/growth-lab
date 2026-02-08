# Growth Lab マスタープラン v3: 自律型 Agent Team + 収益化加速

> **戦略バージョン**: v3（2026-02-08）
> **前バージョン**: v2（Agent Team Framework + Services）
> **トリガー**: 収益ゼロの長期化、設計先行の反省、新 MCP 群の活用可能性

---

## 1. 戦略サマリー

### 1.1 v2 からの変更点

| 観点 | v2 | v3 |
|------|----|----|
| チーム規模 | 4体（Lead, Frontend, Backend, Reviewer） | 6体（+ UI/UX Designer, Marketing Strategist） |
| MCP 活用 | 5種（filesystem, git, memory, web-fetch, database） | 13種（+ Figma, Twitter, Zenn, note, Stripe, Ahrefs, GA4, Supabase MCP） |
| コンテンツ管理 | 手動（content-calendar.md のみ） | YAML 管理 + MCP 自動検知 |
| 大賢者の役割 | タスク分解のみ | 自律オーケストレーション（タスク生成 + 進捗監視 + MCP 探索） |
| 優先順位 | Framework 設計 > 収益化 | **収益化 > 設計（売って、直す）** |
| 現実認識 | 「作れば売れる」前提 | **動くものだけが価値。設計書は売上ゼロ** |

### 1.2 正直な現状評価

```
作成したファイル: 50+
動作確認済み:     LP サイトのみ
収益:             ¥0
投稿済みコンテンツ: Zenn 記事 1本（追跡なし）
販売可能な製品:   SaaS Starter Kit（BOOTH 未出品）
```

**最大の問題**: 設計書を書くことに時間を費やし、「売る」「動かす」行動が不足している。

### 1.3 v3 の核心方針

**「設計より実行。ファイルより動作。計画より売上。」**

1. **今日売れるものを今日売る** -- SaaS Starter Kit を即 BOOTH 出品
2. **エージェントを動かして証明する** -- 設定ファイルではなく動作ログが価値
3. **コンテンツを資産として管理する** -- 投稿したら追跡、分析、改善
4. **MCP で自動化できることは自動化する** -- 人間の手作業を最小化
5. **チームを拡張して死角を消す** -- デザインとマーケティングの専任を置く

### 1.4 収益化への最短パス

```
[即時] SaaS Starter Kit を BOOTH 出品 → 初売上
   ↓
[Week 1] Zenn 記事追加投稿 → PV 収入 + 認知拡大
   ↓
[Week 2] Agent Team テンプレート販売 → ストック収入開始
   ↓
[Month 1] Zenn Book リリース → まとまった収入
   ↓
[Month 2] エージェント開発サービス開始 → 高単価フロー収入
```

---

## 2. 新チーム構成

### 2.1 拡張チーム構造図

```
Director（人間 = リムル）
    |
    | 方向性の決定、最終承認、外部コミュニケーション
    |
    v
大賢者（Team Lead / Orchestrator）
    |
    | 自律的タスク生成・分解・アサイン・進捗監視・MCP探索
    |
    +---> [1] Frontend Member（既存）
    |         UI/UX 実装、コンポーネント開発
    |
    +---> [2] Backend Member（既存）
    |         API、DB、ビジネスロジック、インフラ
    |
    +---> [3] Reviewer（既存）
    |         コードレビュー、品質チェック、テスト
    |
    +---> [4] UI/UX Designer（新規）
    |         デザインシステム、Figma連携、ビジュアル品質
    |
    +---> [5] Marketing Strategist（新規）
    |         SNS運用、SEO、コンテンツ戦略、分析
    |
    +---> [6] MCP Explorer（新規 -- スキルからエージェント昇格）
              MCP発見・評価・統合提案、ツールチェーン最適化
```

### 2.2 各エージェントの責務・使用MCP・コスト設計

#### 大賢者（Team Lead / Orchestrator）

| 項目 | 内容 |
|------|------|
| **モデル** | opus（高い推論能力が必要） |
| **責務** | タスク自動生成、進捗監視、ブロッカー解消、スキル吸収検知、MCP統合判断 |
| **使用MCP** | filesystem, git, memory |
| **稼働パターン** | 常時（他エージェントの起動・停止を管理） |
| **コスト配分** | 全体の 25% |

#### [1] Frontend Member

| 項目 | 内容 |
|------|------|
| **モデル** | sonnet（実装速度重視） |
| **責務** | UI コンポーネント実装、ページ構築、レスポンシブ対応 |
| **使用MCP** | filesystem, web-fetch, Figma MCP |
| **稼働パターン** | タスクアサイン時のみ起動（イベント駆動） |
| **コスト配分** | 全体の 20% |

#### [2] Backend Member

| 項目 | 内容 |
|------|------|
| **モデル** | sonnet（実装速度重視） |
| **責務** | API 実装、DB 設計・マイグレーション、Webhook 処理、決済連携 |
| **使用MCP** | filesystem, Supabase MCP, Stripe MCP |
| **稼働パターン** | タスクアサイン時のみ起動（イベント駆動） |
| **コスト配分** | 全体の 20% |

#### [3] Reviewer

| 項目 | 内容 |
|------|------|
| **モデル** | haiku（低コスト、レビューに十分） |
| **責務** | コードレビュー、型チェック、セキュリティ確認、パフォーマンス指摘 |
| **使用MCP** | filesystem, git |
| **稼働パターン** | 実装完了時のみ起動（イベント駆動） |
| **コスト配分** | 全体の 5% |

#### [4] UI/UX Designer（新規）

| 項目 | 内容 |
|------|------|
| **モデル** | sonnet（ビジュアル判断にバランス良い） |
| **責務** | デザインシステム管理、Figma デザインからコード変換、LP/販売ページのビジュアル品質、サムネイル/OGP 画像の設計指示 |
| **使用MCP** | filesystem, Figma MCP（公式） |
| **稼働パターン** | デザインタスク時のみ起動 |
| **コスト配分** | 全体の 10% |

**Figma MCP 活用方法**:
- Figma ファイルからコンポーネント仕様を取得
- デザイントークン（色、フォント、スペーシング）の一元管理
- デザインとコードの乖離検知

#### [5] Marketing Strategist（新規）

| 項目 | 内容 |
|------|------|
| **モデル** | sonnet（分析と文章生成のバランス） |
| **責務** | Twitter/X 投稿戦略・自動化、Zenn/note 記事企画、SEO 分析、競合調査、KPI モニタリング |
| **使用MCP** | filesystem, Twitter MCP, Zenn MCP (`mcp-server-zenn`), note MCP (`note-mcp-server`), Ahrefs MCP, GA4 MCP |
| **稼働パターン** | 定期実行（日次: SNS / 週次: 分析） |
| **コスト配分** | 全体の 15% |

**MCP 活用方法**:
- **Twitter MCP**: 投稿の自動化、エンゲージメント取得、最適投稿時間分析
- **Zenn MCP**: 記事一覧・PV 取得、トレンド分析、Book 販売状況追跡
- **note MCP**: 記事管理、スキ数追跡
- **Ahrefs MCP**: キーワード分析、競合サイト調査
- **GA4 MCP**: LP/販売ページのアクセス解析

#### [6] MCP Explorer（新規）

| 項目 | 内容 |
|------|------|
| **モデル** | haiku（調査にはコスト効率重視） |
| **責務** | 新規 MCP サーバーの発見・評価、互換性チェック、統合提案、ツールチェーン最適化 |
| **使用MCP** | filesystem, web-fetch, memory |
| **稼働パターン** | 週次（毎週月曜に探索実行） |
| **コスト配分** | 全体の 5% |

**探索フロー**:
1. 公式レジストリ + Awesome MCP + npm/GitHub を巡回
2. 現在のチームの capability gap と照合
3. コスト・セキュリティ・互換性を評価
4. `.agent-team/learning/proposals/pending/` に統合提案を作成
5. 大賢者がレビュー、Director が最終承認

### 2.3 コスト設計サマリー

```
月額予算: $200（Claude Max）
同時稼働上限: 3 エージェント（rate limit 内）

コスト配分:
  大賢者:              25% -- 常時稼働（オーケストレーション）
  Frontend + Backend:  40% -- 実装時のみ（メイン作業）
  Marketing:           15% -- 日次/週次の定期実行
  UI/UX Designer:      10% -- デザインタスク時のみ
  Reviewer:             5% -- レビュー時のみ
  MCP Explorer:         5% -- 週次探索のみ

コスト最適化戦略:
  - YAML ファイル通信: トークン消費ゼロ
  - イベント駆動: 待機中のトークン消費ゼロ
  - モデル選択: 推論が必要な場面のみ opus、他は sonnet/haiku
  - Memory 活用: 同じ情報の再読み込みを防止
  - 同時起動 3 体制限を厳守
```

---

## 3. コンテンツ管理システム

### 3.1 設計思想

現状の問題: Zenn 記事を投稿したが、追跡の仕組みがない。note も同様。
コンテンツカレンダーは v1 のまま更新されていない。

**解決策**: YAML ベースのコンテンツレジストリ + MCP による自動メトリクス収集

### 3.2 コンテンツレジストリ（YAML管理）

```yaml
# .agent-team/content/registry.yaml
version: "1.0"
last_synced: "2026-02-08T00:00:00Z"

articles:
  - id: "zenn-001"
    platform: zenn
    title: "転スラの「大賢者」をClaude Codeで作る"
    url: "https://zenn.dev/mikkabouzu_log/articles/a39fd6228ae729"
    published_at: "2026-02-08"
    status: published
    category: agent-team
    tags: [AI, エージェント, Claude Code, 転スラ]
    metrics:
      pv: 0          # Zenn MCP で自動更新
      likes: 0        # Zenn MCP で自動更新
      bookmarks: 0
    last_metrics_update: null
    related_product: agent-team-framework
    notes: "初投稿。反応を要観察。"

  # 今後の記事もここに追加
```

### 3.3 投稿検知・メトリクス収集フロー

```
[日次] Marketing Strategist が実行:

1. Zenn MCP で記事一覧を取得
   → registry.yaml に未登録の記事があれば追加（投稿検知）
   → 既存記事の PV/いいね を更新

2. note MCP で記事一覧を取得
   → 同様に追加・更新

3. Twitter MCP でエンゲージメントを取得
   → 各記事の拡散状況を記録

4. GA4 MCP で LP/販売ページのアクセスを取得
   → トラフィックソースを分析

[週次] 大賢者がレポート生成:

5. registry.yaml の全メトリクスを集計
6. .agent-team/content/weekly-report-{date}.yaml を生成
7. パフォーマンスの良い記事のパターンを分析
8. 次週のコンテンツ提案を作成
```

### 3.4 コンテンツカレンダー連動

```yaml
# .agent-team/content/calendar.yaml
version: "2.0"

# 自動生成される週次カレンダー
weeks:
  - week: "2026-W07"  # 2/9-2/15
    planned:
      - type: zenn_article
        title: "SaaS Starter Kitの設計思想"
        assignee: marketing
        status: planned
        target_publish: "2026-02-14"
      - type: twitter_thread
        title: "Agent Team 開発ログ Day 8-14"
        assignee: marketing
        status: planned
        target_publish: "2026-02-09"  # 毎日
      - type: booth_listing
        title: "SaaS Starter Kit 出品"
        assignee: backend
        status: urgent
        target_publish: "2026-02-09"
```

### 3.5 コンテンツ管理ディレクトリ構成

```
.agent-team/content/
├── registry.yaml           # 全コンテンツの一元管理
├── calendar.yaml           # 週次カレンダー（自動更新）
├── templates/              # 記事テンプレート
│   ├── zenn-article.md
│   ├── note-article.md
│   └── twitter-thread.md
├── drafts/                 # 下書き管理
│   └── {platform}-{id}.md
└── reports/                # 週次レポート
    └── weekly-{date}.yaml
```

---

## 4. 大賢者オーケストレーション強化

### 4.1 自律実行フロー

v2 の大賢者は「指示を受けてタスクを分解する」だけだった。
v3 では「状況を観察し、自らタスクを生成・実行する」自律性を持たせる。

```
大賢者の自律ループ（1日1回 or Director トリガー）:

[OBSERVE] 状態を観察
  ├── .agent-team/status/ -- 各エージェントの状態
  ├── .agent-team/content/registry.yaml -- コンテンツ状況
  ├── .agent-team/tasks/ -- 未完了タスク
  ├── analytics/ -- KPI 状況
  └── 外部情報（MCP 経由）
       ├── Zenn PV/いいね
       ├── Twitter エンゲージメント
       ├── BOOTH/Gumroad 売上
       └── GA4 トラフィック

[ORIENT] 分析・判断
  ├── 収益目標との差分は？
  ├── ブロッカーはあるか？
  ├── 見落としている機会はないか？
  ├── コンテンツの反応はどうか？
  └── 新しい MCP が使えないか？

[DECIDE] タスクを決定
  ├── 優先度を再計算（収益インパクト x 実行容易性）
  ├── エージェントの空き状況を確認
  ├── 依存関係を解決
  └── .agent-team/tasks/ にタスク YAML を生成

[ACT] タスクを実行
  ├── エージェントにアサイン
  ├── 進捗を監視
  ├── ブロッカー検知時は再アサイン or 代替策
  └── 完了後にレビュー依頼
```

### 4.2 タスク自動生成ルール

大賢者が自律的にタスクを生成するトリガー:

| トリガー | 条件 | 生成するタスク |
|----------|------|---------------|
| **売上ゼロ継続** | 7日間売上なし | 販売チャネル追加、価格見直し、プロモーション |
| **コンテンツ空白** | 3日間投稿なし | 記事ドラフト作成、Twitter 投稿 |
| **PV 低下** | 前週比 -30% | SEO 改善、SNS 拡散強化 |
| **タスク滞留** | 同一タスクが 3日間 in_progress | ブロッカー調査、タスク分割 |
| **MCP 更新** | 新 MCP がレジストリに追加 | 評価・統合検討 |
| **新記事公開** | Zenn/note で検知 | メトリクス追跡開始、SNS 拡散 |

### 4.3 進捗モニタリング

```yaml
# .agent-team/status/orchestrator-state.yaml
# 大賢者が管理する全体状態

last_check: "2026-02-08T09:00:00Z"
next_check: "2026-02-09T09:00:00Z"

revenue:
  total: 0
  target: 610000
  gap: 610000
  days_since_last_sale: null  # まだ売上なし
  urgency: critical

content:
  total_articles: 1
  this_week_published: 1
  this_week_target: 2
  status: behind

agents:
  frontend:
    status: idle
    last_task_completed: "2026-02-06"
  backend:
    status: idle
    last_task_completed: "2026-02-06"
  reviewer:
    status: idle
    last_task_completed: null
  ui_ux_designer:
    status: not_deployed  # まだ未配備
  marketing:
    status: not_deployed
  mcp_explorer:
    status: not_deployed

blockers:
  - id: "block-001"
    description: "SaaS Starter Kit が BOOTH 未出品"
    impact: "収益ゼロが継続"
    resolution: "即時出品"
    assigned_to: director  # 人間の作業が必要（アカウント認証）
```

### 4.4 MCP 自動発見・提案・統合

```
MCP Explorer の週次フロー:

1. ソース巡回
   ├── github.com/anthropics/mcp-servers（公式）
   ├── github.com/punkpeye/awesome-mcp-servers
   ├── npmjs.com で "mcp-server" 検索
   └── mcp.run レジストリ

2. フィルタリング
   ├── カテゴリ: marketing, analytics, payment, design, content
   ├── メンテナンス: 最終更新 30日以内
   ├── 品質: Stars 10+, ドキュメントあり
   └── セキュリティ: 既知の脆弱性なし

3. マッチング
   ├── 現在のチームの capability gap と照合
   ├── 既存タスクで「手動でやっていること」を特定
   └── コスト対効果を推定

4. 提案作成
   └── .agent-team/learning/proposals/pending/mcp-{name}-{date}.yaml
       ├── MCP名、バージョン、ソース
       ├── 想定される活用方法
       ├── セキュリティ評価
       ├── コスト影響
       └── 統合難易度（low/medium/high）

5. 承認フロー
   ├── 大賢者がレビュー → 技術的に問題なければ Director に上申
   └── Director が承認 → インストール + エージェント設定更新
```

---

## 5. 改訂ロードマップ

### Phase 0.5: 自律化基盤 + 即時収益化（Week 3-4 / 2026-02-08 -- 02-21）

**目標**: 初売上達成 + 大賢者オーケストレーション動作確認

| # | タスク | 優先度 | 担当 | 工数 | 成果物 |
|---|--------|--------|------|------|--------|
| 1 | SaaS Starter Kit を BOOTH 出品 | *** | Director + Backend | 2h | BOOTH 販売ページ公開 |
| 2 | Agent Team テンプレート（dev-team）を販売用にパッケージング | *** | Backend | 4h | Gumroad/BOOTH 出品 |
| 3 | コンテンツ管理システム構築（registry.yaml + calendar.yaml） | *** | 大賢者 | 2h | `.agent-team/content/` |
| 4 | 大賢者オーケストレーション実装（orchestrator-state.yaml + 自律ループ） | *** | 大賢者 | 3h | 自律監視フロー動作 |
| 5 | UI/UX Designer エージェント定義 | ** | 大賢者 | 1h | `.claude/agents/ui-ux-designer.md` |
| 6 | Marketing Strategist エージェント定義 | ** | 大賢者 | 1h | `.claude/agents/marketing-strategist.md` |
| 7 | MCP Explorer エージェント定義 | ** | 大賢者 | 1h | `.claude/agents/mcp-explorer.md` |
| 8 | Twitter MCP 統合 | ** | Backend | 2h | SNS 自動投稿可能に |
| 9 | Zenn MCP 統合 | ** | Backend | 2h | 記事メトリクス自動収集 |
| 10 | note MCP 統合 | * | Backend | 2h | note 記事追跡可能に |
| 11 | Zenn 記事 2本目投稿（SaaS Starter Kit 紹介） | *** | Marketing/大賢者 | 3h | 記事公開 + 販売導線 |
| 12 | Twitter Build in Public 再開（毎日投稿） | ** | Marketing | 継続 | フォロワー獲得 |

**Phase 0.5 完了条件**:
- [ ] BOOTH で SaaS Starter Kit が購入可能
- [ ] コンテンツレジストリが既存記事を追跡している
- [ ] 大賢者が `.agent-team/status/orchestrator-state.yaml` を自律更新している
- [ ] 新エージェント 3体の定義ファイルが存在する
- [ ] Zenn MCP または Twitter MCP のどちらかが動作確認済み

### Phase 1 改訂: 発信 + 初売上加速（Month 1-2 / 2026-02 -- 03）

**目標**: 月 ¥30,000 + Twitter 300 フォロワー + Zenn 記事 6本

| # | タスク | 優先度 | 成果物 |
|---|--------|--------|--------|
| 1 | Zenn Book 執筆開始「Claude Code Agent Team 実践ガイド」 | *** | 5章以上のドラフト |
| 2 | Agent Team テンプレート第2弾（content-team） | *** | Gumroad/BOOTH 出品 |
| 3 | Agent Team テンプレートバンドル | ** | ¥12,000 セット販売 |
| 4 | Figma MCP 統合テスト | ** | デザイン -> コード変換の動作確認 |
| 5 | Stripe MCP 統合 | ** | 売上の自動追跡 |
| 6 | Ahrefs MCP + GA4 MCP 統合 | * | SEO/アクセス分析の自動化 |
| 7 | Zenn 記事 週1本ペース（計 4-6 本） | *** | 公開 + レジストリ追跡 |
| 8 | Twitter 毎日投稿（開発ログ + 数字公開） | ** | エンゲージメント追跡 |
| 9 | note 記事 月2本（非エンジニア向け） | * | 新規チャネル開拓 |
| 10 | LP サイトのリンク修正（GitHub/Twitter/Zenn 実URLに） | ** | LP の完成度向上 |
| 11 | 販売ページの OGP / サムネイル作成 | ** | UI/UX Designer の初仕事 |

**Phase 1 目標数値**:

| 指標 | 目標 |
|------|------|
| 累計売上 | ¥30,000 |
| テンプレート販売数 | 5-10 セット |
| Zenn Book | 執筆中（M2 末リリース） |
| Zenn 記事数 | 6本 |
| Twitter フォロワー | 300人 |
| BOOTH/Gumroad 出品数 | 3点以上 |

### Phase 2 改訂: サービス + Framework v1.0（Month 3-4 / 2026-04 -- 05）

**目標**: 月 ¥70,000 + フォロワー 1,000 + サービス初受注

| # | タスク | 優先度 | 成果物 |
|---|--------|--------|--------|
| 1 | Zenn Book リリース（¥1,500-2,500） | *** | 販売開始 |
| 2 | エージェント開発サービスページ作成 | *** | LP + 問い合わせフォーム |
| 3 | Framework v1.0 リリース（安定版、README 完備） | *** | GitHub 公開 |
| 4 | サービス初受注 | *** | Zenn/Twitter 経由 |
| 5 | テンプレートを 5 種類に拡充 | ** | research-team, launch-team, refactor-team |
| 6 | Framework Premium プラン設計 | ** | 月額 ¥1,500 のサブスク設計 |
| 7 | CI/CD 統合（Headless Mode） | * | GitHub Actions 連携 |
| 8 | コミュニティ検討（Discord or GitHub Discussions） | * | 設計のみ |

**Phase 2 目標数値**:

| 指標 | 目標 |
|------|------|
| 累計売上 | ¥150,000 |
| 月間売上 | ¥70,000 |
| サービス受注 | 1件以上 |
| Zenn Book 販売 | 30部以上 |
| GitHub Stars | 50+ |
| Twitter フォロワー | 1,000人 |

### Phase 3 改訂: スケール（Month 5-8 / 2026-06 -- 09）

**目標**: 月 ¥100,000+ + 投資回収完了（累計 ¥610,000）

| # | タスク | 優先度 | 成果物 |
|---|--------|--------|--------|
| 1 | Framework Premium ローンチ | *** | 月額サブスク開始 |
| 2 | サービス案件安定受注（月 1-2 件） | *** | ¥30,000-80,000/件 |
| 3 | テンプレートバンドル・上位パッケージ | ** | ¥20,000 プロフェッショナル版 |
| 4 | コミュニティ構築 | ** | Discord or GitHub Discussions |
| 5 | 大賢者の完全自律化 | ** | Director の介入最小化 |
| 6 | YouTube 参入検討 | * | デモ動画による認知拡大 |
| 7 | 英語版テンプレート | * | 海外市場への展開 |

**Phase 3 目標数値**:

| 指標 | 目標 |
|------|------|
| 累計売上 | **¥610,000（投資回収完了）** |
| 月間売上 | ¥100,000-130,000 |
| Premium サブスクライバー | 20人 |
| GitHub Stars | 200+ |
| Twitter フォロワー | 2,000人 |

### 改訂版 収益シミュレーション

| 月 | テンプレート | Zenn Book | Premium | サービス | コンテンツ | **月合計** | **累計** |
|---|---|---|---|---|---|---|---|
| M1 (Feb) | ¥5,000 | ¥0 | ¥0 | ¥0 | ¥0 | **¥5,000** | ¥5,000 |
| M2 (Mar) | ¥15,000 | ¥20,000 | ¥0 | ¥0 | ¥3,000 | **¥38,000** | ¥43,000 |
| M3 (Apr) | ¥15,000 | ¥15,000 | ¥0 | ¥30,000 | ¥5,000 | **¥65,000** | ¥108,000 |
| M4 (May) | ¥15,000 | ¥10,000 | ¥10,000 | ¥50,000 | ¥5,000 | **¥90,000** | ¥198,000 |
| M5 (Jun) | ¥10,000 | ¥10,000 | ¥15,000 | ¥50,000 | ¥10,000 | **¥95,000** | ¥293,000 |
| M6 (Jul) | ¥10,000 | ¥10,000 | ¥20,000 | ¥60,000 | ¥10,000 | **¥110,000** | ¥403,000 |
| M7 (Aug) | ¥10,000 | ¥10,000 | ¥25,000 | ¥60,000 | ¥15,000 | **¥120,000** | ¥523,000 |
| M8 (Sep) | ¥10,000 | ¥10,000 | ¥30,000 | ¥60,000 | ¥15,000 | **¥125,000** | **¥648,000** |

**ベースケース: Month 8 で投資回収完了（¥648,000 / 目標 ¥610,000）**

**悲観ケース（全て 60%）: Month 10-11 で回収**
**楽観ケース（サービス好調）: Month 6 で回収**

---

## 6. 直近2週間のスプリントバックログ

### Week 3（2026-02-08 -- 02-14）: 「売る」に集中

| Day | 日付 | 最優先タスク | 担当 | 完了条件 |
|-----|------|-------------|------|----------|
| Sat | 02/08 | マスタープラン v3 完成 + コンテンツ管理システム YAML 作成 | 大賢者 | このドキュメント + registry.yaml |
| Sun | 02/09 | SaaS Starter Kit の BOOTH 出品準備（スクショ撮影、ZIP 作成） | Director + Backend | ZIP + スクリーンショット 3枚 |
| Mon | 02/10 | BOOTH 出品完了 + Twitter 告知 | Director | 販売ページ URL 取得 |
| Tue | 02/11 | Agent Team テンプレート販売用パッケージング | Backend | README + セットアップガイド付き ZIP |
| Wed | 02/12 | テンプレートを Gumroad 出品 + Twitter 告知 | Director + Marketing | Gumroad URL 取得 |
| Thu | 02/13 | Zenn 記事ドラフト作成（SaaS Starter Kit 紹介 or Agent Team 解説） | Marketing | ドラフト完成 |
| Fri | 02/14 | Zenn 記事投稿 + Twitter Thread | Marketing | 記事 URL + レジストリ登録 |

### Week 4（2026-02-15 -- 02-21）: 自律化基盤

| Day | 日付 | 最優先タスク | 担当 | 完了条件 |
|-----|------|-------------|------|----------|
| Sat | 02/15 | 新エージェント定義 3体（UI/UX, Marketing, MCP Explorer） | 大賢者 | `.claude/agents/` に 3 ファイル |
| Sun | 02/16 | 大賢者オーケストレーション実装（orchestrator-state.yaml） | 大賢者 | 状態ファイル + 更新ロジック |
| Mon | 02/17 | Zenn MCP 統合テスト | Backend | 記事メトリクス取得成功 |
| Tue | 02/18 | Twitter MCP 統合テスト | Backend | 投稿 API 動作確認 |
| Wed | 02/19 | content-team テンプレート作成 | Frontend + Backend | 販売可能な状態 |
| Thu | 02/20 | Zenn Book 構成案 + 第1章ドラフト | Marketing | Book 構成 YAML + 第1章.md |
| Fri | 02/21 | Phase 0.5 振り返り + 初売上の確認 | 大賢者 | レポート生成 |

### 日次ルーティン（毎日）

```
[朝] Director が状態確認（5分）
  └── .agent-team/status/orchestrator-state.yaml を読む

[日中] 大賢者が自律実行
  ├── タスクの進捗確認
  ├── ブロッカーの検知・解消
  └── 完了タスクのレビュー依頼

[夜] Marketing Strategist が投稿
  ├── Twitter: 開発ログ 1投稿
  └── コンテンツレジストリ更新
```

---

## 7. KPI（改訂版）

### 7.1 最重要 KPI（毎日確認）

| KPI | 現在 | Week 4 目標 | Month 2 目標 | Month 8 目標 |
|-----|------|------------|-------------|-------------|
| **累計売上** | ¥0 | ¥5,000 | ¥43,000 | **¥610,000** |
| **販売中の商品数** | 0 | 3 | 5 | 10+ |
| **動作確認済みエージェント数** | 0 | 2 | 4 | 6 |

### 7.2 週次 KPI

**収益系**:
- 累計売上 vs ¥610,000 目標（グラフ化）
- テンプレート販売数 & 収益
- Zenn Book 販売数 & 収益（M2 以降）
- サービス受注数 & 収益（M3 以降）
- Premium サブスクライバー数 & MRR（M4 以降）

**コンテンツ系**:
- Zenn 記事 PV 合計 & 前週比
- Zenn 記事いいね合計
- note 記事スキ合計（M2 以降）
- Twitter フォロワー増減
- Twitter エンゲージメント率

**プロダクト系**:
- Framework GitHub Stars
- テンプレートダウンロード数
- LP サイト PV（GA4）

**オペレーション系**:
- 完了タスク数 / 作成タスク数
- 大賢者の自律タスク生成数
- MCP Explorer の提案数
- スキル吸収数

### 7.3 マイルストーン（改訂版）

| # | マイルストーン | 目標時期 | 達成条件 |
|---|---|---|---|
| 1 | **初売上** | Week 3 (02/10) | BOOTH で ¥1 以上の売上 |
| 2 | 販売商品 3 点 | Week 4 (02/14) | SaaS Kit + テンプレート + 記事 |
| 3 | 大賢者自律動作 | Week 4 (02/21) | orchestrator-state.yaml の自動更新 |
| 4 | MCP 3 種統合 | Month 2 (03/07) | Twitter + Zenn + Stripe MCP 動作 |
| 5 | Zenn Book リリース | Month 2 (03/21) | 販売開始 |
| 6 | 月売上 ¥30,000 | Month 2 (03/28) | |
| 7 | サービス初受注 | Month 3 (04/15) | |
| 8 | Twitter 1,000 Followers | Month 3 (04/30) | |
| 9 | GitHub Stars 100 | Month 4 (05/15) | |
| 10 | 月売上 ¥70,000 | Month 4 (05/31) | |
| 11 | Premium ローンチ | Month 5 (06/15) | |
| 12 | 月売上 ¥100,000 | Month 6 (07/31) | |
| 13 | **投資回収完了** | **Month 8 (09/30)** | **累計 ¥610,000** |

---

## 8. リスクと対策（改訂版）

### 8.1 リスクマトリクス

| リスク | 影響度 | 発生確率 | 対策 |
|--------|--------|---------|------|
| **初売上が立たない** | 極高 | 中 | 価格を下げる（¥500 のお試し版）、無料サンプル配布で認知獲得、Zenn 記事からの導線強化 |
| **設計ループに戻る** | 高 | 高 | 週次で「売上に直結しないタスク比率」を監視。50% 超えたら Director がブレーキ |
| **MCP が期待通り動かない** | 中 | 高 | MCP なしでも手動で代替できるフローを用意。MCP は「あれば加速」の位置づけ |
| **$200/月の制約でチーム 6 体は過剰** | 中 | 中 | 常時稼働は大賢者 + 1体。他はイベント駆動。率制限に引っかかったらチーム縮小 |
| **類似フレームワークの台頭** | 中 | 高 | 先行者利益（日本語 First）+ Build in Public コミュニティ + 「大賢者」世界観の差別化 |
| **本業との両立困難** | 中 | 高 | Agent Team の自動化を最大化。人間は意思決定のみ。週末集中型にシフト可能 |
| **Claude Max 仕様変更** | 高 | 低 | API 従量課金でも動く設計。ドキュメント化で知識資産は残る |
| **バーンアウト** | 高 | 中 | 自動化を徹底。「楽しい」部分（設計、発信）に人間を集中。数字に一喜一憂しない |
| **コンテンツが刺さらない** | 中 | 中 | A/B テスト的にテーマを変える。数字を見て改善。Marketing Strategist に分析させる |

### 8.2 v3 固有のリスク

| リスク | 対策 |
|--------|------|
| エージェント 6 体の管理コストが人間に跳ね返る | 大賢者による自律管理を徹底。人間はダッシュボード確認のみ |
| MCP の外部依存が増える | 各 MCP にフォールバック手段を用意。MCP なしでも手動対応可能な設計 |
| コンテンツ管理システムが「また設計書」になる | 最小限（registry.yaml 1ファイル）から始める。完璧を求めない |
| 新エージェントの定義が形だけになる | 各エージェント最初の 1 タスクを定義と同時にアサインし、動作確認を必須にする |

---

## 9. 付録: MCP 統合計画

### 9.1 MCP 一覧と導入優先度

| MCP | 用途 | 使用エージェント | 導入時期 | 優先度 |
|-----|------|----------------|---------|--------|
| **Zenn MCP** (`mcp-server-zenn`) | 記事/Book 取得、PV 追跡 | Marketing | Phase 0.5 | *** |
| **Twitter MCP** | SNS 投稿自動化、エンゲージメント取得 | Marketing | Phase 0.5 | *** |
| **Stripe MCP** (公式) | 売上追跡、決済管理 | Backend, 大賢者 | Phase 1 | ** |
| **note MCP** (`note-mcp-server`) | note 記事管理 | Marketing | Phase 1 | ** |
| **Figma MCP** (公式) | デザイン -> コード変換 | UI/UX Designer | Phase 1 | ** |
| **Supabase MCP** | DB 操作 | Backend | Phase 1 | ** |
| **Ahrefs MCP** | SEO キーワード分析 | Marketing | Phase 2 | * |
| **GA4 MCP** | アクセス解析 | Marketing, 大賢者 | Phase 2 | * |

### 9.2 MCP 設定ファイル（.mcp.json 更新計画）

```jsonc
// Phase 0.5 で追加
{
  "mcpServers": {
    // 既存
    "filesystem": { /* ... */ },
    "git": { /* ... */ },
    "memory": { /* ... */ },
    "web-fetch": { /* ... */ },
    // Phase 0.5 追加
    "zenn": {
      "command": "npx",
      "args": ["-y", "mcp-server-zenn"],
      "description": "Zenn 記事/Book の取得・PV 追跡"
    },
    "twitter": {
      "command": "npx",
      "args": ["-y", "@anthropic/twitter-mcp"],
      "env": {
        "TWITTER_API_KEY": "${TWITTER_API_KEY}",
        "TWITTER_API_SECRET": "${TWITTER_API_SECRET}"
      },
      "description": "Twitter 投稿自動化・エンゲージメント取得"
    }
  }
}
```

---

## 10. 意思決定ログ

### v3 で変更した意思決定

| 決定 | 理由 | 代替案 | 却下理由 |
|------|------|--------|---------|
| チーム 6 体に拡張 | デザインとマーケティングの死角を解消 | 4 体のまま Lead が兼任 | Lead のコンテキスト過多で品質低下 |
| 収益化を設計より優先 | ¥0 が 2 週間続いた | 設計を完成させてから販売 | 完璧な設計は永遠に完成しない |
| MCP を積極統合 | 手作業の自動化が急務 | 手動運用を継続 | スケールしない |
| コンテンツ管理を YAML で | 既存のファイルベース通信と一貫性 | DB（Supabase）で管理 | 初期構築コストが高い |
| Zenn Book の前倒し | コンテンツ収益の柱が必要 | M3 以降にリリース | 収益化が遅れすぎる |

---

*最終更新: 2026-02-08*
*戦略: v1（SaaS量産）-> v2（Agent Team + Services）-> v3（自律型 Agent Team + 収益化加速）*
*次回見直し: Phase 0.5 完了時（2026-02-21）*
