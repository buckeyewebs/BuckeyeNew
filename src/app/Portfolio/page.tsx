import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Link from 'next/link';
import Image from "next/image";

export default function Portfolio() {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Header />

            {/* Image and Overlay Section */}
            <div className="relative w-full lg:max-w-[1280px] md:max-w-[940px] w-[500px] h-[600px] sm:h-[600px] md:h-[650px] lg:h-[724px] ">
                <Image
                    src="/assets/svgs/BgImg.png"
                    alt="services"
                    className="w-auto lg:h-auto md:h-auto sm:h-auto h-[400px] object-cover"
                />
                <div
                    className="absolute inset-0 flex flex-col text-white"
                    style={{
                        backdropFilter: 'blur(0.8px)',
                    }}
                >
                    <p className="lg:text-[68px] md:text-[54px]  w-auto font-bold font-abhayaLibre text-[rgba(30,30,30,1)] lg:mt-[122px] md:mt-[80px] sm:mt-[50px] mt-[35px]  flex justify-center items-center">
                        Explore Our Work
                    </p>
                    
                    <div className="flex justify-center items-center">
                        <div className="lg:w-[780px] w-[200px] h-auto flex flex-col items-center justify-center">
                            <p className="text-center flex justify-center items-center font-istokWeb text-[rgba(0,0,0,1)] text-[12px] lg:text-[18px] break-words">
                            Take a look at the websites we have built for our amazing clients. Each one tells a story, and we are proud to have helped these businesses grow and succeed online with custom, easy-to-use designs.                            </p>
                            <div className="lg:w-[275px] w-[140px] h-[60px] rounded-[43px] border border-black transition duration-300 ease-in-out hover:bg-black group mt-[18px] flex items-center justify-center">
                                <Link href="/QuoteRequestForm">
                                <button className="text-[rgba(0,0,0,1)] lg:text-[20px] text-[10px] group-hover:text-white transition duration-300 ease-in-out">
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
                <div className="lg:w-[559px]  md:w-[459px] sm:w-[359px] w-[300px]  h-auto flex justify-center items-center bg-custom-gradient lg:mt-[68px] md:mt-[-80px] sm:mt-[-225px] mt-[-220px] rounded-[29px]">
                    <p className="font-abhayaLibre lg:text-[57px] md:text-[47px] sm:text-[40px] text-[30px]">Recent Projects</p>
                </div>
            </div>

{/* Section for projects */}
            <div className="lg:mb-[40px]">
                <div>
                    <div className="flex flex-col lg:flex-row lg:mt-[100px]">
                        <div>
                            <p className="font-istokWeb lg:text-[18px] ml-[20px]">Featured Project</p>
                            <p className="font-istok lg:text-[30px]  ml-[20px]">AutoMarket Pro</p>
                            <p className="lg:w-[600px] ml-[20px] lg:p-[15px] lg:h-[148.2px] font-istokWeb text-[18px] bg-custom-radial flex justify-center items-center  rounded-[14px]">
                            A Java-based platform enabling seamless car buying and selling with dedicated consoles for sellers, buyers, and admins. It ensures efficient listings, secure transactions, and streamlined management.</p>

                        </div>
                        <div className="sm:w-[400px] md:w-[450px] lg:w-[523px] w-[340px]  h-auto bg-black ml-[100px] md:mt-[20px] sm:mt-[20px] lg:mt-[0px] mt-[20px]">

                            <Image src="/assets/svgs/Proj1.jpeg" alt="FirstProject" />
                        </div>
                    </div>
                </div>



                <div className="hidden lg:block">
                    <div className="flex flex-row lg:mt-[100px] md:mt-[80px] sm:mt-[60px] mt-[45px]">
                        <div className="sm:w-[400px] md:w-[450px] lg:w-[523px] w-[340px]  h-auto bg-black lg:ml-[50px] md:ml-[100px] sm:ml-[100px] ml-[100px] mt-[20px]">

                            <Image src="/assets/svgs/Proj2.jpeg" alt="FirstProject" />
                        </div>
                        <div>
                            <p className="font-istokWeb lg:text-[18px] ml-[20px] mt-[20px]">Featured Project</p>
                            <p className="font-istok lg:text-[30px]  ml-[20px]">Turbo Trader</p>
                            <p className="lg:w-[600px] ml-[20px] lg:p-[15px] lg:h-[148.2px] font-istokWeb text-[18px] bg-custom-radial flex justify-center items-center  rounded-[14px]">A MERN stack-based car-sharing platform, enabling users to rent vehicles from local owners. It features seamless booking, secure transactions, and efficient management.
                            </p>
                        </div>

                    </div>
                </div>


                <div>
                    <div className="lg:hidden">
                    <div className="flex flex-col lg:mt-[100px] md:mt-[80px] sm:mt-[60px] mt-[45px]">
                    <div>
                            <p className="font-istokWeb lg:text-[18px] ml-[20px]">Featured Project</p>
                            <p className="font-istok lg:text-[30px]  ml-[20px]">Turbo Trader</p>
                            <p className="lg:w-[600px] ml-[20px] lg:p-[15px] lg:h-[148.2px] font-istokWeb text-[18px] bg-custom-radial flex justify-center items-center  rounded-[14px]">A MERN stack-based car-sharing platform, enabling users to rent vehicles from local owners. It features seamless booking, secure transactions, and efficient management.
                            </p>

                        </div>
                        <div className="sm:w-[400px] md:w-[450px] lg:w-[523px] w-[340px]  h-auto bg-black ml-[100px] md:mt-[20px] sm:mt-[20px] lg:mt-[0px] mt-[20px]">

                            <Image src="/assets/svgs/Proj2.jpeg" alt="FirstProject" />
                        </div>

                    </div>
                </div>
                </div>


                <div >
                    <div className="flex flex-col lg:flex-row lg:mt-[100px] md:mt-[80px] sm:mt-[60px] mt-[45px] mb-[20px]">
                        <div>
                            <p className="font-istokWeb lg:text-[18px] ml-[20px]">Featured Project</p>
                            <p className="font-istok lg:text-[30px]  ml-[20px]">Gemini Pod</p>
                            <p className="lg:w-[600px] ml-[20px] lg:p-[15px] lg:h-[148.2px] font-istokWeb text-[18px] bg-custom-radial flex justify-center items-center  rounded-[14px]">A Google Gemini AI pod in Flutter that effortlessly tackles both image and text queries. 🚀 Leveraging robust packages for a seamless fusion of creativity and functionality.
                            </p>

                        </div>
                        <div className="sm:w-[400px] md:w-[450px] lg:w-[523px] w-[340px]  h-auto bg-black ml-[100px] md:mt-[20px] sm:mt-[20px] lg:mt-[0px] mt-[20px]">

                            <Image src="/assets/svgs/Proj3.png" alt="FirstProject" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}
