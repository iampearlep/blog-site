import { client } from "@/app/lib/sanity.client";
import { Posts } from "@/interface";
import Image from "next/image";
import { Fraunces } from "next/font/google";

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
      <div className="px-6">
        <div>
        <div>
        <div>
          <Image
              src={post.coverImage}
              height={1000}
              width={1920}
              priority={true}
              alt=""
              className="w-full h-full"
            />
          </div>
          <div>
            <div>
              <p>{post.category}</p>
              <p></p>
            </div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
        </div>
        <div className=" mx-auto grid grid-cols-1 gap-y-28">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-10">
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
        <div className="w-9/12 mx-auto">
        <Image
              src={post.contentImage1}
              height={1200}
              width={800}
              priority={true}
              alt=""
              className=""
            />
        </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-x-10">
         <div>
         <Image
              src={post.contentImage4}
              height={1199}
              width={800}
              priority={true}
              alt=""
              className="w-9/12 mx-auto"
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
        <div className="grid grid-cols-12">
          <div className="grid md:col-start-1 md:col-end-3">
           <div>
           <div>
            <Image
              src={post.authorImage}
              height={500}
              width={500}
              priority={true}
              alt=""
              className=""
            />
            </div>
            <div className="">
              <p>Written by <span>{post.authorName}</span></p>
              <p>Filled under <span>{post.category}</span></p>
              <p></p>
            </div>
           </div>
          </div>
          <div className="grid md:col-start-4 md:col-end-10">
            <p>{post.contentTextP1}</p>
            <p>{post.contentTextP2}</p>
            <h3>{post.contentH1}</h3>
            <p>{post.contentTextP3}</p>
            <div>
              <h4>{post.contentBullet1}</h4>
              <p>{post.contentBullet1Text}</p>
            </div>
            <div>
              <h4>{post.contentBullet2}</h4>
              <p>{post.contentBullet2Text}</p>
            </div>
            <div>
              <h4>{post.contentBullet3}</h4>
              <p>{post.contentBullet3Text}</p>
            </div>
            <div>
              <h4>{post.contentBullet4}</h4>
              <p>{post.contentBullet4Text}</p>
            </div>
            <h3>{post.contentH2}</h3>
            <p>{post.contentTextP4}</p>
            <p>{post.contentTextP5}</p>
          </div>
          <div className="grid md:col-start-10 md:col-end-13"></div>
        </div>
        </div>
      </div>
    )
  }