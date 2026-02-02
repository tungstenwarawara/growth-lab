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
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Get Started
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
            Build Your SaaS
            <br />
            <span className="text-primary">In Record Time</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Skip weeks of boilerplate. This starter kit includes authentication,
            payments, and a dashboard. Everything you need to launch your SaaS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90"
            >
              Start Building Free
            </Link>
            <Link
              href="#features"
              className="border px-8 py-3 rounded-md font-medium hover:bg-accent"
            >
              See Features
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted/50 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Everything You Need
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Production-ready features so you can focus on what makes your product unique.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔐</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentication</h3>
                <p className="text-muted-foreground">
                  Supabase Auth with email/password. Easy to add Google, GitHub, and other OAuth providers.
                </p>
              </div>
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Stripe Payments</h3>
                <p className="text-muted-foreground">
                  Checkout, Customer Portal, and Webhook handling. Subscription management out of the box.
                </p>
              </div>
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
                <p className="text-muted-foreground">
                  Beautiful, responsive dashboard with plan management and user settings.
                </p>
              </div>
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Database</h3>
                <p className="text-muted-foreground">
                  Supabase PostgreSQL with Row Level Security. Type-safe queries included.
                </p>
              </div>
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
                <p className="text-muted-foreground">
                  Modern styling with Tailwind CSS v4. Dark mode ready. Fully customizable.
                </p>
              </div>
              <div className="p-6 bg-background border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Deploy Ready</h3>
                <p className="text-muted-foreground">
                  Optimized for Vercel. One-click deploy. Environment variables documented.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold text-center mb-4">
            Simple Pricing
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Start for free, upgrade when you need more.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Free</h3>
              <p className="text-4xl font-bold mb-4">
                ¥0<span className="text-lg font-normal text-muted-foreground">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Basic features
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  100 API calls/month
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Community support
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center border px-6 py-3 rounded-md font-medium hover:bg-accent"
              >
                Get Started
              </Link>
            </div>
            <div className="p-8 border-2 border-primary rounded-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Pro</h3>
              <p className="text-4xl font-bold mb-4">
                ¥1,000<span className="text-lg font-normal text-muted-foreground">/month</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  All features
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Unlimited API calls
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  API access
                </li>
              </ul>
              <Link
                href="/signup"
                className="block text-center bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="bg-muted/50 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Built With Modern Tech</h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Using the latest and most reliable tools for production-ready applications.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Ship?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop building the same auth and payment features over and over.
            Focus on what makes your product unique.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90"
          >
            Start Building Now
          </Link>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          Built with Next.js, Supabase, and Stripe
        </div>
      </footer>
    </div>
  )
}
