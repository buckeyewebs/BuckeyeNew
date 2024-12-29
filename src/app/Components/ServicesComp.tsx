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
        <div>
            <div className="lg:w-[550px] md:w-[340px] sm:w-[230px] w-[230px] lg:h-[600px] md:h-[650px] sm:h-[580px] h-[500px] bg-[rgba(70,76,74,0.15)] mt-[41px] ml-[18px] rounded-[24px]">
                <div className="flex flex-row">
                    <div className="lg:w-[117px] lg:h-[117px]  md:w-[98px] md:h-[98px] sm:w-[54px] sm:h-[70px] w-[54px] h-[70px] lg:ml-[33px] lg:mt-[19px] md:ml-[25px] md:mt-[15px] sm:ml-[15px] sm:mt-[10px] ml-[10px] mt-[10px] rounded-[24px]">

                        <Image src={props.FrameImage} alt="logo" />

                    </div>
                    <div className="lg:w-[354px] lg:h-[118px]    md:w-[250px] md:h-[98px] sm:w-[180px] sm:h-[70px] w-[180px] h-[72px] lg:ml-[25px] md:ml-[20px] sm:ml-[10px] ml-[10px] mb-[20px]">
                        <p className="lg:text-[37px] md:text-[27px] sm:text-[16px] text-lg font-abhaya lg:mt-[34px] md:mt-[28px] sm:mt-[16px] mt-[10px] lg:leading-[43.65px] md:leading-[35px] sm:leading-[30px] leading-[25px]">{props.title}</p>
                    </div>

                </div>
                <Image src="/assets/svgs/Line.svg" className=" w-[90%] h-[2px] mx-auto mb-[10px] sm:mb-[15px] md:mb-[20px] lg:mb-[25px]" alt="logo" />
                <div className="lg:w-[499px] lg:h-[29px] md:w-[250px] md:h-[98px] sm:w-[180px] sm:h-[70px] w-[180px] h-[72px] font-abhaya mx-auto lg:mt-[27px] md:mt-[20px] sm:mt-[15px] mt-[10px] flex justify-center items-center">
                    <p className="lg:text-[25px] md:text-[20px] sm:text-[16px] text-[14px]">
                        {props.subTitle}
                    </p>
                </div>
                <div className="lg:[w-499px] lg:h-[116px] md:h-[100px] sm:h-[155px] h-[120px]  lg:mt-[29px] md:mt-[20px] sm:mt-[15px] mt-[0px] lg:leading-[28.79px] md:leading-[24px] sm:leading-[20px] leading-[18px] mx-auto flex justify-center lg:ml-[22px] md:ml-[18px] sm:ml-[12px] ml-[8px] lg:mr-[29px] md:mr-[24px] sm:mr-[16px] mr-[10px]">

                    <p className="font-abhaya lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]">{props.Description}</p>
                </div>
                <div className="w-[499px] h-[20px] lg:mt-[20px] md:mt-[50px] sm:mt-[12px] mt-[8px] lg:ml-[22px] md:ml-[18px] sm:ml-[12px] ml-[8px]">
                    <p className="font-abhaya lg:text-[25px] md:text-[20px] sm:text-[18px] text-[16px] ">Key Features</p>
                </div>
                <div className="lg:ml-[30px] md:ml-[20px] sm:ml-[10px] ml-[5px] md:ml-[18px] sm:ml-[12px] ml-[8px] mt-[15px]">
                    <ul className="list-disc pl-5 lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] mb-[12px] font-istokWeb">
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
                <div className="flex justify-center ">
                    <button className="w-[170px] h-[35px] lg:w-[210px] lg:h-[53px] md:w-[180px] md:h-[43px] sm:w-[150px] sm:h-[43px] bg-[rgba(112,154,90,0.72)] rounded-[20px] flex justify-center items-center mb-[34px] border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-300">
                        <p className="text-[24px] font-istokWeb">Learn More</p>
                    </button>

                </div>

            </div>
        </div>
    )
}