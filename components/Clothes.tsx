"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clothes = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleAddToCart = () => {
    setMessage("Added to Cart");
    setTimeout(() => setMessage(null), 3000); // Clear the message after 3 seconds
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const slideData = [
    { id: 0, img: "/frok-1.jpeg", name: "Baby Girls Frock", size: "S, M, L", price: "Rs: 4999" },
    { id: 1, img: "/frok-2.jpeg", name: "Pretty Girls Frock", size: "S, M, L", price: "Rs:2999" },
    { id: 2, img: "/frok-3.jpeg", name: "Cute Girls Frock", size: "S, M, L", price: "Rs:2599" },
    { id: 3, img: "/frok-4.jpeg", name: "Little Girls Frock", size: "S, M, L", price: "Rs:3399" },
    { id: 4, img: "/frok-5.jpeg", name: "Stylish Baby Frock", size: "S, M, L", price: "Rs:5100" },
    { id: 5, img: "/frok-6.jpeg", name: "little Baby Frock", size: "S, M, L", price: "Rs:1100" },
    { id: 6, img: "/frok-7.jpeg", name: "cute Baby Frock", size: "S, M, L", price: "Rs:3100" },
    { id: 7, img: "/frok-8.jpeg", name: "pretty Baby Frock", size: "S, M, L", price: "Rs:4100" },
    { id: 8, img: "/frok-9.jpeg", name: "girls Baby Frock", size: "S, M, L", price: "Rs:2100" },
    { id: 9, img: "/frok-10.jpeg", name: "Stylish Baby Frock", size: "S, M, L", price: "Rs:5100" },

  ];

  return (
    <div className="container mt-10 bg-black px-4">
      {/* Popup Message */}
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-black py-2 px-4 rounded shadow-lg z-50 font-bold">
          {message}
        </div>
      )}

      {/* Top Title */}
      <h2 className="text-center bg-red-600 mb-4 text-black text-xl font-bold py-2 uppercase animate-pulse">
        Pretty Princess Frocks
      </h2>

      {/* Slider */}
      <Slider {...settings}>
        {slideData.map((item) => (
          <div
            key={item.id}
            className="relative outline-none border-none px-2 group"
          >
            {/* Sliding Caption */}
            <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm">Size: {item.size}</p>
              <p className="text-sm font-semibold">{item.price}</p>
              <button
                onClick={handleAddToCart}
                className="mt-3 bg-red-600 hover:bg-black hover:text-red-600 text-black font-bold py-1 px-4 rounded transition-all"
              >
                Add to Cart
              </button>
            </div>

            {/* Image */}
            <Image
              className="w-full h-[250px] sm:h-[300px] md:h-[300px] lg:h-[300px] xl:h-[350px] rounded-xl object-cover object-center"
              src={item.img}
              alt={item.name}
              width={1000}
              height={600}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clothes;
