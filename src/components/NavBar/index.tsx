'use client'
import { useState } from 'react'
import { MenuToogle } from '../MenuToogle'
import { cn } from '@/app/lib/utils'
import { BuutonAccount } from '../ButtonAccount'
import { ButtonLogin } from '../ButtonLogin'
import { ButtonOptions } from '../ButtonOptions'
import { Modal } from '../Modal'
import { useModal } from '@/Hooks/useModal'
import { useOpenOptions } from '@/Hooks/useOpenOptions'
import { DropdownGames } from '../DropdownGames'
import { DropDownSports } from '../DropDownSports'

export const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { openModal, showModal } = useModal()
  const {
    optionIsOpenGame,
    optionIsOpenSports,
    handleOptionsGame,
    handleOptionsSports,
  } = useOpenOptions()

  const handleMenu = (): void => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <>
      <nav
        className={cn(
          'absolute right-0 top-0 z-10 h-screen w-0 overflow-hidden bg-bgMenu transition-all md:top-20 lg:static lg:h-auto lg:w-auto lg:bg-none ',
          menuIsOpen && 'w-screen',
        )}
      >
        <ul className="relative mt-14 flex flex-col items-center gap-5  lg:mt-0 lg:flex-row">
          <li>
            <ButtonOptions
              text="Jogos"
              handleOptions={handleOptionsGame}
              optionIsOpen={optionIsOpenGame}
            />
            {optionIsOpenGame && <DropdownGames />}
          </li>
          <li>
            <ButtonOptions
              text="Esportes"
              handleOptions={handleOptionsSports}
              optionIsOpen={optionIsOpenSports}
            />
            {optionIsOpenSports && <DropDownSports />}
          </li>
          <li className="cursor-pointer ">Loja</li>
          <li className="cursor-pointer ">Notícias</li>
          <li className="cursor-pointer ">Suporte</li>
        </ul>
        <div className="mt-8 flex justify-center gap-2 md:hidden">
          <BuutonAccount />
          <ButtonLogin showModal={showModal} />
        </div>
      </nav>
      <div className="z-50 justify-between md:flex md:items-center md:gap-20">
        <div className="hidden md:flex md:gap-4">
          <BuutonAccount />
          <ButtonLogin showModal={showModal} />
        </div>
        <MenuToogle handleMenu={handleMenu} menuIsOpen={menuIsOpen} />
      </div>
      {openModal && <Modal showModal={showModal} />}
    </>
  )
}
