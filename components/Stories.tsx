import React from 'react'
import Card from './Card'
import { data } from "@/data/data";
import Link from 'next/link';

const Stories = () => {
  return (
    <div className='px-6 py-5'>
        <div className='grid grid-cols-2 gap-5 md:gap-10'>
            {data.slice(3,11).map((item) => {
                return (
                  <Link href={`/`} className=''>
                    <Card
            id={item.id}
            title={item.title}
            image={item.image}
            category={item.category}
            description={item.description}
          /> 
                  </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Stories