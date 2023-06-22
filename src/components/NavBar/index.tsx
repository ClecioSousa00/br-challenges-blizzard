'use client'
import { useState } from 'react'
import { MenuToogle } from '../MenuToogle'
import { cn } from '@/app/lib/utils'
import { BuutonAccount } from '../ButtonAccount'
import { ButtonLogin } from '../ButtonLogin'
import { ButtonOptions } from '../ButtonOptions'
import { Modal } from '../Modal'

export const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [optionIsOpenGame, setOptionIsOpenGame] = useState(false)
  const [optionIsOpenSports, setOptionIsOpenSports] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleMenu = (): void => {
    setMenuIsOpen(!menuIsOpen)
  }

  const handleOptionsGame = () => {
    setOptionIsOpenSports(false)
    setOptionIsOpenGame(!optionIsOpenGame)
  }
  const handleOptionsSports = () => {
    setOptionIsOpenGame(false)
    setOptionIsOpenSports(!optionIsOpenSports)
  }

  const showModal = () => {
    setOpenModal(!openModal)
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
          </li>
          <li>
            <ButtonOptions
              text="Esportes"
              handleOptions={handleOptionsSports}
              optionIsOpen={optionIsOpenSports}
            />
          </li>
          <li>Loja</li>
          <li>Notícias</li>
          <li>Suporte</li>
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
