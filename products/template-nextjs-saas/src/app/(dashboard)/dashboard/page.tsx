import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="font-bold text-xl">Dashboard</h1>
          <form action="/api/auth/signout" method="post">
            <button
              type="submit"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">
            Signed in as {user.email}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Plan</h3>
            <p className="text-2xl font-bold text-primary">Free</p>
            <button className="mt-4 w-full border px-4 py-2 rounded-md text-sm font-medium hover:bg-accent">
              Upgrade to Pro
            </button>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Usage</h3>
            <p className="text-2xl font-bold">0 / 100</p>
            <p className="text-sm text-muted-foreground mt-1">
              API calls this month
            </p>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Status</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm">All systems operational</span>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 border rounded-lg">
          <h3 className="font-semibold mb-4">Quick Start</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Configure your Supabase project</li>
            <li>Set up Stripe for payments</li>
            <li>Customize the UI to match your brand</li>
            <li>Deploy to Vercel</li>
          </ol>
        </div>
      </main>
    </div>
  )
}
