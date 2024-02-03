"use client"
import React, {useState, useEffect} from 'react'
import { IoSearch } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';

const Search = () => {
    const router = useRouter()
    const [text, setText] = useState('')
    const [query] = useDebounce(text, 700)
   
    useEffect(() => {
      if(!query){
        router.push(`/`)
      } else {
        router.push(`/search?q=${query}`)
      }
    }, [query, router])

  return (
    <div>
        <div className="relative flex flex-row justify-end items-center">
           <div className='absolute pointer-events-none'><IoSearch className='' /></div>
            <input type="text"  value={text} onChange={(e) => setText(e.target.value)} placeholder="Search"  className='placeholder:text-black placeholder:px-4 placeholder:text-end px-2  focus:border focus:border-black focus:outline-none' />
          </div>
    </div>
  )
}

export default Search