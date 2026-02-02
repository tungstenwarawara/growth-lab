import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { PLANS } from '@/lib/stripe/client'
import { UpgradeButton, ManageBillingButton } from './billing-buttons'

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; canceled?: string }>
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const params = await searchParams
  const isPro = profile?.subscription_status === 'active'

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
        {params.success && (
          <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
            Payment successful! Your subscription is now active.
          </div>
        )}
        {params.canceled && (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-300 rounded-lg text-yellow-800">
            Payment was canceled. You can try again anytime.
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
          <p className="text-muted-foreground">Signed in as {user.email}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Current Plan</h3>
            <p className="text-2xl font-bold text-primary">
              {isPro ? 'Pro' : 'Free'}
            </p>
            <div className="mt-4">
              {isPro ? (
                <ManageBillingButton />
              ) : (
                <UpgradeButton priceId={PLANS.pro.priceId!} />
              )}
            </div>
          </div>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold mb-2">Usage</h3>
            <p className="text-2xl font-bold">0 / {isPro ? '∞' : '100'}</p>
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
          <h3 className="font-semibold mb-4">
            {isPro ? 'Pro Features' : 'Upgrade to Pro'}
          </h3>
          <ul className="space-y-2">
            {PLANS.pro.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className={isPro ? 'text-green-500' : 'text-muted-foreground'}>
                  {isPro ? '✓' : '○'}
                </span>
                <span className={isPro ? '' : 'text-muted-foreground'}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          {!isPro && (
            <div className="mt-4">
              <UpgradeButton priceId={PLANS.pro.priceId!} />
            </div>
          )}
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
