import React from 'react'
import Card from './Card'
import { data } from "@/data/data";
import Link from 'next/link';

const Stories = () => {
  return (
    <div className='px-6 py-5'>
        <div className='grid grid-cols-2 gap-5 md:gap-10'>
            {data.slice(3,11).map((post) => {
                return (
                  <Card key={post.id} data={post} />
                )
            })}
        </div>
    </div>
  )
}

export default Stories