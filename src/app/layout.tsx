import { ReactNode } from 'react'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Blizzard',
  description: 'Desafio do Br Challenges',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} font-sans text-white`}>
        {children}
      </body>
    </html>
  )
}
// Poppins 400, 600, 500, 700,
