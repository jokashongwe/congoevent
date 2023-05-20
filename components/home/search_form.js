'use client'

import { Fragment, useState } from 'react'
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


import {
    XMarkIcon
} from '@heroicons/react/24/solid'

function DropdownMenu({ items, title, middle, onclick, selected }) {
    let nclass = 'cex-search-elt border-r-gray-100 border-l-2 border border-white'
    nclass += middle ? '' : ''

    const selectedComponent = (item) => {
        if(!item) return null;
        return (
            <div className='border border-md border-red-500 p-1' >
                <span onClick={(e) => onclick({})} className={' text-xs text-red-500 font-semibold inline-flex items-center justify-center gap-x-2'} >
                    {item.name} <XMarkIcon className='h-3 w-3 text-red-500 font-semibold' />
                </span>
            </div>
        )
    }

    return (
        <Menu as="div" className="relative flex items-center border-md border-gray-800 ">
            <div className={nclass} >
                <Menu.Button className="flex flex-row justify-center items-center w-full bg-white text-sm text-gray-400  ring-gray-300 hover:bg-gray-50">
                    {selected && selected.name ? selectedComponent(selected) : <span className={nunito.className}>{title}</span>}
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
                <Menu.Items className="absolute left-0 right-0 top-12 mt-1 w-78 md:w-80 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1 grid grid-cols-2 gap-2">
                        {items.map((item) => (
                            <Menu.Item key={item.name} >
                                <button
                                    type='button'
                                    data={item.name}
                                    onClick={(e) => onclick(item)}
                                    className={nunito.className + " cursor-pointer text-gray-700 font-semibold block px-4 py-2 text-sm flex items-center gap-x-2 hover:bg-gray-100 hover:text-gray-600"}
                                >
                                    {item.icon ? <item.icon className="h-6 w-6 text-sm text-red-700 group-hover:text-white" /> : null}
                                    {item.name}
                                </button>
                            </Menu.Item>
                        ))}

                    </div>

                </Menu.Items>
            </Transition>
        </Menu>
    )
}


export default function SearchForm(props) {

    const [location, setLocation] = useState({});
    const [product, setProduct] = useState({})

    const products = [
        { name: 'Lieux de réception', href: '#', icon: HomeIcon },
        { name: 'Service traiteur', href: '#', icon: ArchiveBoxIcon },
        { name: 'Animateurs', href: '#', icon: UserGroupIcon },
        { name: 'Décorations', href: '#', icon: GiftIcon },
        { name: 'Location divers', href: '#', icon: SwatchIcon },
        { name: 'Event planner & billetterie', href: '#', icon: TicketIcon },
    ]

    const locations = [
        { "name": "Kinshasa" }, { 'name': "Lubumbashi" }, { 'name': "Bukavu" },
        { 'name': "Goma" }, { 'name': "Matadi" }
    ]

    return (
        <div className="cex-search-bar" >
            <div className="flex flex-col gap-y-2 md:gap-y-0 h-12 bg-white  md:flex-row ">
                <DropdownMenu
                    title={"Que cherchez-vous ?"}
                    selected={product}
                    items={products}
                    onclick={item => setProduct(item)}
                />
                <DropdownMenu
                    title={"Où ?"}
                    items={locations}
                    selected={location}
                    middle
                    onclick={item => setLocation(item)}
                />
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block px-2 py-3 w-full h-12 text-sm text-gray-900 bg-gray-50 border-l-gray-50 border-l-2 border border-gray-300 focus:outline-none focus:outline-0" placeholder="Salles, traiteurs, billeteries, photographes..."/>
                    <button type="submit" className={" flex flex-row h-12 items-center shadow-sm md:shadow-none outline-none relative md:absolute mt-2 md:mt-0 top-0 right-0 px-5 p-3 text-sm font-medium text-white bg-red-500 border border-red-500 hover:bg-red-800 hover:border-red-800"}>
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className={nunito.className + " md:sr-only ml-2"}>Rechercher</span>
                    </button>
                </div>
            </div>
        </div>
    )
} 