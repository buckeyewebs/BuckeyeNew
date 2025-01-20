import Image from "next/image";
interface ServicesProps {
    FrameImage: string;
    title: string;
    subTitle: string;
    Description: string;
    features: string[];
}
export default function ServicesComp(props: ServicesProps) {
    return (
        <div className="">
            <div className="lg:w-[550px] md:w-[440px] 5xl:w-[750px] sm:w-[230px]  w-[380px] 5xl:h-[1130px] lg:h-[700px] 3xl:h-[770px] md:h-[650px] sm:h-[580px] h-[500px] bg-[rgba(70,76,74,0.15)] mt-[41px] ml-[18px] rounded-[24px] mr-[17px]">
                <div className="flex flex-row flex justify-center items-center 5xl:pt-[30px]">
                    <div className="mb-[10px] lg:w-[117px] lg:h-[117px]  md:w-[98px] md:h-[98px] sm:w-[54px] sm:h-[70px] w-[54px] h-[70px] lg:ml-[33px] lg:mt-[19px] md:ml-[25px] md:mt-[15px] sm:ml-[15px] sm:mt-[10px] ml-[10px] mt-[10px] rounded-[24px]">

                        <Image src={props.FrameImage} alt="logo" />

                    </div>
                    <div className="lg:w-[354px] lg:h-[118px] flex justify-center items-center   md:w-[250px] md:h-[98px] sm:w-[180px] sm:h-[70px] w-[180px] h-[72px] lg:ml-[25px] md:ml-[20px] sm:ml-[10px] ml-[10px] mb-[20px]">
                        <p className="5xl:text-[45px] lg:text-[37px]  md:text-[27px] sm:text-[19px] text-[19px] font-abhaya lg:mt-[34px] md:mt-[28px] sm:mt-[16px] mt-[10px] lg:leading-[43.65px] md:leading-[35px] sm:leading-[30px] leading-[25px]">{props.title}</p>
                    </div>

                </div>
                <Image src="/assets/svgs/Line.svg" className=" w-[90%] h-[2px] mx-auto mb-[10px] sm:mb-[15px] md:mb-[20px] lg:mb-[25px]" alt="logo" />
               
                <div className="flex justify-center items-center">
                    <div className="lg:[w-499px]   h-auto  lg:mt-[29px] md:mt-[0px] sm:mt-[15px] mt-[0px] lg:leading-[28.79px] md:leading-[24px] sm:leading-[20px] leading-[18px] mx-auto flex justify-center lg:ml-[22px] md:ml-[18px] sm:ml-[12px] ml-[8px] lg:mr-[29px] md:mr-[24px] sm:mr-[16px] mr-[10px]">

                        <p className="font-abhaya 5xl:text-[42px] leading-tight  3xl:text-[30px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[18px] text-justify pl-3 pr-3">{props.Description}</p>
                    </div>
                </div>

                <div className=" pl-3 pr-3 w-[499px] h-[20px] 5xl:h-[60px] lg:mt-[20px] md:mt-[50px] sm:mt-[12px] mt-[8px] lg:ml-[22px] md:ml-[18px] sm:ml-[12px] ml-[8px]">
                    <p className="font-abhaya lg:text-[25px] md:text-[20px] sm:text-[18px] text-[20px] 5xl:text-[50px] ">Key Features</p>
                </div>
                <div className="pl-3 pr-3  lg:ml-[30px]  md:ml-[20px] sm:ml-[10px] ml-[5px] md:ml-[18px] sm:ml-[12px] ml-[8px] mt-[15px]">
                    <ul className="list-disc pl-5 5xl:text-[45px] 3xl:text-[25px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[18px] mb-[12px] font-istokWeb">
                        {props.features && props.features.length > 0 ?
                            props.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            )) : (
                                <>
                                    <li>Custom Design</li>
                                    <li>Responsive & Mobile-First</li>
                                    <li>UX Optimization</li>
                                    <li>Website Maintenance</li>
                                </>
                            )
                        }
                    </ul>
                </div>
                <div className="flex justify-center">
                    <a href="/ContactUs" className="inline-block">
                        <button className="w-[170px] 5xl:w-[280px] 5xl:h-[85px] h-[35px] lg:w-[210px] lg:h-[53px] md:w-[180px] md:h-[43px] sm:w-[150px] sm:h-[43px] md:mt-[20px] lg:mb-[0px] mt-[10px] bg-[rgba(112,154,90,0.72)] rounded-[20px] flex justify-center items-center mb-[34px] border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-300">
                            <p className="text-[24px] whitespace-nowrap 5xl:text-[44px] font-istokWeb">Learn More</p>
                        </button>
                    </a>
                </div>


            </div>
        </div>
    )
}