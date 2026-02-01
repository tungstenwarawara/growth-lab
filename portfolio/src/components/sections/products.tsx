import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const products = [
  {
    title: 'Next.js SaaS Starter Kit',
    description:
      'Supabase認証、Stripe決済、ダッシュボードを含むSaaSテンプレート。すぐに開発を始められます。',
    price: '¥5,000',
    status: 'coming-soon',
    link: null,
  },
  {
    title: 'Claude Code Prompt Pack',
    description:
      '個人開発を加速する実践的なプロンプト集。新規プロダクト開発から記事執筆まで。',
    price: '¥1,500',
    status: 'coming-soon',
    link: null,
  },
  {
    title: 'OGP Generator',
    description:
      'ブログやWebサイト用のOGP画像を簡単に生成。テンプレートから選んでカスタマイズ。',
    price: 'Freemium',
    status: 'planned',
    link: null,
  },
]

export function Products() {
  return (
    <section id="products" className="container px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Products</h2>
        <p className="text-muted-foreground">
          Claude Codeで開発したプロダクト
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((product) => (
          <Card key={product.title} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{product.title}</CardTitle>
                <span className="text-sm font-medium text-primary">
                  {product.price}
                </span>
              </div>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              {product.status === 'coming-soon' && (
                <Button className="w-full" disabled>
                  Coming Soon
                </Button>
              )}
              {product.status === 'planned' && (
                <Button className="w-full" variant="outline" disabled>
                  開発予定
                </Button>
              )}
              {product.status === 'available' && product.link && (
                <Button className="w-full" asChild>
                  <a href={product.link}>購入する</a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
