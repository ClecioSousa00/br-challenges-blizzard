import Image, { StaticImageData } from 'next/image'

type infosSlideProps = {
  title: string
  subTitle: string
  textButton: string
  icon: StaticImageData
}

export const InfosSlide = ({
  title,
  subTitle,
  textButton,
  icon,
}: infosSlideProps) => {
  return (
    <div className="absolute top-0 z-[9] flex h-full w-full items-center px-5">
      <div className="max-w-[18rem]">
        <h1 className="text-[2.5rem] font-bold leading-10">{title}</h1>
        <p className="mb-8 mt-4 text-lg font-normal leading-4">{subTitle}</p>
        <button className="rounded bg-buttonBg px-8 py-[0.875rem] text-base font-semibold">
          {textButton}
        </button>
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
