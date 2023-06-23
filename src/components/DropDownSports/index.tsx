import { sportsIconsDropdown } from '../DropdownGames/gamesInfos'
import Image from 'next/image'
import icontournamnet from '../../assets/images/icosDropdown/icon-torneio.svg'
import { motion } from 'framer-motion'

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
    <motion.div
      className=" absolute left-0 z-20 flex h-[80vh] w-screen flex-col items-center bg-bgMenu pt-2 md:justify-center lg:fixed lg:top-0 lg:-z-50 lg:h-[75vh] lg:justify-end "
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-3 grid grid-cols-3 gap-3 md:grid-cols-5 lg:flex-1  lg:gap-x-16 lg:self-center">
        {showCardsGames()}
      </div>
      <div className=" flex w-full items-center justify-center gap-2 bg-dropDownFooter  p-4 px-1">
        <Image src={icontournamnet} alt="Icone de taça" />
        <p className="text-sm">Torneios da comunidade</p>
      </div>
    </motion.div>
  )
}
