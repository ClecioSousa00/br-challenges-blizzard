import diabloIVBanner from '../../assets/images/banner-hero/games/diablo-bg-mobile.png'
import hearthstoneBanner from '../../assets/images/banner-hero/games/hearthstone-bg-mobile.png'
import wowBanner from '../../assets/images/banner-hero/games/wow-bg-mobile.png'
import diabloBanner from '../../assets/images/banner-hero/games/diablo-I-mobile.png'
import starCraftBanner from '../../assets/images/banner-hero/games/star-crafter.png'

import iconDiabloIV from '../../assets/images/banner-hero/games/diablo-logo.png'
import iconHearthStone from '../../assets/images/banner-hero/games/hearthstone-logo.png'
import iconWow from '../../assets/images/banner-hero/games/wow-logo.png'
import iconDiablo from '../../assets/images/banner-hero/games/di-logo-960 (1).png'
import iconStarCraft from '../../assets/images/banner-hero/games/StarCraft.png'

import diabloIVImgGif from '../../assets/images/banner-hero/games/diablo-animation-cover.png'
import hearthStoneImgGif from '../../assets/images/banner-hero/games/hearthstone-animation-cover.png'
import WowImgGif from '../../assets/images/banner-hero/games/wow-banner-gif.png'
import diabloIImgGif from '../../assets/images/banner-hero/games/diablo-I-banner-gif.png'
import starCraftImgGif from '../../assets/images/banner-hero/games/starCraft-banner-gif.png'

import diabloIVGif from '../../assets/images/banner-hero/games/diablo-animation.gif'
import hearthStoneGif from '../../assets/images/banner-hero/games/hearthstone-animation.gif'
import WowGif from '../../assets/images/banner-hero/games/wow-animation.gif'
import diabloIGif from '../../assets/images/banner-hero/games/diablo-I-animation.gif'
import starCraftGif from '../../assets/images/banner-hero/games/starCraft-animation.gif'

import { StaticImageData } from 'next/image'

type description = {
  src: StaticImageData
  srcSet: string
  alt: string
  title: string
  subTitle: string
  textButton: string
  icon: StaticImageData
  buttonIcon: boolean
  BgGif: StaticImageData
  gif: StaticImageData
}

export const descriptionSlide: description[] = [
  {
    src: diabloIVBanner,
    srcSet: '/diablo-bg.png',
    alt: 'Diablo IV',
    title: 'Retorne à escuridão com o game Diablo IV',
    subTitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    textButton: 'Jogue agora',
    icon: iconDiabloIV,
    buttonIcon: false,
    BgGif: diabloIVImgGif,
    gif: diabloIVGif,
  },
  {
    src: hearthstoneBanner,
    srcSet: '/hearthstone-bg.png',
    alt: 'HearthStone',
    title: 'Novo pacote de expansão de Hearthstone',
    subTitle: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
    textButton: 'Reserve agora na pré-venda',
    icon: iconHearthStone,
    buttonIcon: true,
    BgGif: hearthStoneImgGif,
    gif: hearthStoneGif,
  },
  {
    src: wowBanner,
    srcSet: '/wow-bg.png',
    alt: 'World Warcraft',
    title: 'Desbrave as Terras Sombrias em Shadowlands! ',
    subTitle: 'O que jaz além do mundo que você conhece?',
    textButton: 'Reserve agora na pré-venda',
    icon: iconWow,
    buttonIcon: true,
    BgGif: WowImgGif,
    gif: WowGif,
  },
  {
    src: diabloBanner,
    srcSet: '/diablo-I-desktop.png',
    alt: 'Diablo I',
    title: 'Desbrave a escuridão e desafie as forças demoníacas',
    subTitle:
      'Entre em um mundo sombrio de terror e coragem contra o mal supremo',
    textButton: 'Jogar agora',
    icon: iconDiablo,
    buttonIcon: false,
    BgGif: diabloIImgGif,
    gif: diabloIGif,
  },
  {
    src: starCraftBanner,
    srcSet: '/star-craft-desktop.jpg',
    alt: 'World Warcraft',
    title: 'Embarque em uma batalha intergaláctica de proporções épicas',
    subTitle: 'Lidere as facções em uma luta pelo espaço sideral',
    textButton: 'Jogar agora',
    icon: iconStarCraft,
    buttonIcon: false,
    BgGif: starCraftImgGif,
    gif: starCraftGif,
  },
]
