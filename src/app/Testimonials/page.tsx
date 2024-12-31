import Header from "../Components/Header";
import TestimonialsFrame from "../Components/TestimonialsFrame";
import Footer from "../Components/Footer";
import Image from "next/image";

export default function Testimonials() {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Header />


            <div className="relative w-full lg:max-w-[1280px] md:max-w-[940px] w-[500px]  md:h-[625px] ">
                <Image
                    src="/assets/svgs/newbg.png"
                    alt="services"
                    className="w-auto lg:h-[625px] md:h-[520px] sm:h-[480px] h-[480px] object-cover filter blur-[10.8px] w-full h-auto"
                />
                <div
                    className="absolute inset-0 flex flex-col  text-white  "
                    style={{
                        backdropFilter: 'blur(0.8px)',

                    }}
                >
                    <p className="lg:text-[78px] lg:w-[665px] w-[500px]  font-bold font-abhayaLibre text-[rgba(30,30,30,1)] lg:mt-[122px] md:mt-[110px] sm:mt-[95px] mt-[25px] ml-[80px] mr-[535px] sm:text-[24px]">Why choose us?</p>
                    <div className="lg:w-[645px] w-[300px] h-[130px] ml-[80px] ">
                        <p className="font-istokWeb text-[rgba(0,0,0,1)]  text-[12px] lg:text-[18px] break-words ">
                            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  </p>
                        <div className="lg:w-[275px] w-[140px] h-[60px] rounded-[43px] border border-black transition duration-300 ease-in-out hover:bg-black group mt-[35px] flex items-center justify-center">
                            <button className="text-[rgba(0,0,0,1)] lg:text-[20px]  text-[10px] group-hover:text-white transition duration-300 ease-in-out">
                                Get in touch now
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-center lg:mb-[71px] md:mb-[61px] sm:mb-[51px] mb-[41px]">
                <div className="relative w-full lg:w-[763px] h-auto md:w-[390px]  w-[180px]  flex items-center justify-center lg:mt-[87px] md:mt-[-14px] sm:mt-[67px] mt-[47px] ">
                    <p className="text-center text-lg md:text-3xl lg:text-[64px] font-abhaya leading-none m-0">What our client say about us</p>
                </div>
            </div>
            <div className="mb-[149px]">
                <div className="flex justify-center items-center">
                    <div className="w-[619px] h-[202px] bg-[rgba(224,224,224,0.97)] rounded-[13.68px]  flex  items-center boxshadow-custom">
                        <div className="flex flex-col items-center ">
                            <div className="w-[218px] h-[158px]  ml-[80.3px] text-Manrope text-[96.71px] flex items-center justify-center ">



                                <p>4.5</p>
                                <Image src="/assets/svgs/star.svg" alt="star" className="w-[78px] h-[78px] ml-[10px] " />
                            </div>
                            <button className="w-[118px] h-[38px] rounded-[29.92px] bg-black text-white  ml-[77px] mb-[22px]">
                                600+ Reviews
                            </button>

                        </div>



                        <div className="w-[160.4px] h-[142px] ml-[80px]  flex flex-row items-center ">

                            <div className="text-[18px] font-Manrope text-[rgba(106,106,106,1)] flex flex-col items-center">
                                <p>5</p>
                                <p>4</p>
                                <p>3</p>
                                <p>2</p>
                                <p>1</p>
                            </div>

                            <div className="flex items-center">
                                <div className="w-[25px] h-[142px] flex flex-col items-center">
                                    <Image src="/assets/svgs/star.svg" className="w-[25px] h-[25px] mt-[2.5px] " alt="star" />
                                    <Image src="/assets/svgs/star.svg" className="w-[25px] h-[25px] " alt="star" />
                                    <Image src="/assets/svgs/star.svg" className="w-[25px] h-[25px] mt-[3px] " alt="star" />
                                    <Image src="/assets/svgs/star.svg" className="mb-[4px] w-[25px] h-[25px] mt-[2px]" alt="star" />
                                    <Image src="/assets/svgs/star.svg" className="mb-[4px] w-[25px] h-[25px] mt-[-1px] " alt="star" />
                                </div>

                                <div className="mt-[10.5px] flex flex-col justify-between">
                                    <Image src="/assets/svgs/Line1.svg" className="mb-[26px]" alt="line" />
                                    <Image src="/assets/svgs/Line2.svg" className="mb-[15px]" alt="line" />
                                    <Image src="/assets/svgs/Line3.svg" className="mb-[13px]" alt="line" />
                                    <Image src="/assets/svgs/Line4.svg" className="mb-[20px]" alt="line" />
                                    <Image src="/assets/svgs/Line5.svg" alt="line" />
                                </div>
                            </div>
                        </div>






                    </div>


                </div>
            </div>


            <div className="flex items-center justify-center">
               <TestimonialsFrame />
            </div>
            <Footer />

        </div>



    )
}