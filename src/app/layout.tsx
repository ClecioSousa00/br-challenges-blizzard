import { ReactNode } from 'react'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Blizzard',
  description: 'Desafio do Br Challenges',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${poppins.className}`}>
      <body className={` bg-black text-white`}>{children}</body>
    </html>
  )
}
// Poppins 400, 600, 500, 700,
