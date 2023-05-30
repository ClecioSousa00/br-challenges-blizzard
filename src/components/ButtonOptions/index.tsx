import { cn } from '@/app/lib/utils'
import { FaChevronDown } from 'react-icons/fa'
import { DropdownGames } from '../DropdownGames'
import { DropDownSports } from '../DropDownSports'

type buttonProps = {
  handleOptions: () => void
  text: string
  optionIsOpen: boolean
}

export const ButtonOptions = ({
  text,
  handleOptions,
  optionIsOpen,
}: buttonProps) => {
  const handleClick = () => {
    handleOptions()
  }

  return (
    <>
      <button onClick={handleClick} className="flex items-center gap-3">
        {text}{' '}
        <FaChevronDown
          className={cn(
            'transition-all',
            optionIsOpen && 'rotate-180 text-buttonBg ',
          )}
        />{' '}
      </button>
      {optionIsOpen && text === 'Jogos' ? <DropdownGames /> : ''}
      {optionIsOpen && text === 'Esportes' ? <DropDownSports /> : ''}
    </>
  )
}
