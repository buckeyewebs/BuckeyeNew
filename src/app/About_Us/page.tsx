import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Image from "next/image"
export default function About_Us() {
    return (
        <div>
            <Header />
            <div className=" bg-[rgba(w-[600px] sm:w-[780px] md:w-[900px] lg:w-[1280px] h-auto flex flex-col justify-center items-center bg-[rgba(70,76,74,0.15)]">
                <div className="w-[280px] sm:w-[480px] md:w-[720px] lg:w-[954px] h-auto mt-[10px] sm:mt-[30px] md:mt-[50px] lg:mt-[91px] flex justify-center mb-[20px] sm:mb-[40px] md:mb-[60px] lg:mb-[82px] ">
                    <p className="font-lancelot text-[20px] sm:text-[40px] md:text-[60px] lg:text-[80px]">Why choose us</p>
                </div>
                <div className=" lg:mb-[70px]">
                    <p className="font-inknut text-[16px] sm:text-[24px] md:text-[40px] lg:text-[60px]">BUCKEYE</p>
                    <p className="font-inknut lg:text-[26px]">-WEB SOLUTIONS-</p>
                    <p className="lg:w-[763px] h-auto font-istokWeb text-[18px]">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                </div>

                <div className="w-[600px] sm:w-[780px] md:w-[900px] lg:w-[1280px] h-auto flex flex-col justify-center items-center lg:mb-[70px]">

                    <div>
                        <p className="font-inknut text-[16px] sm:text-[24px] md:text-[40px] lg:text-[60px]">BUCKEYE</p>
                        <p className="font-inknut lg:text-[26px]">-MEDIA SOLUTIONS-</p>
                        <p className="lg:w-[763px] h-auto font-istokWeb text-[18px]">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                    </div>



                </div>

            </div>


            <div className="flex justify-center items-center lg:mt-[104px] lg:mb-[104px]">
                <div className="lg:w-[1120px] h-auto bg-[rgba(112,154,90,0.72)] flex flex-col justify-center items-center rounded-[13px]">
                    <p className="font-abhayaLibre text-[65px]   lg:w-[370px] ">Milestones</p>
                    <p className="font-abhayaLibre text-[65px]   lg:w-[370px] ml-[5px] ">of Success</p>
                    <div className="flex flex-row justify-between">
                        <p className="lg:w-[250px] h-auto lg:text-[74px] font-istokWeb lg:ml-[92px] lg:mr-[115px]">1000+</p>
                        <p className="lg:w-[222px] h-auto lg:text-[74px] font-istokWeb lg:mr-[115px]">150%</p>
                        <p className="lg:w-[274px] h-auto lg:text-[74px] font-istokWeb">350+</p>
                    </div>

                </div>

            </div>


            <div>
                <div className="flex flex-row justify-center lg:mb-[201px]" >

                    <p className="lg:w-[550px] lg:h-[276px] rounded-[13px] bg-[rgba(112,154,90,10)] flex justify-center items-center font-inknut text-[24px] text-white tracking-17percent">OUR HISTORY</p>
                    <p className="font-istokWeb text-[24px] w-[523px]  lg:ml-[47px] text-justify leading-[43px] flex items-center">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit   interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>

                </div>

                <div className="flex flex-row justify-center lg:mb-[201px]" >
                    <p className="font-istokWeb text-[24px] w-[523px]  lg:mr-[47px] text-justify leading-[43px] flex items-center">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit   interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>

                    <p className="lg:w-[550px] lg:h-[276px] rounded-[13px] bg-[rgba(112,154,90,10)] flex justify-center items-center font-inknut text-[24px] text-white tracking-17percent">OUR MISSION</p>

                </div>

                <div className="flex flex-row justify-center lg:mb-[201px]" >

                    <p className="lg:w-[550px] lg:h-[276px] rounded-[13px] bg-[rgba(112,154,90,10)] flex justify-center items-center font-inknut text-[24px] text-white tracking-17percent">OUR VISION</p>
                    <p className="font-istokWeb text-[24px] w-[523px]  lg:ml-[47px] text-justify leading-[43px] flex items-center">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit   interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>

                </div>


            </div>


            <div className="lg:w-[1280px] h-auto bg-[rgba(70,76,74,0.15)] flex flex-col justify-center items-center ">
                <div className="lg:w-[954px] flex justify-center items-center lg:mt-[72px] ">
                    <p className="font-abhaya text-[68px]">Our Team</p>
                </div>

                <div className="lg:w-[1122px] h-auto lg:mt-[97px] flex flex-row items-center justify-center space-x-6">
                    <div className="w-[780px] h-[350px] border-4 border-solid border-[rgba(112,154,90,1)] rounded-full p-4 overflow-hidden">
                        <Image alt="Picture Person" src="/assets/svgs/PicturePerson1.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[24px] font-istok tracking-4percent font-semibold ">Miles Morales</p>
                        <p className="text-[18px] font-istokWeb text-[rgba(112,154,90,10)]">HR Manager</p>
                        <p className="text-[20px] font-istokWeb lg:w-[750px] h-auto text-justify leading-[31px] tracking-4percent">
                            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                        </p>
                    </div>
                </div>


                <div className="lg:w-[1122px] h-auto lg:mt-[97px] flex flex-row items-center space-x-6">
                    
                    <div className="flex flex-col">
                        <p className="text-[24px] font-istok tracking-4percent font-semibold ">Miles Morales</p>
                        <p className="text-[18px] font-istokWeb text-[rgba(112,154,90,10)]">HR Manager</p>
                        <p className="text-[20px] font-istokWeb lg:w-[750px] h-auto text-justify leading-[31px] tracking-4percent">
                            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                        </p>
                    </div>
                    <div className="w-[780px] h-[350px] border-4 border-solid border-[rgba(112,154,90,1)] rounded-full p-4 overflow-hidden">
                        <Image alt="Takla Uncle" src="/assets/svgs/TaklaUncle.png" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="lg:w-[1122px] h-auto lg:mt-[97px] flex flex-row items-center justify-center space-x-6 lg:mb-[157px]">
                    <div className="w-[780px] h-[350px] border-4 border-solid border-[rgba(112,154,90,1)] rounded-full p-4 overflow-hidden">
                        <Image alt="Baal Walay Uncle" src="/assets/svgs/BaalWalayUncle.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[24px] font-istok tracking-4percent font-semibold ">Miles Morales</p>
                        <p className="text-[18px] font-istokWeb text-[rgba(112,154,90,10)]">HR Manager</p>
                        <p className="text-[20px] font-istokWeb lg:w-[750px] h-auto text-justify leading-[31px] tracking-4percent">
                            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                        </p>
                    </div>
                </div>

                

            </div>
            <Footer />

            


        </div>
    )
}