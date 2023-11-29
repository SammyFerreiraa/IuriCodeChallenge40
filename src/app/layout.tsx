import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { AsideNav } from '@/templates'

const inter = Poppins({ subsets: ['latin'], weight: ['500', '600'] })

export const metadata: Metadata = {
  title: 'Desafio 40 | Codelandia',
  description: 'Codelandia - Desafio 40',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen`}>
        <AsideNav />
        {children}
      </body>
    </html>
  )
}
