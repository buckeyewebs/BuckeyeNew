import Header from "../Components/Header"
import Footer from "../Components/Footer"
export default function About_Us() {
    return (
        <div >
            <Header />
            <div className=" w-full flex-col h-auto flex justify-center items-center bg-[rgba(70,76,74,0.15)]">

                <div className="w-auto h-auto m-10 mb-0 flex justify-center relative w-auto  h-auto m-10 mt-[4%] mb-0  flex justify-center ">
                    {/* Irregular Green Background */}
                    <div
                        className="absolute -z-10 w-full h-[80%] bg-[rgba(112,154,90,1)]"
                        style={{
                            clipPath: "polygon(10% 100%, 135% 100%, 100% 50%, 80% 70%, 0 100%)",
                        }}
                    ></div>

                    <p className="relative font-abhaya md:text-[88px] text-[68px] 4xl:text-[190px] 5xl:text-[220px]">Who we are</p>

                </div>
                <div className=" mb-[10%] m-[5%] mt-[4%] ">
                    <p className="font-inknut  text-[24px]   md:text-[24px] lg:text-[30px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[60px] 5xl:text-[68px] ">BUCKEYE</p>
                    <p className="font-inknut lg:text-[26px]  text-[20px]   md:text-[24px] lg:text-[27px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[55px] 5xl:text-[68px] ">-WEB SOLUTIONS-</p>
                    <p className="w-auto  5xl:w-auto   text-justify h-auto font-istokWeb text-[16px] md:text-[22px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px]">Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</p>
                </div>



            </div>





            <div className="mt-[12%] ">
                <div className="flex  flex-row justify-center items-center mb-[12%] m-[5%]" >

                    <p className="w-[40%] h-full  rounded-[13px] bg-[rgba(112,154,90,10)] flex justify-center items-center font-inknut sm:text-[14px] text-[12px]   md:text-[18px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[50px] 5xl:text-[58px] text-white p-[8%] pl-[12%] pr-[12%]  tracking-17percent   whitespace-nowrap">OUR HISTORY</p>
                    <p className="h-full  font-istokWeb text-[14px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px] w-full max-h-[200px]  text-justify pt-[5%] pb-[5%] pl-[5%]  flex items-center">Founded in 2024, BuckeyeWebs started with a simple idea: to make quality web designs accessible to small businesses. Since then, we have created successful websites that have helped businesses connect with their customers.</p>

                </div>

                <div className="flex  flex-row justify-center items-center mb-[12%] m-[5%]" >
                    <p className="h-full  font-istokWeb text-[14px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px] w-full max-h-[200px]  text-justify pt-[5%] pb-[5%]   flex items-center">Our mission is to empower businesses by creating efficient, functional websites that attract, engage, and convert. We are committed to providing exceptional service and ongoing support, ensuring your website stays secure, updated, and performing at its best.
                    </p>

                    <p className="ml-[5%] w-[40%] h-full  rounded-[13px] bg-[rgba(112,154,90,10)] flex justify-center items-center font-inknut sm:text-[14px] text-[12px]   md:text-[18px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[50px] 5xl:text-[58px] text-white p-[8%] pl-[12%] pr-[12%]  tracking-17percent   whitespace-nowrap">OUR MISSION</p>

                </div>

                <div className="flex  flex-row justify-center items-center mb-[12%] m-[5%]" >

                    <p className="w-[40%] h-full  rounded-[13px] bg-[rgba(112,154,90,10)] flex justify-center items-center font-inknut sm:text-[14px] text-[12px]   md:text-[18px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[50px] 5xl:text-[58px] text-white p-[8%] pl-[12%] pr-[12%]  tracking-17percent   whitespace-nowrap">OUR VISION</p>
                    <p className="h-full  font-istokWeb text-[14px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px] w-full max-h-[200px]  text-justify pt-[5%] pb-[5%] pl-[5%]  flex items-center">We envision a world where small businesses have the tools they need to succeed online. We aim to make web design and management easy, affordable, and effective for everyone.</p>

                </div>


            </div>


            <div className="w-auto  h-auto bg-[rgba(70,76,74,0.15)] flex flex-col justify-center items-center ">
                
                <div className="w-auto w-auto  mt-[5%] flex justify-center items-center  h-auto m-10 mb-0 flex justify-center relative w-auto  h-auto m-10 mt-[4%] mb-0  flex justify-center ">
                    {/* Irregular Green Background */}
                    <div
                        className="absolute -z-10 w-full h-[80%] bg-[rgba(112,154,90,1)]"
                        style={{
                            clipPath: "polygon(10% 100%, 135% 100%, 100% 50%, 80% 70%, 0 100%)",
                        }}
                    ></div>

                    <p className="relative font-abhaya text-[58px]  md:text-[88px] 4xl:text-[190px] 5xl:text-[220px] whitespace nowrap">Meet Our Team</p>

                </div>






                <div className="w-auto h-auto mt-4  flex flex-row items-center space-x-6">

                    <div className="flex flex-col m-[5%]">
                        <p className="sm:text-[14px] text-[16px]   md:text-[18px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[50px] 5xl:text-[68px] font-istok tracking-4percent font-semibold ">Justin A.</p>
                        <p className="text-[16px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px]  font-istokWeb text-[rgba(112,154,90,10)]">Founder & Lead Designer</p>
                        <p className="text-[14px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px] font-istokWeb  h-auto text-justify  tracking-4percent">
                            As the founder of BuckeyeWebs, I am passionate about bringing your business to life using eye appealing and efficient websites that capture the essence of each business. With years of experience in design we create custom, user-friendly websites that not only look great but also deliver results.
                        </p>
                    </div>

                </div>

                <div className="w-auto h-auto  mb-[2%] flex flex-row items-center justify-center space-x-6 lg:mb-[157px]">

                    <div className="flex flex-col m-[5%]">
                        <p className="sm:text-[14px] text-[16px]   md:text-[18px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[50px] 5xl:text-[68px] font-istok tracking-4percent font-semibold ">Adam A.</p>
                        <p className="text-[16px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px]  font-istokWeb text-[rgba(112,154,90,10)]">Web Developer</p>
                        <p className="text-[14px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px] font-istokWeb  h-auto text-justify  tracking-4percent">
                            As the web developer at BuckeyeWebs, I focus on building websites that are fast, functional, and secure. I know how important it is to translate your ideas into an experience that works for your customers. Whether it is through developing custom features or making sure your site is protected from potential threats, I ensure that your website does not just look great—it works hard for you. My goal is to give you a website that is secure, efficient, and always ready to help your business grow.</p>
                    </div>
                </div>



            </div>
            <Footer />




        </div>
    )
}