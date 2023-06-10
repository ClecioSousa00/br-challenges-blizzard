import Image, { StaticImageData } from 'next/image'
import { FiUser } from 'react-icons/fi'
import { ButtonHero } from '../ButtonHero'

type infosSlideProps = {
  title: string
  subTitle: string
  textButton: string
  icon: StaticImageData
  buttonIcon: boolean
}

export const InfosSlide = ({
  title,
  subTitle,
  textButton,
  icon,
  buttonIcon,
}: infosSlideProps) => {
  return (
    <div className="absolute top-0 z-40  flex h-full w-full items-center px-5">
      <div className="max-w-[18rem]">
        <h1 className="z-[80] text-[2.5rem] font-bold leading-10">{title}</h1>
        <p className="mb-8 mt-4 text-lg font-normal leading-5">{subTitle}</p>
        <ButtonHero className="flex items-center gap-2">
          {buttonIcon && <FiUser size={18} />}
          {textButton}
        </ButtonHero>
      </div>
      <div className="hidden">
        <Image src={icon} alt="Logo Diablo IV" />
        <div>
          <p>Assista ao trailer</p>
          <Image src={icon} alt="Logo Diablo IV" />
        </div>
      </div>
    </div>
  )
}
