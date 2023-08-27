'useClient'
import { ButtonHTMLAttributes } from 'react'
import { LuUser } from 'react-icons/lu'

type ButtonLoginProps = {
  showModal: () => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonLogin = ({ showModal, ...props }: ButtonLoginProps) => {
  return (
    <>
      <button
        onClick={() => {
          showModal()
        }}
        className="flex items-center justify-center gap-1 rounded bg-buttonBg px-6 py-[0.65rem] text-sm font-medium hover:opacity-90 lg:z-40"
        {...props}
      >
        <LuUser className="h-5 w-5" />
        Logar
      </button>
    </>
  )
}
