import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Your SaaS
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block"
            >
              機能
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block"
            >
              料金
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              ログイン
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
            >
              無料で始める
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Next.js 15 + Supabase + Stripe
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SaaSを
            <br />
            <span className="text-primary">爆速で構築</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            認証・決済・ダッシュボードを実装済み。
            面倒なボイラープレートはスキップして、あなたのプロダクトに集中しよう。
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90"
            >
              無料で始める
            </Link>
            <Link
              href="#features"
              className="border px-8 py-3 rounded-md font-medium hover:bg-accent"
            >
              機能を見る
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted/50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              必要な機能をすべて搭載
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              本番環境で使える機能を最初から。あなたのプロダクトの差別化に集中できます。
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">認証機能</h3>
                <p className="text-muted-foreground">
                  Supabase Authでメール/パスワード認証。Google、GitHubなどのOAuthも簡単に追加可能。
                </p>
              </div>
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Stripe決済</h3>
                <p className="text-muted-foreground">
                  Checkout、カスタマーポータル、Webhook処理を実装済み。サブスクリプション管理もすぐに使えます。
                </p>
              </div>
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">ダッシュボード</h3>
                <p className="text-muted-foreground">
                  美しくレスポンシブなダッシュボード。プラン管理やユーザー設定画面も含まれています。
                </p>
              </div>
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">データベース</h3>
                <p className="text-muted-foreground">
                  Supabase PostgreSQLとRow Level Security。型安全なクエリも設定済み。
                </p>
              </div>
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
                <p className="text-muted-foreground">
                  Tailwind CSS v4でモダンなスタイリング。ダークモード対応。自由にカスタマイズ可能。
                </p>
              </div>
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">デプロイ対応</h3>
                <p className="text-muted-foreground">
                  Vercel最適化済み。ワンクリックでデプロイ。環境変数もドキュメント完備。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold text-center mb-4">
            シンプルな料金プラン
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            無料で始めて、必要に応じてアップグレード。
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-4xl font-bold mb-4">
                ¥0<span className="text-lg font-normal text-muted-foreground">/月</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  基本機能
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  100 API呼び出し/月
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  コミュニティサポート
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center border px-6 py-3 rounded-md font-medium hover:bg-accent"
              >
                無料で始める
              </Link>
            </div>
            <div className="p-8 border-2 border-primary rounded-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                人気
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-4xl font-bold mb-4">
                ¥1,000<span className="text-lg font-normal text-muted-foreground">/月</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  全機能利用可能
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  API呼び出し無制限
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  優先サポート
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  APIアクセス
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
              >
                無料トライアル開始
              </Link>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="bg-muted/50 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">モダンな技術スタック</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              本番環境で信頼できる最新ツールを採用しています。
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl">▲</div>
                <span className="font-medium">Next.js 15</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl">⚡</div>
                <span className="font-medium">Supabase</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl">💳</div>
                <span className="font-medium">Stripe</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl">🎨</div>
                <span className="font-medium">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl">📘</div>
                <span className="font-medium">TypeScript</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">今すぐ開発を始めよう</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            認証・決済の実装に時間をかけるのはもう終わり。
            あなたのプロダクトの価値に集中しましょう。
          </p>
          <Link
            href="/signup"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90"
          >
            無料で始める
          </Link>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Next.js、Supabase、Stripeで構築
        </div>
      </footer>
    </div>
  )
}
