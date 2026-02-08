# 大賢者サブスキル: コンテンツマネージャー

大賢者のコンテンツ管理能力。Zenn/note/Twitter のコンテンツを統合的に管理する。

---

## 概要

コンテンツの企画から公開後の分析まで、全ライフサイクルを大賢者が管理する。
Build in Public 戦略の実行エンジンとして機能する。

---

## 1. コンテンツレジストリ読み書きプロトコル

### 参照パス

```
レジストリ:    /.agent-team/content/registry.yaml
パイプライン:  /.agent-team/content/content-pipeline.yaml
バックログ:    /.agent-team/content/backlog.yaml
カレンダー:    /marketing/content-calendar.md
```

### 読み取りプロトコル

```
1. registry.yaml を読み込む
2. last_updated を確認し、前回同期からの経過時間を把握
3. platforms.{platform}.stats を確認し、全体像を把握
4. 個別記事の status と metrics を確認
```

### 書き込みプロトコル

```
1. 変更対象のエントリを特定
2. 値を更新
3. last_updated を現在時刻（ISO 8601）に更新
4. updated_by を "great-sage" に設定
5. stats セクションの集計値を再計算
6. 変更内容をログに記録（コミットメッセージに含める）
```

### 書き込みルール

- 大賢者のみが registry.yaml を更新する権限を持つ
- 記事の追加・削除は必ず backlog.yaml のステータスと連動させる
- メトリクスは MCP 経由で取得した値のみを記録（推測値は不可）
- status 変更時は content-pipeline.yaml の遷移ルールに従う

---

## 2. 新記事検知フロー

### セッション開始時チェック

大賢者はセッション開始時に以下のフローを実行する。

```
[セッション開始]
    |
    v
[1] registry.yaml を読み込む
    |
    v
[2] Zenn MCP で最新記事一覧を取得
    |--- 新規記事を検知 ---> [A] 新記事登録フロー
    |--- 既存記事の更新を検知 ---> [B] メトリクス更新フロー
    |
    v
[3] note MCP で最新記事一覧を取得（MCP利用可能な場合）
    |--- 同上
    |
    v
[4] 差分サマリーを Director に報告
    |
    v
[完了]
```

### [A] 新記事登録フロー

```
1. プラットフォームから記事メタデータを取得
   - id, title, url, published_at, tags
2. registry.yaml の該当プラットフォームの articles に追加
3. backlog.yaml に対応するエントリがあれば status を published に更新
4. stats セクションを再集計
5. 大賢者通知を生成:

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

     解析完了。

     新規コンテンツを検知しました。

     『{記事タイトル}』
     プラットフォーム: {Zenn/note}
     ステータス: 公開済み

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. SNS拡散提案を自動生成（後述）
```

### [B] メトリクス更新フロー

```
1. 各記事の最新メトリクスを MCP 経由で取得
2. registry.yaml の metrics を更新
3. 前回値との差分を計算
4. 閾値超過チェック:
   - いいね数が急増（前回比 +50% 以上） → 高パフォーマンス通知
   - PV が急増（前回比 +100% 以上） → バズ検知通知
5. stats セクションを再集計
6. last_synced を更新
```

### MCP 未接続時のフォールバック

```
MCP が利用できない場合:
1. Director に手動確認をリクエスト
2. Director が提供した情報を基にレジストリを更新
3. 「MCP接続の設定」を capability_gap として learning/proposals/ に記録
```

---

## 3. メトリクス更新フロー

### 更新タイミング

| タイミング | トリガー | 対象 |
|-----------|---------|------|
| セッション開始時 | 自動 | 全記事 |
| 記事公開後24時間 | Director指示 | 該当記事 |
| 記事公開後7日 | Director指示 | 該当記事 |
| 週次レポート時 | 定期 | 全記事 |
| 月次レポート時 | 定期 | 全記事 |

### 収集メトリクス

**Zenn**:
- PV（ページビュー）
- いいね数
- ブックマーク数
- コメント数

**note**:
- PV（ページビュー）
- スキ数
- コメント数

**Twitter**:
- インプレッション
- いいね数
- リツイート数
- リプライ数
- フォロワー数（アカウント全体）

### メトリクス集計

```yaml
# 集計対象フィールド（platforms.{platform}.stats）
stats:
  total_articles: <articles配列の長さ>
  total_published_articles: <status=published の記事数>
  total_likes: <全記事の likes 合計>
  total_pv: <全記事の pv 合計>
  last_synced: <現在時刻>
```

---

## 4. コンテンツカレンダーとの同期

### 同期フロー

```
[1] content-calendar.md を読み込む
    |
    v
[2] registry.yaml と突合
    |
    |--- カレンダーに予定があるが未着手 ---> リマインダー生成
    |--- カレンダーにないが公開済み ---> カレンダーに追記提案
    |--- カレンダーの予定日を過ぎている ---> 遅延警告
    |
    v
[3] 差分レポートを Director に報告
```

