import { SERVICE_TYPE } from "@/utils/service_type"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { Inter, Playfair_Display } from "next/font/google"
import Image from "next/image"

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })



function SuggestionItem({ item }) {
    return (
        <div className=" md:max-w-sm overflow-hidden shadow-xs md:shadow-lg pt-6 pb-6">
            <Image width={1280} height={840} className="w-full" src={item.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div>
                    <p className="font-bold text-xl " >{item.name}</p>
                    <p className="text-red-500 text-sm"> <span className="font-semibold">Adresse:</span> {item.address} </p>
                    <p className={inter.className + " text-xs pt-2 text-gray-500"}> {item.description} </p>
                </div>
            </div>
            <div className="px-6 pt-1 pb-1">
                <a href="#" className="inline-block bg-gray-300 px-3 py-3 shadow-sm text-sm font-semibold text-gray-700 mr-2 mb-2">EN SAVOIR PLUS</a>
            </div>
        </div>
    )
}

export default function Suggestion(props) {
    const items = [
        { 'name': 'Chapiteau GB', 'address': '6, Gombé, Kinshasa', 'price': '1150', 'image': '/images/wedding-g718829c77_1280.jpg', 'types': ['FETE', 'REUNION'], 'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
        { 'name': 'Splendide Salle', 'address': '12, Bangala, Kitambo', 'price': '1150', 'image': '/images/wedding-reception-g9bee4e633_1280.jpg', 'types': ['REUNION'], 'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
    ]
    return (
        <div className="flex flex-col justify-center md:mt-10 md:mb-10 item-center w-full" >
            <h3 className={playfair.className + " text-2xl md:text-3xl text-center font-semibold text-gray-700 pt-6 pb-0"} >Nos suggestions de lieux</h3>
            <div className="grid grid-cols-1 md:flex md:flex-row md:items-center md:justify-center md:px-10 w-full md:gap-x-4  gap-y-4" >
                {items.map((item) => <SuggestionItem key={item.name} item={item} />)}
            </div>
        </div>
    )
}