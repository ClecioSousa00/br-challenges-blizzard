import Image, { StaticImageData } from 'next/image'
import { FiUser } from 'react-icons/fi'
import { ButtonHero } from '../ButtonHero'

import { useState } from 'react'

import buttonPlay from '../../assets/images/banner-hero/games/buttonPlay.png'
import { cn } from '@/app/lib/utils'

type infosSlideProps = {
  title: string
  subTitle: string
  textButton: string
  icon: StaticImageData
  buttonIcon: boolean
  imgGif: StaticImageData
  gif: StaticImageData
}

export const InfosSlide = ({
  title,
  subTitle,
  textButton,
  icon,
  buttonIcon,
  imgGif,
  gif,
}: infosSlideProps) => {
  const [showGif, setShowGif] = useState(false)

  const openGif = () => {
    setShowGif(!showGif)
  }

  return (
    <div className="absolute top-0 z-30  flex h-full w-full items-center px-5 md:justify-between lg:justify-end lg:gap-44 lg:px-24 2xl:justify-around">
      <div className="max-w-[18rem] md:max-w-[35.125rem]">
        <h1 className=" text-[2.5rem] font-bold leading-10 md:text-6xl">
          {title}
        </h1>
        <p className="mb-8 mt-4 text-lg font-normal leading-5 md:text-lg">
          {subTitle}
        </p>
        <ButtonHero className="flex items-center gap-2">
          {buttonIcon && <FiUser size={18} />}
          {textButton}
        </ButtonHero>
      </div>
      <div className="hidden md:flex md:flex-col md:justify-between md:gap-14">
        <Image src={icon} width={288} height={200} alt="Logo Diablo IV" />
        <div className="h-[158px] w-[280px]">
          <p className="text-right">Assista ao trailer</p>
          <div
            className="relative h-full w-full cursor-pointer"
            onClick={openGif}
          >
            <div className="absolute  flex h-full w-full items-center justify-center overflow-hidden">
              <Image
                className={cn(showGif && 'mt-72 transition-all duration-500')}
                src={buttonPlay}
                alt="botão de play"
              />
            </div>
            <Image
              className="h-full w-full object-cover object-center "
              src={showGif ? gif : imgGif}
              alt="diablo"
              priority={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
