"use client"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from 'next/link';
import Image from "next/image";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function Portfolio() {
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
        <div>
            <Header />

            {/* Image and Overlay Section */}
            <div className="relative w-full h-auto mb-[8%]">
                <Image
                    src="/assets/svgs/Portfolionew.png"
                    alt="services"
                    priority
                    className="w-full max-h-[1600px]  h-auto "
                />
                <div
                    className="absolute justify-center items-center inset-0 flex flex-col text-white"
                    style={{
                        backdropFilter: 'blur(0.8px)',
                    }}
                >
                    <div
                        ref={ref1}
                        className={` flex items-center justify-center flex-col  transition-transform duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
                            }`}
                    >
                    <p className="lg:text-[48px] 2xl:text-[68px] text-[24px] 3xl:text-[88px]  4xl:text-[98px]  5xl:text-[128px] md:text-[35px] w-auto font-bold font-abhayaLibre text-[rgba(30,30,30,1)] leading-tight ">
                    Explore Our Work
                    </p>
                    
                    </div>

                    <div className="flex justify-center items-center ">
                        <div className="w-full md:w-[600px]  max-w-[800px]  h-auto flex flex-col items-center justify-center">
                            <p
                                className={` animate-first  sm:block hidden text-center flex justify-center items-center font-istokWeb text-[rgba(0,0,0,1)] sm:block hidden text-center flex justify-center items-center font-istokWeb text-[rgba(0,0,0,1)] text-[12px] lg:text-[18px] md:text-[20px] 2xl:text-[25px] 3xl:text-[30px] 4xl:text-[35px] 5xl:text-[50px] 4xl:w-[1000px] 5xl:w-[1300px]   transition duration-300 ease-in-out transform ${animateFirst ? "opacity-100 animate-pulse-fade-in" : "opacity-0"
                                    } `}
                            >
                            Take a look at the websites we’ve built for our amazing clients. Each one tells a story, and we’re proud to have helped these businesses grow and succeed online with custom, easy-to-use designs.    </p>
                            <div
                                className={`animate-second w-auto h-auto pl-7 pr-7 sm:pt-5 sm:pb-5 pt-[7%] pb-[7%]  rounded-[43px] border border-black transition duration-300 ease-in-out hover:bg-black group mt-[5%] flex items-center justify-center transition duration-300 ease-in-out transform ${animateSecond ? "opacity-100 animate-pulse-fade-in" : "opacity-0"
                                    } hover:bg-black hover:text-white group`}
                            >
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

            {/* New Section Below */}
            <div className="flex justify-center items-center">
                <div
                        ref={ref2}
                        className={` "w-auto  pt-[1%] pb-[1%] pr-[5%] pl-[5%]   h-auto flex justify-center items-center bg-custom-gradient  rounded-[29px] transition-transform duration-700 ease-out ${isVisible2 ? "translate-y-0 opacity-100" : "translate-y-40 opacity-0"
                            }`}
                    >
                    <p className="font-abhayaLibre  whitespace-nowrap 5xl:text-[120px] 4xl:text-[100px] 3xl:text-[80px] 2xl:text-[60px] lg:text-[60px] text-[30px]">Recent Projects</p>
                </div>
            </div>

    {/* Section for projects */} 
            <div className="lg:mb-[40px] w-full ">
                <div className="mt-[7%] m-[5%] flex justify-center items-center">
                    <div className="flex flex-col w-full  lg:flex-row  justify-between sm:mr-[0%] mr-[5%]">
                        <div className="text-justify mr-[5%]">
                            <p className="font-istokWeb 5xl:text-[65px] 4xl:text-[50px] 3xl:text-[40px] 2xl:text-[30px] lg:text-[26px] text-[18px] sm:ml-0 ml-5">Featured Project</p>
                            <p className="font-istok 5xl:text-[60px] 4xl:text-[50px] 3xl:text-[40px] 2xl:text-[30px] lg:text-[26px] text-[18px] sm:ml-0 ml-5">E-Commerce Platform</p>
                            <p className="w-full  p-3  h-[auto] font-istokWeb 5xl:text-[70px] 4xl:text-[50px] 3xl:text-[35px] 2xl:text-[30px] lg:text-[26px] text-[18px] sm:ml-0 ml-5 bg-custom-radial flex justify-center items-center  rounded-[14px]">A seamless shopping experience with responsive design, user-friendly navigation, and secure checkout options.
                            </p>

                        </div>
                        <div className="flex justify-center items-center">
                        <div className="w-full 4xl:min-w-[1000px]  3xl:min-w-[700px]  mt-[20px] lg:mt-[0px]  sm:w-[400px] h-full bg-white ml-[5%]  ">

                            <Image src="/assets/svgs/proj1.webp" alt="FirstProject" />
                        </div>
                        </div>
                    </div>
                </div>



                
                <div className="hidden lg:block w-full  ">
                <div className="mt-[7%]  m-[5%] flex justify-center items-center">
                    <div className="flex flex-col w-full  lg:flex-row  justify-between sm:mr-[0%] mr-[5%]">
                    <div className="flex justify-center items-center mr-[5%]">
                        <div className=" w-full 4xl:min-w-[1000px]  3xl:min-w-[700px] mt-[20px] lg:mt-[0px]  sm:w-[400px] h-full bg-white ml-[5%]  ">

                            <Image src="/assets/svgs/proj2.webp" alt="FirstProject" />
                        </div>
                        </div>
                        <div className="text-justify ">
                            <p className="font-istokWeb 5xl:text-[65px] 4xl:text-[50px] 3xl:text-[40px] 2xl:text-[30px] lg:text-[26px] text-[18px] sm:ml-0 ml-5">Featured Project</p>
                            <p className="font-istok 5xl:text-[60px] 4xl:text-[50px] 3xl:text-[40px] 2xl:text-[30px] lg:text-[26px] text-[18px] sm:ml-0 ml-5">Online Education System</p>
                            <p className="w-full  p-3  h-[auto] font-istokWeb 5xl:text-[70px] 4xl:text-[50px] 3xl:text-[35px] 2xl:text-[30px] lg:text-[26px] text-[18px] sm:ml-0 ml-5 bg-custom-radial flex justify-center items-center  rounded-[14px]">An interactive learning system offering engaging video lessons, quizzes, and progress tracking. Designed for accessibility and ease of use.
                            
                            </p>

                        </div>
                        
                    </div>
                </div>
                </div>
                


               
                    <div className="lg:hidden">
                    <div className="mt-[7%] m-[5%] flex justify-center items-center">
                    <div className="flex flex-col  w-full lg:flex-row  justify-between sm:mr-[0%] mr-[5%]">
                        <div >
                            <p className="font-istokWeb  5xl:text-[65px] 4xl:text-[50px] 3xl:text-[40px] 2xl:text-[30px] text-[18px] sm:ml-0 ml-5">Featured Project</p>
                            <p className="font-istok 5xl:text-[60px] 4xl:text-[50px] 3xl:text-[40px] 2xl:text-[30px] text-[18px] sm:ml-0 ml-5">Online Education Platform</p>
                            <p className="w-ful sm:ml-0 l ml-5 p-3  h-[auto] font-istokWeb 5xl:text-[70px] 4xl:text-[50px] 3xl:text-[35px] 2xl:text-[30px] text-[18px] bg-custom-radial flex justify-center items-center  rounded-[14px]">An interactive learning system offering engaging video lessons, quizzes, and progress tracking. Designed for accessibility and ease of use.
                            
                            </p>

                        </div>
                        <div className="flex justify-center items-center">
                        <div className="w-full  mt-[20px] lg:mt-[0px]  sm:w-[400px] h-auto bg-white ml-[5%]  ">

                            <Image src="/assets/svgs/proj2.webp" alt="FirstProject" />
                        </div>
                        </div>
                    </div>
                </div>
                </div>

                


                
                

                <div className="mt-[7%] m-[5%] flex justify-center items-center">
                    <div className="flex flex-col w-full lg:flex-row  justify-between sm:mr-[0%] mr-[5%]">
                        <div className=" mr-[5%]">
                            <p className="font-istokWeb lg:text-[26px] 5xl:text-[65px] 4xl:text-[50px] 3xl:text-[40px] 2xl:text-[30px] text-[18px] sm:ml-0 ml-5">Featured Project</p>
                            <p className="font-istok lg:text-[26px] 5xl:text-[60px] 4xl:text-[50px] 3xl:text-[40px] 2xl:text-[30px] text-[18px] sm:ml-0 ml-5">Digital Marketing Dashboard</p>
                            <p className="w-full  p-3  h-[auto] font-istokWeb 5xl:text-[70px] 4xl:text-[50px] 3xl:text-[35px] 2xl:text-[30px] lg:text-[26px] text-[18px] sm:ml-0 ml-5 bg-custom-radial flex justify-center items-center  rounded-[14px]">A real-time analytics platform featuring campaign performance metrics, keyword tracking, and data visualization to optimize marketing strategies.
                    
                            </p>

                        </div>
                        <div className="flex justify-center items-center">
                        <div className="w-full 3xl:min-w-[700px] 4xl:min-w-[1000px] h-full mt-[20px] lg:mt-[0px]  sm:w-[400px]  bg-white ml-[5%]  ">

                            <Image src="/assets/svgs/proj3.webp" alt="FirstProject" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}
