import { LuUser } from 'react-icons/lu'
export const ButtonLogin = () => {
  return (
    <button className="flex items-center justify-center gap-1 rounded bg-buttonBg px-6 py-[0.65rem] text-sm font-medium lg:z-40">
      <LuUser className="h-5 w-5" />
      Logar
    </button>
  )
}
