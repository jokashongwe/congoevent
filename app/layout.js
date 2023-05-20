import Menu from '@/components/menu'
import Footer from '@/components/footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quality Event',
  description: 'Votre partenaire événementiel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
