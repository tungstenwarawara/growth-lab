export function About() {
  return (
    <section id="about" className="container px-4 md:px-8 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About</h2>
        <div className="space-y-6 text-left">
          <p className="text-lg">
            会社員をしながら個人開発で収益化を目指すエンジニアです。
          </p>
          <p className="text-muted-foreground">
            MacBook（¥250,000）と Claude Max Plan（$200/月）への投資を、
            個人開発の収益で回収するチャレンジを実施中。
            開発過程と数字を全て公開する「Build in Public」スタイルで発信しています。
          </p>
          <div className="pt-4">
            <h3 className="font-semibold mb-2">使用技術</h3>
            <p className="text-muted-foreground">
              Next.js / TypeScript / Tailwind CSS / Supabase / Stripe / Vercel
            </p>
          </div>
          <div className="pt-4">
            <h3 className="font-semibold mb-2">リンク</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://twitter.com/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter/X
                </a>
                {' '}— 毎日の開発ログ
              </li>
              <li>
                <a
                  href="https://zenn.dev/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zenn
                </a>
                {' '}— 技術記事
              </li>
              <li>
                <a
                  href="https://github.com/"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {' '}— コード
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
