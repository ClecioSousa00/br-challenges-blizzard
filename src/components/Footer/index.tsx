import Image from 'next/image'

import logoBattleNet from '../../assets/images/logo-battle-net.png'
import { SvgPage } from '../icons/SvgPage'
import { SvgConect } from '../icons/SvgConect'
import { SvgBuy } from '../icons/SvgBuy'

export const Footer = () => {
  return (
    <footer className="w-full bg-bgFooter bg-center bg-no-repeat px-6 pt-16">
      <Image src={logoBattleNet} alt="Logo Battlenet" />
      <h2 className="mb-8 mt-8 max-w-[204px] text-[1.75rem] font-bold">
        Baixe agora o battle.net
      </h2>
      <div className="mb-10">
        <div className="flex gap-4">
          <SvgPage />
          <p className="text-lg font-normal text-gray-400">
            Seus jogos em um só lugar
          </p>
        </div>
        <div className="my-6 flex gap-4">
          <SvgConect />
          <p className="text-lg font-normal text-gray-400">
            Conecte-se aos seus amigos
          </p>
        </div>
        <div className="flex gap-4">
          <SvgBuy />
          <p className="text-lg font-normal text-gray-400">
            Compre jogos e items digitais
          </p>
        </div>
      </div>
    </footer>
  )
}
