import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BudgetApp',
  description: 'Handle your day to day budget',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        </body>
    </html>
  )
}
