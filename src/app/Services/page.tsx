"use client"
import Header from "../Components/Header"
import Link from 'next/link';
import ServicesComp from "../Components/ServicesComp"
import Footer from "../Components/Footer"
import Image from "next/image";
export default function Services() {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Header />
            <div className="relative w-full lg:max-w-[1280px] md:max-w-[940px] w-[500px]  md:h-[625px] ">
                <Image
                    src="/assets/svgs/image.png"
                    alt="services"
                    className="w-auto lg:h-[625px] md:h-[520px] sm:h-[480px] h-[480px] object-cover"
                />
                <div
                    className="absolute inset-0 flex flex-col  text-white  "
                    style={{
                        backdropFilter: 'blur(0.8px)',

                    }}
                >
                    <p className="lg:text-[78px] font-bold font-abhayaLibre text-[rgba(30,30,30,1)] mt-[122px] ml-[80px] mr-[535px] sm:text-[24px]">Our Services</p>
                    <div className="lg:w-[645px] w-[200px] h-[130px] ml-[80px] ">
                        <p className="font-istokWeb text-[rgba(0,0,0,1)]  text-[12px] lg:text-[18px] break-words ">
                        At BuckeyeWebs, we offer a range of professional services designed to meet the unique needs of your business. Whether you need a new website, ongoing maintenance, or expert SEO services, we are here to help.                        </p>
                        <div className="lg:w-[275px] w-[140px] h-[60px] rounded-[43px] border border-black transition duration-300 ease-in-out hover:bg-black group mt-[18px] flex items-center justify-center">
                            <Link href="/QuoteRequestForm">
                            <button className="text-[rgba(0,0,0,1)] lg:text-[20px]  text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                                Get in touch now
                            </button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center  ">
                <div className="relative w-full lg:w-[536px] lg:h-[100px] md:w-[390px] md:h-[90px] w-[180px] h-[50px] flex items-center justify-center mt-[46px]">
                    <p className="text-center text-lg md:text-3xl lg:text-[64px] font-abhaya leading-none m-0">Services we offer</p>
                </div>
            </div>

            <div className=" lg:mb-[180px] md:mb-[123px] sm:mb-[100px] mb-[80px]">
                <div className=" flex flex-wrap justify-center items-center ">
                    <ServicesComp
                        FrameImage="/assets/svgs/Frame.svg"
                        title="Custom Web Design"
                        subTitle="Custom, responsive and Engaging Websites "
                        Description="We design websites that are as unique as your business. Our team works with you to create a site that not only looks great but also works seamlessly. Whether you're launching a new business or refreshing your online presence, we'll build a website that fits your goals and speaks to your audience."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />

                    <ServicesComp
                        FrameImage="/assets/svgs/svg8.svg"
                        title="Search Engine Optimization(SEO)"
                        subTitle="Enabling websites to drive more traffic "
                        Description="We help your website get found by the people who matter most—your customers. Our SEO strategies ensure your site ranks higher on search engines like Google, bringing more traffic your way. From optimizing content to improving site speed, we handle everything to boost your online visibility."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />

                    <ServicesComp
                        FrameImage="/assets/svgs/NewFrane.svg"
                        title="Website Redesign and Refresh"
                        subTitle="Redesign for more business"
                        Description="If your website feels outdated or isn't delivering the results you want, we can help. We’ll give your site a fresh new look, improve user experience, and make sure it works perfectly across all devices. Whether it’s a small refresh or a complete redesign, we’ll make sure your website is ready for the future."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />
                    <ServicesComp
                        FrameImage="/assets/svgs/Globe.svg"
                        title="Website Management and Protection"
                        subTitle="Custom, responsive and secure Websites "
                        Description="We take care of your website so you don't have to. From keeping it secure to ensuring it’s always running smoothly, we manage all the behind-the-scenes details. You can trust us to handle updates, backups, and security, giving you peace of mind to focus on your business."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />


                </div>
            </div>
            <Footer />






        </div>
    )
}
