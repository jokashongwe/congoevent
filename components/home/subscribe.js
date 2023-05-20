import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { Inter, Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })


export default function CallToAction(props) {
    return (
        <div className="bg-red-500 flex-col flex w-full items-center justify-center h-64">
            <h3 className={playfair.className + " font-semibold text-white text-2xl md:text-3xl pb-2"} >Vous disposez de peu de temps pour organiser votre événement ?</h3>
            <p className={inter.className + " text-md text-white"} >Notre équipe est prête à répondre à tout vos besoins !</p>
            <div className="py-6">
                <button href="#" className=" bg-white shadow-lg hover:bg-gray-200 px-3 py-2 flex items-center justify-center gap-x-2 text-sm font-semibold leading-6 text-red-500">
                    <EnvelopeIcon className="h-6 w-6 text-red-500 group-hover:text-red-500" aria-hidden="true" />
                    Contactez-nous
                </button>
            </div>
        </div>
    )
}