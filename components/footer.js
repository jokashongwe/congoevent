
import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export default function Footer(props){
    return (
        <div className="flex flex-col items-center justify-center bg-gray-200 p-1 pt-2" >
            <h2 className={nunito.className + " text-xs text-red-500"} >© 2023 Quality Event</h2>
            <p className={nunito.className + " text-xs mb-2 text-gray-700"} >Design by Jonathan Kashongwe</p>
        </div>
    )
}