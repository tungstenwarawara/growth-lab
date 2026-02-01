import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Your SaaS
          </Link>
          <nav className="flex items-center gap-4">
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
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Build Your SaaS
            <br />
            <span className="text-primary">In Record Time</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            This starter kit includes authentication, payments, and a dashboard.
            Everything you need to launch your SaaS.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/signup"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90"
            >
              Start Building
            </Link>
            <Link
              href="#features"
              className="border px-6 py-3 rounded-md font-medium hover:bg-accent"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section id="features" className="container mx-auto px-4 py-24">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Authentication</h3>
              <p className="text-muted-foreground">
                Supabase Auth with email, Google, and GitHub providers.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Payments</h3>
              <p className="text-muted-foreground">
                Stripe integration for subscriptions and one-time payments.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
              <p className="text-muted-foreground">
                Beautiful dashboard UI with sidebar navigation.
              </p>
            </div>
          </div>
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
