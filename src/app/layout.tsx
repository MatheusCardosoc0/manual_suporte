import Provider from '@/components/Provider'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { getServerSession } from 'next-auth'
import getSession from '@/actions/getCurrentSection'
import getCurrentUser from '@/actions/getCurrentUser'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getCurrentUser()


  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {session?.name}
          {children}
        </Provider>
      </body>
    </html>
  )
}
