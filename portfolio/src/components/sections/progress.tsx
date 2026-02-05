import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const INVESTMENT_TARGET = 610000
const CURRENT_REVENUE = 0

export function Progress() {
  const progressPercent = Math.min(
    (CURRENT_REVENUE / INVESTMENT_TARGET) * 100,
    100
  )

  return (
    <section className="container px-4 md:px-8 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Build in Public — 投資回収チャレンジ
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground">
              MacBook + Claude Max $200/月 = ¥610,000 の投資を Agent Team で回収中
            </p>
            <div className="flex justify-between text-sm">
              <span>¥{CURRENT_REVENUE.toLocaleString()}</span>
              <span className="text-muted-foreground">
                目標: ¥{INVESTMENT_TARGET.toLocaleString()}
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-4">
              <div
                className="bg-primary h-4 rounded-full transition-all duration-500"
                style={{ width: `${Math.max(progressPercent, 1)}%` }}
              />
            </div>
            <p className="text-center text-2xl font-bold">
              {progressPercent.toFixed(1)}%
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">1</p>
                <p className="text-xs text-muted-foreground">Framework</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">4</p>
                <p className="text-xs text-muted-foreground">Agent Roles</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">0</p>
                <p className="text-xs text-muted-foreground">Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            開発過程・数字を全て公開しています
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                Twitter/X
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://zenn.dev/" target="_blank" rel="noopener noreferrer">
                Zenn
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
