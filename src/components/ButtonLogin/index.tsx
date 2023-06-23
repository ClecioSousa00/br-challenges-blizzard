'useClient'
import { LuUser } from 'react-icons/lu'

type ButtonLoginProps = {
  showModal: () => void
}

export const ButtonLogin = ({ showModal }: ButtonLoginProps) => {
  return (
    <>
      <button
        onClick={() => {
          showModal()
        }}
        className="flex items-center justify-center gap-1 rounded bg-buttonBg px-6 py-[0.65rem] text-sm font-medium hover:opacity-90 lg:z-40"
      >
        <LuUser className="h-5 w-5" />
        Logar
      </button>
    </>
  )
}
