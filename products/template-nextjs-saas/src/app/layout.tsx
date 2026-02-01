import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Your SaaS App',
  description: 'Build your SaaS with this starter kit',
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
