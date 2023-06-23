'use client'
import { SvgAllGames } from '../icons/SvgAllGames'
import { SvgBattle } from '../icons/SvgBattle'
import { SvgNitendo } from '../icons/SvgNitendo'
import { SvgPlaystation } from '../icons/SvgPlaystation'
import { SvgXbox } from '../icons/SvgXbox'
import { motion } from 'framer-motion'

export const SectionInfos = () => {
  return (
    <motion.section
      className="mb-14 flex items-end justify-between lg:mb-20"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      <span className="hidden cursor-pointer self-start text-base font-semibold text-gray-500 transition-all hover:text-gray-200 lg:block">
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
      <div className="flex items-center gap-3 transition-all hover:scale-110">
        <SvgAllGames fill="#61CDFF" />
        <span className="cursor-pointer text-sm font-semibold text-buttonBg  md:text-base">
          Ver todos jogos
        </span>
      </div>
    </motion.section>
  )
}
