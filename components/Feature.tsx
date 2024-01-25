import React from 'react'
import Image from "next/image";
import ArchImg from '@/public/images/architecture-05.jpg'
import { Fraunces } from "next/font/google";

export const fraunces = Fraunces({ subsets: ["latin"] });


const Feature = () => {
  return (
   <div className='relative py-10'>
     <div className='relative w-full h-full md:h-[600px] overflow-y-hidden'>
        <Image
              src={ArchImg}
              height={1000}
              width={1920}
              priority={true}
              alt=""
              className="brightness-50"
            />
    </div>
    <div className='absolute w-9/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-y-5 md:gap-y-44'>
        <p className='uppercase text-xs md:text-sm font-semibold'>Featured story</p>
    <h1 className={`${fraunces.className} md:text-5xl md:leading-tight font-light capitalize`} >Old to Gold: transforming an outdated 70s brick dwelling into an uurban crisis.</h1>
    <button className='w-3/12 md:w-[15%] mx-auto border border-white rounded-full text-xs md:text-sm font-semibold py-2 hover:text-black hover:bg-white transition-all ease-linear'>Read Now</button>
    </div>
   </div>
  )
}

export default Feature