import { sportsIconsDropdown } from '../DropdownGames/gamesInfos'
import Image from 'next/image'
import icontournamnet from '../../assets/images/icosDropdown/icon-torneio.svg'

export const DropDownSports = () => {
  const showCardsGames = () => {
    return sportsIconsDropdown.map((game, index) => (
      <div
        className="flex w-32 flex-col items-center justify-center"
        key={index}
      >
        <Image src={game.image} alt={game.name} />
        <p className=" text-center text-sm text-gray-500">{game.name}</p>
      </div>
    ))
  }

  return (
    <div className=" absolute left-0 z-20 flex h-[50vh] w-screen flex-col items-center justify-center bg-bgMenu ">
      <div className="mb-3 grid grid-cols-3  gap-3">{showCardsGames()}</div>
      <div className=" flex w-full items-center justify-center gap-2  bg-dropDownFooter p-4">
        <Image src={icontournamnet} alt="Icone de taça" />
        <p className="text-sm">Torneios da comunidade</p>
      </div>
    </div>
  )
}
