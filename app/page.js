"use client"
import SearchForm from '@/components/home/search_form'
import { useState } from 'react'

export default function Home() {
  return (
      <main className="carousel w-full">
        <div id="slide3" className="carousel-item relative w-full cex-bg-hero bg-blend-darken ">
          <div className="absolute  items-center flex flex-col gap-y-3 p-6 transform -translate-y-1/2 left-5 right-5 top-1/2">
            <h2 className='text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight cex-search-title' >Au service de votre événement</h2>
            <SearchForm />
          </div>
        </div>
      </main>
  )
}
