import '@/assets/css/global.css'
import '@/assets/css/tailwind.compiled.css'
import Header from '@/component/header/header'
import SenaDate from '@/component/senaDate'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project SENCA',
  description: 'Generated by create next app',
}

type Props = {
  children: React.ReactNode;
}
export default function RootLayout({
  children,
}: Props) {
  return (
    <html lang="en">
      <body className="bg-gray-100 2xl:container">
        <div className="relative h-screen">
          <SenaDate />
          <Header />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
