import Image from 'next/image'
import logoBlizzard from '../../assets/images/logo-blizzard.png'
import { NavBar } from '../NavBar'

export const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <Image src={logoBlizzard} width={70} height={32} alt="Logo da Blizzard" />
      <NavBar />
    </header>
  )
}