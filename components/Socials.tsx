import React from 'react'
import Image from "next/image";
import Img1 from "@/public/images/social-01.jpg"
import Img2 from "@/public/images/social-02.jpg"
import Img3 from "@/public/images/social-03.jpg"
import Img4 from "@/public/images/social-04.jpg"
import Img5 from "@/public/images/social-05.jpg"
import Img6 from "@/public/images/social-06.jpg"

const Socials = () => {
  return (
    <div className='px-6 py-8'>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-row justify-between items-center'>
                <h2>Follow us on social media</h2>
                <button className='py-1 px-6 border border-[#262c29] rounded-full'>@explore</button>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-6 md:gap-x-6 gap-x-4 gap-y-4'>
            <Image
                 src={Img1}
                 height={450}
                 width={450}
                 priority={true}
                 alt=""
                 className="w-full h-full"
               />
               <Image
                 src={Img2}
                 height={450}
                 width={450}
                 priority={true}
                 alt=""
                 className="w-full h-full"
               />
                <Image
                 src={Img3}
                 height={450}
                 width={450}
                 priority={true}
                 alt=""
                 className="w-full h-full"
               />
                <Image
                 src={Img4}
                 height={450}
                 width={450}
                 priority={true}
                 alt=""
                 className="w-full h-full"
               />
                <Image
                 src={Img5}
                 height={450}
                 width={450}
                 priority={true}
                 alt=""
                 className="w-full h-full"
               />
                <Image
                 src={Img6}
                 height={450}
                 width={450}
                 priority={true}
                 alt=""
                 className="w-full h-full"
               />
            </div>
        </div>
    </div>
  )
}

export default Socials