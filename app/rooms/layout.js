import './style.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Quality Event - Salles',
    description: 'Votre partenaire événementiel',
}

export default function RoomLayout({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}
