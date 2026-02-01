# New Product Development Prompt

## Context
You are developing a new Micro-SaaS product for the Growth Lab project. The goal is to create an MVP within 3 days that can generate recurring revenue.

## Before You Start

Verify the product meets these criteria:
- [ ] Can be built as MVP in 3 days
- [ ] Freemium or subscription model fits naturally
- [ ] Target: Japanese developers or tech users
- [ ] Price: ¥500-3,000/month
- [ ] Dog fooding possible

## Product Specification

**Product Name:** [NAME]
**Target User:** [WHO]
**Core Problem:** [WHAT PROBLEM DOES IT SOLVE]
**Unique Value:** [WHY USE THIS OVER ALTERNATIVES]

## Tech Stack (Fixed)

- Next.js 15 (App Router)
- TypeScript strict mode
- Tailwind CSS v4 + shadcn/ui
- Supabase (Auth, Database)
- Stripe (Payment)
- Vercel (Hosting)

## MVP Scope

### Must Have (Day 1-2)
1. [FEATURE 1]
2. [FEATURE 2]
3. [FEATURE 3]

### Nice to Have (Day 3)
1. [FEATURE 4]
2. [FEATURE 5]

### Post-MVP (After Validation)
1. [FEATURE 6]
2. [FEATURE 7]

## Directory Structure

```
products/[product-name]/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (dashboard)/
│   │   ├── api/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── lib/
│   └── types/
├── supabase/
│   └── migrations/
├── public/
├── .env.example
├── package.json
└── README.md
```

## Development Steps

1. Initialize Next.js project with TypeScript
2. Setup Tailwind CSS + shadcn/ui
3. Configure Supabase client
4. Implement core feature
5. Add authentication
6. Create landing page
7. Setup Stripe integration
8. Deploy to Vercel

## Validation Criteria (2 weeks after launch)

- ✅ 5+ paid users → Continue development
- ⚠️ 50+ signups but 0 paid → Consider pivot
- ❌ <10 signups → Abandon, move to next
