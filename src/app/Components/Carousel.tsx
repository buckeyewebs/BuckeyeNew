"use client";

import Slider from 'react-slick';
import { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const sliderRef = useRef<Slider | null>(null);

  const data = [
    { image: '/assets/svgs/Person1.svg', info: '"The team at BuckeyeWebs is incredible! Anytime I need changes or have a question, they respond quickly and handle it. I recommended.”', person: '- Emma K' },
    { image: '/assets/svgs/Person2.svg', info: '“Working with BuckeyeWebs has been amazing. They built a great website for my business and take care of everything. I recommended.”', person: '- Gary P' },
    { image: '/assets/svgs/Person3.svg', info: '"The pricing at BuckeyeWebs is reasonable for the services they provide. They made changes free of charge. I would recommend Buckeye.”', person: ' - Steven M' },
    // Add more items as needed
  ];

  const settings = {
    dots: false,  // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 2,  // Show 3 items at a time
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,   // Center the first slide
    initialSlide: 0,    // Start from the first slide
    touchMove: true,
    draggable: true,
    autoplay: true,     // Enable auto-play
    autoplaySpeed: 2000, // Move forward every 3 seconds (3000ms)
    pauseOnHover: true, // Pause on hover (optional)
    pauseOnFocus: true, // Pause on focus (optional)
  };

  return (
    <div className=" w-[70%] pb-[5%] h-auto   mx-auto ">
      {/* Slider Component */}
      <Slider
        ref={sliderRef}
        {...settings}
        responsive={[
          
          
          {
            breakpoint: 1020, // For medium screens
            settings: {
              slidesToShow: 2, // Show 2 slides
            },
          },
          {
            breakpoint: 768, // For smaller screens
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: "10px", 
              
            },
          },
        ]}
      >
        {data.map((item, index) => (
          <div key={index} className=" m-2 flex flex-col items-center p-4   ">
            {/* Info Box */}
            <div className="max-h-[700px]   min-w-[250px]  md:w-auto w-auto h-full pt-8  bg-[rgba(112,154,90,0.29)] border border-gray-200 rounded-md flex flex-col items-center  ">
              <p className=" w-full h-full  px-6 pb-6 5xl:text-[59px] 4xl:text-[48px] 2xl:text-[30px] 3xl:text-[30px] md:text-[16px] xl:text-[16px] lg:text-[16px] text-center text-justify">
                {item.info}
                <p className="font-bold text-center italic">{item.person}</p>
              </p>
            </div>
          </div>
        ))}
      </Slider>


      {/* Navigation Buttons */}

    </div>
  );
};

export default Carousel;
