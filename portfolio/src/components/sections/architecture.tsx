export function Architecture() {
  return (
    <section id="architecture" className="container px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Architecture</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          MCP + tmux ハイブリッドで、ツール統合とプロセス並列実行を両立
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">チーム構造</h3>
            <div className="rounded-lg border bg-card p-4 font-mono text-sm space-y-2">
              <div className="text-muted-foreground">Director（人間）</div>
              <div className="pl-4 border-l-2 border-primary/30 space-y-2">
                <div className="text-primary">Team Lead</div>
                <div className="pl-4 border-l-2 border-green-500/30 space-y-1">
                  <div className="text-green-400">Member A</div>
                  <div className="text-yellow-400">Member B</div>
                </div>
                <div className="text-purple-400">Reviewer</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">通信プロトコル</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="rounded bg-primary/10 px-2 py-1 text-xs font-mono text-primary shrink-0">tasks/</div>
                <p className="text-sm text-muted-foreground">Lead がタスクを YAML で定義、Members が受け取り実行</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded bg-green-500/10 px-2 py-1 text-xs font-mono text-green-400 shrink-0">status/</div>
                <p className="text-sm text-muted-foreground">各エージェントが自分の状態を更新、Lead が監視</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded bg-purple-500/10 px-2 py-1 text-xs font-mono text-purple-400 shrink-0">messages/</div>
                <p className="text-sm text-muted-foreground">エージェント間のフィードバック・質問・報告</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">team.yaml</h3>
          <div className="rounded-lg border bg-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 border-b bg-muted/50">
              <div className="h-3 w-3 rounded-full bg-red-500/50" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
              <div className="h-3 w-3 rounded-full bg-green-500/50" />
              <span className="text-xs text-muted-foreground ml-2">team.yaml</span>
            </div>
            <pre className="p-4 text-sm font-mono overflow-x-auto"><code className="text-muted-foreground">{`team:
  name: dev-team
  max_concurrent: 3

  lead:
    role: architect
    instructions: roles/lead.md
    mcp_servers:
      - filesystem
      - git
      - memory

  members:
    - name: frontend
      instructions: roles/frontend.md
      mcp_servers:
        - filesystem
        - web-fetch

    - name: backend
      instructions: roles/backend.md
      mcp_servers:
        - filesystem
        - database

  reviewer:
    role: code-reviewer
    instructions: roles/reviewer.md`}</code></pre>
          </div>

          <div className="mt-6 rounded-lg border bg-muted/30 p-4">
            <h4 className="text-sm font-semibold mb-2">コスト最適化</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>YAML通信 = トークン消費ゼロ</li>
              <li>同時稼働 2-3 エージェント</li>
              <li>イベント駆動（ポーリングなし）</li>
              <li>タスク完了後にエージェント停止</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
