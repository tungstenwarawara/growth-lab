# Next.js SaaS Starter Kit

> SaaSを最速で立ち上げるためのスターターキット。認証・決済・ダッシュボードを30分でセットアップ。

## なぜこのテンプレート？

SaaSを作るたびに同じ作業をしていませんか？

- ユーザー認証の実装... **2-3日**
- Stripe決済の連携... **2-3日**
- ダッシュボードの構築... **1-2日**
- Webhookの処理... **1日**
- デバッグと調整... **2-3日**

**合計: 1-2週間**

このテンプレートを使えば、**30分で開発を開始**できます。

---

## 含まれる機能

### 認証（Supabase Auth）
- メール/パスワード認証
- セッション管理
- 保護されたルート
- ログアウト処理

### 決済（Stripe）
- Checkout Session（課金フロー）
- Customer Portal（プラン管理）
- Webhook処理（ステータス同期）
- サブスクリプション管理

### ダッシュボード
- レスポンシブUI
- プラン表示・アップグレード
- 利用状況の表示
- 設定画面

### ランディングページ
- ヒーローセクション
- 機能紹介
- 料金表
- CTA

---

## 技術スタック

| レイヤー | 技術 |
|----------|------|
| フレームワーク | Next.js 15 (App Router) |
| 言語 | TypeScript (strict mode) |
| スタイリング | Tailwind CSS v4 |
| 認証・DB | Supabase |
| 決済 | Stripe |
| ホスティング | Vercel |

---

## クイックスタート

### 1. インストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.example` を `.env.local` にコピーして値を設定:

```bash
cp .env.example .env.local
```

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
```

### 3. Supabaseのセットアップ

1. [supabase.com](https://supabase.com) でプロジェクト作成
2. `supabase/migrations/` のSQLを実行
3. URL と API Keys をコピー

### 4. Stripeのセットアップ

1. [stripe.com](https://stripe.com) でアカウント作成
2. 商品と価格を作成
3. Price ID を `src/lib/stripe/client.ts` に設定
4. Webhook エンドポイントを設定: `/api/webhook`

### 5. 開発サーバー起動

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) を開く

---

## プロジェクト構成

```
src/
├── app/
│   ├── (auth)/              # 認証ページ
│   │   ├── login/           # ログイン
│   │   └── signup/          # サインアップ
│   ├── (dashboard)/         # ダッシュボード（要認証）
│   │   └── dashboard/       # メインダッシュボード
│   ├── api/                 # APIルート
│   │   ├── auth/            # 認証API
│   │   ├── checkout/        # Checkout Session作成
│   │   ├── portal/          # Customer Portal
│   │   └── webhook/         # Stripe Webhook
│   ├── globals.css          # グローバルスタイル
│   ├── layout.tsx           # ルートレイアウト
│   └── page.tsx             # ランディングページ
├── lib/
│   ├── supabase/            # Supabaseクライアント
│   │   ├── client.ts        # ブラウザ用
│   │   ├── server.ts        # サーバー用
│   │   └── middleware.ts    # ミドルウェア用
│   └── stripe/
│       └── client.ts        # Stripe設定・プラン定義
├── types/
│   └── database.ts          # DB型定義
└── middleware.ts            # 認証ミドルウェア
```

---

## カスタマイズ

### ブランディング
- `src/app/layout.tsx` — サイト名、メタデータ
- `src/app/globals.css` — カラー変数

### 料金プラン
- `src/lib/stripe/client.ts` — プラン定義、Price ID

### 機能追加
- `src/app/(dashboard)/` にページを追加
- ダッシュボードは自動的に認証保護される

---

## デプロイ

### Vercel（推奨）

1. GitHubにプッシュ
2. Vercelでインポート
3. 環境変数を設定
4. デプロイ

### Stripe Webhook

本番環境のWebhook URLを設定:
```
https://your-domain.com/api/webhook
```

イベント:
- `checkout.session.completed`
- `customer.subscription.updated`
- `customer.subscription.deleted`

---

## サポート

質問やフィードバックは [Twitter/X](https://twitter.com/...) までお気軽にどうぞ。

---

## ライセンス

MIT License

---

**Happy Building! 🚀**
