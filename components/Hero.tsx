"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    { id: 0, img: "/hero-1.webp" },
    { id: 1, img: "/hero-2.webp" },
    { id: 2, img: "/hero-3.webp" },
  ];

  return (
    <div className="container pt-6 lg:pt-0 bg-black">
      <Slider {...settings}>
        {slideData.map((item) => (
          <div key={item.id} className="relative outline-none border-none">
            {/* Button */}
            <div className="absolute left-[10px] md:left-[120px] bottom-[10%] bg-red-600 text-black font-bold text-[12px] md:text-[16px] p-2 px-4 rounded-lg cursor-pointer hover:bg-black hover:text-red-500">
              Shop Now
            </div>

            {/* Image */}
            <Image
              className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-auto rounded-xl object-cover object-center"
              src={item.img}
              alt="banner"
              width={2000}
              height={2000}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
