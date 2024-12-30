import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";

export default function About_Us() {
    return (
        <div>
            <Header />
            <div className="bg-[rgba(70,76,74,0.15)] w-full h-auto flex flex-col justify-center items-center px-4 lg:px-8">
                <div className="w-full max-w-7xl h-auto flex flex-col justify-center items-center mt-10 sm:mt-12 md:mt-16 lg:mt-20 mb-10 sm:mb-14 md:mb-16 lg:mb-20">
                    <p className="font-lancelot text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
                        Why choose us
                    </p>
                </div>

                <div className="lg:mb-16 text-center px-4">
                    <p className="font-inknut text-lg sm:text-2xl md:text-3xl lg:text-4xl">BUCKEYE</p>
                    <p className="font-inknut text-sm sm:text-lg lg:text-xl">-WEB SOLUTIONS-</p>
                    <p className="lg:w-3/4 mx-auto h-auto font-istokWeb text-sm sm:text-base lg:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                    </p>
                </div>

                <div className="w-full max-w-7xl h-auto flex flex-col justify-center items-center lg:mb-16">
                    <div className="text-center px-4">
                        <p className="font-inknut text-lg sm:text-2xl md:text-3xl lg:text-4xl">BUCKEYE</p>
                        <p className="font-inknut text-sm sm:text-lg lg:text-xl">-MEDIA SOLUTIONS-</p>
                        <p className="lg:w-3/4 mx-auto h-auto font-istokWeb text-sm sm:text-base lg:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-10 lg:mt-24 mb-10 lg:mb-24 px-4">
                <div className="w-full max-w-7xl h-auto bg-[rgba(112,154,90,0.72)] flex flex-col justify-center items-center rounded-lg px-6 py-8">
                    <p className="font-abhayaLibre text-3xl sm:text-4xl lg:text-5xl mb-4">Milestones</p>
                    <p className="font-abhayaLibre text-3xl sm:text-4xl lg:text-5xl mb-8">of Success</p>
                    <div className="flex flex-col sm:flex-row justify-between text-center">
                        <p className="text-3xl lg:text-4xl font-istokWeb mx-4 mb-4 sm:mb-0">1000+</p>
                        <p className="text-3xl lg:text-4xl font-istokWeb mx-4 mb-4 sm:mb-0">150%</p>
                        <p className="text-3xl lg:text-4xl font-istokWeb mx-4">350+</p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl px-4 lg:px-0">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 lg:mb-20 space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="flex-1 bg-[rgba(112,154,90,1)] text-white flex justify-center items-center rounded-lg text-center font-inknut text-lg p-8">
                        OUR HISTORY
                    </div>
                    <p className="flex-1 font-istokWeb text-justify leading-relaxed text-base sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 lg:mb-20 space-y-8 lg:space-y-0 lg:space-x-8">
                    <p className="flex-1 font-istokWeb text-justify leading-relaxed text-base sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                    </p>
                    <div className="flex-1 bg-[rgba(112,154,90,1)] text-white flex justify-center items-center rounded-lg text-center font-inknut text-lg p-8">
                        OUR MISSION
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 lg:mb-20 space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="flex-1 bg-[rgba(112,154,90,1)] text-white flex justify-center items-center rounded-lg text-center font-inknut text-lg p-8">
                        OUR VISION
                    </div>
                    <p className="flex-1 font-istokWeb text-justify leading-relaxed text-base sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
                    </p>
                </div>
            </div>

            <div className="lg:w-[1280px] h-auto bg-[rgba(70,76,74,0.15)] flex flex-col justify-center items-center px-4 lg:px-0">
                <div className="lg:w-[954px] flex justify-center items-center lg:mt-12">
                    <p className="font-abhaya text-3xl sm:text-4xl lg:text-5xl">Our Team</p>
                </div>

                {/* Team Member Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mt-10 lg:mt-16 mb-16 lg:mb-20">
                    {/* Team Member */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[rgba(112,154,90,1)]">
                            <Image alt="Picture Person" src="/assets/svgs/PicturePerson1.png" className="w-full h-full object-cover" />
                        </div>
                        <p className="font-istok text-lg sm:text-xl font-semibold">Miles Morales</p>
                        <p className="font-istokWeb text-base text-[rgba(112,154,90,10)]">HR Manager</p>
                        <p className="font-istokWeb text-center text-base sm:text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>

                    {/* Add similar sections for additional team members */}
                </div>
            </div>
            <Footer />
        </div>
    );
}
