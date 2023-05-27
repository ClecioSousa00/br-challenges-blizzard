'use client'
import { useState } from 'react'
import { MenuToogle } from '../MenuToogle'

export const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleMenu = (): void => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <>
      <MenuToogle handleMenu={handleMenu} menuIsOpen={menuIsOpen} />
    </>
  )
}
