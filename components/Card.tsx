import React from 'react'
import Image from "next/image";
import { CardData } from '@/types';
 interface CardProps {
  data: CardData;
 }


const Card: React.FC<CardProps> = ({data}) => {
  return (
    <div key={data.id}>
                <div>
                <Image
                 src={data.image}
                 height={1000}
                 width={1920}
                 priority={true}
                 alt=""
                 className="w-full h-full"
               />
                </div>
                <div className='py-3 flex flex-col gap-y-2'>
                 <p className='uppercase text-[0.65rem] font-semibold'>{data.category}</p>
                 <h2 className='text-sm md:text-base font-semibold'>{data.title}</h2>
                 <p className='text-xs md:text-sm font-medium'>{data.description}.</p>
                </div>
                 </div>
  )
}

export default Card