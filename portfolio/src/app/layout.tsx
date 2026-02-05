import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agent Team Framework — $200/月で動くAIエージェントチーム',
  description: 'MCP + tmux ハイブリッドで複数のClaude Codeが並列自律実行。チームメタファーのマルチエージェントフレームワーク。',
  openGraph: {
    title: 'Agent Team Framework',
    description: 'MCP + tmux ハイブリッドで複数のClaude Codeが並列自律実行。$200/月で動くAIエージェントチーム。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent Team Framework',
    description: 'MCP + tmux ハイブリッドで複数のClaude Codeが並列自律実行。$200/月で動くAIエージェントチーム。',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="dark">
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
