import { SERVICE_TYPE } from "@/utils/service_type"
import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

function SuggestionItem({ item }) {
    return (
        <div className="max-w-sm overflow-hidden shadow-lg pt-6, pb-6">
            <img className="w-full" src={item.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div>
                    <p className="font-bold text-xl " >{item.name}</p>
                    <p className="text-red-500 text-sm"> <span className="font-semibold">Adresse:</span> {item.address} </p>
                    <p className={inter.className + " text-xs pt-2 text-gray-500"}> {item.description} </p>
                </div>
            </div>
            <div className="px-6 pt-1 pb-1">
                {item.types && item.types.map((type) => (
                    <span className="inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{type}</span>
                ))}
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
        <div className="flex flex-col justify-center item-center w-full" >
            <h3 className={playfair.className + " text-3xl text-center font-semibold text-gray-700 pt-6 pb-0"} >Nos suggestions de lieux</h3>
            <div className="flex justify-center item-center w-full p-10 gap-x-4 " >
                {items.map((item) => <SuggestionItem item={item} />)}
            </div>
        </div>
    )
}