import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const inter = Roboto({
  subsets: ['latin'],
  weight: [
    '500',
    '700',
    '900'
  ]
})

export const metadata: Metadata = {
  title: 'Manual Suporte N.1',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
