import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="container px-4 md:px-8 py-24 md:py-32">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
          MCP + tmux Hybrid Architecture
        </div>
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary">Agent Team</span>
            <br />
            Framework
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            $200/月のClaude Maxで動く、AIエージェントチーム。
            <br className="hidden md:block" />
            複数のClaude Codeが並列で自律的にタスクを遂行します。
          </p>
        </div>

        <div className="w-full max-w-2xl rounded-lg border bg-card p-4 font-mono text-sm text-left">
          <div className="text-muted-foreground mb-2">$ ./setup-team.sh dev-team .</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded border border-primary/30 bg-primary/5 p-3">
              <div className="text-primary text-xs mb-1">Lead</div>
              <div className="text-muted-foreground text-xs">Task decomposition...</div>
            </div>
            <div className="rounded border border-green-500/30 bg-green-500/5 p-3">
              <div className="text-green-400 text-xs mb-1">Frontend</div>
              <div className="text-muted-foreground text-xs">Building UI...</div>
            </div>
            <div className="rounded border border-yellow-500/30 bg-yellow-500/5 p-3">
              <div className="text-yellow-400 text-xs mb-1">Backend</div>
              <div className="text-muted-foreground text-xs">Implementing API...</div>
            </div>
            <div className="rounded border border-purple-500/30 bg-purple-500/5 p-3">
              <div className="text-purple-400 text-xs mb-1">Reviewer</div>
              <div className="text-muted-foreground text-xs">Waiting for review...</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              GitHub で見る
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#products">テンプレートを見る</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
