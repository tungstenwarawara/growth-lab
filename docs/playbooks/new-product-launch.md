# Playbook: New Product Launch

## Overview
新規プロダクトをMVPから販売開始までの3日間で完了するためのチェックリスト。

---

## Pre-Launch Checklist

### Day 1: Core Development

#### Morning
- [ ] Create product directory in `products/[name]/`
- [ ] Initialize Next.js project with TypeScript
- [ ] Setup Tailwind CSS + shadcn/ui
- [ ] Configure Supabase client

#### Afternoon
- [ ] Implement core feature (MVP scope only)
- [ ] Create basic UI
- [ ] Test core functionality locally

#### Evening
- [ ] Tweet: "Day 1 progress on [product name]"
- [ ] Commit code

### Day 2: Integration & Polish

#### Morning
- [ ] Add Supabase authentication
- [ ] Create database schema
- [ ] Implement user-specific data

#### Afternoon
- [ ] Add Stripe integration (if paid)
- [ ] Create pricing page
- [ ] Setup webhook handling

#### Evening
- [ ] Create landing page
- [ ] Write copy (headline, features, FAQ)
- [ ] Design OG image
- [ ] Tweet: "Day 2 progress"

### Day 3: Launch

#### Morning
- [ ] Final testing
- [ ] Create .env.example
- [ ] Deploy to Vercel
- [ ] Verify production build

#### Afternoon
- [ ] Connect custom domain (if available)
- [ ] Setup analytics
- [ ] Final QA on production

#### Evening
- [ ] Launch tweet with screenshot
- [ ] Post to relevant communities
- [ ] Zenn記事の構想をメモ

---

## Launch Announcement Template

### Twitter/X
```
🚀 [Product Name] をリリースしました！

[One-line description]

✅ [Feature 1]
✅ [Feature 2]
✅ [Feature 3]

無料で試せます → [link]

#個人開発 #BuildInPublic
```

### Thread Format
```
1/ [Product Name] を作りました！

Claude Codeで3日で開発した[category]ツールです。

なぜ作ったか👇

2/ [Problem statement]

既存ツールの問題点:
- [Issue 1]
- [Issue 2]

3/ そこで[Product Name]

[How it solves the problem]

4/ 技術スタック:
- Next.js 15
- Supabase
- Stripe (課金)
- Vercel

5/ 無料プランあります

[Free tier description]

有料版は¥[price]/月から

ぜひ試してみてください！
[link]
```

---

## Post-Launch: Week 1

### Daily
- [ ] Check analytics
- [ ] Respond to feedback
- [ ] Fix critical bugs (if any)
- [ ] Tweet daily update

### Day 3
- [ ] Review signup numbers
- [ ] Identify top feedback themes
- [ ] Plan first iteration

### Day 7
- [ ] Weekly metrics review
- [ ] Write Zenn記事 about the development
- [ ] Decision: Continue, Pivot, or Abandon

---

## Validation Metrics

### Success Criteria (2 weeks)
| Metric | Continue | Pivot | Abandon |
|--------|----------|-------|---------|
| Signups | 50+ | 10-50 | <10 |
| Paid Users | 5+ | 0 | - |
| Retention | 30%+ | 10-30% | <10% |

---

## Common Launch Mistakes

### Avoid
- Launching on Friday (low weekend engagement in JP)
- Launching without any audience (build Twitter first)
- Perfect polish before validation
- Too many features in MVP

### Do
- Launch Tuesday-Thursday
- Have at least 3 people ready to try
- Focus on one core feature
- Get feedback before adding features

---

## Resources

- [Landing Page Prompt](/.claude/prompts/landing-page.md)
- [Twitter Post Prompt](/.claude/prompts/twitter-post.md)
- [New Product Prompt](/.claude/prompts/new-product.md)
