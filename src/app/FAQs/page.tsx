
"use client"
import Header from "../Components/Header";
import { useState } from "react";
import FAQsData from "../Data/FAQsData"; // Importing the array from a separate file
import Footer from "../Components/Footer";

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null); // State to manage which question is open

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle logic
    };

    return (
        <div className="max-w-[1440px] mx-auto">
            <Header />
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="w-[1280px] h-[431px] bg-[rgba(70,76,74,0.15)] flex flex-col justify-center items-center space-y-[20px] text-center mt-[-127.25px]">
                    <p className="font-istokWeb text-[24px]">FAQs</p>
                    <p className="font-abhayaLibre text-[60px]">Ask us Anything</p>
                    <p className="text-[24px] font-istokWeb">Have any questions? We’re here to assist you</p>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search here"
                            className="w-[327px] h-[37.65px] bg-[rgba(255,255,255,1)] rounded-[10px] pl-[50px] text-[24px] font-inter placeholder:text-[rgba(83,104,106,1)] focus:outline-none focus:ring-0"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[12px] top-1/2 transform -translate-y-1/2 text-[rgba(83,104,106,1)]"
                            width="20"
                            height="20"
                            fill="rgba(83,104,106,1)"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.442.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div>
                <div className="mt-[-85px] space-y-[20px]">
                    <p className=" pl-[80px]  font-abhayaLibre text-[60px]">Frequently Asked Questions</p>
                    <p className="pl-[80px] text-[rgba(70,76,74,1)] font-istokWeb text-[24px]">We are here to help with any questions you have about plans, pricing, and supported features.</p>
                </div>

                <div className="flex flex-row ">
                    {/* Offering & Services Section */}
                    <div className="w-[300px] h-[178px] ml-[80px] mt-[40px] ">
                        <p className="font-abhayaLibre text-[48px]">Offering & Services</p>
                    </div>

                    {/* Question List Section */}
                    <div className="flex flex-col space-y-4 w-full mt-[40px] ml-[137px] md:ml-[40px]">
                        {FAQsData.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 py-3 lg:ml-[40px]">
                                <div className="flex items-center justify-between w-full flex-wrap">
                                    {/* <p className="font-istok text-[22.7px]  sm:text-[12px] md:text-[18px] lg:text-[12.7px] flex-grow pr-4 min-w-[70%] sm:min-w-[60%] break-words">{item.question}</p> */}
                                    <p className="font-istok text-[3vw] sm:text-[4vw] md:text-[22.7px] lg:text-[22.7px]">
                                        {item.question}
                                    </p>
                                    <button onClick={() => toggleAnswer(index)} className="w-[40px] h-[40px] flex items-center justify-center text-[24px] rounded-full 
               focus:outline-none focus:ring-0 
               bg-transparent md:bg-transparent md:focus:ring-0 
               sm:bg-gray-200 sm:focus:ring-2 sm:focus:ring-gray-500 hover:bg-gray-300 sm:hover:bg-gray-300">
                                        {openIndex === index ? '×' : '+'}
                                    </button>
                                </div>
                                <div
                                    className={`transition-all duration-300 overflow-hidden mt-2 ${openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                                        }`}
                                >
                                    {openIndex === index && (
                                        <p className="text-[15.9px] font-istokWeb ">{item.answer}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>




                <div className="flex flex-row mt-[56.41px]">
                    {/* Development Timelines Section */}
                    <div className="w-[300px] h-[178px] ml-[80px] mt-[40px] ">
                        <p className="font-abhayaLibre text-[48px]">Pricing & Plans</p>
                    </div>

                    {/* Question List Section */}
                    <div className="flex flex-col space-y-4 w-full mt-[40px] ml-[167px] md:ml-[40px] ">
                        {FAQsData.map((item, index) => (
                            <div key={index} className="border-b border-grey-300 py-3 lg:ml-[40px] ">
                                <div className="flex items-center justify-between w-full flex-wrap ">
                                    <p className="font-istok text-[3vw] sm:text-[4vw] md:text-[22.7px] lg:text-[22.7px] ">
                                        {item.question}
                                    </p>                                    <button onClick={() => toggleAnswer(index)} className="tw-[40px] h-[40px] flex items-center justify-center text-[24px] rounded-full 
               focus:outline-none focus:ring-0 
               bg-transparent md:bg-transparent md:focus:ring-0 
               sm:bg-gray-200 sm:focus:ring-2 sm:focus:ring-gray-500 hover:bg-gray-300 sm:hover:bg-gray-300 ">
                                        {openIndex === index ? '×' : '+'}
                                    </button>
                                </div>
                                <div
                                    className={`transition-all duration-300 overflow-hidden mt-2 ${openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                                        }`}
                                >
                                    {openIndex === index && (
                                        <p className="text-[15.9px] font-istokWeb ">{item.answer}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>





                <div className="flex flex-row mt-[56.41px]">
                    {/* Development Timelines Section */}
                    <div className="w-[300px] h-[178px] ml-[80px] mt-[40px] ">
                        <p className="font-abhayaLibre text-[48px] ">Development Timelines</p>
                    </div>

                    {/* Question List Section */}
                    <div className="flex flex-col space-y-4 w-full mt-[40px] ml-[80px] md:ml-[40px] ">
                        {FAQsData.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 py-3">
                                <div className="flex items-center justify-between w-full flex-wrap">
                                    <p className="font-istok text-[3vw] sm:text-[4vw] md:text-[22.7px] lg:text-[22.7px] ">
                                        {item.question}
                                    </p>                                    <button onClick={() => toggleAnswer(index)} className="tw-[40px] h-[40px] flex items-center justify-center text-[24px] rounded-full 
               focus:outline-none focus:ring-0 
               bg-transparent md:bg-transparent md:focus:ring-0 
               sm:bg-gray-200 sm:focus:ring-2 sm:focus:ring-gray-500 hover:bg-gray-300 sm:hover:bg-gray-300 ml-[10px]">
                                        {openIndex === index ? '×' : '+'}
                                    </button>
                                </div>
                                <div
                                    className={`transition-all duration-300 overflow-hidden mt-2 ${openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                                        }`}
                                >
                                    {openIndex === index && (
                                        <p className="text-[15.9px] font-istokWeb ">{item.answer}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



                <div className="flex flex-row mt-[56.41px]">
                    {/* Mantainence Options Section */}
                    <div className="w-[300px] h-[178px] ml-[80px] mt-[40px] ">
                        <p className="font-abhayaLibre text-[48px]">Mantainence Option</p>
                    </div>

                    {/* Question List Section */}
                    <div className="flex flex-col space-y-4 w-full mt-[40px] ml-[85px] md:ml-[40px]">
                        {FAQsData.map((item, index) => (
                            <div key={index} className="border-b border-gray-300 py-3">
                                <div className="flex items-center justify-between w-full flex-wrap min-w-0 flex-shrink-0 ">
                                    <p className="font-istok text-[3vw] sm:text-[4vw] md:text-[22.7px] lg:text-[22.7px] mr-[220px]">
                                        {item.question}
                                    </p>                                    <button onClick={() => toggleAnswer(index)} className="w-[40px] h-[40px] flex items-center justify-center text-[24px] rounded-full 
               focus:outline-none focus:ring-0 
               bg-transparent md:bg-transparent md:focus:ring-0 
               sm:bg-gray-200 sm:focus:ring-2 sm:focus:ring-gray-500 hover:bg-gray-300 sm:hover:bg-gray-300">
                                        {openIndex === index ? '×' : '+'}
                                    </button>
                                </div>
                                <div
                                    className={`transition-all duration-300 overflow-hidden mt-2 ${openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                                        }`}
                                >
                                    {openIndex === index && (
                                        <p className="text-[15.9px] font-istokWeb ">{item.answer}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-[90px]">
                    <Footer />
                </div>
            </div>
        </div>
    );
}
