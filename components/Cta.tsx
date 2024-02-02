import React from 'react'
import Image from "next/image";
import ctaImg from "@/public/images/square-02.jpg"
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"] });


const Cta = () => {
  return (
   <div className='py-8 px-0 md:px-6'>
     <hr className='border-2 border-[#eeeeee]' />
     <div className='py-16'>
        <div className='bg-[#262c29] flex flex-row gap-x-10'>
       <div className='hidden md:flex md:w-2/6'>
       <Image
                 src={ctaImg}
                 height={500}
                 width={500}
                 priority={true}
                 alt=""
                 className="w-full h-full"
               />
       </div>
       <div className='text-white w-11/12 md:w-7/12  mx-auto flex flex-col justify-center py-6 md:py-0 text-center  items-center gap-y-10 md:gap-y-24'>
        <div className='w-11/12 mx-auto flex flex-col gap-y-4'> 
            <p className='uppercase text-sm font-semibold'>Join the community</p>
            <h2 className={`${fraunces.className} md:text-2xl font-light capitalize`}>Subscribe to our weekly newsletter for curated architectural, interior, designs delivered to your inbox</h2>
        </div>
        <div className='w-full md:w-11/12 mx-auto flex flex-col relative'>
        <input type="email" placeholder='Email Address' className='bg-[#262c29] px-8 py-4 border border-white w-full rounded-full placeholder:text-white placeholder:text-sm placeholder:font-semibold' />
        <button className='absolute top-1.5 right-8 text-sm border-l border-white pl-6 py-3 font-semibold'>Submit</button>
        <p className='pt-5 text-xs font-semibold'>We never share your data. See <span className='capitalize underline'>privacy policy</span> for more info.</p>
        </div>
       </div>
        </div>
    </div>
    <hr className='border-2 border-[#eeeeee]' />
   </div>
  )
}

export default Cta