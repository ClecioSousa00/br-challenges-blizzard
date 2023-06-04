import Image from 'next/image'
import logoBlizzard from '../../assets/images/logo-blizzard.png'
import { NavBar } from '../NavBar'
import { HeaderBar } from '../HeaderBar'

export const Header = () => {
  return (
    <div className="top fixed z-10 w-full">
      <header className="relative flex items-center justify-between p-4 md:px-11 md:py-7">
        <Image
          className="w-[5.5rem] lg:z-50"
          src={logoBlizzard}
          width={70}
          height={32}
          alt="Logo da Blizzard"
        />
        <NavBar />
      </header>
      <HeaderBar />
    </div>
  )
}
