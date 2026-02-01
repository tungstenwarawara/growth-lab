import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Growth Lab</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="#products"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Products
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Button size="sm" asChild>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              Follow
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
