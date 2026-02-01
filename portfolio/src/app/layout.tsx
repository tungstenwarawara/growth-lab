import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Growth Lab | 藤原由大',
  description: 'Claude Codeで個人開発を加速。Build in Publicで投資回収チャレンジ中。',
  openGraph: {
    title: 'Growth Lab | 藤原由大',
    description: 'Claude Codeで個人開発を加速。Build in Publicで投資回収チャレンジ中。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Growth Lab | 藤原由大',
    description: 'Claude Codeで個人開発を加速。Build in Publicで投資回収チャレンジ中。',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
