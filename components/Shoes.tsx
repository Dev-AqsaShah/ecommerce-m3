"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Shoes = () => {
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
    { id: 0, img: "/shoes-1.jpeg", name: "Kids Shoes", size: "S, M, L", price: "Rs:2225" },
    { id: 1, img: "/shoes-2.jpeg", name: "baby Shoes", size: "S, M, L", price: "Rs:1500" },
    { id: 2, img: "/shoes-3.jpeg", name: "Pretty Shoes", size: "S, M, L", price: "Rs:1225" },
    { id: 3, img: "/shoes-4.jpeg", name: "Cute Shoes", size: "S, M, L", price: "Rs:925" },
    { id: 4, img: "/shoes-5.jpeg", name: "little Shoes", size: "S, M, L", price: "Rs:3000" },
    { id: 5, img: "/shoes-6.jpeg", name: "Pretty Shoes", size: "S, M, L", price: "Rs:1900" },
    { id: 6, img: "/shoes-7.jpeg", name: "baby Shoes", size: "S, M, L", price: "Rs:2300" },
    { id: 7, img: "/shoes-8.jpeg", name: "girls Shoes", size: "S, M, L", price: "Rs:2000" },
    { id: 8, img: "/shoes-9.jpeg", name: "Pretty Shoes", size: "S, M, L", price: "Rs:1800" },
    { id: 9, img: "/shoes-10.jpeg", name: "Stylish Shoes", size: "S, M, L", price: "Rs:1000" },
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
        pretty princess SHOES
      </h2>

      {/* Slider */}
      <Slider {...settings}>
        {slideData.map((item) => (
          <div key={item.id} className="relative group px-2">
            {/* Image */}
            <Image
              className="w-full h-[250px] sm:h-[300px] md:h-[300px] lg:h-[300px] xl:h-[350px] rounded-xl object-cover object-center transition-all"
              src={item.img}
              alt={item.name}
              width={1000}
              height={600}
            />

            {/* Sliding Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white px-4 py-4 rounded-b-xl transform translate-y-full group-hover:translate-y-0 transition-transform">
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className="text-sm">Size: {item.size}</p>
              <p className="text-sm">Price: {item.price}</p>
              <button
                onClick={handleAddToCart}
                className="mt-2 bg-red-600 text-black font-bold text-[12px] md:text-[14px] px-4 py-1 rounded-lg hover:bg-black hover:text-red-500 transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Shoes;
