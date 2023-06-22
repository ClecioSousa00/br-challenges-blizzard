import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="mb-4 h-12 w-full rounded pl-4 font-medium text-gray-500 outline-buttonBg placeholder:text-sm "
      {...props}
    />
  )
}
