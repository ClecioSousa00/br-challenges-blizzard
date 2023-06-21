import { ReactNode } from 'react'

type IconsFooterProps = {
  children: ReactNode
  text: string
}

export const IconsFooter = ({ children, text }: IconsFooterProps) => {
  return (
    <div className="flex items-center gap-4 ">
      {children}
      <p className="text-lg font-normal text-gray-400">{text}</p>
    </div>
  )
}
