"use client"
import Prestataire from '@/components/home/prestataire'
import SearchForm from '@/components/home/search_form'
import CallToAction from '@/components/home/subscribe'
import Suggestion from '@/components/home/suggestion'

import { Playfair_Display } from 'next/font/google'
const nunito = Playfair_Display({ subsets: ['latin'] })

export default function Home() {
  return (
      <main className="carousel w-full">
        <div id="slide3" className="carousel-item relative w-full cex-bg-hero bg-blend-darken ">
          <div className="absolute flex flex-col gap-y-3 p-6 transform -translate-y-1/2 left-5 right-5 top-1/2 md:top-1/3 ">
            <h1 className={nunito.className +' text-2xl font-bold leading-7 text-white sm:truncate sm:text-4xl sm:tracking-tight cex-search-title'} >Au service de votre événement</h1>
            <SearchForm />
          </div>
        </div>
        <Suggestion />
        <CallToAction />
        <Prestataire />
      </main>
  )
}
