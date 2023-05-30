import icon1 from '../../assets/images/icosDropdown/image 7.png'
import icon2 from '../../assets/images/icosDropdown/image 7-1.png'
import icon3 from '../../assets/images/icosDropdown/image 7-2.png'
import icon4 from '../../assets/images/icosDropdown/image 7-3.png'
import icon5 from '../../assets/images/icosDropdown/image 7-4.png'
import icon6 from '../../assets/images/icosDropdown/image 7-5.png'
import icon7 from '../../assets/images/icosDropdown/image 7-6.png'
import icon8 from '../../assets/images/icosDropdown/image 7-7.png'
import icon9 from '../../assets/images/icosDropdown/image 7-8.png'
import icon10 from '../../assets/images/icosDropdown/image 7-9.png'
import icon11 from '../../assets/images/icosDropdown/image 7-10.png'
import icon12 from '../../assets/images/icosDropdown/image 7-11.png'
import icon13 from '../../assets/images/icosDropdown/image 17.png'
import icon14 from '../../assets/images/icosDropdown/image 17-1.png'
import icon15 from '../../assets/images/icosDropdown/image 17-2.png'
import icon16 from '../../assets/images/icosDropdown/image 17-3.png'
import icon17 from '../../assets/images/icosDropdown/image 17-4.png'

import { StaticImageData } from 'next/image'

type iconsInfos = {
  image: StaticImageData
  name: string
}

export const gamesIconsDropdown: iconsInfos[] = [
  {
    image: icon1,
    name: 'Diablo® II ressurected',
  },
  {
    image: icon2,
    name: 'Overwatch® 2',
  },
  {
    image: icon3,
    name: 'World of Warcraft®',
  },
  {
    image: icon4,
    name: 'Hearthstone®',
  },
  {
    image: icon5,
    name: 'Heroes of the storm®',
  },
  {
    image: icon6,
    name: 'Warcraft® III Reforged',
  },
  {
    image: icon7,
    name: 'Diablo® IV',
  },
  {
    image: icon8,
    name: 'Diablo® Immortal',
  },
  {
    image: icon9,
    name: 'Diablo® III',
  },
  {
    image: icon10,
    name: 'StarCraft® II',
  },
  {
    image: icon11,
    name: 'StarCraft® Remastered',
  },
  {
    image: icon12,
    name: 'Arcade da Blizzard®',
  },
]

export const sportsIconsDropdown: iconsInfos[] = [
  {
    image: icon13,
    name: 'Hearthstone® masters',
  },
  {
    image: icon14,
    name: 'Campeonato Mundial de Arena WoW®',
  },
  {
    image: icon15,
    name: 'StarCraft® II WCS',
  },
  {
    image: icon16,
    name: 'Copa Mundial de Overwatch®',
  },
  {
    image: icon17,
    name: 'Liga de Overwatch®',
  },
]
