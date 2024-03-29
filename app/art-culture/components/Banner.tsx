import React from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";
import Card from "@/components/Card";
import Link from "next/link";
import Minicta from "@/components/Minicta";



import { client } from "@/app/lib/sanity.client";
import { Posts } from "@/interface";
export const fraunces = Fraunces({ subsets: ["latin"] });

async function getPostData() {
  const query = `*[_type == "post" && category._ref in *[_type=="category" && name=="Art & Culture"]._id]{
    _id,
    title,
    excerpt,
  description,
  date,
  "slug": slug.current,
  "category": category -> name,
  "coverImage": coverImage.asset -> url,
  }
  `;
  const posts = await client.fetch(query);
  return posts;
}

async function getSinglePostData(){
  const query = `*[_type == "post"][9]{
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


const Banner = async() => {
  const posts = await getPostData();
  const singlePost = await getSinglePostData();
  const dynamicUrl = `/article/${singlePost.slug}`
  return (
    <div className="px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <div className="grid md:col-start-1 md:col-end-10">
        <Link href="/" as={dynamicUrl}>
          <div>
            <Image
              src={singlePost.coverImage}
              height={1000}
              width={1920}
              priority={true}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="py-5 flex flex-col gap-y-2">
            <p className="uppercase text-[0.65rem] font-semibold">
              {singlePost.category}
            </p>
            <h2
              className={`${fraunces.className} text-[1.35rem] md:text-[1.65rem] font-medium pr-0 md:pr-5`}
            >
            {singlePost.title}
            </h2>
            <p className="text-xs md:text-sm font-medium">
             {singlePost.excerpt}
            </p>
          </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 md:col-start-10 md:col-end-13">
          {posts.slice(1, 3).map((post: Posts) => {
            return (
                <Card key={post._id} data={post} />
            )
          })}
        </div>
      </div>
      <div className="py-20">
     <div className="grid grid-cols-2 gap-x-10">
      <div>
      {posts.slice(0,1).map((post: Posts) => {
            return (
            <Card key={post._id} data={post} />
            )
          })}
      </div>
      <div className="hidden md:block">
        <Minicta />
      </div>
      </div>
     </div>
    </div>
  );
};

export default Banner;
