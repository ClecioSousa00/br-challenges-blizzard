import { SvgAllGames } from '../icons/SvgAllGames'
import { SvgBattle } from '../icons/SvgBattle'
import { SvgNitendo } from '../icons/SvgNitendo'
import { SvgPlaystation } from '../icons/SvgPlaystation'
import { SvgXbox } from '../icons/SvgXbox'

export const Main = () => {
  return (
    <main className="px-6 pt-14 md:px-12 md:pt-20 lg:px-28">
      <section className="mb-14 flex items-end justify-between lg:mb-20">
        <span className="hidden self-start text-base font-semibold text-gray-500 lg:block">
          Games
        </span>
        <p className="max-w-[153px] text-[1.75rem] font-bold leading-9 md:text-4xl">
          Jogos exclusivos
        </p>
        <div className="hidden md:flex md:gap-6 ">
          <SvgBattle />
          <SvgNitendo />
          <SvgXbox />
          <SvgPlaystation />
        </div>
        <div className="flex items-center gap-3">
          <SvgAllGames />
          <span className="text-sm font-semibold text-buttonBg md:text-base">
            Ver todos jogos
          </span>
        </div>
      </section>
    </main>
  )
}
