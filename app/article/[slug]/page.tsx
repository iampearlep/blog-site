import { client } from "@/app/lib/sanity.client";
import { Posts } from "@/interface";
import Image from "next/image";
// import { Fraunces } from "next/font/google";

// export const fraunces = Fraunces({ subsets: ["latin"] }); ${fraunces.className} 


async function getPostDetails(slug: any){
  const query =  `*[_type == "post" && slug.current == "${slug}"][0]{
    _id,
      title,
  excerpt,
description,
  date,
  "slug": slug.current,
"category": category -> name,
"coverImage": coverImage.asset -> url,
"contentImage1": content[0].asset -> url,
"contentImage2": content[1].asset -> url,
"contentImage3": content[2].asset -> url,
"contentImage4": content[3].asset -> url,
"contentTextP1": content[4].children[0].text,
"contentTextP2": content[5].children[0].text,
"contentH1": content[6].children[0].text,
"contentTextP3": content[7].children[0].text,
"contentBullet1": content[8].children[0].text,
"contentBullet1Text": content[8].children[1].text,
"contentBullet2": content[9].children[0].text,
"contentBullet2Text": content[9].children[1].text,
"contentBullet3": content[10].children[0].text,
"contentBullet3Text": content[10].children[1].text,
"contentBullet4": content[11].children[0].text,
"contentBullet4Text": content[11].children[1].text,
"contentH2": content[12].children[0].text,
"contentTextP4": content[13].children[0].text,
"contentTextP5": content[14].children[0].text,
"authorName": author -> name,
"authorImage": author -> picture.asset -> url,
  }`
  const post = await client.fetch(query);

  return post;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post: Posts = await getPostDetails(params.slug);
    return(
      <div className="px-6 py-6">
        <div>
        <div className="flex flex-col items-center justify-center gap-y-6 md:gap-y-14 pb-5 md:pb-10">
        <div className="w-full h-full">
          <Image
              src={post.coverImage}
              height={1000}
              width={1920}
              priority={true}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="w-11/12 md:w-9/12 mx-auto flex flex-col items-center justify-center gap-y-6 md:gap-y-16 text-center">
            <div className="flex flex-row gap-x-4 text-sm font-semibold">
              <p className="border-b border-black">{post.category}</p>
              <p className="text-gray-400">January 28, 2023</p>
            </div>
            <h1  className={` text-[1.30rem] md:text-4xl font-light`}>{post.title}</h1>
            <p  className={` md:w-11/12 text-base md:text-[1.30rem] font-light text-[#2d3330]`}>{post.description}</p>
          </div>
        </div>
        <div className=" mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-10 gap-y-6 md:gap-y-28">
         <div>
         <Image
              src={post.contentImage2}
              height={533}
              width={800}
              priority={true}
              alt=""
              className=""
            />
         </div>
        <div className="w-full md:w-9/12 mx-auto">
        <Image
              src={post.contentImage1}
              height={1200}
              width={800}
              priority={true}
              alt=""
              className=""
            />
        </div>
        <div>
         <Image
              src={post.contentImage4}
              height={1199}
              width={800}
              priority={true}
              alt=""
              className="w-full md:w-9/12 mx-auto"
            />
         </div>
           <div>
           <Image
              src={post.contentImage3}
              height={533}
              width={800}
              priority={true}
              alt=""
              className=""
            />
           </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 py-10 gap-y-6 gap-x-6">
          <div className="grid md:col-start-1 md:col-end-4">
           <div className="flex flex-col justify-center items-center text-center md:justify-start md:items-start md:text-start gap-y-4">
           <div className="w-4/12 ">
            <Image
              src={post.authorImage}
              height={500}
              width={500}
              priority={true}
              alt=""
              className="rounded-full"
            />
            </div>
            <div className="flex flex-col gap-y-2 text-xs md:text-sm">
              <p>Written by <span className="font-semibold border-b-2 border-black">{post.authorName}</span></p>
              <p>Filled under <span className="font-semibold border-b border-black">{post.category}</span></p>
              <p className="text-gray-400">January 28, 2023</p>
            </div>
           </div>
          </div>
          <div className="grid md:col-start-4 md:col-end-10 text-sm md:text-[1.035rem] font-medium">
           <div className="flex flex-col gap-y-6 pb-3">
           <p>{post.contentTextP1}</p>
            <p>{post.contentTextP2}</p>
           </div>
            <div>
            <h3 className={` text-xl md:text-2xl font-normal py-3 md:py-6`}>{post.contentH1}</h3>
            <p className="py-4">{post.contentTextP3}</p>
              <p className="py-4"><span className="font-semibold">{post.contentBullet1}</span> {post.contentBullet1Text}</p>
              <p className="py-4"><span className="font-semibold">{post.contentBullet2}</span>{post.contentBullet2Text}</p>
              <p className="py-4"><span className="font-semibold">{post.contentBullet3}</span>{post.contentBullet3Text}</p>
              <p className="py-4"><span className="font-semibold">{post.contentBullet4}</span>{post.contentBullet4Text}</p>
            </div>
            <div className="flex flex-col gap-y-6 ">
            <h3 className={`text-xl md:text-2xl py-3`}>{post.contentH2}</h3>
            <p>{post.contentTextP4}</p>
            <p>{post.contentTextP5}</p>
            </div>
          </div>
          <div className="hidden md:grid md:col-start-10 md:col-end-13">
            <div className="bg-gray-200 px-6">
            <div className="flex justify-center items-center w-full h-full">
            <p className="text-xs md:text-sm text-center text-gray-400 capitalize">Sponsored area</p>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }