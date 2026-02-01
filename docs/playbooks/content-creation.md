# Playbook: Content Creation

## Overview
Zenn記事、Twitter投稿、noteなどのコンテンツ作成フロー。

---

## Content Calendar Integration

すべてのコンテンツは `/marketing/content-calendar.md` でスケジュール管理。

---

## Zenn Article Workflow

### Step 1: Topic Selection (5 min)
```
優先度:
1. 自分のプロダクト開発記事 (SEO + 宣伝)
2. Claude Code活用Tips (検索流入)
3. 個人開発ノウハウ (コミュニティ)
```

### Step 2: Outline (15 min)
```markdown
# [タイトル案]

## はじめに
- フック
- この記事で学べること

## 本編
### [セクション1]
### [セクション2]
### [セクション3]

## まとめ
- キーポイント
- CTA
```

### Step 3: Draft (60-90 min)
- コード例は実際に動作確認
- スクリーンショットは2x解像度
- 各セクション300-500字目安

### Step 4: Review (15 min)
- [ ] タイトルにキーワード入ってる？
- [ ] 導入で読者の悩みに触れてる？
- [ ] コードブロックに言語指定ある？
- [ ] CTAが自然に入ってる？

### Step 5: Publish & Promote (15 min)
1. Zennに公開
2. Twitterで共有
3. 関連コミュニティに投稿

---

## Twitter Content Workflow

### Daily Post (5-10 min)
```
朝: 今日やること or 学び
夜: 今日やったこと + 進捗
```

### Batch Creation (週1回, 30 min)
1. 来週分の投稿ネタをリストアップ
2. 3-5個の投稿を下書き作成
3. `/marketing/sns-posts/` に保存

### Engagement (毎日5 min)
- 通知チェック
- コメント返信
- 興味深い投稿にリプライ

---

## Content Types by ROI

| Type | Time | Reach | Longevity | Priority |
|------|------|-------|-----------|----------|
| Twitter Daily | 5min | Medium | 1 day | High |
| Zenn Tutorial | 2hr | High | Months | High |
| Zenn Review | 1.5hr | Medium | Months | Medium |
| Thread | 15min | High | 1 week | Medium |
| note | 1hr | Medium | Months | Low (M3+) |

---

## Content Ideas Bank

### Always Works
- "Claude Codeで○○を作ってみた"
- "個人開発で月○万円稼ぐまで"
- "○○ vs ○○ 徹底比較"
- "失敗から学んだ○○"

### Seasonal
- 年末: 振り返り記事
- 年始: 目標設定記事
- 確定申告期: 個人開発の税金

### Product-Specific
- 開発の舞台裏
- アーキテクチャ解説
- ユーザーインタビュー

---

## SEO Checklist for Zenn

### Title
- [ ] 30-60文字
- [ ] 主要キーワード含む
- [ ] 具体的（数字や方法を入れる）

### Content
- [ ] H2に関連キーワード
- [ ] 冒頭で結論を示す
- [ ] 内部リンク（過去記事へ）
- [ ] 外部リンク（権威あるソースへ）

### Technical
- [ ] コードブロックに言語指定
- [ ] 画像にalt属性相当の説明
- [ ] 記事の長さ 2000字以上

---

## Templates Location

- Zenn記事: `/.claude/prompts/zenn-article.md`
- Twitter: `/.claude/prompts/twitter-post.md`
- Landing Page: `/.claude/prompts/landing-page.md`

---

## Quality Standards

### Must Have
- 技術的に正確
- 動作確認済みのコード
- 明確な結論

### Nice to Have
- オリジナルの視点
- 実体験に基づく内容
- ビジュアル（図解、スクショ）

### Avoid
- 他記事のコピペ
- 未検証の情報
- 過度な宣伝
