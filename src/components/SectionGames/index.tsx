import { axiosClient } from '@/services/axiosClient'
import Image, { StaticImageData } from 'next/image'
import LogoBlizzard from '../../assets/images/logo-blizzard.png'
import { SvgAllGames } from '../icons/SvgAllGames'

type gamePros = {
  name: string
  category: string
  image: StaticImageData
  logo: StaticImageData
}

const getGames = async () => {
  const response = await axiosClient.get<gamePros[]>('')
  return response.data
}

const showGamesCard = async () => {
  const games = await getGames()
  return games.map((game, index) => {
    return (
      <div className="" key={index}>
        <div
          className="relative h-[13.375rem] w-[9.625rem] cursor-pointer overflow-hidden rounded object-cover  object-center transition-all hover:-translate-y-6 
          md:h-[17.375rem] md:w-[12.75rem] lg:h-[24rem] lg:w-[17.5rem]"
        >
          <Image
            className="w-full  transition-all duration-500 hover:scale-110"
            src={game.image}
            width={1000}
            height={1000}
            unoptimized={true}
            quality={75} // {number 1-100}
            alt={game.name}
          />
          <div className="absolute bottom-5  w-full">
            <Image
              className="mx-auto md:h-[4.375rem] md:w-[6.75rem] lg:h-24 lg:w-[9.25rem]"
              src={game.logo}
              width={82}
              height={54}
              alt={game.name}
            />
          </div>
        </div>
        <div className="hidden md:mt-4 md:block">
          <p className="text-base font-semibold ">{game.name}</p>
          <span className="text-sm  text-gray-400">{game.category}</span>
        </div>
      </div>
    )
  })
}

export default async function SectionGames() {
  return (
    <section className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-3 md:gap-x-8 md:gap-y-10 lg:grid-cols-4 lg:gap-y-12">
      {await showGamesCard()}
      <div
        className="flex h-[13.375rem] w-[9.625rem] cursor-pointer flex-col items-center justify-center gap-y-4 rounded border-2
       border-borderCard transition-all hover:border-white md:h-[17.375rem] md:w-[12.75rem] md:gap-y-8 lg:h-[24rem] lg:w-[17.5rem]"
      >
        <Image
          className="w-16 md:w-28"
          src={LogoBlizzard}
          alt="Logo da Blizzard"
        />
        <div className="flex items-center gap-3">
          <SvgAllGames fill="white" />
          <p className="text-sm md:text-base">Ver todos jogos</p>
        </div>
      </div>
    </section>
  )
}
