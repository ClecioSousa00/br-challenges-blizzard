import { sportsIconsDropdown } from '../DropdownGames/gamesInfos'
import Image from 'next/image'

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
    <div className=" absolute left-0 z-20 flex h-[60vh] w-screen items-center justify-center bg-bgMenu ">
      <div className="grid grid-cols-3  gap-3">{showCardsGames()}</div>
    </div>
  )
}
