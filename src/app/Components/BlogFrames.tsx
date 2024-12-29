
"use client"
import { blogData } from '../Data/BlogData';
import { useState } from 'react';
import Image from 'next/image';

const BlogComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const paginatedData = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Change page handler
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Scroll to top after page change
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[20px]">
        {paginatedData.map((item, index) => (
          <div
            key={index}
            className="w-[250px] sm:w-[280px] md:w-[320px] lg:w-[355px] flex flex-col justify-between"
          >
            <div>
              <Image
                src={item.image}
                alt="Frame"
                className="w-full h-auto"
              />
              <div className="mt-[15px] sm:mt-[17px] md:mt-[22px] lg:mt-[22px]">
                <p className="font-abhayaLibre text-[20px] sm:text-[26px] md:text-[30px] lg:text-[33px]">
                  {item.title}
                </p>
              </div>
              <div className="mt-[10px] sm:mt-[12px] md:mt-[18px] lg:mt-[22px] mb-[14px] sm:mb-[20px] md:mb-[24px] lg:mb-[28px]">
                <p className="font-istokWeb text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px]">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="flex justify-end mt-auto">
              <a
                className="text-blue-600 font-semibold whitespace-nowrap lg:mb-[57px] md:mb-[40px] sm:mb-[34px] mb-[30px]"
                href="#"
              >
                Read More &gt;&gt;
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 mb-[20px]">
        {/* Prev Button */}
        <button
          className={`px-4 py-2 border rounded-lg mr-2 ${
            currentPage === 1
              ? "bg-[rgba(112,154,90,0.5)] cursor-not-allowed hover:bg-[rgba(112,154,90,0.3)]"
              : "hover:bg-[rgba(112,154,90,1)]"
          }`}
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-4 py-2 border rounded-lg mx-1 ${
              currentPage === index + 1
                ? 'bg-[rgba(112,154,90,1)] text-white'
                : 'bg-white hover:bg-[rgba(112,154,90,0.5)]'
            }`}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`px-4 py-2 border rounded-lg ml-2 ${
            currentPage === totalPages || paginatedData.length < itemsPerPage
              ? "bg-[rgba(112,154,90,0.5)] cursor-not-allowed hover:bg-[rgba(112,154,90,0.3)]"
              : "hover:bg-[rgba(112,154,90,1)]"
          }`}
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages || paginatedData.length < itemsPerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogComponent;
