'use client'

import {
    SwatchIcon,
    TicketIcon,
    HomeIcon,
    ArchiveBoxIcon,
    UserGroupIcon,
    GiftIcon,
    XMarkIcon,
    UserCircleIcon,
    Bars3Icon,
    EnvelopeIcon
} from '@heroicons/react/24/outline'

const Dropdown = ({ items, title }) => {
    return (
        <div className="relative inline-block text-left">
            <div className='cex-search-elt rounded-tl-md rounded-bl-md border-r-gray-100 border-l-2 border border-white' >
                <button type="button" class="inline-flex w-full px-2 gap-x-1.5 bg-white py-2.5 text-sm text-gray-400  ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    {title}
                </button>
            </div>
            <div class="absolute left-3 right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    {items.map((item) => (
                        <a key={item.name}
                            class="text-gray-700 block px-4 py-2 text-sm flex items-center gap-x-2 hover:bg-gray-100"
                            href='#'
                            role="menuitem"
                            tabindex="-1"
                            id="menu-item-0">
                            {item.icon ? <item.icon className="h-6 w-6 text-red-700 group-hover:text-white" /> : null}
                            {item.name} </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function SearchForm(props) {
    const products = [
        { name: 'Lieux de réception', description: 'Get a better understanding of your traffic', href: '#', icon: HomeIcon },
        { name: 'Service traiteur', description: 'Speak directly to your customers', href: '#', icon: ArchiveBoxIcon },
        { name: 'Animateurs', description: 'Your customers’ data will be safe and secure', href: '#', icon: UserGroupIcon },
        { name: 'Décorations', description: 'Connect with third-party tools', href: '#', icon: GiftIcon },
        { name: 'Location de materiel & voiture', description: 'Build strategic funnels that will convert', href: '#', icon: SwatchIcon },
        { name: 'Wedding planner & billetterie', description: 'Build strategic funnels that will convert', href: '#', icon: TicketIcon },
    ]
    return (
        <form className="cex-search-bar" >
            <div class="flex">
                <Dropdown title={"Que cherchez-vous ?"} items={products} />
                <div class="relative w-full">
                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300" placeholder="Search Mockups, Logos, Design Templates..." required />
                    <button type="submit" class="absolute top-0 right-0 px-5 p-2.5 text-sm font-medium text-white bg-red-600 rounded-r-lg border border-red-700 hover:bg-red-800">
                        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    )
} 