---
name: content
description: >
  大賢者のコンテンツ管理機能。Zenn/note/X のコンテンツを統合管理し、
  新記事検知、メトリクス更新、SNS拡散提案を行う。
disable-model-invocation: true
version: "1.0"
---

# /content — コンテンツ管理

## 実行フロー

### 1. レジストリ同期
`/.agent-team/content/registry.yaml` を読み込み、各プラットフォームの最新状態と突合する。

### 2. 新記事検知
- Chrome MCP / Web Fetch で各プラットフォームの記事一覧を取得
- registry.yaml に未登録の記事を検知 → 登録

### 3. メトリクス更新
各記事の PV・いいね・フォロワー数を取得し、registry.yaml を更新。

**収集対象:**
- Zenn: PV, いいね, ブックマーク, コメント
- note: PV, スキ, コメント
- X: インプレッション, いいね, RT, フォロワー数

### 4. SNS拡散提案
記事公開時に投稿文を3パターン以上生成し、Director が選択。
- 140文字以内、ハッシュタグ 2-4個
- パターン: 成果報告型 / 問題提起型 / 数字インパクト型

### 5. 異常検知
- いいね急増（前回比 +50%） → 高パフォーマンス通知
- PV 急増（前回比 +100%） → バズ検知通知

### 6. 報告

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　　解析完了。

　　新規コンテンツを検知しました。

　　『{記事タイトル}』
　　プラットフォーム: {Zenn/note}
　　ステータス: 公開済み
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 関連ファイル
- `/.agent-team/content/registry.yaml` — マスターデータ
- `/.agent-team/content/backlog.yaml` — バックログ
- `/marketing/content-calendar.md` — 公開スケジュール

## 詳細リファレンス
→ `docs/great-sage/content-manager-guide.md`
