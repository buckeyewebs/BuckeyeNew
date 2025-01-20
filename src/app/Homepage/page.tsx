"use client";
import Link from 'next/link';
import Header from "../Components/Header";  // Adjust import paths accordingly
import Footer from "../Components/Footer";  // Adjust import paths accordingly
import Carousel from "../Components/Carousel"; // Adjust import paths accordingly
import Image from 'next/image';


export default function HomePage() {


  return (
    <div className="overflow-x-hidden">
      <Header />
      {/* Main Content */}
      <div className="w-full h-auto ">
        <div className="w-full  h-auto flex justify-between justify-center items-center  pt-[5%]  flex flex-row">
          <div className="ml-[3%] mb-[5%] w-auto h-auto">
            <p className="p-3  font-lancelot xl:text-[78px] 2xl:text-[88px] 3xl:text-[95px] 4xl:text-[140px] 5xl:text-[180px] lg:text-[68px] tracking-tight leading-[1.3] text-[40px] sm:text-[46px] md:text-[58px]  ">
              Building Websites <br />
              that grow your <br />
              business
            </p>
            <div className="p-6  flex justify-center items-center  h-auto rounded-[43px] border border-black  transition duration-300 ease-in-out hover:bg-black hover:text-white">
              <Link href="/QuoteRequestForm">
                <button className="text-[16px] text-center whitespace-nowrap lg:text-[22px] md:text-[20px] sm:text-[18px] 3xl:text-[35px] 4xl:text-[40px]  5xl:text-[50px]  w-full">
                  REQUEST A QUOTE
                </button>
              </Link>
            </div>

          </div>
          <div className="hidden sm:block pb-2 md:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%] 3xl:w-[40%] 4xl:w-[35%] 5xl:w-[30%] h-auto  mr-[3%]">
            <Image alt="starship" className="w-full object-cover h-auto" src="/assets/svgs/starship.svg" />
          </div>
        </div>
      </div>

      {/* What we provide */}
      <div className="hidden md:flex w-[100%]   h-auto h-auto bg-[rgba(66,72,70,1)] flex flex-row">
        <div className="w-full flex flex-col  justify-items items-center h-auto pt-[3.5%] ">
          <div className="w-full flex flex-row justify-center items-center space-x-2">
            <p className="font-lancelot text-[78px] xl:text-[84px] 2xl:text-[98px] 3xl:text-[95px] 4xl:text-[105px] 5xl:text-[200px] lg:text-[68px] ">What we</p>
            <p className="font-lancelot text-[78px] xl:text-[84px] 2xl:text-[98px] 3xl:text-[95px] 4xl:text-[105px] 5xl:text-[200px] lg:text-[68px]  pl-[0.5%] text-[rgba(112,154,90,1)]">provide</p>
          </div>
          <div className="w-[100%] mt-[3%]  mb-[3%] flex flex-row justify-center items-center">
            {/* Web Development */}
            <div className=" flex-1  ml-[2%] mb-[2%] max-w-full h-full overflow-hidden flex justify-center items-center   w-full h-auto pt-[2%]  mt-[1.5%] border-[3px] border-solid rounded-[16px] mr-[1%]" style={{ borderColor: "rgba(221, 221, 221, 1)" }}>
              <div>
              <div className='flex justify-center '>
              <Image alt='vector' src="/assets/svgs/Vector.svg" width={88.14} height={88.14} className='w-[30%] 4xl:w-[20%]' />
              </div>
              <div className="w-full h-auto mt-[3%] flex items-center justify-center space-x-4">
                <p className="font-lancelot 4xl:text-[84px] 3xl:text-[60px] 2xl:text-[60px] xl:text-[55px] lg:text-[45px] md:text-[38px] 5xl:text-[134px]  ">Custom</p>
                <p className=" font-lancelot 5xl:text-[134px] 4xl:text-[84px] 3xl:text-[60px] 2xl:text-[60px]  xl:text-[55px] lg:text-[45px] md:text-[38px] sm:text-[64px]  text-[rgba(112,154,90,1)]">Web</p>
              </div>
              <p className=" font-lancelot 5xl:text-[134px] 4xl:text-[84px] 3xl:text-[60px] 2xl:text-[60px]  xl:text-[55px] lg:text-[45px] md:text-[38px] sm:text-[64px]  text-[rgba(112,154,90,1)] text-center">Design</p>

              
              <div className='flex items-center justify-center ml-[1%] mr-[1%]'>
              <div className="w-full h-auto text-[rgba(255,255,255,1)] p-5">
                <p className=" text-justify text-[15px] md:text-[20px] lg:text-[20px] xl:text-[30px] 2xl:text-[38px] text-3xl 4xl:text-[50px] 5xl:text-[69px] text-sm leading-tight">Tailored websites designed to reflect your brand and engage your customers.</p>
              </div>  
              </div>            
              </div>
            </div>

            {/* SEO Optimization */}
            <div className="flex-1  ml-[2%] mb-[2%] max-w-full h-full overflow-hidden flex justify-center items-center   w-full h-auto pt-[2%]  mt-[1.5%] border-[3px] border-solid rounded-[16px] mr-[1%]" style={{ borderColor: "rgba(221, 221, 221, 1)" }}>
              <div>
              <div className='flex justify-center '>
              <Image alt='vector' src="/assets/svgs/SEO.svg" width={88.14} height={88.14} className='w-[30%] 4xl:w-[20%]' />
              </div>
              <div className="w-full h-auto mt-[3%] flex items-center justify-center space-x-4">
                <p className="font-lancelot 4xl:text-[84px] 3xl:text-[60px] 2xl:text-[60px] xl:text-[55px] lg:text-[45px] md:text-[38px]   5xl:text-[134px]">SEO</p>
              </div>
              <p className="text-center font-lancelot 5xl:text-[134px] 4xl:text-[84px]  3xl:text-[60px] 2xl:text-[60px] xl:text-[55px] lg:text-[45px] md:text-[38px]  text-[rgba(112,154,90,1)]">optimization</p>

              <div className='flex items-center ml-[1%] mr-[1%] justify-center'>
              <div className="w-full h-auto text-[rgba(255,255,255,1)] p-5">
                <p className="text-[15px] md:text-[20px] lg:text-[20px] xl:text-[30px] 2xl:text-[38px] text-3xl 4xl:text-[50px] 5xl:text-[69px] text-justify text-sm leading-tight">Optimized websites to improve your visibility and drive traffic to your business.</p>
              </div>  
              </div>            
              </div>
            </div>

            {/* Marketing Solutions */}
            <div className="flex-1  ml-[2%] mb-[2%] max-w-full h-full overflow-hidden flex justify-center items-center   w-full h-auto pt-[2%]  mt-[1.5%] border-[3px] border-solid rounded-[16px] mr-[1%]" style={{ borderColor: "rgba(221, 221, 221, 1)" }}>
              <div>
              <div className='flex justify-center '>
              <Image alt='vector' src="/assets/svgs/Marketing.svg" width={88.14} height={88.14} className='w-[30%] 4xl:w-[20%]' />
              </div>
              <div className="w-full h-auto  mt-[3%] flex items-center justify-center space-x-4">
                <p className="font-lancelot 4xl:text-[84px] 3xl:text-[60px] 2xl:text-[60px] xl:text-[55px] lg:text-[45px] md:text-[38px]   5xl:text-[134px] text-center">Website</p>
              </div>
              <p className="font-lancelot 5xl:text-[134px] 4xl:text-[84px] 3xl:text-[60px] 2xl:text-[60px] xl:text-[55px] lg:text-[45px] md:text-[38px]  text-[rgba(112,154,90,1)] text-center">Management</p>

              <div className='flex items-center ml-[1%] mr-[1%] justify-center'>
              <div className="w-full h-auto text-[rgba(255,255,255,1)] p-5">
                <p className="text-[15px] md:text-[20px] lg:text-[20px] xl:text-[30px] 2xl:text-[38px] text-3xl 4xl:text-[50px] 5xl:text-[69px] text-justify text-sm leading-tight">We take care of your website, keeping it secure, updated, and running smoothly.</p>
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
        <div className="w-full pt-[95px] flex flex-col sm:flex-row items-center justify-center text-center px-4">
          <p className="font-abhaya text-[48px] sm:text-[64px] text-[78px] xl:text-[78px] 2xl:text-[88px] 3xl:text-[95px] 4xl:text-[105px] 5xl:text-[200px] lg:text-[68px] ">Hear from our</p>
          <p className="font-abhaya text-[64px] text-[rgba(112,154,90,1)] sm:text-[64px] text-[78px] xl:text-[78px] 2xl:text-[88px] 3xl:text-[95px] 4xl:text-[105px] 5xl:text-[200px] lg:text-[68px]  ml-[30px]">customers</p>
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