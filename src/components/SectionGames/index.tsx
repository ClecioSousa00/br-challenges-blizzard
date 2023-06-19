import { axiosClient } from '@/services/axiosClient'
import Image, { StaticImageData } from 'next/image'
import LogoBlizzard from '../../assets/images/logo-blizzard.png'

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
      <div className="h-[13.375rem] w-[9.625rem]" key={index}>
        <div className="relative overflow-hidden  rounded object-cover object-center">
          <Image
            src={game.image}
            width={154}
            height={214}
            unoptimized={true}
            quality={75} // {number 1-100}
            alt={game.name}
          />
          <div className="absolute bottom-5  w-full">
            <Image
              className="mx-auto"
              src={game.logo}
              width={82}
              height={54}
              alt={game.name}
            />
          </div>
        </div>
        <p className="hidden">{game.name}</p>
        <span className="hidden">{game.category}</span>
      </div>
    )
  })
}

export default async function SectionGames() {
  return (
    <section className="grid grid-cols-2 gap-x-4 gap-y-6">
      {await showGamesCard()}
      <div className="flex h-[13.375rem] w-[9.625rem] flex-col items-center justify-center gap-y-4 rounded border-2 border-gray-600">
        <Image src={LogoBlizzard} alt="Logo da Blizzard" />
        <p>Ver todos jogos</p>
      </div>
    </section>
  )
}
