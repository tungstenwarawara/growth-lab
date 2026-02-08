# Team Lead Memory

## Agent Team Roster

現在のエージェント定義ファイル一覧 (`/.claude/agents/`):

| Agent | File | Model | Context | Role |
|-------|------|-------|---------|------|
| team-lead | team-lead.md | opus | - | タスク分解・アサイン・進捗管理 |
| frontend-member | frontend-member.md | sonnet | fork | UI実装 (Next.js/Tailwind/shadcn) |
| backend-member | backend-member.md | sonnet | fork | API/DB実装 (Supabase/Stripe) |
| reviewer | reviewer.md | haiku | - | コードレビュー (Read-only tools) |
| uiux-designer | uiux-designer.md | sonnet | fork | デザインシステム・a11y・ビジュアル |
| marketing-strategist | marketing-strategist.md | sonnet | fork | コンテンツ戦略・SNS・SEO・KPI分析 |

## Agent Definition Format

- YAML frontmatter: name, description, model, context, tools, mcpServers(optional), memory
- H1 title with role name
- Sections: tech stack table, responsibilities, workflow, status update yaml example, role-specific guidelines, context fork note, memory note
- Status files: `/.agent-team/status/{agent-name}.yaml`

## Patterns & Decisions

- MCP Servers は frontmatter の `mcpServers` フィールドで配列指定
- ステータスファイルのパスは agent 名に合わせる (uiux.yaml, marketing.yaml)
- 全実装エージェントは `context: fork` でメインコンテキスト汚染を防止
- Reviewer のみ haiku モデル + 読み取り専用ツール (コスト最適化)

## Great Sage v2.0 (2026-02-08)

大賢者スキルをオーケストレーション能力で強化:
- `orchestrator.md`: 自律的タスク生成、割り振り、監視、完了確認プロトコル
- `mcp-discovery.md`: MCP 探索、スコアリングマトリクス(100点満点)、統合テスト手順
- `great-sage.yaml`: 大賢者自身のステータスファイル（自己監視用）
- SKILL.md を v2.0 に更新（sub_skills フィールド追加）
- MCP 制約: max 10 servers, 80 tools, $0 paid MCP budget

## Key File Locations

- Skills: `/.claude/skills/great-sage/`
- Status: `/.agent-team/status/`
- Tasks: `/.agent-team/tasks/`
- Learning engine: `/.agent-team/learning/engine/`
- MCP Registry: `/.agent-team/learning/mcp-registry.yaml`

## Revenue

- Target: 610,000 JPY (Month 8)
- Current: 0 JPY
- 5 LP tasks created (001-005), implementation phase started 2026-02-05

## Master Plan v3 (2026-02-08)

Strategy pivot: "Sell first, design second" -- revenue zero for 2+ weeks was critical.

Key changes from v2:
- Team: 4 -> 6 agents (added UI/UX Designer, Marketing Strategist, MCP Explorer)
- Content management: YAML-based registry at `.agent-team/content/registry.yaml`
- MCP priority: Zenn > Twitter > Stripe > note > Figma
- Autonomous orchestration: `orchestrator-state.yaml` for self-monitoring
- Document: `/home/user/growth-lab/docs/master-plan-v3.md`

Critical anti-patterns identified:
- DESIGN_LOOP_TRAP: 50+ files created, only LP works. Always demand runtime proof.
- UNTESTED_AGENT: Definition file != working agent. Require first-task with definition.
- REVENUE_BLIND_SPOT: SaaS Starter Kit ready but never listed on BOOTH.

Immediate actions (Week 3):
1. BOOTH listing for SaaS Starter Kit (Director action needed)
2. Agent Team template packaging for Gumroad
3. Zenn article #2 (revenue-linked content)
4. Content registry initialization -- DONE (2026-02-08)

## Content Management System (2026-02-08)

Content registry and pipeline fully implemented:
- `/.agent-team/content/registry.yaml` - Master registry with article schema
- `/.agent-team/content/content-pipeline.yaml` - 7-stage pipeline (idea->analyzed)
- `/.agent-team/content/backlog.yaml` - 8 initial items (Zenn:3, note:2, Twitter:3)
- `/.claude/skills/great-sage/content-manager.md` - Content management sub-skill
- SKILL.md updated to v2.0 with content-manager.md reference

Backlog priorities: zenn-001 (MCP+tmux tutorial, outline stage) > zenn-002 ($200/mo) > zenn-book-001 (paid guide)
Existing draft: `/marketing/zenn-articles/00-project-journey-draft.md` (registered in registry)
