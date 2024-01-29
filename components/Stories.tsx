import React from 'react'
import Card from './Card'
import { client } from "@/app/lib/sanity.client";
import { Posts } from "@/interface";

async function getPostData() {
  const query = `*[_type == "post"][0...12] {
  _id,
  title,
  excerpt,
description,
  date,
  "slug": slug.current,
"category": category -> name,
"coverImage": coverImage.asset -> url,
  }`;
  const posts = await client.fetch(query);
  return posts;
}

const Stories = async() => {
  const posts = await getPostData();
  return (
    <div className='px-6 py-5'>
       <div className='grid md:grid-cols-12 md:gap-x-8'>
        <div className='hidden md:grid col-start-1 col-end-4 text-center'>
        <div className="bg-[#eeeeee] px-6">
            <div className="flex justify-center items-center w-full h-full">
            <p className="text-xs md:text-sm text-center text-gray-300 capitalize">Sponsored area</p>
            </div>
            </div>
        </div>
        <div className='grid  md:col-start-4 md:col-end-13 md:gap-10'>
          <div className='grid grid-cols-2 gap-5 '>
          {posts.slice(3,11).map((post: Posts) => {
                return (
                  <Card key={post._id} data={post} />
                )
            })}
          </div>
        </div>
       </div>
    </div>
  )
}

export default Stories