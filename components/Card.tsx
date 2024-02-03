import React from "react";
import Image from "next/image";
import { Posts } from "@/interface";
import Link from "next/link";
interface CardProps {
  data: Posts;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const dynamicUrl = `/article/${data.slug}`;
  return (
    <Link href="/" as={dynamicUrl}>
      <div key={data._id}>
        <div>
          <Image
            src={data.coverImage}
            height={1000}
            width={1920}
            priority={true}
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="py-3 flex flex-col gap-y-2">
          <p className="uppercase text-[0.65rem] font-semibold">
            {data.category}
          </p>
          <h2 className="text-sm md:text-base font-semibold">{data.title}</h2>
          <p className="text-xs md:text-sm font-medium">{data.excerpt}.</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
