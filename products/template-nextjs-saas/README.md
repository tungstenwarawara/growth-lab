# Next.js SaaS Starter Kit

A production-ready SaaS starter template with authentication, payments, and a dashboard.

## Features

- **Authentication** — Supabase Auth with email/password
- **Payments** — Stripe integration for subscriptions
- **Dashboard** — Protected routes with user management
- **Database** — Supabase PostgreSQL with Row Level Security
- **Styling** — Tailwind CSS v4 with dark mode support
- **TypeScript** — Full type safety
- **Deployment** — Optimized for Vercel

## Tech Stack

- Next.js 15 (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- Supabase (Auth + Database)
- Stripe (Payments)

## Getting Started

### 1. Clone and Install

```bash
git clone <your-repo>
cd template-nextjs-saas
npm install
```

### 2. Configure Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Run the migration in `supabase/migrations/`
3. Copy your project URL and keys

### 3. Configure Stripe

1. Create an account at [stripe.com](https://stripe.com)
2. Create a product and price in the dashboard
3. Set up a webhook endpoint for `/api/webhook`

### 4. Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── (auth)/           # Auth pages (login, signup)
│   ├── (dashboard)/      # Protected dashboard pages
│   ├── api/              # API routes
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx          # Landing page
├── components/
│   ├── ui/               # Base UI components
│   └── auth/             # Auth-specific components
├── lib/
│   ├── supabase/         # Supabase client configs
│   └── stripe/           # Stripe configuration
└── types/                # TypeScript types
```

## Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Stripe Webhook

Update the webhook endpoint to your production URL:
```
https://your-domain.com/api/webhook
```

## Customization

1. **Branding** — Update `src/app/layout.tsx` and colors in `globals.css`
2. **Pricing** — Modify plans in `src/lib/stripe/client.ts`
3. **Features** — Add new pages in `src/app/(dashboard)/`

## License

MIT

---

Built with [Growth Lab](https://github.com/...)
