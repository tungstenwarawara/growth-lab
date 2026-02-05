import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Cpu, DollarSign, LayoutTemplate } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'チームメタファー',
    description:
      '将軍/足軽ではなく、Director → Lead → Members → Reviewer のフラットなチーム構造。誰でも理解できるプロフェッショナルな組織モデル。',
  },
  {
    icon: Cpu,
    title: 'MCP + tmux ハイブリッド',
    description:
      'MCP で構造化されたツールアクセス、tmux でプロセス並列実行。両方の長所を活かしたハイブリッドアーキテクチャ。',
  },
  {
    icon: DollarSign,
    title: '$200/月で動作設計',
    description:
      'Claude Max の制約内で最大効率。ファイルベースのYAML通信でオーケストレーションのトークン消費はゼロ。イベント駆動で無駄なし。',
  },
  {
    icon: LayoutTemplate,
    title: 'テンプレート駆動',
    description:
      'Dev Team, Content Team, Research Team — 用途別のチーム構成テンプレートですぐに始められる。カスタムチームも簡単に作成可能。',
  },
]

export function Features() {
  return (
    <section id="features" className="container px-4 md:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          既存のマルチエージェントツールとの違い
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
