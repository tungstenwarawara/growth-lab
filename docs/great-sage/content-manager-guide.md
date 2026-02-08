# コンテンツマネージャー詳細リファレンス

> このファイルは大賢者スキルのリファレンスです。必要時のみ @import で参照してください。

## レジストリ読み書きプロトコル

### 参照パス

- レジストリ: /.agent-team/content/registry.yaml
- パイプライン: /.agent-team/content/content-pipeline.yaml
- バックログ: /.agent-team/content/backlog.yaml
- カレンダー: /marketing/content-calendar.md

### 書き込みルール

- 大賢者のみが registry.yaml を更新する権限を持つ
- 記事の追加・削除は必ず backlog.yaml のステータスと連動させる
- メトリクスは MCP 経由で取得した値のみを記録（推測値は不可）
- status 変更時は content-pipeline.yaml の遷移ルールに従う

## 新記事登録フロー

1. プラットフォームから記事メタデータを取得（id, title, url, published_at, tags）
2. registry.yaml の該当プラットフォームの articles に追加
3. backlog.yaml に対応するエントリがあれば status を published に更新
4. stats セクションを再集計
5. 大賢者通知を生成
6. SNS拡散提案を自動生成

## メトリクス更新フロー

### 更新タイミング

| タイミング | トリガー | 対象 |
|-----------|---------|------|
| セッション開始時 | 自動 | 全記事 |
| 記事公開後24時間 | Director指示 | 該当記事 |
| 週次レポート時 | 定期 | 全記事 |
| 月次レポート時 | 定期 | 全記事 |

### 収集メトリクス

- Zenn: PV, いいね, ブックマーク, コメント
- note: PV, スキ, コメント
- Twitter: インプレッション, いいね, RT, リプライ, フォロワー数

## SNS拡散テンプレート

### パターン1: 成果報告型
{達成したこと}をまとめました。{要点1文} {URL} #AIエージェント #ClaudeCode #BuildInPublic #個人開発

### パターン2: 問題提起型
{読者の課題}、解決策を見つけました。 {URL} #AIエージェント #ClaudeCode #BuildInPublic

### パターン3: 数字インパクト型
{具体的な数字}で{達成したこと}。やり方を全公開します。 {URL} #AIエージェント #BuildInPublic #個人開発

### パターン4: スレッド型
[1/N] {テーマ}について、実践で学んだことをスレッドにまとめます。

### 生成ルール
- 140文字以内
- URL プレースホルダーを含む
- ハッシュタグ 2-4個
- 3パターン以上生成し Director が選択

## コンテンツカレンダーとの同期

### ステータスマッピング

| カレンダー表記 | レジストリ status | パイプライン stage |
|--------------|-----------------|------------------|
| Planned | (backlogに存在) | idea / outline |
| In Progress | draft | draft / review |
| Published | published | published 以降 |
| Cancelled | archived | - |

## 月次コンテンツレポートフォーマット

出力先: /analytics/content-reports/{YYYY-MM}-content-report.md

### 構成
- サマリー（公開記事数、総PV、総いいね、新規フォロワー）
- プラットフォーム別詳細（Zenn/note/Twitter テーブル）
- パフォーマンス分析（最高PV/いいね記事、エンゲージメント率）
- 収益貢献（テンプレ販売、推定広告効果）
- 次月への提言

## 関連ファイル

| ファイル | 役割 |
|---------|------|
| /.agent-team/content/registry.yaml | コンテンツマスターデータ |
| /.agent-team/content/content-pipeline.yaml | パイプライン定義 |
| /.agent-team/content/backlog.yaml | コンテンツバックログ |
| /marketing/content-calendar.md | 公開スケジュール |
| /marketing/zenn-articles/ | Zenn記事の下書き |
| /marketing/note-articles/ | note記事の下書き |
| /marketing/sns-posts/ | SNS投稿文 |
| /analytics/content-reports/ | コンテンツレポート |
