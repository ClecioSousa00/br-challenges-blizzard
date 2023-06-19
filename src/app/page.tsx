import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import SectionGames from '@/components/SectionGames'
import { SectionInfos } from '@/components/SectionInfos'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="mb-[4.375rem] px-6 pt-14 md:mb-[5.5rem] md:px-12 md:pt-20 lg:mb-28 lg:px-28">
        <SectionInfos />
        {/* @ts-expect-error Server Component */}
        <SectionGames />
      </main>
      <Footer />
    </>
  )
}
