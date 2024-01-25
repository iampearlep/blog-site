import React from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";
import archImg from "@/public/images/architecture-03.jpg";
import { data } from "@/data/data";
import Card from "./Card";

export const fraunces = Fraunces({ subsets: ["latin"] });

const Banner = () => {
  return (
    <div className="px-6 py-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
        <div className="grid md:col-start-1 md:col-end-10">
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
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-5 md:col-start-10 md:col-end-13">
          <Card
            id={data[1].id}
            title={data[1].title}
            image={data[1].image}
            category={data[1].category}
            description={data[1].description}
          />
          <Card
            id={data[2].id}
            title={data[2].title}
            image={data[2].image}
            category={data[2].category}
            description={data[2].description}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
