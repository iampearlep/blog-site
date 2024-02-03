"use client"
import { Suspense } from 'react'
import SearchResult from "@/components/SearchResult"
import Cta from "@/components/Cta"
export default function Page(){
    return(
        <main>
             <h1 className="text-3xl text-center font-semibold py-7">Search Results...</h1>
             <Suspense fallback={<p>Loading feed...</p>}>
             <SearchResult />
            </Suspense>
          
        </main>
    )
}