import { cn } from '@/app/lib/utils'

type menuToogleProps = {
  handleMenu: () => void
  menuIsOpen: boolean
}

export const MenuToogle = ({ handleMenu, menuIsOpen }: menuToogleProps) => {
  const handleClickMenu = () => {
    handleMenu()
  }

  return (
    <button
      onClick={handleClickMenu}
      className="z-20 flex cursor-pointer flex-col gap-1"
    >
      <span
        className={cn(
          'h-[2px] w-7 rounded bg-white transition-all',
          menuIsOpen && 'translate-y-[6px] -rotate-45 transform',
        )}
      ></span>
      <span
        className={cn(
          'h-[2px] w-7 rounded bg-white transition-all',
          menuIsOpen && 'w-0 opacity-0',
        )}
      ></span>
      <span
        className={cn(
          'h-[2px] w-7 rounded bg-white transition-all',
          menuIsOpen && '-translate-y-[5px]  rotate-45 transform',
        )}
      ></span>
    </button>
  )
}
