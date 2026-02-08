# Project: Growth Lab — AI Agent Team × Build in Public

## Mission

MacBook(¥250,000) + Claude Max($200/月) の投資を個人収益で回収する。
AI Agent Team Framework の構築＋サービス提供の二刀流で、ストック型収益を積み上げる。

**投資回収目標：¥610,000（Month 8までに達成）**

---

## Principles

1. **フレームワーク開発 = コンテンツ** — 作る過程そのものが発信ネタになる
2. **$200/月を証明しろ** — Claude Max内で最大の価値を生み出す
3. **チームに任せろ** — 人間はDirector、実装はAgent Team
4. **Dog Foodingを怠るな** — 全ての開発にAgent Teamを使う
5. **Build in Public** — 過程・数字を全て公開する前提で行動
6. **フライホイールを回せ** — 開発→発信→集客→収益→実績→発信

---

## Core Product: Agent Team Framework

MCP + tmux ハイブリッドアーキテクチャによるマルチエージェントフレームワーク。
「チーム」メタファー（Director → Lead → Members → Reviewer）を採用。

### Revenue Streams
1. Agent Team テンプレート販売（Gumroad/BOOTH）
2. Framework Premium（月額サブスク）
3. Zenn Book「Agent Team 実践ガイド」
4. コンテンツ収益（Zenn/Twitter/note）
5. エージェント開発サービス（MVP構築代行）

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Agent Process | tmux (parallel execution) |
| Tool Integration | MCP (Model Context Protocol) |
| Agent Communication | YAML files (filesystem-based) |
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
├── CLAUDE.md                       # This file
├── README.md                       # Project dashboard
├── .claude/
│   ├── prompts/                    # Reusable prompts
│   └── commands/                   # Custom commands
│
├── agent-team/                     # Agent Team Framework (Core)
│   ├── README.md                   # Framework docs
│   ├── templates/                  # Team templates
│   │   ├── dev-team/
│   │   ├── content-team/
│   │   ├── research-team/
│   │   └── launch-team/
│   ├── roles/                      # Role-specific instructions
│   ├── scripts/                    # tmux setup scripts
│   └── examples/                   # Usage examples
│
├── products/                       # Products built with Agent Team
│
├── marketing/                      # Marketing assets
│   ├── content-calendar.md
│   ├── sns-posts/
│   ├── zenn-articles/
│   ├── zenn-book/
│   ├── note-articles/
│   └── landing-pages/
│
├── analytics/                      # KPI & Reports
│   ├── monthly-report.md
│   ├── revenue-tracking.md
│   ├── kpi-dashboard.md
│   └── user-feedback/
│
├── automation/                     # Automation scripts
│   ├── sns-scheduler/
│   ├── analytics-reporter/
│   └── deploy-scripts/
│
├── portfolio/                      # Portfolio site (Next.js)
│
└── docs/                           # Documentation
    ├── strategy.md                 # Master strategy
    ├── brand-guide.md
    └── playbooks/
```

---

## Development Workflow

```
1. Director（人間）がタスクを定義
2. Agent Team Lead がタスクを分解・アサイン
3. Members が並列で実装（tmux panes）
4. Reviewer がレビュー・フィードバック
5. Director が最終確認
6. Vercel にデプロイ
7. Build in Public で過程を発信
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
- Include hashtags: #AIエージェント #ClaudeCode #BuildInPublic #個人開発
- Post daily development logs

### Zenn
- SEO-optimized titles and headings
- Tutorial format preferred
- Include code examples
- Focus: AI agent orchestration, MCP, tmux, cost optimization

---

## Product Selection Criteria

Before building any new product, verify:

1. [ ] Agent Team Framework を活用して構築可能
2. [ ] フレームワークの実績証明になる
3. [ ] Build in Public コンテンツのネタになる
4. [ ] $200/月の Claude Max 内で運用可能
5. [ ] Dog fooding possible (I would use it myself)

---

## Agent Team Cost Budget

- Monthly budget: $200 (Claude Max)
- Max concurrent agents: 2-3
- Communication: File-based YAML (zero token cost)
- Optimization: Event-driven, no polling, compact role instructions

---

## Key Metrics to Track

### Weekly
- Cumulative revenue vs ¥610,000 target
- Template sales & Zenn Book sales
- Framework GitHub Stars
- Twitter/X followers & engagement
- Zenn article PV & likes

### Per Product
- Template units sold
- Premium subscribers
- Service projects completed

---

## Reference Documents

- `/docs/strategy.md` — Master strategy document (v2: Agent Team pivot)
- `/docs/brand-guide.md` — Brand guidelines
- `/docs/playbooks/` — Operational playbooks
- `/docs/feature-inventory.md` — 機能一覧（動作確認状況）
- `/marketing/content-calendar.md` — Content schedule
- `/analytics/kpi-dashboard.md` — KPI tracking

---

## 大賢者（Great Sage）システム

転生したらスライムだった件の「大賢者」をモチーフにした自己改善エンジン。
Claude が自律的にパターンを検知し、スキル化を提案する。

### コンセプト

```
リムル = ユーザー（Director）
大賢者 = Claude（自律的に補佐）
スキル吸収 = パターン検知 → スキル化
国づくり = コミュニティ構築（最終目標）
```

### 自動発動トリガー

| トリガー | 条件 | 通知 |
|---------|------|------|
| スキル獲得 | `.claude/skills/` or `.claude/commands/` に書き込み | 「告。スキル『○○』を獲得しました」|
| パターン検知 | 同一ディレクトリに3回以上書き込み | 「解析完了。スキル化の機会を検出」|
| 学習データ更新 | `.agent-team/learning/` に書き込み | 「学習データを更新しました」|

### セッション開始時

未読通知があれば自動で表示：
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

　　告。

　　マスター、お帰りなさい。
　　3件の未読通知があります。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 通知の確認

```bash
# 未読通知を確認
ls .agent-team/learning/notifications/

# 通知内容を読む
cat .agent-team/learning/notifications/*.yaml
```

### 関連ファイル

| ファイル | 役割 |
|---------|------|
| `.claude/hooks/great-sage-trigger.sh` | PostToolUse で自動実行 |
| `.claude/hooks/great-sage-session-start.sh` | SessionStart で未読通知表示 |
| `.claude/settings.json` | Hooks 設定 |
| `.agent-team/learning/notifications/` | 通知 YAML 保存先 |
| `.agent-team/learning/detected-patterns.log` | パターン検知ログ |

---

## 利用可能なエージェント

Task ツールで以下のエージェントを起動できる：

| エージェント | 役割 | 使用例 |
|-------------|------|--------|
| `team-lead` | プロジェクト統括、タスク分解 | 大きな機能の計画 |
| `frontend-member` | UI/UX 実装 | React コンポーネント作成 |
| `backend-member` | API/DB 実装 | Supabase 連携 |
| `reviewer` | コードレビュー | 品質・セキュリティ検証 |

### 使用例

```
「reviewer エージェントで portfolio/ をレビューして」
→ Task ツールで reviewer を起動、詳細なレビューを返す
```

---

*Last updated: 2026-02-08*
*Strategy: v2 — AI Agent Team Framework + Services*
*Feature: 大賢者（Great Sage）自律動作システム実装済み*
