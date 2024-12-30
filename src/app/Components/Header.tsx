"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-[1280px] h-[106px] bg-[rgba(112,154,90,1)]">
      <div className="w-[1141px] h-[89.26px] ml-[4.75%] flex flex-row">
        <Image
          alt='logo'
          src="/assets/svgs/logo.svg"
          width={108}
          height={71}
          style={{ marginLeft: "17.77px", paddingTop: "12px" }}
        />
        <div className="w-[238px] h-[50px] mt-[23px] mb-[16.26px] ml-[3.125%]">
          <p className="font-inknut text-[4.375%]">BUCKEYE</p>
          <p className="font-inknut text-[1.37%] ml-[3.33%]">-WEB SOLUTIONS-</p>
        </div>

        {/* Desktop Menu (visible only on large screens) */}
        <div className="ml-[350px] flex items-center gap-[23px] mt-[32.63px] mb-[22.63px] hidden lg:flex">
          <a href="/Homepage" className="link-underline h-[24px] font-istok text-[17px] text-white ">
            Home
          </a>
          <a href="/Services" className="link-underline h-[24px] font-istok text-[17px] text-white ">
            Services
          </a>
          <a href="/Portfolio" className="link-underline h-[24px] font-istok text-[17px] text-white ">
            Portfolio
          </a>
          <a href="/About_Us" className="link-underline min-w-[80px] h-[24px] font-istok text-[17px] text-white ">
            About us
          </a>
          <a href="/ContactUs" className="link-underline min-w-[93px] h-[24px] font-istok text-[17px] text-white">
            Contact us
          </a>
        </div>

        {/* Hamburger Icon for Mobile (visible only on small screens) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none absolute right-4 top-6"
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

      {/* Mobile Menu (visible only when the hamburger menu is open) */}
      {isMenuOpen && (
        <div className="absolute top-[70px] right-0 w-[250px] bg-white py-4 lg:hidden z-10">
          <a href="/Homepage" className="block text-black font-istok text-[17px] text-center py-2">Home</a>
          <a href="/Services" className="block text-black font-istok text-[17px] text-center py-2">Services</a>
          <a href="/Portfolio" className="block text-black font-istok text-[17px] text-center py-2">Portfolio</a>
          <a href="/About_Us" className="block text-black font-istok text-[17px] text-center py-2">About us</a>
          <a href="/ContactUs" className="block text-black font-istok text-[17px] text-center py-2">Contact us</a>
        </div>
      )}
    </div>
  );
}
