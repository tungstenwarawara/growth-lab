# MCP 自動発見・評価 詳細リファレンス

> このファイルは大賢者スキルのリファレンスです。必要時のみ @import で参照してください。

## 探索ソース一覧

### Tier 1: 公式・信頼性最高

| ソース | URL | 種別 |
|--------|-----|------|
| Anthropic 公式 | github.com/anthropics/mcp-servers | GitHub |
| MCP.so | mcp.so | レジストリサイト |

### Tier 2: コミュニティ

| ソース | URL | 種別 |
|--------|-----|------|
| Awesome MCP Servers | github.com/punkpeye/awesome-mcp-servers | GitHub |
| MCPMarket | mcpmarket.com | マーケットプレイス |
| Smithery | smithery.ai | レジストリサイト |

### Tier 3: 補助

| ソース | URL | 種別 |
|--------|-----|------|
| MCP Hub | mcphub.io | レジストリサイト |
| npm registry | npmjs.com (@modelcontextprotocol/) | パッケージ |
| GitHub Topics | github.com/topics/mcp-server | GitHub |

## 評価スコアリング詳細

| 項目 | 重み | 基準 | 配点 |
|------|------|------|------|
| 収益貢献度 | x3 | 直接/間接の収益寄与 | 0-30 |
| 開発効率 | x2 | ワークフロー効率化 | 0-20 |
| 信頼性 | x2 | メンテナンス状態、スター数 | 0-20 |
| コスト影響 | x1 | 追加コスト | 0-10 |
| セキュリティ | x1 | 権限要求の適切さ | 0-10 |
| 統合容易性 | x1 | 既存スタックとの親和性 | 0-10 |

### 判定閾値

| スコア | 判定 | アクション |
|--------|------|-----------|
| 80-100 | 強く推奨 | 即時提案 |
| 60-79 | 推奨 | 週次レポートで提案 |
| 40-59 | 保留 | 記録のみ |
| 0-39 | 不採用 | 記録せず |

### 収益貢献度の詳細

- 30点: 直接収益（決済、販売、サブスク）
- 20点: 間接収益（SEO、マーケティング、分析）
- 10点: 開発効率向上で間接寄与
- 0点: 収益寄与不明確

### 信頼性の詳細

- 20点: 公式（Anthropic/大手企業）、活発
- 15点: 1000+スター、月次更新
- 10点: 100+スター、四半期更新
- 5点: 10+スター、年次更新
- 0点: メンテナンス放棄

## 評価レポートフォーマット (YAML)

```yaml
evaluation:
  id: "eval-{timestamp}"
  mcp_name: "{MCP名}"
  source: "{発見元}"
  discovered_at: "{ISO8601}"
  basic_info:
    description: "{説明}"
    repository: "{URL}"
    npm_package: "{パッケージ名}"
    license: "{ライセンス}"
    stars: {数値}
    last_updated: "{日付}"
  scoring:
    revenue_contribution: { score: 0-10, weight: 3, reasoning: "" }
    development_efficiency: { score: 0-10, weight: 2, reasoning: "" }
    reliability: { score: 0-10, weight: 2, reasoning: "" }
    cost_impact: { score: 0-10, weight: 1, reasoning: "" }
    security: { score: 0-10, weight: 1, reasoning: "" }
    integration_ease: { score: 0-10, weight: 1, reasoning: "" }
  total_score: 0-100
  verdict: "{強く推奨|推奨|保留|不採用}"
```

## 統合テスト手順

### Step 1: 事前検証
- パッケージの信頼性確認（npm audit / GitHub Security Advisories）
- ライセンス互換性確認
- 既存 MCP との競合チェック
- 必要な環境変数・認証情報の確認

### Step 2: インストール
1. settings.json のバックアップ取得
2. MCP サーバー設定を .claude/settings.json に追加
3. npm パッケージインストール
4. 環境変数を .env に追加

### Step 3: 動作テスト
1. サーバー起動確認
2. 基本ツール呼び出しテスト
3. エラーハンドリング確認
4. 既存 MCP との共存確認
5. パフォーマンス影響確認

### Step 4: 登録
成功時: installed_servers に追加、discovered_servers から削除、Git コミット
失敗時: バックアップ復元、npm 削除、failed_installations に記録

## 制約事項

| 制約 | 値 |
|------|-----|
| MCPサーバー上限 | 10 |
| ツール合計上限 | 80 |
| 有料MCP予算 | $0（原則不採用） |
| スキャン頻度 | 週次 |
| 週あたり評価上限 | 5件 |

## プロジェクト固有の MCP 優先リスト

| 優先度 | カテゴリ | 理由 |
|--------|---------|------|
| 1 | SNS連携（Twitter/X） | Build in Public 自動化 |
| 2 | Zenn/note API | コンテンツ投稿自動化 |
| 3 | Stripe 連携 | 決済フロー構築 |
| 4 | 画像生成/処理 | OGP、サムネイル自動生成 |
| 5 | アナリティクス | KPI 自動収集 |
