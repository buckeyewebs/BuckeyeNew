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
                    <p className="lg:text-[78px] font-bold font-abhayaLibre text-[rgba(30,30,30,1)] mt-[122px] ml-[80px] mr-[535px] sm:text-[24px]">Revolutionize your</p>
                    <p className="lg:text-[78px] font-bold font-abhayaLibre text-[rgba(30,30,30,1)]  lg:mt-[-30px] ml-[80px] mr-[535px] sm:text-[24px] sm:mt-[10px]">Digital Presence</p>
                    <div className="lg:w-[645px] w-[200px] h-[130px] ml-[80px] ">
                        <p className="font-istokWeb text-[rgba(0,0,0,1)]  text-[12px] lg:text-[18px] break-words ">
                            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                        </p>
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
                        title="Web Design and Development"
                        subTitle="Custom, responsive and Engaging Websites "
                        Description="We craft stunning, user-friendly websites tailored to your brand, ensuring seamless performance across all devices.We craft stunning, user-friendly websites tailored to brand, ensuring seamless performance.."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />

                    <ServicesComp
                        FrameImage="/assets/svgs/svg8.svg"
                        title="Search Engine Optimization(SEO)"
                        subTitle="Custom, responsive and Engaging Websites "
                        Description="We craft stunning, user-friendly websites tailored to your brand, ensuring seamless performance across all devices.We craft stunning, user-friendly websites tailored to brand, ensuring seamless performance.."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />

                    <ServicesComp
                        FrameImage="/assets/svgs/NewFrane.svg"
                        title="E-Commerce Solutions"
                        subTitle="Custom, responsive and Engaging Websites "
                        Description="We craft stunning, user-friendly websites tailored to your brand, ensuring seamless performance across all devices.We craft stunning, user-friendly websites tailored to brand, ensuring seamless performance.."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />


                    <ServicesComp
                        FrameImage="/assets/svgs/Dollars.svg"
                        title="Digital Marketing"
                        subTitle="Custom, responsive and Engaging Websites "
                        Description="We craft stunning, user-friendly websites tailored to your brand, ensuring seamless performance across all devices.We craft stunning, user-friendly websites tailored to brand, ensuring seamless performance.."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />

                    <ServicesComp
                        FrameImage="/assets/svgs/Globe.svg"
                        title="Custom Web Solutions"
                        subTitle="Custom, responsive and Engaging Websites "
                        Description="We craft stunning, user-friendly websites tailored to your brand, ensuring seamless performance across all devices.We craft stunning, user-friendly websites tailored to brand, ensuring seamless performance.."

                        features={["Custom Design", "SEO Optimization", "Responsive Design", "Maintenance"]}

                    />


                </div>
            </div>
            <Footer />






        </div>
    )
}
