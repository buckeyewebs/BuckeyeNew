"use client"
import Image from "next/image";
export default function Footer() {
    return (
        <div className="w-full max-w-1440px bg-[rgba(112,154,90,1)] px-5 py-10">
            <div className="flex flex-wrap justify-center items-center">
                {/* Logo and Text Section */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/assets/svgs/logo.svg"
                        alt="Logo"
                        className="w-[27%] md:w-[25%] lg:w-[30%] xl:w-[35%] 2xl:w-[35%] 3xl:w-[30%] 4xl:w-[35%] 5xl:w-[26%]"
                    />
                    <div className="text-center">
                        <p className="font-inknut text-[18px] md:text-[22px] lg:text-[25px] xl:text-[30px]  2xl:text-[40px] 3xl:text-[45px] 4xl:text-[69px] 5xl:text-[79px]">BUCKEYE</p>
                        <p className="font-inknut text-[15px] md:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] 4xl:text-[59px] 5xl:text-[59px] whitespace-nowrap">-WEB SOLUTIONS-</p>
                        <p className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-inknut text-white">
                            Crafting Digital Solutions for Business Growth
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="flex flex-wrap justify-center lg:justify-between mt-10 gap-8 text-white">
                {/* Quick Links */}
                <div className="hidden lg:block">
                    <p className="font-inknut text-[15px] md:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] 4xl:text-[59px] 5xl:text-[59px]  mb-4">QUICK LINKS</p>
                    <div className="flex flex-col space-y-2">
                        <a href="/Homepage" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-inknut">Home</a>
                        <a href="/Services" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-inknut">Services</a>
                        <a href="/Portfolio" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-inknut">Portfolio</a>
                        <a href="/About_Us" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-inknut">About us</a>
                    </div>
                </div>

                {/* Legal */}
                <div className="hidden lg:block">
                    <p className="font-inknut text-[15px] md:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] 4xl:text-[59px] 5xl:text-[59px]  mb-4">LEGAL</p>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-inknut">Privacy Policy</a>
                        <a href="/Refund_Cancellation" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-inknut">Refund and Cancellation</a>
                    </div>
                </div>

                {/* Get in Touch */}
                <div>
                    <p className="font-inknut text-[15px] md:text-[20px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px] 4xl:text-[59px] 5xl:text-[59px]  mb-4">GET IN TOUCH</p>
                    <div className="flex flex-col space-y-4">
                            <div className="flex items-center">
                                <Image src="/assets/svgs/envelope.svg" alt="Email" className="h-auto w-auto mr-3" />
                                <a href="#" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-inknut">info@buckeyewebs.com</a>
                            </div>
                        <div className="flex items-center">
                            <Image src="/assets/svgs/Telephone.svg" alt="Phone" className=" w-auto h-auto  mr-3" />
                            <a href="#" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-inknut">(216) 482-1085</a>
                        </div>
                        <div className="flex items-center">
                            <Image src="/assets/svgs/Location.svg" alt="Location" className="w-auto h-auto  mr-3" />
                            <a href="#" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-inknut">
                            Cleveland, OH , USA
                            </a>
                        </div>
                    </div>
                   
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-10">
                <p className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[25px] 4xl:text-[30px]  5xl:text-[40px] font-istok">
                    Copyright © 2024 Buckeye Media Solutions Pvt. Ltd. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}
