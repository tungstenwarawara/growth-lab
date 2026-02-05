import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Product {
  title: string
  description: string
  price: string
  status: 'available' | 'coming-soon' | 'planned'
  link: string | null
}

const products: Product[] = [
  {
    title: 'Dev Team テンプレート',
    description:
      'フルスタック開発チーム。Lead + Frontend + Backend + Reviewer の4ロール構成。team.yaml、ロール定義、セットアップスクリプト一式。',
    price: '¥5,000',
    status: 'coming-soon',
    link: null,
  },
  {
    title: 'Content Team テンプレート',
    description:
      '技術コンテンツ制作チーム。Editor + Writer + SEO Analyst + Fact Checker。Zenn記事やブログの効率的な制作に。',
    price: '¥3,000',
    status: 'planned',
    link: null,
  },
  {
    title: 'テンプレートバンドル',
    description:
      'Dev Team + Content Team + Research Team + Launch Team の全テンプレートをセットで。個別購入より40%お得。',
    price: '¥12,000',
    status: 'planned',
    link: null,
  },
  {
    title: 'Zenn Book',
    description:
      '「Claude Code Agent Team 実践ガイド」— MCP + tmux ハイブリッドでエージェントチームを構築する完全ガイド。$200/月で始める方法。',
    price: '¥1,500',
    status: 'coming-soon',
    link: null,
  },
]

export function Products() {
  return (
    <section id="products" className="container px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Products</h2>
        <p className="text-muted-foreground">
          Agent Team Framework を活用するためのテンプレートとガイド
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                  準備中
                </Button>
              )}
              {product.status === 'available' && product.link && (
                <Button className="w-full" asChild>
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    購入する
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
