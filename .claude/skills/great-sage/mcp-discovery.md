# MCP 自動発見・評価・提案サブスキル

## 概要

大賢者の「ユニークスキル発見」能力。
外部 MCP レジストリを定期的にスキャンし、プロジェクトに有益な MCP サーバーを
自動的に発見・評価・提案する。

転スラにおける「捕食者」のスキル吸収に相当する機能。
ただし外部ツールの導入は Director（リムル）の承認を必須とする。

---

## 探索ソース一覧

### Tier 1: 公式・信頼性最高

| ソース | URL | 種別 | 優先度 |
|--------|-----|------|--------|
| Anthropic 公式 | `github.com/anthropics/mcp-servers` | GitHub | 最高 |
| MCP.so | `mcp.so` | レジストリサイト | 最高 |

### Tier 2: コミュニティ・信頼性高

| ソース | URL | 種別 | 優先度 |
|--------|-----|------|--------|
| Awesome MCP Servers | `github.com/punkpeye/awesome-mcp-servers` | GitHub | 高 |
| MCPMarket | `mcpmarket.com` | マーケットプレイス | 高 |
| Smithery | `smithery.ai` | レジストリサイト | 高 |

### Tier 3: 補助的

| ソース | URL | 種別 | 優先度 |
|--------|-----|------|--------|
| MCP Hub | `mcphub.io` | レジストリサイト | 中 |
| npm registry | `npmjs.com` (prefix: `@modelcontextprotocol/`) | パッケージ | 中 |
| GitHub Topics | `github.com/topics/mcp-server` | GitHub | 低 |

---

## 評価基準スコアリングマトリクス

発見した MCP サーバーを以下の基準で評価する。
各項目 0-10 点、合計 100 点満点。

### スコアリング項目

| 項目 | 重み | 基準 | 配点 |
|------|------|------|------|
| **収益貢献度** | x3 | この MCP が収益にどれだけ貢献するか | 0-30 |
| **開発効率** | x2 | 既存ワークフローの効率化度合い | 0-20 |
| **信頼性** | x2 | メンテナンス状態、スター数、更新頻度 | 0-20 |
| **コスト影響** | x1 | 追加コスト（無料なら満点） | 0-10 |
| **セキュリティ** | x1 | 権限要求の適切さ、既知の脆弱性 | 0-10 |
| **統合容易性** | x1 | 既存スタックとの親和性 | 0-10 |

### 判定閾値

| スコア | 判定 | アクション |
|--------|------|-----------|
| 80-100 | 強く推奨 | Director に即時提案 |
| 60-79 | 推奨 | 次回の週次レポートで提案 |
| 40-59 | 保留 | discovered_servers に記録のみ |
| 0-39 | 不採用 | 記録せず |

### 収益貢献度の詳細基準

```
30点: 直接収益を生む（決済、販売、サブスク関連）
20点: 間接的に収益に寄与（SEO、マーケティング、分析）
10点: 開発効率向上で間接的に寄与
 0点: 収益への寄与が不明確
```

### 信頼性の詳細基準

```
20点: 公式（Anthropic/大手企業）、活発なメンテナンス
15点: 1000+ スター、月次更新
10点: 100+ スター、四半期更新
 5点: 10+ スター、年次更新
 0点: メンテナンス放棄の兆候
```

---

## 評価レポートフォーマット

```yaml
# .agent-team/learning/mcp-evaluations/{mcp-name}.yaml
evaluation:
  id: "eval-{timestamp}"
  mcp_name: "{MCP名}"
  source: "{発見元}"
  discovered_at: "{ISO8601}"

  basic_info:
    description: "{説明}"
    repository: "{リポジトリURL}"
    npm_package: "{パッケージ名}"
    license: "{ライセンス}"
    stars: {数値}
    last_updated: "{日付}"
    maintainer: "{メンテナー}"

  scoring:
    revenue_contribution:
      score: {0-10}
      weight: 3
      reasoning: "{理由}"
    development_efficiency:
      score: {0-10}
      weight: 2
      reasoning: "{理由}"
    reliability:
      score: {0-10}
      weight: 2
      reasoning: "{理由}"
    cost_impact:
      score: {0-10}
      weight: 1
      reasoning: "{理由}"
    security:
      score: {0-10}
      weight: 1
      reasoning: "{理由}"
    integration_ease:
      score: {0-10}
      weight: 1
      reasoning: "{理由}"

  total_score: {0-100}
  verdict: "{強く推奨|推奨|保留|不採用}"

  use_cases:
    - "{活用シーン1}"
    - "{活用シーン2}"

  risks:
    - "{リスク1}"
    - "{リスク2}"

  evaluated_by: great-sage
  evaluated_at: "{ISO8601}"
```

---

## 提案フォーマット（大賢者通知）

### Director への MCP 発見通知

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

　　報告。

　　新しいユニークスキルを発見した。

