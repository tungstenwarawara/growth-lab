export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono font-semibold">Agent Team</span>
            <span className="text-sm text-muted-foreground">
              Build in Public since Feb 2026
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter/X
            </a>
            <a
              href="https://zenn.dev/"
              className="hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zenn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
