
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-auto bg-[rgba(112,154,90,1)]">
      <div className="w-full h-auto   flex flex-row flex justify-between ">
        <div className='flex flex-row items-center w-full h-auto   '>
          <Image
            alt='logo'
            src="/assets/svgs/logo.svg"
            // width={108}
            // height={71}
            // className={{ marginLeft: "17.77px", paddingTop: "12px" }}
            className='ml-[2%]  w-[20%] md:w-[10%] lg:w-[10%] xl:w-[10%] 2xl:w-[7.5%] 3xl:w-[7%] 4xl:w-[7%] 5xl:w-[7%] h-auto pt-[1%]'
          />
          <div className="w-auto   h-auto  mt-[2%]   pb-[1%]   flex flex-col justify-center items-center">
            <p className="font-inknut pt-[2%]   text-[18px] md:text-[12px] lg:text-[15px] xl:text-[20px]  2xl:text-[14px] 3xl:text-[25px] 4xl:text-[29px] 5xl:text-[30px]">BUCKEYE</p>
            <p className="font-inknut   text-[15px] md:text-[20px] lg:text-[16px] xl:text-[`2px] 2xl:text-[12px] 3xl:text-[15px] 4xl:text-[17px] 5xl:text-[29px] whitespace-nowrap">-WEB SOLUTIONS-</p>
          </div>
        </div>

        {/* Desktop Menu (visible only on large screens) */}
        <div className='flex justify-center items-center mr-[10%]'>
        <div className="whitespace-nowrap w-auto   flex items-center gap-[5%]  hidden lg:flex">
          <a href="/Homepage" className="link-underline  font-istok  text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[14px] 3xl:text-[20px] 4xl:text-[25px] 5xl:text-[39px] text-white">
            Home
          </a>
          <a href="/Services" className="link-underline  font-istok text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[14px] 3xl:text-[20px] 4xl:text-[25px] 5xl:text-[39px] text-white">
            Services
          </a>
          <a href="/Portfolio" className="link-underline  font-istok text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[14px] 3xl:text-[20px] 4xl:text-[25px] 5xl:text-[39px] text-white">
            Portfolio
          </a>
          <a href="/About_Us" className="link-underline  font-istok text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[14px] 3xl:text-[20px] 4xl:text-[25px] 5xl:text-[39px] text-white">
            About us
          </a>
          <a href="/ContactUs" className="link-underline font-istok text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[14px] 3xl:text-[20px] 4xl:text-[25px] 5xl:text-[39px] text-white">
            Contact us
          </a>
        </div>
        </div>



        {/* Hamburger Icon for Mobile (visible only on small screens) */}
        
        
        <div className="relative flex justify-center items-center mr-3">
  <button
    onClick={toggleMenu}
    className="lg:hidden flex items-center text-white focus:outline-none"
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  </button>
</div>

        </div>
      

      {/* Mobile Menu (visible only when the hamburger menu is open) */}
      {isMenuOpen && (
        <div className="absolute top-[70px] right-0 w-[250px] bg-white py-4 lg:hidden z-10">
          <a href="/Homepage" className="block text-black font-istok text-[17px]  text-center py-2">Home</a>
          <a href="/Services" className="block text-black font-istok text-[17px] text-center py-2">Services</a>
          <a href="/Portfolio" className="block text-black font-istok text-[17px] text-center py-2">Portfolio</a>
          <a href="/About_Us" className="block text-black font-istok text-[17px] text-center py-2">About us</a>
          <a href="/ContactUs" className="block text-black font-istok text-[17px] text-center py-2">Contact us</a>
        </div>
      )}
    </div>
  );
}
