# Project: Growth Lab — Build in Public

## Mission

MacBook(¥250,000) + Claude Max($200/月) の投資を個人収益で回収する。
Claude Codeの開発速度を最大限活かし、ストック型収益を積み上げる。

**投資回収目標：¥610,000（Month 10までに達成）**

---

## Principles

1. **スピード最優先** — MVPは3日以内に完成させる
2. **ストック型を優先** — フロー収入よりMRR（月額課金）を重視
3. **市場検証ファースト** — 作る前にニーズを確認、2週間で判断
4. **自動化できるものは全て自動化** — 人間の仕事はPM/マーケターに徹する
5. **Build in Public** — 過程・数字を全て公開する前提で行動
6. **毎週の振り返りと数値計測を怠らない**

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15 (App Router) + Tailwind CSS v4 + shadcn/ui |
| Backend | Supabase (Auth, Database, Edge Functions) |
| Hosting | Vercel |
| Payment | Stripe |
| Analytics | Plausible or Umami |
| Domain/CDN | Cloudflare |

---

## Coding Conventions

### TypeScript
- `strict: true` in tsconfig.json
- Prefer `interface` over `type` for object shapes
- Use explicit return types for exported functions
- No `any` — use `unknown` if type is truly unknown

### Commits
Follow Conventional Commits:
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation
- `chore:` — maintenance
- `refactor:` — code refactoring
- `test:` — tests

### Testing
- Test critical business logic only
- Don't over-test — speed is priority
- E2E tests for checkout/auth flows

### Components
- Colocate components with their pages when possible
- Extract to `/components` only when reused
- Use shadcn/ui as base, customize minimally

---

## Directory Structure

```
growth-lab/
├── CLAUDE.md                    # This file
├── README.md                    # Project dashboard
├── .claude/
│   ├── prompts/                 # Reusable prompts
│   └── commands/                # Custom commands
│
├── products/                    # All products
│   ├── saas-ogp-generator/
│   ├── saas-readme-gen/
│   ├── saas-chatbot-widget/
│   ├── template-nextjs-saas/    # For sale
│   └── template-prompt-pack/    # For sale
│
├── marketing/                   # Marketing assets
│   ├── content-calendar.md
│   ├── sns-posts/
│   ├── zenn-articles/
│   ├── zenn-book/
│   ├── note-articles/
│   └── landing-pages/
│
├── analytics/                   # KPI & Reports
│   ├── monthly-report.md
│   ├── revenue-tracking.md
│   ├── kpi-dashboard.md
│   └── user-feedback/
│
├── automation/                  # Automation scripts
│   ├── sns-scheduler/
│   ├── analytics-reporter/
│   └── deploy-scripts/
│
├── portfolio/                   # Portfolio site (Next.js)
│
└── docs/                        # Documentation
    ├── strategy.md              # Master strategy
    ├── brand-guide.md
    └── playbooks/
```

---

## Development Workflow

```
1. Claude Code でMVP構築（2-3日）
2. Vercel にプレビューデプロイ
3. Twitter/X で告知・フィードバック収集
4. Claude Code でイテレーション
5. main ブランチにマージ → 本番デプロイ
6. Zenn に技術記事（開発過程の共有）
```

---

## Commands

### Development
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint
npm run type-check   # TypeScript check
```

### Deployment
- `main` branch → Production (Vercel auto-deploy)
- Feature branches → Preview deployments
- Environment variables managed in Vercel dashboard

---

## Content Guidelines

### Language
- Primary: Japanese (target is Japanese developers)
- Technical terms: Keep in English when natural

### Twitter/X
- Keep under 140 characters for optimal engagement
- Include hashtags: #個人開発 #ClaudeCode #BuildInPublic
- Post daily development logs

### Zenn
- SEO-optimized titles and headings
- Tutorial format preferred
- Include code examples

---

## Product Selection Criteria

Before building any new product, verify:

1. [ ] MVP可能 in 3 days with Claude Code
2. [ ] Freemium or subscription model fits naturally
3. [ ] Target: Japanese developers or tech users
4. [ ] Price range: ¥500-3,000/month
5. [ ] Dog fooding possible (I would use it myself)

---

## MVP Validation Criteria

After 2 weeks of launch:

- ✅ 5+ paid users → Continue development
- ⚠️ 50+ signups but 0 paid → Consider pivot
- ❌ <10 signups → Abandon, move to next candidate

---

## Key Metrics to Track

### Weekly
- Cumulative revenue vs ¥610,000 target
- MRR (Monthly Recurring Revenue)
- Twitter/X followers & engagement
- Zenn article PV & likes

### Per Product
- Free users / Paid users
- Conversion rate
- Churn rate

---

## Reference Documents

- `/docs/strategy.md` — Master strategy document
- `/docs/brand-guide.md` — Brand guidelines
- `/docs/playbooks/` — Operational playbooks
- `/marketing/content-calendar.md` — Content schedule
- `/analytics/kpi-dashboard.md` — KPI tracking

---

*Last updated: 2026-02*