　　『{MCP名}』

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▶ カテゴリ: {category}
▶ 機能: {description}
▶ 評価スコア: {total_score}/100（{verdict}）
▶ 収益貢献度: {revenue_score}/30

【活用シーン】
  1. {use_case_1}
  2. {use_case_2}

【リスク】
  - {risk_1}

【コスト影響】
  {cost_description}

インストールを承認するか？
承認コマンド: /approve-mcp {mcp-name}
```

### 週次 MCP レポート

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

　　週次 MCP 探索報告。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▶ スキャン済みソース: {count}
▶ 新規発見: {count}件
▶ 評価完了: {count}件
▶ 推奨: {count}件

【推奨 MCP】
  1. {mcp_name} — スコア: {score}/100
     {one_line_description}

  2. {mcp_name} — スコア: {score}/100
     {one_line_description}

【現在の MCP 構成】
  インストール済み: {count}/{max_servers}
  ツール数: {count}/{max_tools}
```

---

## 統合テスト手順

MCP の Director 承認後、以下の手順で統合する。

### ステップ 1: 事前検証

```
チェックリスト:
  [ ] パッケージの信頼性確認（npm audit / GitHub Security Advisories）
  [ ] ライセンス互換性確認
  [ ] 既存 MCP との競合チェック
  [ ] 必要な環境変数・認証情報の確認
```

### ステップ 2: インストール

```
手順:
  1. settings.json のバックアップを取得
  2. MCP サーバー設定を .claude/settings.json に追加
  3. 必要な npm パッケージをインストール
  4. 環境変数を .env に追加（秘密情報は .env.local）
```

### ステップ 3: 動作テスト

```
テスト項目:
  1. サーバー起動確認
  2. 基本ツールの呼び出しテスト
  3. エラーハンドリング確認
  4. 既存 MCP との共存確認
  5. パフォーマンス影響の確認
```

### ステップ 4: 登録・記録

```
成功時:
  1. mcp-registry.yaml の installed_servers に追加
  2. discovered_servers から削除
  3. Git コミット: "feat: MCP {name} を統合"
  4. 大賢者通知で Director に完了報告

失敗時:
  1. settings.json をバックアップから復元
  2. npm パッケージを削除
  3. 失敗記録を mcp-registry.yaml の failed_installations に追記
  4. 大賢者通知で Director に失敗報告 & 原因分析
```

---

## 制約事項

### サーバー数・ツール数の上限

```
制約:
  max_mcp_servers: 10        # インストール済みサーバーの上限
  max_total_tools: 80        # 全サーバーのツール合計上限
  reason: |
    MCP サーバーが増えすぎると:
    - エージェント起動時のコンテキスト消費が増大
    - ツール選択の精度が低下
    - セッション開始の遅延が発生

現在の状態:
  installed_servers: 5        # filesystem, git, memory, web-fetch, database
  estimated_tools: ~25        # 各サーバー平均5ツール
  remaining_capacity:
    servers: 5
    tools: ~55
```

### コスト制約

```
制約:
  monthly_budget: $200        # Claude Max の月額予算
  paid_mcps_budget: $0        # 有料 MCP への追加予算は現時点でゼロ
  rule: |
    有料の MCP サーバーは原則不採用。
    収益貢献度スコアが 25/30 以上かつ、
    月額コストが収益増加の見込みを下回る場合のみ Director 承認で例外。
```

### セキュリティ制約

```
制約:
  - ファイルシステムアクセス: プロジェクトディレクトリ内に限定
  - ネットワークアクセス: 必要最小限の外部通信
  - 認証情報: .env.local に格納、Git 管理外
  - 権限昇格: 禁止（root 権限を要求する MCP は不採用）
  - データ送信: ユーザーデータを外部に送信する MCP は不採用
```

### 探索頻度

```
制約:
  scan_frequency: weekly      # 週次スキャン
  max_evaluations_per_week: 5 # 週あたり最大5件の評価
  reason: |
    過度なスキャンはトークン消費につながる。
    週次で十分な探索カバレッジを確保しつつ、
    コストを最小限に抑える。
```

---

## プロジェクト固有の MCP 優先リスト

現在のプロジェクト状況から、以下の MCP カテゴリを優先的に探索する。

| 優先度 | カテゴリ | 理由 |
|--------|---------|------|
| 1 | SNS連携（Twitter/X） | Build in Public の発信自動化 |
| 2 | Zenn/note API | コンテンツ投稿の自動化 |
| 3 | Stripe 連携 | 決済フロー構築 |
| 4 | 画像生成/処理 | OGP、サムネイル自動生成 |
| 5 | アナリティクス | KPI 自動収集・レポート |
| 6 | Figma 連携 | デザイン → コード変換 |

---

*Version: 1.0*
*Created: 2026-02-08*
*Parent: orchestrator.md*
*Related: /.agent-team/learning/mcp-registry.yaml*
