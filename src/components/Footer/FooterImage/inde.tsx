'use client'
import { motion } from 'framer-motion'

import app from '../../../assets/images/footer/app.png'
import appMini from '../../../assets/images/footer/appMini.png'
import Image from 'next/image'

export const FooterImage = () => {
  return (
    <>
      <motion.div
        className=" mb-8 w-[530px] md:w-[900px]"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Image
          className="w-full"
          src={app}
          alt="Imagem da plataforma blizzard"
        />
      </motion.div>
      <motion.div
        className=" absolute -bottom-4 -right-8 h-[170px] w-[276px] md:-right-[280px] md:h-[306px]  md:w-[576px] lg:-bottom-1 lg:-right-28"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Image
          className="w-full"
          src={appMini}
          alt="imagem de word of warcraft da plataforma blizzard"
        />
      </motion.div>
    </>
  )
}
