'use client'

import { ButtonHero } from '../ButtonHero'
import { SvgMacOs } from '../icons/SvgMacOs'
import { SvgWin } from '../icons/SvgWin'

export const ButtonSystem = () => {
  const getOperationalSystem = () => {
    const { platform } = window.navigator
    const userOperationalSystem = platform.includes('Win')
      ? 'Windows'
      : platform.includes('Linux')
      ? 'Linux'
      : platform.includes('Mac')
      ? 'macOS'
      : 'Unknown'
    return userOperationalSystem
  }
  const userOperationalSystem = getOperationalSystem()

  return (
    <div>
      {userOperationalSystem === 'macOS' ? (
        <ButtonHero>
          <SvgMacOs /> Baixe para o macOs
        </ButtonHero>
      ) : (
        <ButtonHero className="flex gap-2">
          <SvgWin /> Baixe para o Windows
        </ButtonHero>
      )}
    </div>
  )
}