### ステータスマッピング

| カレンダー表記 | レジストリ status | パイプライン stage |
|--------------|-----------------|------------------|
| Planned      | (backlogに存在)   | idea / outline   |
| In Progress  | draft           | draft / review   |
| Published    | published       | published 以降    |
| Cancelled    | archived        | -                |

---

## 5. SNS拡散提案

### 新記事公開時の自動生成

記事が published ステージに遷移した際、大賢者は以下の形式で Twitter 投稿文を自動生成する。

**生成ルール**:
- 140文字以内に収める
- 記事URLのプレースホルダーを含む
- ハッシュタグを2-4個含む
- 3パターン以上を生成し、Director が選択

**テンプレートパターン**:

```
パターン1: 成果報告型
---
{達成したこと/作ったもの}をまとめました。
{記事の要点を1文で}
{URL}
#AIエージェント #ClaudeCode #BuildInPublic #個人開発

パターン2: 問題提起型
---
{読者が抱える課題}、解決策を見つけました。
{URL}
#AIエージェント #ClaudeCode #BuildInPublic

パターン3: 数字インパクト型
---
{具体的な数字}で{達成したこと}。
やり方を全公開します。
{URL}
#AIエージェント #BuildInPublic #個人開発

パターン4: スレッド型（長文向け）
---
[1/N] {テーマ}について、実践で学んだことをスレッドにまとめます。
...
[N/N] 詳細は記事にまとめました。 {URL}
```

### 既存記事の追加拡散

高パフォーマンス記事を検知した場合、追加拡散文を提案する。

```
トリガー: いいね数が前回比 +50% 以上
アクション:
  - 「反響いただいているので改めて共有」型ツイートを生成
  - 関連する新規コンテンツからの内部リンク追加を提案
```

---

## 6. 月次コンテンツレポート生成

### レポート構成

```markdown
# 月次コンテンツレポート - {YYYY年MM月}
## 生成: 大賢者

### サマリー
- 公開記事数: {n}本（Zenn: {z}, note: {n}, Twitter: {t}）
- 総PV: {pv}
- 総いいね: {likes}
- 新規フォロワー: {followers_delta}

### プラットフォーム別詳細

#### Zenn
| 記事 | PV | いいね | ブクマ | コメント |
|------|-----|--------|--------|---------|
| ... | ... | ... | ... | ... |

#### note
| 記事 | PV | スキ | コメント |
|------|-----|------|---------|
| ... | ... | ... | ... |

#### Twitter
- 投稿数: {n}
- 平均インプレッション: {avg}
- 最高反応ツイート: {top_tweet}

### パフォーマンス分析
- 最高PV記事: {title} ({pv} PV)
- 最高いいね記事: {title} ({likes} いいね)
- エンゲージメント率: {rate}%

### 収益貢献
- コンテンツ経由テンプレ販売: {n}件
- 推定広告効果: {value}

### 次月への提言
- {大賢者の分析に基づく改善提案}
- {高パフォーマンスパターンの横展開提案}
- {低パフォーマンスパターンの回避提案}

### バックログ状況
- アイデア数: {n}
- 優先度高: {high}件
- 来月公開予定: {planned}件
```

### レポート出力先

```
/analytics/content-reports/{YYYY-MM}-content-report.md
```

---

## 7. スキル発動条件

このサブスキルは以下のトリガーで発動する。

| トリガー | 条件 | アクション |
|---------|------|-----------|
| session_start | セッション開始時 | 新記事検知 + メトリクス同期 |
| content_publish | 記事公開検知 | レジストリ更新 + SNS拡散文生成 |
| content_idea | アイデア発生 | バックログ登録 + 優先度判定 |
| weekly_check | 週次（Director指示） | 週次レポート生成 |
| monthly_check | 月次（Director指示） | 月次レポート生成 |
| metrics_spike | メトリクス急増検知 | 高パフォーマンス通知 + 追加拡散提案 |
| backlog_empty | バックログ枯渇 | アイデア生成提案 |

---

## 8. 関連ファイル

| ファイル | 役割 |
|---------|------|
| `/.agent-team/content/registry.yaml` | コンテンツマスターデータ |
| `/.agent-team/content/content-pipeline.yaml` | パイプライン定義 |
| `/.agent-team/content/backlog.yaml` | コンテンツバックログ |
| `/marketing/content-calendar.md` | 公開スケジュール |
| `/marketing/zenn-articles/` | Zenn記事の下書き |
| `/marketing/zenn-book/` | Zenn Book の原稿 |
| `/marketing/note-articles/` | note記事の下書き |
| `/marketing/sns-posts/` | SNS投稿文 |
| `/analytics/content-reports/` | コンテンツレポート |

---

*大賢者スキル拡張: コンテンツ管理能力を獲得*
*バージョン: 1.0*
*作成日: 2026-02-08*
