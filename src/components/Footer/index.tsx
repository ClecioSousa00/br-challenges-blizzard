import Image from 'next/image'

import logoBattleNet from '../../assets/images/logo-battle-net.png'

import { SvgPage } from '../icons/SvgPage'
import { SvgConect } from '../icons/SvgConect'
import { SvgBuy } from '../icons/SvgBuy'
import { ButtonHero } from '../ButtonHero'
import { SvgWin } from '../icons/SvgWin'
import { SvgMobile } from '../icons/SvgMobile'
import { IconsFooter } from '../IconsFooter'
import { FooterImage } from './FooterImage/inde'

export const Footer = () => {
  return (
    <footer className="mb-7 w-full bg-bgFooter bg-center bg-no-repeat object-cover py-16 md:flex md:items-center lg:gap-8">
      <div className="pl-6  md:pl-12 lg:pl-28">
        <Image src={logoBattleNet} alt="Logo Battlenet" />
        <h3 className="mb-8 mt-8 max-w-[204px] text-[1.75rem] font-bold">
          Baixe agora o battle.net
        </h3>
        <div className="mb-10 space-y-6">
          <IconsFooter text="Seus jogos em um só lugar">
            <SvgPage />
          </IconsFooter>
          <IconsFooter text="Conecte-se aos seus amigos">
            <SvgConect />
          </IconsFooter>
          <IconsFooter text="Compre jogos e items digitais">
            <SvgBuy />
          </IconsFooter>
        </div>
        <ButtonHero className="flex gap-2">
          <SvgWin />
          <span>Baixe para o Windows</span>
        </ButtonHero>
        <div className="mt-10 flex items-center gap-4">
          <SvgMobile />
          <p className="max-w-[196px]  text-sm font-semibold leading-5 tracking-wider">
            Também disponível como <u>aplicativo móvel</u>
          </p>
        </div>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <FooterImage />
      </div>
    </footer>
  )
}
