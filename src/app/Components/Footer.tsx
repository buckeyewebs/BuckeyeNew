"use client"
import Image from "next/image";
export default function Footer() {
    return (
        <div className="w-full bg-[rgba(112,154,90,1)] px-5 py-10">
            <div className="flex flex-wrap justify-center items-center">
                {/* Logo and Text Section */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/assets/svgs/logo.svg"
                        alt="Logo"
                        className="w-[102.18px] h-[71px] mb-4"
                    />
                    <div className="text-center">
                        <p className="font-inknut text-[31px]">BUCKEYE</p>
                        <p className="font-inknut text-[15px]">-WEB SOLUTIONS-</p>
                        <p className="font-inknut text-[12px] text-white mt-4">
                            Crafting Digital Solutions for Business Growth
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="flex flex-wrap justify-center lg:justify-between mt-10 gap-8 text-white">
                {/* Quick Links */}
                <div className="hidden lg:block">
                    <p className="font-inknut text-[18px] mb-4">QUICK LINKS</p>
                    <div className="flex flex-col space-y-2">
                        <a href="/Homepage" className="text-[13px] font-inknut">Home</a>
                        <a href="/Services" className="text-[13px] font-inknut">Services</a>
                        <a href="/Portfolio" className="text-[13px] font-inknut">Portfolio</a>
                        <a href="/About_Us" className="text-[13px] font-inknut">About us</a>
                    </div>
                </div>

                {/* Legal */}
                <div className="hidden lg:block">
                    <p className="font-inknut text-[18px] mb-4">LEGAL</p>
                    <div className="flex flex-col space-y-2">
                        <a href="/Privacy_Policy" className="text-[13px] font-inknut">Privacy Policy</a>
                        <a href="/Refund_Cancellation" className="text-[13px] font-inknut">Refund and Cancellation</a>
                    </div>
                </div>

                {/* Get in Touch */}
                <div>
                    <p className="font-inknut text-[18px] mb-4">GET IN TOUCH</p>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center">
                            <Image src="/assets/svgs/envelope.svg" alt="Email" className="w-6 h-6 mr-3" />
                            <a href="#" className="text-[13px] font-inknut"> info@buckeyewebs.com</a>
                        </div>
                        <div className="flex items-center">
                            <Image src="/assets/svgs/Telephone.svg" alt="Phone" className="w-5 h-5 mr-3" />
                            <a href="#" className="text-[13px] font-inknut">(216) 482-1085</a>
                        </div>
                        <div className="flex items-center">
                            <Image src="/assets/svgs/Location.svg" alt="Location" className="w-5 h-5 mr-3" />
                            <a href="#" className="text-[13px] font-inknut">
                            Cleveland, OH 
                            </a>
                        </div>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><Image src="/assets/svgs/Instagram.svg" alt="Instagram" className="w-8 h-8" /></a>
                        <a href="#"><Image src="/assets/svgs/Facebook.svg" alt="Facebook" className="w-8 h-8" /></a>
                        <a href="#"><Image src="/assets/svgs/Linkedin.svg" alt="LinkedIn" className="w-8 h-8" /></a>
                        <a href="#"><Image src="/assets/svgs/Twitter.svg" alt="Twitter" className="w-8 h-8" /></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center mt-10">
                <p className="text-[13px] font-istok">
                    Copyright © 2024 Buckeye Media Solutions Pvt. Ltd. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}


