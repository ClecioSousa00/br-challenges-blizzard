import { useState } from 'react'

export const useOpenOptions = () => {
  const [optionIsOpenGame, setOptionIsOpenGame] = useState(false)
  const [optionIsOpenSports, setOptionIsOpenSports] = useState(false)

  const handleOptionsGame = () => {
    setOptionIsOpenSports(false)
    setOptionIsOpenGame(!optionIsOpenGame)
  }
  const handleOptionsSports = () => {
    setOptionIsOpenGame(false)
    setOptionIsOpenSports(!optionIsOpenSports)
  }

  return {
    optionIsOpenGame,
    optionIsOpenSports,
    handleOptionsGame,
    handleOptionsSports,
  }
}
