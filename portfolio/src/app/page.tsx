import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Products } from '@/components/sections/products'
import { About } from '@/components/sections/about'
import { Progress } from '@/components/sections/progress'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Progress />
        <Products />
        <About />
      </main>
      <Footer />
    </>
  )
}
