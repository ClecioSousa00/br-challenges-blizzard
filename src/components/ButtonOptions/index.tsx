import { cn } from '@/app/lib/utils'
import { FaChevronDown } from 'react-icons/fa'

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
  return (
    <>
      <button
        onClick={() => {
          handleOptions()
        }}
        className={cn(
          'flex items-center gap-3',
          optionIsOpen && 'text-buttonBg',
        )}
      >
        {text}{' '}
        <FaChevronDown
          className={cn('transition-all', optionIsOpen && 'rotate-180  ')}
        />{' '}
      </button>
    </>
  )
}
