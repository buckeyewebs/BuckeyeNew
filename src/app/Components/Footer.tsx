"use client"
import Image from "next/image";
export default function Footer() {
    return (
        <div className="w-full  bg-[rgba(112,154,90,1)] px-5 py-10">
            <div className="flex flex-wrap justify-center items-center">
                {/* Logo and Text Section */}
                
            </div>

            {/* Footer Links Section */}
            <div className="flex flex-wrap justify-center lg:justify-between mt-10 gap-8 text-white">
                {/* Quick Links */}
                <div className="hidden lg:block">
                    <p className="font-inknut text-[18px] md:text-[12px] lg:text-[15px] xl:text-[20px]  2xl:text-[20px] 3xl:text-[25px] 4xl:text-[29px] 5xl:text-[40px]  mb-4">QUICK LINKS</p>
                    <div className="flex flex-col space-y-2">
                        <a href="/Homepage" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[15px] 4xl:text-[20px]  5xl:text-[30px] font-inknut">Home</a>
                        <a href="/Services" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[15px] 4xl:text-[20px]  5xl:text-[30px] font-inknut">Services</a>
                        <a href="/Portfolio" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[15px] 4xl:text-[20px]  5xl:text-[30px] font-inknut">Portfolio</a>
                        <a href="/About_Us" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[15px] 4xl:text-[20px]  5xl:text-[30px] font-inknut">About us</a>
                    </div>
                </div>

                {/* Legal */}
                <div className="hidden lg:block">
                    <p className="font-inknut text-[18px] md:text-[12px] lg:text-[15px] xl:text-[20px]  2xl:text-[20px] 3xl:text-[25px] 4xl:text-[29px] 5xl:text-[40px]  mb-4">LEGAL</p>
                    <div className="flex flex-col space-y-2">
                        <a href="#" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[15px] 4xl:text-[20px]  5xl:text-[30px] font-inknut">Privacy Policy</a>
                        <a href="/Refund_Cancellation" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[15px] 4xl:text-[20px]  5xl:text-[30px] font-inknut">Refund and Cancellation</a>
                    </div>
                </div>

                {/* Get in Touch */}
                <div>
                    <p className="font-inknut text-[18px] md:text-[12px] lg:text-[15px] xl:text-[20px]  2xl:text-[20px] 3xl:text-[25px] 4xl:text-[29px] 5xl:text-[40px]  mb-4">GET IN TOUCH</p>
                    <div className="flex flex-col space-y-4">
                            <div className="flex items-center">
                                <Image src="/assets/svgs/envelope.svg" alt="Email" className="w-6 h-auto w-auto mr-3" />
                                <a href="#" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[15px] 4xl:text-[20px]  5xl:text-[30px] font-inknut">info@buckeyewebs.com</a>
                            </div>
                        <div className="flex items-center">
                            <Image src="/assets/svgs/Telephone.svg" alt="Phone" className=" w-auto h-auto  mr-3" />
                            <a href="#" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[15px] 4xl:text-[20px]  5xl:text-[30px] font-inknut">(216) 482-1085</a>
                        </div>
                        <div className="flex items-center">
                            <Image src="/assets/svgs/Location.svg" alt="Location" className="w-auto h-auto  mr-3" />
                            <a href="#" className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[15px] 4xl:text-[20px]  5xl:text-[30px] font-inknut">
                            Cleveland, OH , USA
                            </a>
                        </div>
                    </div>
                   
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-10">
                <p className="lg:text-[12px] md:text-[10px] sm:text-[18px] 3xl:text-[15px] 4xl:text-[20px]  5xl:text-[30px] font-istok">
                    Copyright © 2024 Buckeye Media Solutions Pvt. Ltd. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}
