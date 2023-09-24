import { Inter, Prata } from 'next/font/google'
import Footer from '@/components/footer'
import Header from '@/components/header'
import ThemeProvider from '@/components/theme-provider'
import './globals.css'
import './page.css'

const inter = Inter({ subsets: ['latin'] })
const prata = Prata({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Rick and Morty - Home',
  description: 'NextJS Demo App to demonstrate page routing and other features',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
          <link rel="icon" href="/favicon.svg" />
        </head>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header/>
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
  )
}
