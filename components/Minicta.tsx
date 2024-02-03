import React from "react";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"] });

const Minicta = () => {
  return (
    <div className="bg-[#262c29]">
      <div className="text-white  mx-auto flex flex-col justify-center py-6  text-center md:text-start md:items-center items-center gap-y-20">
        <div className="w-11/12 mx-auto flex flex-col gap-y-8">
          <p className="uppercase text-sm font-semibold">Join the community</p>
          <h2
            className={`${fraunces.className} md:text-[1.45rem] font-light capitalize`}
          >
            Subscribe to our weekly newsletter for curated architectural,
            interior, designs delivered to your inbox
          </h2>
        </div>
        <div className="w-11/12 mx-auto flex flex-col relative">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-[#262c29] px-8 py-4 border border-white w-full rounded-full placeholder:text-white placeholder:text-sm placeholder:font-semibold"
          />
          <button className="absolute top-1.5 right-8 text-sm border-l border-white pl-6 py-3 font-semibold">
            Submit
          </button>
          <p className="pt-5 text-xs font-semibold">
            We never share your data. See{" "}
            <span className="capitalize underline">privacy policy</span> for
            more info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Minicta;
