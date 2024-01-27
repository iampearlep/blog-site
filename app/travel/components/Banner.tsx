import React from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";
import artImg from "@/public/images/art-culture-04.jpg";
import { data } from "@/data/data";
import Card from "@/components/Card";
import Link from "next/link";

export const fraunces = Fraunces({ subsets: ["latin"] });

const Banner = () => {
  return (
    <div className="px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <div className="grid md:col-start-1 md:col-end-10">
          <Link href={`/article/3`}>
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
          <div className="py-5 flex flex-col gap-y-2">
            <p className="uppercase text-[0.65rem] font-semibold">
              Travel
            </p>
            <h2
              className={`${fraunces.className} text-[1.35rem] md:text-[1.65rem] font-medium pr-0 md:pr-5`}
            >
             1790 Mornington Peninsula Brews Excellence with In-Demand Coffee
            </h2>
            <p className="text-xs md:text-sm font-medium">
                1790 is setting high standards in the local coffee scene with it's much sought after, top-quality blends.
             
            </p>
          </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 md:col-start-10 md:col-end-13">
          {data.slice(3, 4).map((post) => {
            return (
              <div>
                <Card key={post.id} data={post} />
              </div>
            )
          })}
          {data.slice(8, 9).map((post) => {
            return (
              <div>
                <Card key={post.id} data={post} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Banner;
