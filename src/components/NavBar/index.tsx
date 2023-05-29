'use client'
import { useState } from 'react'
import { MenuToogle } from '../MenuToogle'
import { cn } from '@/app/lib/utils'
import { BuutonAccount } from '../ButtonAccount'
import { ButtonLogin } from '../ButtonLogin'
import { ButtonOptions } from '../ButtonOptions'

export const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [optionIsOpenGame, setOptionIsOpenGame] = useState(false)
  const [optionIsOpenSports, setOptionIsOpenSports] = useState(false)

  const handleMenu = (): void => {
    setMenuIsOpen(!menuIsOpen)
  }

  const handleOptionsGame = () => {
    setOptionIsOpenGame(!optionIsOpenGame)
  }
  const handleOptionsSports = () => {
    setOptionIsOpenSports(!optionIsOpenSports)
  }

  return (
    <>
      <nav
        className={cn(
          'w-0 sm:absolute sm:right-0 sm:top-0 sm:z-10 sm:h-screen sm:overflow-hidden sm:bg-bgMenu sm:transition-all',
          menuIsOpen && 'w-[70vw]',
        )}
      >
        <ul className="flex  sm:mt-14 sm:flex-col sm:items-center  sm:gap-5">
          <li>
            <ButtonOptions
              text="Jogos"
              handleOptions={handleOptionsGame}
              optionIsOpen={optionIsOpenGame}
            />
          </li>
          <li>
            <ButtonOptions
              text="Esportes"
              handleOptions={handleOptionsSports}
              optionIsOpen={optionIsOpenSports}
            />
          </li>
          <li className="">Loja</li>
          <li className="">Notícias</li>
          <li className="">Suporte</li>
        </ul>
        <div className="mt-8 flex justify-center space-x-2">
          <BuutonAccount />
          <ButtonLogin />
        </div>
      </nav>
      <MenuToogle handleMenu={handleMenu} menuIsOpen={menuIsOpen} />
    </>
  )
}
