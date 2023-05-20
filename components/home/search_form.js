'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Nunito } from 'next/font/google'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const nunito = Nunito({ subsets: ['latin'] })

import {
    SwatchIcon,
    TicketIcon,
    HomeIcon,
    ArchiveBoxIcon,
    UserGroupIcon,
    GiftIcon
} from '@heroicons/react/24/outline'

function DropdownMenu({ items, title, middle }) {
    let nclass = 'cex-search-elt border-r-gray-100 border-l-2 border border-white'
    nclass += middle ? '' : ''
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className={nclass} >
                <Menu.Button className="inline-flex w-full px-2 gap-x-1.5 bg-white py-3 text-sm text-gray-400  ring-gray-300 hover:bg-gray-50">
                    <span className={nunito.className}>{title}</span> 
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 right-0 z-10 mt-1 w-80 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 grid grid-cols-2 gap-2">
                        {items.map((item) => (
                            <Menu.Item key={item.name} >
                                <a href="#"
                                    className={nunito.className + " text-gray-700 font-semibold block px-4 py-2 text-sm flex items-center gap-x-2 hover:bg-gray-100 hover:text-gray-600"}
                                >
                                    {item.icon ? <item.icon className="h-6 w-6 text-sm text-red-700 group-hover:text-white" /> : null}
                                    {item.name}
                                </a>
                            </Menu.Item>
                        ))}

                    </div>

                </Menu.Items>
            </Transition>
        </Menu>
    )
}


export default function SearchForm(props) {
    const products = [
        { name: 'Lieux de réception', href: '#', icon: HomeIcon },
        { name: 'Service traiteur', href: '#', icon: ArchiveBoxIcon },
        { name: 'Animateurs', href: '#', icon: UserGroupIcon },
        { name: 'Décorations', href: '#', icon: GiftIcon },
        { name: 'Location de materiel & voiture', href: '#', icon: SwatchIcon },
        { name: 'Wedding planner & billetterie', href: '#', icon: TicketIcon },
    ]

    const locations = [
        { "name": "Kinshasa" }, { 'name': "Lubumbashi" }, { 'name': "Bukavu" },
        { 'name': "Goma" }, { 'name': "Matadi" }
    ]

    return (
        <form className="cex-search-bar" >
            <div class="flex flex-col gap-y-2 md:flex-row ">
                <DropdownMenu title={"Que cherchez-vous ?"} items={products} />
                <DropdownMenu title={"Où ?"} items={locations} middle />
                <div class="relative w-full">
                    <input type="search" id="search-dropdown" class="block p-3 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300 focus:outline-none focus:outline-0" placeholder="Salles, traiteurs, billeteries, photographes..." required />
                    <button type="submit" class={" flex flex-row items-center shadow-sm md:shadow-none relative md:absolute mt-2 md:mt-0 top-0 right-0 px-5 p-3 text-sm font-medium text-white bg-red-500 border border-red-500 hover:bg-red-800 hover:border-red-800"}>
                        <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span class={nunito.className + " md:sr-only ml-2"}>Rechercher</span>
                    </button>
                </div>
            </div>
        </form>
    )
} 