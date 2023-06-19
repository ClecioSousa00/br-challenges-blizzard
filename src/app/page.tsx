import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import SectionGames from '@/components/SectionGames'
import { SectionInfos } from '@/components/SectionInfos'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="px-6 pt-14 md:px-12 md:pt-20 lg:px-28">
        <SectionInfos />
        {/* @ts-expect-error Server Component */}
        <SectionGames />
      </main>
    </>
  )
}
