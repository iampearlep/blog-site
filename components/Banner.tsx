import React from 'react'
import Image from "next/image";
import { Fraunces } from "next/font/google";
import archImg from '@/public/images/architecture-03.jpg'
import artImg from '@/public/images/art-culture-02.jpg'
import artImg2 from '@/public/images/art-culture-04.jpg'

export const fraunces = Fraunces({ subsets: ["latin"] });


const Banner = () => {
  return (
    <div className='px-6 py-5'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10'>
            <div className='grid md:col-start-1 md:col-end-10'>
           <div>
           <Image
            src={archImg}
            height={1000}
            width={1920}
            priority={true}
            alt=""
            className="w-full h-full"
          />
           </div>
           <div className='py-5 flex flex-col gap-y-2'>
            <p className='uppercase text-[0.65rem] font-semibold'>Architecture</p>
            <h2 className={`${fraunces.className} text-[1.35rem] md:text-[1.715rem] font-medium`}>A Spanish-Inspired Countryside Haven: The Radiant Transformation of a Heritage Home</h2>
            <p className='text-xs md:text-sm font-medium'>Step into a world where heritage meets spanish flair in this countryside haven, a radiant raven revamp of a historic home.</p>
           </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-5 md:col-start-10 md:col-end-13'>
                <div>
                <div>
           <div>
           <Image
            src={artImg}
            height={1000}
            width={1920}
            priority={true}
            alt=""
            className="w-full h-full"
          />
           </div>
           <div className='py-3 flex flex-col gap-y-2'>
            <p className='uppercase text-[0.65rem] font-semibold'>Art & Culture</p>
            <h2 className='text-sm md:text-base font-semibold'>Minimum Resources, Maximum Impact: Sustainable Fashion Mastery by Gina and Lauren Schultz</h2>
            <p className='text-xs md:text-sm font-medium'>Reshaping the fashion industry, proving that limited resources can still result in high impact sustainable fashion line.</p>
           </div>
            </div>
                </div>
                <div>
                <div>
           <div>
           <Image
            src={artImg2}
            height={1000}
            width={1920}
            priority={true}
            alt=""
            className="w-full h-full"
          />
           </div>
           <div  className='py-3 flex flex-col gap-y-2'>
            <p className='uppercase text-[0.65rem] font-semibold'>Travel</p>
            <h2 className='text-sm md:text-base font-semibold'>1790 Mornington Peninsula Brews Excellence with In-Demand Coffee</h2>
            <p className='text-xs md:text-sm font-medium'>1790 is setting high standards in the local coffee scene with it's much sought after, top-quality blends.</p>
           </div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner