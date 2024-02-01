"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import { IoSearch } from "react-icons/io5";
import Search from "./Search";

export const fraunces = Fraunces({ subsets: ["latin"] });

const Navbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle(!isToggle);
  };
  return (
    <div className="">
      <div className="mx-auto hidden md:flex justify-between px-4 py-8">
        <div className="flex flex-col mx-auto w-full px-2 gap-y-4">
          <div className="hidden md:block text-4xl font-extrabold text-center pb-5">
            <Link href="/" className={`${fraunces.className} cursor-pointer` }>
              Explore.
            </Link>
          </div>
          <div className="hidden md:flex flex-row justify-between items-center text-lg font-semibold border-b-2 border-[#eeeeee] py-2">
            <div>
            <div className="hidden md:flex flex-row gap-x-8">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <Link href="/architecture" className="cursor-pointer">
              Architecture
            </Link>
            <Link href="/travel" className="cursor-pointer">
              Travel
            </Link>
            <Link href="/art-culture" className="cursor-pointer">
              Art & Culture
            </Link>
            <Link href="/" className="cursor-pointer">
              Food
            </Link>
          </div>
            </div>
            <div>
            <div className="w-full hidden md:hidden flex-row items-center justify-center gap-x-2">
            <button className="hidden">
              <Link href="">
              About
              </Link>
            </button>
              <Search />
          </div>
            </div>
          </div>
        </div>
      </div>
       {/* Mobile Screens */}
      <div className="w-full mx-auto flex md:hidden px-4 py-2">
         <div className="w-full mx-auto md:hidden flex ">
            <div className="flex flex-col mx-auto w-full px-2 gap-y-3">
                <div className="text-3xl font-extrabold text-center pb-2">
                <Link href="/" className={`${fraunces.className} text-3xl font-semibold cursor-pointer` }>
                 Explore.
                </Link>
                </div>
                <div className="w-full flex flex-row justify-between items-center border-b-2 border-[#eeeeee] py-2 text-sm">
                <div className="">
                <button onClick={handleToggle}>
              {isToggle ? (
                <p>Close Menu</p>
              ) : (
                <p>Menu</p>
              )}
            </button>
                </div>
                <div className="hidden flex-row gap-x-2">
                <button className="hidden">
              <Link href="">
              About
              </Link>
            </button>
            <Search />
                </div>
                </div>
            </div>
          {isToggle && (
            <div className="fixed top-0 right-0 h-full  w-full bg-[#b5c1bc] z-30 flex flex-col justify-start items-start">
             <div className="flex flex-row justify-between items-center ">
                <h1 className={`${fraunces.className} absolute top-7 left-5 text-4xl font-semibold`}><Link href="/" className="cursor-pointer">Explore.</Link></h1>
                <button onClick={handleToggle} className="absolute top-9 right-5">
              <p>Close Menu</p>
              </button>
             </div>
              <div className="mt-[340px] max-h-screen overflow-y-auto w-full">
                <div className="flex flex-col gap-5 items-start justify-start font-semibold text-xl px-5 ">
                  <Link
                    href="/"
                    onClick={handleToggle}
                    className="cursor-pointer border-b-2 border-[#898e8c] w-full py-2"
                  >
                    Home
                  </Link>
                  <Link
                    href="/architecture"
                    onClick={handleToggle}
                    className="cursor-pointer border-b-2 border-[#898e8c] w-full py-2"
                  >
                    Architecture
                  </Link>
                  <Link
                    href="/travel"
                    onClick={handleToggle}
                    className="cursor-pointer border-b-2 border-[#898e8c] w-full py-2"
                  >
                    Travel
                  </Link>
                  <Link
                    href="/art-culture"
                    onClick={handleToggle}
                    className="cursor-pointer border-b-2 border-[#898e8c] w-full py-2"
                  >
                    Art & Culture
                  </Link>
                  <Link
                    href="/"
                    onClick={handleToggle}
                    className="cursor-pointer border-b-2 border-[#898e8c] w-full"
                  >
                    Food
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
