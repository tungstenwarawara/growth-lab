# Growth Lab

AI Agent Team Framework × Build in Public で投資回収（¥610,000目標）するプロジェクト。

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework Core | Claude Code + MCP + YAML (file-based communication) |
| Frontend | Next.js 15 (App Router) + Tailwind CSS v4 + shadcn/ui |
| Backend | Supabase (Auth, DB, Edge Functions) |
| Hosting | Vercel |
| Payment | Stripe |

## Coding Conventions

- TypeScript: `strict: true`, `interface` over `type`, no `any`
- Commits: Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`)
- Components: shadcn/ui ベース、colocate with pages、reuse時のみ `/components` に抽出
- Testing: critical business logic のみ。過剰テスト禁止
- Language: 日本語メイン、技術用語は英語のまま

## Directory Structure

```
growth-lab/
├── CLAUDE.md
├── .agent-team/        # Agent Team 状態管理 (YAML)
├── .claude/            # Claude Code スキル・プロンプト
├── agent-team/         # Framework テンプレート・ロール定義
├── products/           # 構築したプロダクト
├── marketing/          # コンテンツ・LP
├── portfolio/          # ポートフォリオサイト (Next.js)
├── analytics/          # KPI・レポート
└── docs/               # 戦略・ブランドガイド
```

## Key Docs

- `docs/master-plan-v3.md` — マスタープラン
- `docs/strategy.md` — 戦略書
- `.agent-team/status/great-sage.yaml` — 大賢者ステータス
