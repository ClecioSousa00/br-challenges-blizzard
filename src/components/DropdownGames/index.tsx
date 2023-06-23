import { gamesIconsDropdown, iconDropdownFooter } from './gamesInfos'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
    <motion.div
      className=" absolute left-0 z-20 flex h-screen w-screen flex-col items-center bg-bgMenu lg:fixed lg:top-0 lg:-z-50 lg:h-[75vh] lg:justify-end"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-3 grid grid-cols-3 gap-3 md:grid-cols-4  lg:mb-9 lg:grid-cols-6 lg:gap-12  2xl:mb-24">
        {showCardsGames()}
      </div>
      <div className=" flex w-full flex-wrap justify-between gap-x-4 gap-y-2 bg-dropDownFooter p-4 lg:justify-center lg:gap-x-10 lg:py-6">
        {showIcons()}
      </div>
    </motion.div>
  )
}
