"use client";
import Link from 'next/link';
import Header from "../Components/Header";  // Adjust import paths accordingly
import Footer from "../Components/Footer";  // Adjust import paths accordingly
import Carousel from "../Components/Carousel"; // Adjust import paths accordingly
import Image from 'next/image';
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function HomePage() {


  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const { ref: ref1 } = useInView({
    threshold: 0.2, // Trigger when 20% of the element is visible
    onChange: (inView) => setIsVisible(inView),
  });

  // Second element's visibility
  const { ref: ref2 } = useInView({
    threshold: 0.2,
    onChange: (inView) => setIsVisible2(inView),
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
      // Get the message from localStorage
      const storedMessage = localStorage.getItem("homepageMessage");
      if (storedMessage) {
          setMessage(storedMessage);

          // Clear the message after 15 seconds
          const timer = setTimeout(() => {
              setMessage("");
              localStorage.removeItem("homepageMessage");
          }, 15000);

          // Cleanup timer
          return () => clearTimeout(timer);
      }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // Trigger animation when in view
        } else {
          setAnimate(false); // Reset animation when out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    const element = document.querySelector(".animate-container");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div>
            {message && (
                <div className="bg-green-500 text-white p-4 rounded-md mb-4">
                    {message}
                </div>
            )}
            
        </div>
      <div className="w-full h-auto animate-container">
        <div className="w-full h-auto flex justify-between items-center pt-[5%] flex-row">
          {/* Text and Button Section */}
          <div className={`ml-[3%] sm:mb-[5%] w-auto h-auto ${animate ? "animate-slide-in-left" : ""}`}>
            {/* Animated Heading */}
            <p className="p-3 font-lancelot tracking-tight leading-[1.3] xl:text-[37px] 2xl:text-[50px] 3xl:text-[55px] 4xl:text-[90px] 5xl:text-[110px] lg:text-[38px]  text-[30px] sm:text-[36px] md:text-[28px]">
              Building Websites <br />
              that grow your <br />
              business
            </p>
            {/* Animated Button */}
            <div
  className={`p-6 flex justify-center items-center h-auto rounded-[43px] border border-black transition duration-300 ease-in-out transform ${
    animate ? "opacity-100 animate-pulse-fade-in" : "opacity-0"
  } hover:bg-black hover:text-white group`}
>
              <Link href="/QuoteRequestForm">
                <button className="text-[16px] text-center whitespace-nowrap lg:text-[18px] md:text-[14px] sm:text-[18px] 3xl:text-[35px] 4xl:text-[40px] 5xl:text-[50px] w-auto">
                  REQUEST A QUOTE
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`hidden sm:block pb-2 md:w-[36%] lg:w-[26%] xl:w-[26%] 2xl:w-[26%] 3xl:w-[26%] 4xl:w-[26%] 5xl:w-[26%] h-auto mr-[3%] ${animate ? "animate-slide-in-right" : ""
              }`}
          >
            <Image
              alt="starship"
              className="w-full object-cover h-auto"
              src="/assets/svgs/starship.svg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* What we provide */}
      <div className="hidden md:flex w-[100%]   h-auto h-auto bg-[rgba(66,72,70,1)] flex flex-row">
        <div className="w-full flex flex-col  justify-items items-center h-auto pt-[3.5%] ">
          <div
            ref={ref1}
            className={`w-full flex flex-row justify-center items-center space-x-2 transition-transform duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
              }`}
          >
            <p className="font-lancelot  xl:text-[58px] 2xl:text-[68px] 3xl:text-[75px] 4xl:text-[120px] 5xl:text-[150px] lg:text-[68px]  text-[40px] sm:text-[46px] md:text-[48px]">What we</p>
            <p className="font-lancelot  xl:text-[58px] 2xl:text-[68px] 3xl:text-[75px] 4xl:text-[120px] 5xl:text-[150px] lg:text-[68px]  text-[40px] sm:text-[46px] md:text-[48px]  pl-[0.5%] text-[rgba(112,154,90,1)] ">provide</p>
          </div>
          <div className="w-[100%] mt-[3%]  mb-[3%] flex flex-row justify-center items-center">
            {/* Web Development */}
            <div className=" flex-1  ml-[2%] mb-[2%] max-w-full h-full overflow-hidden flex justify-center items-center   w-full h-auto pt-[2%]  mt-[1.5%] border-[3px] border-solid rounded-[16px] mr-[1%]" style={{ borderColor: "rgba(221, 221, 221, 1)" }}>
              <div>
                <div className='flex justify-center '>
                  <Image alt='vector' src="/assets/svgs/Vector.svg" width={88.14} height={88.14} className='w-[20%] 4xl:w-[20%]' />
                </div>
                <div className="w-full h-auto mt-[3%] flex items-center justify-center space-x-4">
                  <p className="font-lancelot text-[64px]  xl:text-[38px] 2xl:text-[38px] 3xl:text-[55px] 4xl:text-[80px] 5xl:text-[90px] lg:text-[38px]  text-[25px] sm:text-[36px] md:text-[23px]  ">Custom</p>
                  <p className=" font-lancelot text-[64px]  xl:text-[38px] 2xl:text-[38px] 3xl:text-[55px] 4xl:text-[80px] 5xl:text-[90px] lg:text-[38px]  text-[25px] sm:text-[36px] md:text-[23px]  text-[rgba(112,154,90,1)]">Web</p>
                </div>
                <p className=" font-lancelot text-[64px]  xl:text-[38px] 2xl:text-[38px] 3xl:text-[55px] 4xl:text-[80px] 5xl:text-[90px] lg:text-[38px]  text-[25px] sm:text-[36px] md:text-[23px]  text-[rgba(112,154,90,1)] text-center">Design</p>


                <div className='flex items-center justify-center ml-[1%] mr-[1%]'>
                  <div className="w-full h-auto text-[rgba(255,255,255,1)] p-5">
                    <p className=" text-justify text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[25px] 4xl:text-[35px] 5xl:text-[49px] text-sm leading-tight">Tailored websites designed to reflect your brand and engage your customers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Optimization */}
            <div className="flex-1  ml-[2%] mb-[2%] max-w-full h-full overflow-hidden flex justify-center items-center   w-full h-auto pt-[2%]  mt-[1.5%] border-[3px] border-solid rounded-[16px] mr-[1%]" style={{ borderColor: "rgba(221, 221, 221, 1)" }}>
              <div>
                <div className='flex justify-center '>
                  <Image alt='vector' src="/assets/svgs/SEO.svg" width={88.14} height={88.14} className='w-[20%] 4xl:w-[20%]' />
                </div>
                <div className="w-full h-auto mt-[3%] flex items-center justify-center space-x-4">
                  <p className="font-lancelot text-[64px]  xl:text-[38px] 2xl:text-[38px]  3xl:text-[55px] 4xl:text-[80px] 5xl:text-[90px] lg:text-[38px]  text-[25px] sm:text-[36px] md:text-[23px]">SEO</p>
                </div>
                <p className="text-center font-lancelot text-[64px]  xl:text-[38px] 2xl:text-[38px]  3xl:text-[55px] 4xl:text-[80px] 5xl:text-[90px] lg:text-[38px]  text-[25px] sm:text-[36px] md:text-[23px] text-[rgba(112,154,90,1)]">optimization</p>

                <div className='flex items-center ml-[1%] mr-[1%] justify-center'>
                  <div className="w-full h-auto text-[rgba(255,255,255,1)] p-5">
                    <p className="text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[25px] 4xl:text-[35px] 5xl:text-[49px] text-justify text-sm leading-tight">Optimized websites to improve your visibility and drive traffic to your business.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Solutions */}
            <div className="flex-1  ml-[2%] mb-[2%] max-w-full h-full overflow-hidden flex justify-center items-center   w-full h-auto pt-[2%]  mt-[1.5%] border-[3px] border-solid rounded-[16px] mr-[1%]" style={{ borderColor: "rgba(221, 221, 221, 1)" }}>
              <div>
                <div className='flex justify-center '>
                  <Image alt='vector' src="/assets/svgs/Marketing.svg" width={88.14} height={88.14} className='w-[20%] 4xl:w-[20%]' />
                </div>
                <div className="w-full h-auto  mt-[3%] flex items-center justify-center space-x-4">
                  <p className="font-lancelot text-[64px]  xl:text-[38px] 2xl:text-[38px] 3xl:text-[55px] 4xl:text-[80px] 5xl:text-[90px] lg:text-[38px]  text-[25px] sm:text-[36px] md:text-[23px] text-center">Website</p>
                </div>
                <p className="font-lancelot text-[64px]  xl:text-[38px] 2xl:text-[38px] 3xl:text-[55px] 4xl:text-[80px] 5xl:text-[90px] lg:text-[38px]  text-[25px] sm:text-[36px] md:text-[23px]  text-[rgba(112,154,90,1)] text-center">Management</p>

                <div className='flex items-center ml-[1%] mr-[1%] justify-center'>
                  <div className="w-full h-auto text-[rgba(255,255,255,1)] p-5">
                    <p className="text-[15px] md:text-[20px] lg:text-[20px] xl:text-[20px] 2xl:text-[24px] 3xl:text-[25px] 4xl:text-[35px] 5xl:text-[49px] text-justify text-sm leading-tight">We take care of your website, keeping it secure, updated, and running smoothly.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="h-auto max-w-full">
        {/* Text Section */}
        <div
        ref={ref2}
          className={`w-full pt-[95px] flex flex-col sm:flex-row items-center justify-center text-center px-4 transition-transform duration-700 ease-out ${isVisible2 ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"}`}
        >          <p className="font-abhaya  text-[44px]  xl:text-[38px] 2xl:text-[48px] 3xl:text-[65px] 4xl:text-[80px] 5xl:text-[90px] lg:text-[48px]  text-[15px] sm:text-[26px] md:text-[38px] ">Hear from our</p>
          <p className="font-abhaya text-[44px] text-[rgba(112,154,90,1)]  xl:text-[38px] 2xl:text-[48px] 3xl:text-[65px] 4xl:text-[80px] 5xl:text-[90px] lg:text-[48px]  text-[15px] sm:text-[26px] md:text-[38px]  ml-[30px]">customers</p>
        </div>

        {/* Carousel Section */}
        <div>
          <Carousel />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}