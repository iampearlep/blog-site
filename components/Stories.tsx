import React from 'react'
import Card from './Card'
import { data } from "@/data/data";
import Link from 'next/link';

const Stories = () => {
  return (
    <div className='px-6 py-5'>
       <div className='grid md:grid-cols-12 md:gap-x-8'>
        <div className='hidden md:grid col-span-1 col-end-4 text-center'>
        </div>
        <div className='grid  md:col-start-4 md:col-end-13 md:gap-10'>
          <div className='grid grid-cols-2 gap-5 '>
          {data.slice(3,11).map((post) => {
                return (
                  <Card key={post.id} data={post} />
                )
            })}
          </div>
        </div>
       </div>
    </div>
  )
}

export default Stories