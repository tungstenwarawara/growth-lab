---
name: marketing
description: >
  大賢者のマーケティング分析機能。各SNSプラットフォームの日次チェック、
  プロフィール改善提案、投稿案生成、競合分析を行う。
disable-model-invocation: true
version: "1.1"
---

# /marketing — SNS分析・改善提案

## 実行フロー

### 1. 日次チェック

巡回順序: BOOTH → Zenn → note → X（収益に近い順）

| # | プラットフォーム | 巡回URL | 確認項目 |
|---|----------------|---------|---------|
| 1 | BOOTH管理画面 | manage.booth.pm | 総売上、注文一覧 |
| 2 | BOOTH商品管理 | manage.booth.pm/items | 販売数、♥、価格 |
| 3 | Zenn | zenn.dev/mikkabouzu_log | 記事一覧、いいね、ブックマーク |
| 4 | note | note.com/mikkabouzu_ai | スキ数、フォロワー数 |
| 5 | X | x.com/Day3Lab | フォロワー数、投稿数 |

**取得手段（優先順）:**
1. **Chrome MCP**（推奨） — ログイン必要なページも含め全て取得可能
2. **手動入力** — Chrome MCP が使えない環境では Director が数値を報告

> **注意**: WebFetch は全サイト 403 でブロックされるため使用不可（2026-02-09確認）

**巡回後:**
1. registry.yaml を実データで更新（差分があれば）
2. 前回比で変動があれば異常検知（スキ+50%、PV+100%）
3. 大賢者通知で巡回結果を報告

### 2. 改善提案

確認結果に基づき、以下の観点で改善を提案する。
提案は最大3件、優先度順に以下のフォーマットで出力する。

```yaml
# .agent-team/proposals/improvement-{date}.yaml
date: "YYYY-MM-DD"
generated_by: great-sage

proposals:
  - id: 1
    priority: high    # high / medium / low
    category: profile # profile / content / funnel / product
    platform: x       # x / zenn / note / booth / cross
    title: "提案タイトル（1行）"
    current: "現状の問題点"
    suggestion: "具体的な改善内容"
    expected_impact: "期待される効果"
    effort: low        # low / medium / high
    status: pending    # pending / approved / rejected / done
```

**カテゴリ定義:**
- **profile**: 自己紹介文、アイコン、ヘッダー画像
- **content**: ハッシュタグ、投稿時間帯、文体、テーマ
- **funnel**: プラットフォーム間の相互リンク、導線
- **product**: BOOTH の説明文、価格設定、サムネイル

### 3. 投稿案生成（半自動）

1. 大賢者が投稿案を3パターン生成（成果報告/問題提起/数字インパクト）
2. Director が選択・編集
3. 承認後、Chrome MCP 経由で投稿

**X投稿ルール:** 140字以内、ハッシュタグ2-4個

### 4. 巡回結果通知

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　　解析完了。全チャネル巡回結果を報告する。

　　【BOOTH】 総売上 ¥{amount} / 販売数 {n}
　　【Zenn】  記事 {n}本 / いいね {n}
　　【note】  記事 {n}本 / 総スキ {n} / フォロワー {n}
　　【X】    投稿 {n} / フォロワー {n}

　　検知事項:
　　{差分・異常があれば記載}

　　改善提案:
　　1. {最優先の提案}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 5. 週次レポート

巡回結果の週次集計。前週比を含む。

### 6. 競合分析（Phase 3 以降）

同ジャンルのアカウントを分析し、差別化ポイントを提案。

## 連携

- `marketing-strategist` エージェント — 詳細な戦略立案
- `/.agent-team/content/registry.yaml` — データソース
