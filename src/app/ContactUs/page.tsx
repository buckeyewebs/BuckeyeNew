"use client"
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function ContactUs() {

    const [animateFirst, setAnimateFirst] = useState(false);
    const [animateSecond, setAnimateSecond] = useState(false);

    useEffect(() => {
        // Observer for first element
        const observerFirst = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimateFirst(true); // Trigger animation when in view
                } else {

                    setAnimateFirst(false); // Reset animation when out of view
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

                    setAnimateSecond(false); // Reset animation when out of view
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
    

    const [message1, setMessage1] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const form = e.target as HTMLFormElement;
    
        const data = {
            fullName: (form.elements.namedItem("fullName") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            companyName: (form.elements.namedItem("companyName") as HTMLInputElement).value,
            industry: (form.elements.namedItem("industry") as HTMLInputElement).value,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };
        console.log(data);
        console.log(message1)
    
        try {
            const response = await fetch("/api/contact-us", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
    
            if (response) {
                setMessage1("Thank you for your response! We will get back to you.");
                localStorage.setItem("homepageMessage", "Thank you for your response! We will get back to you.");
                window.location.href = "/Homepage"; 
            } else {
                setMessage1("Failed to send the message. Please try again.");
            }
        } catch (error) {
            setMessage1("An error occurred. Please try again.");
            console.log(error)
        }
    };

    return (
        <div>
            <Header />
            
            <div className="flex flex-row ml-6 4xl:ml-[85px] ">
                <div>
                    <div className="w-auto h-auto mt-8 4xl:mt-[70px]">
                        <p className="font-abhaya text-[35px] sm:text-[20px] md:text-[40px] lg:text-[70px] 3xl:text-[80px] 4xl:text-[90px]  5xl:text-[100px] ">Get in Touch</p>
                    </div>
                    <div className="w-auto h-auto">
                        <p className="font-istok lg:text-[26px] md:text-[20px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[26px] 4xl:text-[32px] 5xl:text-[40px] whitespace-nowrap text-[rgba(46,46,46,0.65)]">Transforming your online presence</p>
                    </div>
                </div>


            </div>
            <div className="mt-20  flex  justify-center items-center">
                <form onSubmit={handleSubmit} className="h-auto ml-6 w-auto  mr-6 mb-[6%] flex flex-col md:flex-row">

                    <div className="w-auto  4xl:pl-10 4xl:pr-10  h-auto bg-[rgba(70,76,74,0.15)] flex justify-center md:rounded-l-[23px] ">
                        <div className="w-auto sm:m-7  h-auto xl:pl-12 xl:pr-12">
                            <p
                                className={` animate-first  font-abhaya  p-2 text-[35px] sm:text-[35px] md:text-[40px] lg:text-[60px] 3xl:text-[69px] 4xl:text-[79px] 5xl:text-[89px] font-bold sm:font-normal md:font-medium lg:font-normal transform ${animateFirst ? "opacity-100 animate-pulse-fade-in" : "opacity-0"
                                    } `}
                            >
                                Send us a message</p>
                            <div className="flex flex-row w-full mt-2 sm:gap-2 md:gap-6">
                                <div className="flex-1 p-4">
                                    <input
                                       
                                       
                                        type="text"
                                        placeholder="Full Name"
                                        name="fullName"    
                                        className="5xl:placeholder:text-4xl 2xl:placeholder:text-[22px] 3xl:placeholder:text-3xl 4xl:placeholder:text-4xl 4xl:h-[52px] w-full h-auto p-2 border-b-2 border-black focus:outline-none bg-transparent"
                                    />
                                </div>
                                <div className="flex-1 p-4">
                                    <input
                                    
                                        type="text"
                                         name="email"
                                        placeholder="Email"
                                        className="5xl:placeholder:text-4xl 2xl:placeholder:text-[22px] 3xl:placeholder:text-3xl 4xl:placeholder:text-4xl 4xl:h-[52px] w-full h-auto p-2 border-b-2 border-black focus:outline-none bg-transparent"
                                    />
                                </div>
                            </div>

                            <div className="p-4">
                                <input type="text" name="companyName"
                                 placeholder="Company Name" className="w-full 5xl:placeholder:text-4xl 2xl:placeholder:text-[22px] 3xl:placeholder:text-3xl p-2 4xl:placeholder:text-4xl   3xl:h-[52px]  h-auto border-b-2 border-black mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[57px] focus:outline-none bg-transparent" />

                            </div>
                            <div className="p-4">
                                <input type="text" name="industry"
                                    placeholder="Industry" className="w-full 5xl:placeholder:text-4xl 2xl:placeholder:text-[22px] 3xl:placeholder:text-3xl p-2  4xl:placeholder:text-4xl  3xl:h-[52px]  h-auto border-b-2 border-black mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[57px] focus:outline-none bg-transparent" />

                            </div>
                            <div className="p-4">
                                <textarea  name="message"
                                  className=" w-full 5xl:placeholder:text-4xl  4xl:placeholder:text-4xl 2xl:placeholder:text-[22px] 3xl:placeholder:text-3xl 4xl:h-[52px] h-auto border-b-2 border-black mt-[20px] sm:mt-[30px] md:mt-[40px] lg:mt-[57px] bg-transparent lg:mb-[63px]" placeholder="Message" />


                            </div>
                        </div>


                    </div>

                    <div className=" w-auto xl:pl-12 xl:pr-12 4xl:pl-10 4xl:pr-10 mt-[12px] md:mt-[0px] h-auto flex justify-center items-center  md:bg-[rgba(112,154,90,1)] rounded-r-[23px]  flex md:flex-col sm:flex-row">
                        <Image alt="Comp person" className="sm:block hidden" src="/assets/svgs/Comp_person.png" />

                        <div
                            className={` animate-second transition duration-300 ease-in-out transform ${animateSecond ? "opacity-100 animate-pulse-fade-in" : "opacity-0"
                                } `}
                        >
                            <button className="flex flex-row justify-center  bg-[rgba(255,255,255,1)] rounded-[11px] w-auto p-4 mt-3 h-auto outline outline-black hover:scale-105 transition-all duration-200 ">
                                <p className="font-istokWeb text-[26px] 5xl:text-[38px] ">Send Now</p>
                            </button>

                        </div>
                    </div>

                </form>

            </div>            
            <Footer />
        </div>
    )
}