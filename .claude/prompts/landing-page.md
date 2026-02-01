# Landing Page Creation Prompt

## Context
You are creating a landing page for a Growth Lab product. The page should clearly communicate value and drive conversions (signups or purchases).

## Page Structure

```
┌─────────────────────────────────────────┐
│ Header (Logo + Nav + CTA)               │
├─────────────────────────────────────────┤
│ Hero Section                            │
│ - Headline (value proposition)          │
│ - Subheadline (who it's for)           │
│ - Primary CTA                           │
│ - Hero image/demo                       │
├─────────────────────────────────────────┤
│ Problem Section                         │
│ - Pain points (3)                       │
├─────────────────────────────────────────┤
│ Solution Section                        │
│ - How product solves each pain point    │
├─────────────────────────────────────────┤
│ Features Section                        │
│ - 3-5 key features with icons           │
├─────────────────────────────────────────┤
│ Social Proof                            │
│ - Testimonials or user count            │
│ - "Used by developers from..."          │
├─────────────────────────────────────────┤
│ Pricing Section                         │
│ - Free tier + Paid tiers                │
│ - Feature comparison                    │
├─────────────────────────────────────────┤
│ FAQ Section                             │
│ - 4-6 common questions                  │
├─────────────────────────────────────────┤
│ Final CTA Section                       │
│ - Repeat primary CTA                    │
├─────────────────────────────────────────┤
│ Footer                                  │
│ - Links + Copyright                     │
└─────────────────────────────────────────┘
```

## Copy Framework

### Headline Formula
```
[Action verb] + [Desired outcome] + [Time/ease qualifier]

Examples:
- "OGP画像を30秒で生成"
- "READMEを自動で美しく"
- "AIチャットボットを5分で導入"
```

### Subheadline
```
[Target user]のための[product category]

Examples:
- "ブロガー・開発者のためのOGP画像生成ツール"
- "OSS開発者のためのREADME作成支援"
```

### CTA Buttons
Primary: "無料で始める" / "今すぐ試す"
Secondary: "デモを見る" / "詳しく見る"

## Technical Implementation

### Stack
- Next.js 15 (App Router)
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)

### Components
```tsx
// src/app/page.tsx
import { Hero } from '@/components/sections/hero'
import { Problem } from '@/components/sections/problem'
import { Solution } from '@/components/sections/solution'
import { Features } from '@/components/sections/features'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
```

## SEO Checklist

- [ ] Title tag with keyword
- [ ] Meta description (under 160 chars)
- [ ] OG image (1200x630)
- [ ] Structured data (Product schema)
- [ ] Fast loading (<3s)
- [ ] Mobile responsive

## Conversion Optimization

- Single primary CTA per section
- Reduce friction (email only for signup)
- Show social proof early
- Address objections in FAQ
- Use urgency sparingly
