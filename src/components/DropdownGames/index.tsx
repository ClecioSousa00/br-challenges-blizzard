import { gamesIconsDropdown, iconDropdownFooter } from './gamesInfos'

import Image from 'next/image'

export const DropdownGames = () => {
  const showCardsGames = () => {
    return gamesIconsDropdown.map((game, index) => (
      <div
        className="flex w-32 flex-col items-center justify-center"
        key={index}
      >
        <Image src={game.image} alt={game.name} />
        <p className=" text-center text-sm text-gray-500">{game.name}</p>
      </div>
    ))
  }

  const showIcons = () => {
    return iconDropdownFooter.map((icon, index) => (
      <div key={index} className="flex items-center  justify-start gap-2">
        <Image src={icon.image} alt={icon.name} />
        <span className="text-sm">{icon.name}</span>
      </div>
    ))
  }

  return (
    <div className=" absolute left-0 z-20 flex h-[60vh] w-screen flex-col items-center justify-center bg-bgMenu ">
      <div className="mb-3 grid  grid-cols-3 gap-3">{showCardsGames()}</div>
      <div className=" flex flex-wrap justify-between  gap-x-4 gap-y-2 bg-dropDownFooter p-4">
        {showIcons()}
      </div>
    </div>
  )
}
