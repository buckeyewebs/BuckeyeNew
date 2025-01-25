"use client"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function About_Us() {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);


    const { ref: ref1 } = useInView({
        threshold: 0.2, // Trigger when 20% of the element is visible
        onChange: (inView) => setIsVisible(inView),
    });

    const { ref: ref2 } = useInView({
        threshold: 0.2,
        onChange: (inView) => setIsVisible2(inView),
    });



    const [animateFirst, setAnimateFirst] = useState(false);
    const [animateSecond, setAnimateSecond] = useState(false);

    useEffect(() => {
        // Observer for first element
        const observerFirst = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateFirst(true); // Trigger animation when in view
                } else {
                    setAnimateFirst(true); // Reset animation when out of view
                }
            },
            { threshold: 0.5 }
        );

        const elementFirst = document.querySelector(".animate-first");
        if (elementFirst) observerFirst.observe(elementFirst);

        // Observer for second element
        const observerSecond = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateSecond(true); // Trigger animation when in view
                } else {
                    setAnimateSecond(true); // Reset animation when out of view
                }
            },
            { threshold: 0.5 }
        );

        const elementSecond = document.querySelector(".animate-second");
        if (elementSecond) observerSecond.observe(elementSecond);

        // Observer for third element
        
         return () => {
            if (elementFirst) observerFirst.unobserve(elementFirst);
            if (elementSecond) observerSecond.unobserve(elementSecond);
        };
    }, []);

    return (
        <div >
            <Header />
            <div className=" w-full flex-col h-auto flex justify-center items-center bg-[rgba(70,76,74,0.15)]">

                <div
                    ref={ref1}
                    className={` w-auto h-auto m-10 mb-0 flex justify-center relative w-auto  h-auto m-10 mt-[4%] mb-0  flex justify-center  transition-transform duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
                        }`}
                >

                    {/* Irregular Green Background */}
                    <div
                        className="absolute -z-10 w-full h-[80%] bg-[rgba(112,154,90,1)]"
                        style={{
                            clipPath: "polygon(10% 100%, 135% 100%, 100% 50%, 80% 70%, 0 100%)",
                        }}
                    ></div>

                    <p className="relative font-abhaya md:text-[88px] text-[45px] 4xl:text-[190px] 5xl:text-[220px] whitespace-nowrap">Who we are</p>

                </div>
                <div className=" mb-[5%] m-[5%] mt-[4%] ">
                    <p className="font-inknut  text-[14px]   md:text-[24px] lg:text-[20px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px]  4xl:text-[50px] 5xl:text-[58px] ">BUCKEYE</p>
                    <p className="font-inknut lg:text-[26px]  text-[12px]   md:text-[24px] lg:text-[27px] xl:text-[22px] 2xl:text-[30px] 3xl:text-[35px]  4xl:text-[45px] 5xl:text-[58px] ">-WEB SOLUTIONS-</p>
                    <p className="w-auto  5xl:w-auto    flex justify-center items-center font-istokWeb text-[rgba(0,0,0,1)] text-[12px] lg:text-[18px] md:text-[20px] 2xl:text-[25px] 3xl:text-[30px] 4xl:text-[35px] 5xl:text-[50px] 4xl:w-[1000px] 5xl:w-[1300px]">BuckeyeWebs, founded in 2024, is dedicated to empowering small businesses with accessible, affordable, and effective web design solutions. Our mission is to create efficient, engaging websites that attract, convert, and help businesses thrive online. We envision a world where every small business has the tools and support needed to succeed, with secure, high-performing websites backed by exceptional service and ongoing care.</p>
                </div>



            </div>





            <div className="mt-[12%] ">
                <div className="flex  flex-row justify-center items-center mb-[12%] m-[5%]" >
                    <p
                        className={`animate-first w-[40%] h-full  rounded-[13px] bg-[rgba(112,154,90,10)] flex justify-center items-center font-inknut sm:text-[14px] text-[12px]   md:text-[18px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[50px] 5xl:text-[58px] text-white p-[8%] pl-[12%] pr-[12%]  tracking-17percent   whitespace-nowrap transition duration-300 ease-in-out transform ${animateFirst ? "opacity-100 animate-pulse-fade-in" : "opacity-0"
                            } `}
                    >
                        OUR HISTORY</p>

                    <p className="h-full  font-istokWeb text-[14px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px] w-full max-h-[200px]  text-justify pt-[5%] pb-[5%] pl-[5%]  flex items-center">Founded in 2024, BuckeyeWebs started with a simple idea: to make quality web designs accessible to small businesses. Since then, we have created successful websites that have helped businesses connect with their customers.</p>

                </div>

                <div className="flex  flex-row justify-center items-center mb-[12%] m-[5%]" >
                    <p className="h-full  font-istokWeb text-[14px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px] w-full max-h-[200px]  text-justify pt-[5%] pb-[5%]   flex items-center">Our mission is to empower businesses by creating efficient, functional websites that attract, engage, and convert. We are committed to providing exceptional service and ongoing support, ensuring your website stays secure, updated, and performing at its best.
                    </p>
                    <p
                        className={`animate-second ml-[5%] w-[40%] h-full  rounded-[13px] bg-[rgba(112,154,90,10)] flex justify-center items-center font-inknut sm:text-[14px] text-[12px]   md:text-[18px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[50px] 5xl:text-[58px] text-white p-[8%] pl-[12%] pr-[12%]  tracking-17percent   whitespace-nowrap transition duration-300 ease-in-out transform ${animateSecond ? "opacity-100 animate-pulse-fade-in" : "opacity-0"
                            } `}
                    >
                    OUR MISSION</p>

                </div>

                <div className="flex  flex-row justify-center items-center mb-[12%] m-[5%]" >
                <p
                        className={`animate-third w-[40%] h-full  rounded-[13px] bg-[rgba(112,154,90,10)] flex justify-center items-center font-inknut sm:text-[14px] text-[12px]   md:text-[18px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[50px] 5xl:text-[58px] text-white p-[8%] pl-[12%] pr-[12%]  tracking-17percent   whitespace-nowrap transition duration-300 ease-in-out transform ${animateSecond ? "opacity-100 animate-pulse-fade-in" : "opacity-0"
                            } `}
                    >
                   OUR VISION</p>
                    <p className="h-full  font-istokWeb text-[14px] md:text-[20px] lg:text-[30px] xl:text-[30px] 2xl:text-[36px] 3xl:text-[42px] 4xl:text-[62px] 5xl:text-[79px] w-full max-h-[200px]  text-justify pt-[5%] pb-[5%] pl-[5%]  flex items-center">We envision a world where small businesses have the tools they need to succeed online. We aim to make web design and management easy, affordable, and effective for everyone.</p>

                </div>


            </div>


            <div className="w-auto  h-auto bg-[rgba(70,76,74,0.15)] flex flex-col justify-center items-center ">
            <div
                    ref={ref2}
                    className={` w-auto w-auto  mt-[5%] flex justify-center items-center  h-auto m-10 mb-0 flex justify-center relative w-auto  h-auto m-10 mt-[4%] mb-0  flex justify-center  transition-transform duration-700 ease-out ${isVisible2 ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
                        }`}
                >
                    {/* Irregular Green Background */}
                    <div
                        className="absolute -z-10 w-full h-[80%] bg-[rgba(112,154,90,1)]"
                        style={{
                            clipPath: "polygon(10% 100%, 135% 100%, 100% 50%, 80% 70%, 0 100%)",
                        }}
                    ></div>

                    <p className="relative font-abhaya text-[45px]  md:text-[88px] 4xl:text-[190px] 5xl:text-[220px] whitespace-nowrap">Meet Our Team</p>

                </div>






                <div className="w-auto h-auto mt-2  flex flex-row items-center space-x-6">

                    <div className="flex flex-col m-[5%]">
                        <p className="sm:text-[14px] text-[16px]   md:text-[18px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[50px] 5xl:text-[68px] font-istok tracking-4percent font-semibold ">Justin A.</p>
                        <p className="text-[12px] lg:text-[18px] md:text-[20px] 2xl:text-[25px] 3xl:text-[30px] 4xl:text-[35px] 5xl:text-[50px] 4xl:w-[1000px] 5xl:w-[1300px] font-istokWeb text-[rgba(112,154,90,10)]">Founder & Lead Designer</p>
                        <p className="text-[12px] lg:text-[18px] md:text-[20px] 2xl:text-[25px] 3xl:text-[30px] 4xl:text-[35px] 5xl:text-[50px] 4xl:w-[1000px] 5xl:w-[1300px] font-istokWeb  h-auto text-justify  tracking-4percent">
                            As the founder of BuckeyeWebs, I am passionate about bringing your business to life using eye appealing and efficient websites that capture the essence of each business. With years of experience in design we create custom, user-friendly websites that not only look great but also deliver results.
                        </p>
                    </div>

                </div>

                <div className="w-auto h-auto mb-[3%]  flex flex-row items-center justify-center space-x-6 lg:mb-[67px]">

                    <div className="flex flex-col  ml-[5%] mr-[5%]">
                        <p className="sm:text-[14px] text-[16px]   md:text-[18px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] 3xl:text-[45px]  4xl:text-[50px] 5xl:text-[68px] font-istok tracking-4percent font-semibold ">Adam A.</p>
                        <p className="text-[12px] lg:text-[18px] md:text-[20px] 2xl:text-[25px] 3xl:text-[30px] 4xl:text-[35px] 5xl:text-[50px] 4xl:w-[1000px] 5xl:w-[1300px]  font-istokWeb text-[rgba(112,154,90,10)]">Web Developer</p>
                        <p className="text-[12px] lg:text-[18px] md:text-[20px] 2xl:text-[25px] 3xl:text-[30px] 4xl:text-[35px] 5xl:text-[50px] 4xl:w-[1000px] 5xl:w-[1300px] font-istokWeb  h-auto text-justify  tracking-4percent">
                            As the web developer at BuckeyeWebs, I focus on building websites that are fast, functional, and secure. I know how important it is to translate your ideas into an experience that works for your customers. Whether it is through developing custom features or making sure your site is protected from potential threats, I ensure that your website doesn’t just look great—it works hard for you. My goal is to give you a website that is secure, efficient, and always ready to help your business grow.    </p>
                    </div>
                </div>



            </div>
            <Footer />




        </div>
    )
}