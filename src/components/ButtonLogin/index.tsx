import { LuUser } from 'react-icons/lu'
export const ButtonLogin = () => {
  return (
    <button className="flex items-center justify-center gap-1 rounded bg-buttonBg px-6 py-[0.65rem] text-sm font-medium">
      <LuUser className="h-6 w-6" />
      Logar
    </button>
  )
}
