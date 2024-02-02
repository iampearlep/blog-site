import React from 'react'
import Image from "next/image";
import { Fraunces } from "next/font/google";
import Link from "next/link";
import { client } from "@/app/lib/sanity.client";

const fraunces = Fraunces({ subsets: ["latin"] });

async function getSinglePostData(){
  const query = `*[_type == "post"][0]{
    _id,
    title,
    excerpt,
  description,
    date,
    "slug": slug.current,
  "category": category -> name,
  "coverImage": coverImage.asset -> url,
  }`
  const singlePosts = await client.fetch(query);
  return singlePosts;
}

const Feature = async() => {
  const singlePost = await getSinglePostData();
  const dynamicUrl = `/article/${singlePost.slug}`
  return (
   <div className='relative py-10'>
     <div className='relative w-full h-full md:h-[600px] overflow-y-hidden'>
        <Image
              src={singlePost.coverImage}
              height={1000}
              width={1920}
              priority={true}
              alt=""
              className="brightness-50"
            />
    </div>
    <div className='absolute w-9/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white flex flex-col gap-y-5 md:gap-y-44'>
        <p className='uppercase text-xs md:text-sm font-semibold'>Featured story</p>
    <h1 className={`${fraunces.className} md:text-5xl md:leading-tight font-light capitalize`} >{singlePost.title}</h1>
    <Link href="/" as={dynamicUrl}> <button className='w-3/12 md:w-[15%] mx-auto border border-white rounded-full text-xs md:text-sm font-semibold py-2 hover:text-black hover:bg-white transition-all ease-linear'> Read Now </button> </Link>
    </div>
   </div>
  )
}

export default Feature