'use client'
import { useState } from 'react'
import { MenuToogle } from '../MenuToogle'
import { cn } from '@/app/lib/utils'

export const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenu = (): void => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <>
      <nav
        className={cn(
          'w-0 sm:absolute sm:right-0 sm:top-0 sm:z-10 sm:h-screen sm:overflow-hidden sm:bg-bgMenu sm:transition-all',
          menuIsOpen && 'w-[70vw]',
        )}
      >
        <ul className="sm:mt-14  sm:flex sm:flex-col sm:items-center sm:gap-5">
          <li>
            <button className="text-sm font-normal">Jogos</button>
          </li>
          <li>
            <button className="text-sm font-normal">Esportes</button>
          </li>
          <li className="text-sm font-normal">Loja</li>
          <li className="text-sm font-normal">Notícias</li>
          <li className="text-sm font-normal">Suporte</li>
        </ul>
      </nav>
      <MenuToogle handleMenu={handleMenu} menuIsOpen={menuIsOpen} />
    </>
  )
}
