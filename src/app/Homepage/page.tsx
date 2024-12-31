"use client";
import Link from 'next/link';
import Header from "../Components/Header";  // Adjust import paths accordingly
import Footer from "../Components/Footer";  // Adjust import paths accordingly
import Carousel from "../Components/Carousel"; // Adjust import paths accordingly
import Image from 'next/image';


export default function HomePage(){
 

    return (
        <div className="overflow-x-hidden max-w-[1440px] mx-auto">
          <Header />
          {/* Main Content */}
          <div className="w-[1280px] h-auto">
            <div className="w-[1280px] h-auto pt-[50px] pr-[108px] pl-[81px] pb-[20px] sm:pb-[130px] md:pb-[140px] lg:pb-[152px] flex flex-col md:flex-row">
              <div className="mt-[20px] mb-[37px] w-[549px] h-auto">
                <p className="font-lancelot  lg:text-[68px] tracking-tight leading-[1.3] text-[40px] sm:text-[46px] md:text-[58px]  ">
                  Building Websites <br />
                  that grow your <br />
                  business
                </p>
                <div  className="w-[275px] h-[60px] mt-[20px] rounded-[43px]  border border-black pt-[17px] pl-[53px] transition duration-300 ease-in-out hover:bg-black hover:text-white">
                <Link href="/QuoteRequestForm">
                  <button  className="mb-[37px] ">
                    REQUEST A QUOTE
                  </button>
                </Link>
                </div>
              </div>
              <div className="ml-[208px] mt-[-30px] hidden sm:block">
                <Image alt="starship" className="max-w-full" src="/assets/svgs/starship.svg" />
              </div>
            </div>
          </div>
    
          {/* What we provide */}
          <div className=" hidden md:flex w-[1280px] h-[790px] bg-[rgba(66,72,70,1)] flex flex-row">
            <div className="w-[679px] h-[278px] ml-[302px] mr-[299px] pt-[101px] ">
              <div className="w-full flex flex-row justify-center space-x-2">
                <p className="font-lancelot text-[64px]">What we</p>
                <p className="font-lancelot text-[64px] text-[rgba(112,154,90,1)]">provide</p>
              </div>
              <div className="flex flex-row">
                {/* Web Development */}
                <div className="w-[360px] h-[418px] pt-[57px] ml-[-264px] mt-[40px] border-[3px] border-solid rounded-[16px] mr-[22px]" style={{ borderColor: "rgba(221, 221, 221, 1)" }}>
                  <Image alt='vector' src="/assets/svgs/Vector.svg" width={88.14} height={88.14} style={{ marginLeft: "134px" }} />
                  <div className="w-auto h-[89px] ml-[34px] mr-[35px] flex items-center justify-center space-x-4">
                    <p className="font-lancelot text-[45px]">Custom</p>
                    <p className="font-lancelot text-[45px] text-[rgba(112,154,90,1)]">web</p>
                    <p className="font-lancelot text-[45px] text-[rgba(112,154,90,1)]">design</p>

                  </div>
                  <div className="w-[294px] h-[76px] ml-[33px] text-[rgba(255,255,255,1)] flex justify-between items-center grid place-items-center">
                    <p className="text-justify">Tailored websites designed to reflect your brand and engage your customers.</p>
                  </div>
                  {/* <button>
                    <div className="absolute w-[50px] h-[50px] bg-[rgba(112,154,90,1)] rounded-full mt-[17px] ml-[280px] flex justify-center items-center z-40">
                      <Image alt='arrow' src="/assets/svgs/arrow.svg" width={27.5} height={41.24}/>
                    </div>
                  </button> */}
                </div>
    
                {/* SEO Optimization */}
                <div className="w-[360px] h-[418px] pt-[57px] ml-[22px] mt-[40px] border-[3px] border-solid rounded-[16px] mr-[22px]" style={{ borderColor: "rgba(221, 221, 221, 1)" }}>
                  <Image alt='SEO' src="/assets/svgs/SEO.svg" width={88.14} height={88.14} style={{ marginLeft: "134px" }} />
                  <div className="w-[291px] h-[89px] ml-[34px] mr-[35px] flex items-center justify-center space-x-4">
                    <p className="font-lancelot text-[45px]">SEO</p>
                    <p className="font-lancelot text-[45px] text-[rgba(112,154,90,1)]">optimization</p>
                  </div>
                  <div className="w-[294px] h-[76px] ml-[33px] text-[rgba(255,255,255,1)] flex justify-between items-center grid place-items-center">
                    <p className="text-justify">Optimized websites to improve your visibility and drive traffic to your business.</p>
                  </div>
                  {/* <button>
                    <div className="absolute w-[50px] h-[50px] bg-[rgba(112,154,90,1)] rounded-full mt-[17px] ml-[280px] flex justify-center items-center z-40">
                      <Image alt='Arrow' src="/assets/svgs/arrow.svg" width={27.5} height={41.24} />
                    </div>
                  </button> */}
                </div>
    
                {/* Marketing Solutions */}
                <div className="w-[360px] h-[418px] pt-[57px] ml-[22px] mt-[40px] border-[3px] border-solid rounded-[16px] mr-[22px]" style={{ borderColor: "rgba(221, 221, 221, 1)" }}>
                  <Image alt='Marketing' src="/assets/svgs/Marketing.svg" width={88.14} height={88.14} style={{ marginLeft: "134px" }} />
                  <div className="w-[291px] h-[89px] ml-[34px] mr-[35px] flex items-center justify-center space-x-4">
                    <p className="font-lancelot text-[45px]">Website</p>
                    <p className="font-lancelot text-[45px] text-[rgba(112,154,90,1)]">Management & Maintenance</p>
                  </div>
                  <div className="w-[294px] h-[76px] ml-[33px] text-[rgba(255,255,255,1)] flex justify-between items-center grid place-items-center">
                    <p className="text-justify">We take care of your website, keeping it secure, updated, and running smoothly.</p>
                  </div>
                  {/* <button>
                    <div className="absolute w-[50px] h-[50px] bg-[rgba(112,154,90,1)] rounded-full mt-[17px] ml-[280px] flex justify-center items-center z-40">
                      <Image alt='Arrow' src="/assets/svgs/arrow.svg" width={27.5} height={41.24} />
                    </div>
                  </button> */}
                </div>
              </div>
            </div>
          </div>
    
          {/* Customer Reviews */}
    <div className="h-auto max-w-full">
      {/* Text Section */}
      <div className="w-full pt-[95px] flex flex-col sm:flex-row items-center justify-center text-center px-4">
        <p className="font-abhaya text-[48px] sm:text-[64px]">Hear from our</p>
        <p className="font-abhaya text-[64px] text-[rgba(112,154,90,1)] sm:text-[64px] ml-[10px]">customers</p>
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