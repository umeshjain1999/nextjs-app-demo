import Link from 'next/link'
import './globals.css'
import './page.css'
import { Inter, Prata } from 'next/font/google'
import Header from './header'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })
export const prata = Prata({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Rick and Morty',
  description: 'NextJS Demo App to demonstrate page routing and other features',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
