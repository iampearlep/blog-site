import React from 'react'
import Image from "next/image";
import { CardProps } from '@/data/data';

const Card: React.FC<CardProps> = ({id, title, category, description, image}) => {
  return (
    <div key={id}>
                <div>
                <Image
                 src={image}
                 height={1000}
                 width={1920}
                 priority={true}
                 alt=""
                 className="w-full h-full"
               />
                </div>
                <div className='py-3 flex flex-col gap-y-2'>
                 <p className='uppercase text-[0.65rem] font-semibold'>{category}</p>
                 <h2 className='text-sm md:text-base font-semibold'>{title}</h2>
                 <p className='text-xs md:text-sm font-medium'>{description}.</p>
                </div>
                 </div>
  )
}

export default Card