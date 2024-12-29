import Image from "next/image"
export default function TestimonialsFrame() {
    return (
        <div className="lg:w-[1085px] md:w-[768px] sm:w-[480px] w-[400px] h-auto   flex flex-row flex items-center justify-center mb-[244px]">
            <button className="mr-[12px]">
                <Image alt="left btn" src="/assets/svgs/leftbutton.png" />
            </button>
            <div
                style={{ backgroundColor: 'rgba(30, 30, 30, 1)' }}
                className="lg:w-[265px] md:w-[200px] sm:w-[150px] w-[130px] lg:h-[503px] md:h-[420px] sm:h-[380px] h-[250px] flex flex-row justify-center items-center mt-[19px] rounded-[20px]"
            >
                <Image alt="Thumbs Up" src="/assets/svgs/ThumbsUp.svg" className="w-[25px] h-[25px] sm:w-[25px] sm:h-[25px] md:w-[30px] md:h-[30px] lg:w-[38px] lg:h-[38px] ml-[15px]" />
                <p className="font-istok text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-white mt-2 ml-[5px] mr-[75px] ">Testimonial</p>
            </div>

            <div className="w-[290px] h-[581px] absolute left-[130px] sm:left-[150px] md:left-[200px] lg:left-[350px] -translate-y-1/8 mb-[-20px] overflow-hidden ">
                <Image
                    src="/assets/svgs/imgperson.png"
                    className="w-full h-full object-cover object-center"
                    alt="Person"
                />
            </div>

            <div className="lg:w-[780px] md:w-[400px] sm:w-[300px] w-[250px] h-[505px] bg-[rgba(217,217,217,1)] mt-[19px] rounded-[20px]">

                <Image alt="my frm" src="/assets/svgs/myfrm.png" className="w-[221px] h-auto ml-[270px] mt-[91px] " />
                <p className=" font-istokWeb text-[22px] w-[426px] h-auto ml-[270px] mt-[40px] leading-[31.67px] flex justify-between">“Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.”</p>
                <div className="w-[520px] h-auto flex flex-row  ml-[170px] mt-[35px] ">
                    <p className="ml-[99px] w-[180px] font-istokWeb text-[22px] font-bold">Tom Farenci</p>
                   
                    <p className="w-[280px] ml-[-50px] font-istokWeb  text-[22px]">(Marketing Coordinator)</p>
                </div>
            </div>
            <button className="ml-[12px]">
                <Image alt="right btn" src="/assets/svgs/rightbutton.png" />
            </button>




        </div>
    )
}