import { Contact, Footer, Hero, MobileNavbar, Navbar } from '@/components'
import './globals.css'

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const plus_Jakarta_Sans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portofolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="plus_Jakarta_Sans.className " >
        <Navbar />
        <Hero />
        {children}
        <Contact />
        <Footer />
      </body>
    </html >
  )
}
