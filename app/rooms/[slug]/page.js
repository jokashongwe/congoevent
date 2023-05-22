'use client'
import { useParams } from 'next/navigation'
import './style.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({subsets: ['latin']})

export default function Page(props) {
    const params = useParams()

    const PageTopLink = ({ text, link, active }) => {

        const cName = active ? ' bg-gray-200 text-red-500 ':  ''

        return (
            <div className={cName + 'py-3 px-2 mx-2 hover:bg-gray-200 hover:text-red-500 '}  >
                <a className={nunito.className} href={link ? link : "#"} >{text}</a>
            </div>
        )
    }

    const links = [
        { 'text': "Galerie", 'url': '#galerie', 'active': true },
        { 'text': "Présentation", 'url': '#presentation', 'active': false },
        { 'text': "Salles", 'url': '#salles', 'active': false },
        { 'text': "Tarifs", 'url': '#tarifs', 'active': false },
        { 'text': "Hébergement", 'url': '#hebergement', 'active': false },
    ]

    return (
        <div className='w-full border bg-gray-50 border-0 border-t-2 border-gray-200  h-full cex-salle-container' >
            <div className='h-12 shadow-md px-20'>
                <div className='flex flex-row ' >
                    {links.map((link) => <PageTopLink key={link.text} text={link.text} link={link.url} active={link.active} />)}
                </div>
            </div>
        </div>
    )
}