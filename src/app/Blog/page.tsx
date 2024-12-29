import Header from "../Components/Header";
import BlogFrames from "../Components/BlogFrames";
import Footer from "../Components/Footer";

export default function Blog() {
    return (
        <div>

            <Header />
            <div className=" flex justify-center h-auto mt-[79px] mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[71px] ">
            <div className="w-[111px] h-[89px]  flex justify-center items-center text-[60px] font-abhaya ">
                <p>Blog</p>
            </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-x-[20px] ">
                <BlogFrames />
            </div>
            <Footer />

        </div>


    )
}