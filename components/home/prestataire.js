
import { 
    HomeIcon, 
    HomeModernIcon, 
    TruckIcon, 
    SwatchIcon, 
    RectangleStackIcon, 
    CameraIcon, 
    TicketIcon, 
    UserGroupIcon, 
    UserIcon, 
    FilmIcon,
    MegaphoneIcon,
    PresentationChartBarIcon,
    CakeIcon
 } from "@heroicons/react/24/outline"
import { Inter, Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })



function PrestataireItem({ item }) {
    return (
        <a href="#" className="flex flex-col items-center shadow-sm border border-gray-200 px-6 py-5">
            <item.icon className=" h-6 w-6 text-red-500 text-center mb-2" />
            <span className={inter.className + " text-xs text-gray-700 hover:text-red-500"} >{item.name}</span>
        </a>
    )
}

export default function Prestataire(props) {
    const prestataires = [
        { 'name': "Salle de Fêtes", 'icon': HomeIcon },
        { 'name': "Salle de Réunion", 'icon': PresentationChartBarIcon },
        { 'name': "Salle d'Anniversaire", 'icon': CakeIcon },
        { 'name': "Traiteurs", 'icon': TruckIcon },
        { 'name': "Photographes", 'icon': CameraIcon },
        { 'name': "Location Voiture", 'icon': SwatchIcon },
        { 'name': "Location Divers", 'icon': RectangleStackIcon },
        { 'name': "Billeterie", 'icon': TicketIcon },
        { 'name': "Services", 'icon': UserGroupIcon },
        { 'name': "Animation", 'icon': UserIcon },
        { 'name': "Audiovisuel", 'icon': FilmIcon },
        { 'name': "Promotion", 'icon': MegaphoneIcon }
    ]
    return (
        <div className="flex w-full px-6 py-12 items-center justify-center flex-col">
            <h2 className={playfair.className + " mb-2 text-2xl text-gray-800 md:text-3xl font-semibold"} >Que recherchez-vous pour votre événement ?</h2>
            <p className={inter.className + " mb-2 text-gray-700"} >Pour un événement réussi, nous gérons tous les prestataires dont vous avez besoin.</p>
            <div className="grid grid-cols-6 gap-y-6 gap-x-6 divide-x mt-10 mt-3">
                {prestataires.map((item) => <PrestataireItem item={item} key={item.name} />)}
            </div>
        </div>
    )
}