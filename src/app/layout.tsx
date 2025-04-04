/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import '@/styles/globals.css'

import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Fablab - Universidad de Valparaíso',
  description: 'Fablab de la Universidad de Valparaíso'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
