import { cn } from '@/app/lib/utils'
import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const ButtonHero = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'rounded bg-buttonBg px-8 py-[0.875rem] text-sm font-semibold transition-all hover:scale-105',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
