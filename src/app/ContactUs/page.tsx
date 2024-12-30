import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
export default function ContactUs() {
    return (
        <div>
            <Header />
            <div className="flex flex-row ml-[20px] sm:ml-[30px] md:ml-[50px] lg:ml-[80px]">
                <div>
                    <div className="w-[400px] sm:w-[480px] md:w-[500px] lg:w-[549px] h-auto   lg:mt-[93px]  mt-[20px] sm:mt-[30px] md:mt-[50px] ">
                        <p className="font-abhaya text-[16px] sm:text-[20px] md:text-[40px] lg:text-[70px]  ">Get in Touch</p>
                    </div>
                    <div className="w-[354px] h-[33px] flex justify-center items-center hidden sm:block ">
                        <p className="font-istok lg:text-[20px] md:[10px] text-[rgba(46,46,46,0.65)]">Transforming your online presence</p>
                    </div>
                </div>


            </div>

            <div className="lg:w-[1120px] h-auto ml-[20px] sm:ml-[30px] md:ml-[50px] lg:ml-[80px] mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[57px] lg:mb-[96px] md:mb-[73px] sm:mb-[60px] mb-[52px] flex flex-row">
                <div className="w-[300px] sm:w-[400px] md:w-[550px] lg:w-[684px] h-auto bg-[rgba(70,76,74,0.15)] flex justify-center rounded-l-[23px] ">
                    <div className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[549px] h-auto">
                        <p className="font-abhaya text-[10px] sm:text-[20px] md:text-[40px] lg:text-[60px] font-medium sm:font-medium md:font-medium lg:font-normal">Send us a message</p>
                        <div className="">
                            <input type="text" placeholder="Name" className="w-[200px] sm:w-[300px] md:w-[400px] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[233px] h-auto border-b-2 border-black mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[57px]  focus:outline-none  bg-transparent" />
                            <input type="email" placeholder="Email" className="w-[200px] sm:w-[300px] md:w-[400px] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[233px] h-auto border-b-2 border-black mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[57px] lg:ml-[61px]  focus:outline-none  bg-transparent" />

                        </div>
                        <div>
                            <input type="text" placeholder="Company Name" className="w-[200px] sm:w-[300px] md:w-[400px] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[527px] h-auto border-b-2 border-black mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[57px] focus:outline-none bg-transparent" />

                        </div>
                        <div>
                            <input type="text" placeholder="Name" className="w-[200px] sm:w-[300px] md:w-[400px] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[527px] h-auto border-b-2 border-black mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[57px] focus:outline-none bg-transparent" />

                        </div>
                        <div>
                            <textarea className="w-[200px] sm:w-[300px] md:w-[400px] w-[120px] sm:w-[160px] md:w-[200px] lg:w-[527px] h-auto border-b-2 border-black mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[57px] bg-transparent lg:mb-[63px]" placeholder="Message" />


                        </div>
                    </div>


                </div>

                <div className="lg:w-[436px] h-auto flex justify-center items-center bg-[rgba(112,154,90,1)] rounded-r-[23px]  flex flex-col">
                    <Image alt="Comp person" src="/assets/svgs/Comp_person.png" />
                    <div >
                        <button className="flex flex-row justify-center bg-[rgba(255,255,255,1)] rounded-[11px] lg:w-[201px] md:w-[185px] sm:w-[150px] w-[130px] h-auto outline outline-black hover:scale-105 transition-all duration-200 mb-[20px] sm:mb-[30px] md:mb-[40px] lg:mb-[60px]">
                            <Image alt="Flyer" src="/assets/svgs/Flyer.svg" className="lg:w-[31px] md:w-[25px] sm:w-[20px] w-[18px] lg:h-[22px] mt-[6px]" />
                            <p className="font-istokWeb text-clamp(16px, 2.5vw, 26px) ml:[1.11%]">Send Now</p>
                        </button>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}