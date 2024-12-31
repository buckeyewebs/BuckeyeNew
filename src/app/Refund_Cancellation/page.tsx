import Header from '../Components/Header'
import Footer from '../Components/Footer'
export default function Refund_Cancellation(){
    return(
        <div>
            <Header />
        <div>
            <div className="w-full h-auto flex justify-center items-center flex-col">
            <p className="p-8 font-bold font-lancelot lg:text-[40px] md:text-[35px] sm:text-[30px] text-[20px]">Refunds & Cancellation Policy</p>
            <div className="bg-[rgba(112,154,90,1)] text-clamp(34px, 3vw, 104px) w-[75%] p-4 rounded-[8px] font-lancelot">
                <p className="font-bold xl:text-[26px] 2xl:text-[30px] lg:text-[20px] md:text-[18px] text-[16px]">No Refunds:</p>
                <p className="font-normal xl:text-[25px] 2xl:text-[30px] lg:text-[18px] text-[16px]">All payments are final. We do not offer refunds once services have been agreed upon and initiated.</p>
            </div>
            <div className=" w-[75%] mt-[7%] bg-[rgba(112,154,90,1)] p-4 rounded-[8px] font-lancelot">
                <p className="font-bold xl:text-[26px] 2xl:text-[30px] lg:text-[20px] md:text-[18px] text-[16px]">Cancellation:</p>
                <p className="font-normal xl:text-[25px] 2xl:text-[30px] lg:text-[18px] text-[16px]">You may cancel your agreement within 48 hours of signing. Cancellations made after this period will not be eligible for a refund or adjustment.</p>
            </div>
            <p className="font-normal xl:text-[25px] 2xl:text-[30px] lg:text-[18px] text-[16px] p-4">If you have any questions or need clarification, feel free to contact us at <p className="text-blue-500">info@buckeyewebs.com</p></p>
            </div>
        </div>
        <Footer />
        </div>
    )
}