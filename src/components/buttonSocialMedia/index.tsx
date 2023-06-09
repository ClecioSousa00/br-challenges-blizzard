import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
}

export const ButtonSocialMedia = ({ children }: ButtonProps) => {
  return (
    <button className=" flex h-12 w-12 items-center justify-center rounded bg-white transition-all hover:-translate-y-1">
      {children}
    </button>
  )
}
