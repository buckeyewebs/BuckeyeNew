"use client"
import Header from "../Components/Header"
import Link from 'next/link';
import ServicesComp from "../Components/ServicesComp"
import Footer from "../Components/Footer"
import Image from "next/image";
export default function Services() {
    return (
        <div>
            <Header />
            <div className="relative w-full h-auto ">
                <Image
                    src="/assets/svgs/image.png"
                    alt="services"
                    className="w-full h-auto max-h-[1600px]  object-cover"
                />
                <div
                    className="absolute justify-center items-center inset-0 flex flex-col  text-white  "
                    style={{
                        backdropFilter: 'blur(0.8px)',

                    }}
                >
                    <div className="flex flex-col">

                    <p className="lg:text-[68px] 2xl:text-[88px] text-[24px] 3xl:text-[108px]  4xl:text-[128px]  5xl:text-[148px] md:text-[35px] w-auto font-bold font-abhayaLibre text-[rgba(30,30,30,1)] leading-tight ">Our Sevices</p>
                   

                    </div>
                    <div className="flex justify-center items-center ">
                        <div className="w-full md:w-[600px]  max-w-[800px]  h-auto flex flex-col items-center justify-center">
                            <p className="sm:block hidden text-center flex justify-center items-center font-istokWeb text-[rgba(0,0,0,1)] text-[12px] lg:text-[18px] md:text-[20px] 2xl:text-[25px] 3xl:text-[30px] 4xl:text-[35px] 5xl:text-[50px] 4xl:w-[1000px] 5xl:w-[1300px]  ">
                            At BuckeyeWebs, we offer a range of professional services designed to meet the unique needs of your business. Whether you need a new website, ongoing maintenance, or expert SEO services, we are here to help.  </p>
                            <div className="w-auto h-auto pl-7 pr-7 sm:pt-5 sm:pb-5 pt-[7%] pb-[7%]  rounded-[43px] border border-black transition duration-300 ease-in-out hover:bg-black group mt-[5%] flex items-center justify-center">
                                <Link href="/QuoteRequestForm">
                                <button className="text-[rgba(0,0,0,1)] lg:text-[20px] 4xl:text-[44px] 5xl:text-[72px] 3xl:text-[32px] 2xl:text-[25px] md:text-[18px] whitespace-nowrap text-[15px] group-hover:text-white transition duration-300 ease-in-out">
                                    Get in touch now
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center  ">
                <div className="relative w-full h-auto flex items-center justify-center mt-[5%]">
                    <p className="font-abhayaLibre  whitespace-nowrap 5xl:text-[120px] 4xl:text-[100px] 3xl:text-[80px] 2xl:text-[60px] lg:text-[60px] md:text-[40px] text-[30px]">Services we offer</p>
                </div>
            </div>

            <div className="mx-auto lg:mb-[180px] md:mb-[123px] sm:mb-[100px] mb-[80px]">
                <div className=" flex flex-wrap justify-center items-center ">
                    <ServicesComp
                        FrameImage="/assets/svgs/Frame.svg"
                        title="Custom Website Design"
                        subTitle="Custom, responsive and Engaging Websites "
                        Description="We design websites that are as unique as your business. Our team works with you to create a site that not only looks great but also works seamlessly. Whether you're launching a new business or refreshing your online presence, we'll build a website that fits your goals and speaks to your audience."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />

                    <ServicesComp
                        FrameImage="/assets/svgs/svg8.svg"
                        title="Search Engine Optimization(SEO)"
                        subTitle="Custom, responsive and Engaging Websites "
                        Description="We help your website get found by the people who matter most—your customers. Our SEO strategies ensure your site ranks higher on search engines like Google, bringing more traffic your way. From optimizing content to improving site speed, we handle everything to boost your online visibility."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />

                    <ServicesComp
                        FrameImage="/assets/svgs/NewFrane.svg"
                        title="Website Management & Maintenance"
                        subTitle="Custom, responsive and Engaging Websites "
                        Description="We take care of your website so you don't have to. From keeping it secure to ensuring it’s always running smoothly, we manage all the behind-the-scenes details. You can trust us to handle updates, backups, and security, giving you peace of mind to focus on your business free of management and mantainenece issues."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />


                    <ServicesComp
                        FrameImage="/assets/svgs/Dollars.svg"
                        title="Website Redesign & Refresh"
                        subTitle="Custom, responsive and Engaging Websites "
                        Description="If your website feels outdated or isn't delivering the results you want, we can help. We will give your site a fresh new look, improve user experience, and make sure it works perfectly across all devices. Whether it’s a small refresh or a complete redesign, we’ll make sure your website is ready for the future."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />

                    


                </div>
            </div>
            <Footer />






        </div>
    )
}
