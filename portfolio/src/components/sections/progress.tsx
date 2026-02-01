import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const INVESTMENT_TARGET = 610000
const CURRENT_REVENUE = 0

export function Progress() {
  const progressPercent = Math.min(
    (CURRENT_REVENUE / INVESTMENT_TARGET) * 100,
    100
  )

  return (
    <section className="container px-4 md:px-8 py-16">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Investment Recovery Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between text-sm">
            <span>¥{CURRENT_REVENUE.toLocaleString()}</span>
            <span className="text-muted-foreground">
              目標: ¥{INVESTMENT_TARGET.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-4">
            <div
              className="bg-primary h-4 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <p className="text-center text-2xl font-bold">
            {progressPercent.toFixed(1)}% 達成
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Products Launched</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="text-sm text-muted-foreground">Paid Users</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
