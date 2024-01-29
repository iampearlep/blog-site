import React from 'react'
import Link from "next/link";
import { Fraunces } from "next/font/google";

export const fraunces = Fraunces({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div className='pt-20 '>
        <div className='px-6 pt-5 pb-20 bg-[#3a423e] flex flex-col gap-y-6'>
            <div className='py-4'>
                <h2 className={`${fraunces.className} text-white text-4xl font-extrabold pb-2`}>Explore.</h2>
                <hr className='border border-[#4d5451]' />
            </div>
            <div className='grid grid-cols-2 gap-y-10 gap-x-20 md:flex md:flex-row md:gap-x-44 text-white'>
            <div className="flex flex-col text-sm gap-y-3 md:gap-y-5">
            <Link href="/" className="cursor-pointer font-semibold text-[#898e8c] uppercase text-base">
              Magazine
            </Link>
            <Link href="/" className="cursor-pointer">
              All
            </Link>
            <Link href="/" className="cursor-pointer">
              Architecture
            </Link>
            <Link href="/" className="cursor-pointer">
              Art & Culture
            </Link>
            <Link href="/" className="cursor-pointer">
              Travel
            </Link>
          </div>
          <div className="flex flex-col text-sm gap-y-3 md:gap-y-5">
            <Link href="/" className="cursor-pointer font-semibold text-[#898e8c] uppercase text-base">
            Food
            </Link>
            <Link href="/" className="cursor-pointer">
             All
            </Link>
            <Link href="/" className="cursor-pointer">
             Decor
            </Link>
            <Link href="/" className="cursor-pointer">
             Kitchen
            </Link>
          </div>
          <div className="flex flex-col text-sm gap-y-3 md:gap-y-5">
            <Link href="/" className="cursor-pointer font-semibold text-[#898e8c] uppercase text-base">
              Information
            </Link>
            <Link href="/" className="cursor-pointer">
              About
            </Link>
            <Link href="/" className="cursor-pointer">
              Contact
            </Link>
            <Link href="/" className="cursor-pointer">
              Privacy
            </Link>
          </div>
          <div className="flex flex-col text-sm gap-y-3 md:gap-y-5">
            <Link href="/" className="cursor-pointer font-semibold text-[#898e8c] uppercase text-base">
              Connect
            </Link>
            <Link href="/" className="cursor-pointer">
              Instagram
            </Link>
            <Link href="/" className="cursor-pointer">
              Twitter
            </Link>
            <Link href="/" className="cursor-pointer">
             Tiktok
            </Link>
            <Link href="/" className="cursor-pointer">
             Pinterest
            </Link>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Footer