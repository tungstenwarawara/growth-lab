import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="container px-4 md:px-8 py-24 md:py-32">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Claude Codeで
            <br />
            <span className="text-primary">個人開発を加速</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¥610,000の投資回収を目指して、Build in Publicで開発過程を全公開。
            Micro-SaaSとテンプレート販売で収益化に挑戦中。
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <a href="#products">Products を見る</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              進捗をフォロー
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
