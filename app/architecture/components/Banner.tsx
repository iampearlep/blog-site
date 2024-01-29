import React from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";
import archImg from "@/public/images/architecture-03.jpg";
import Card from "@/components/Card";
import Link from "next/link";
import { client } from "@/app/lib/sanity.client";
import { Posts } from "@/interface";

export const fraunces = Fraunces({ subsets: ["latin"] });

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

const Banner = async() => {
  const posts = await getPostData();
  return (
    <div className="px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <div className="grid md:col-start-1 md:col-end-10">
          <Link href={`/article/1`}>
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
          <div className="py-5 flex flex-col gap-y-2">
            <p className="uppercase text-[0.65rem] font-semibold">
              Architecture
            </p>
            <h2
              className={`${fraunces.className} text-[1.35rem] md:text-[1.65rem] font-medium pr-0 md:pr-5`}
            >
              A Spanish-Inspired Countryside Haven: The Radiant Transformation
              of a Heritage Home
            </h2>
            <p className="text-xs md:text-sm font-medium">
              Step into a world where heritage meets spanish flair in this
              countryside haven, a radiant raven revamp of a historic home.
            </p>
          </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 md:col-start-10 md:col-end-13">
          {posts.slice(5, 6).map((post: Posts) => {
            return (
                <Card key={post._id} data={post} />
            )
          })}
          {posts.slice(10, 11).map((post: Posts) => {
            return (
                <Card key={post._id} data={post} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
