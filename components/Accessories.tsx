"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// Data for the products
const productsData = [
  {
    img: "/accessories-1.webp",
    title: "girls headband & glasses",
    desc: "KIDS ACCESSORIES",
    rating: 4,
    price: "695",
  },
  {
    img: "/accessories-2.webp",
    title: "girls headband & glasses",
    desc: "KIDS ACCESSORIES",
    rating: 4,
    price: "790",
  },
  {
    img: "/accessories-3.jpg",
    title: "baby comfort",
    desc: "KIDS ACCESSORIES",
    rating: 4,
    price: "2100",
  },
  {
    img: "/accessories-4.webp",
    title: "pillow bear blue",
    desc: "KIDS ACCESSORIES",
    rating: 4,
    price: "1200",
  },
  {
    img: "/accessories-5.webp",
    title: "baby hooded towel",
    desc: "KIDS ACCESSORIES",
    rating: 4,
    price: "980",
  },
  {
    img: "/accessories-6.webp",
    title: "baby apron bib",
    desc: "KIDS ACCESSORIES",
    rating: 4,
    price: "1100",
  },
];

// Helper to generate star ratings
const generatingRating = (rating: number) => {
  return (
    <div className="flex gap-1 text-[20px] text-yellow-500">
      {[...Array(5)].map((_, i) => {
        if (i < Math.floor(rating)) {
          return <FaStar key={i} />;
        } else if (i < rating) {
          return <FaStarHalfAlt key={i} />;
        }
        return <FaRegStar key={i} />;
      })}
    </div>
  );
};

const Accessories = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleAddToCart = (productTitle: string) => {
    setMessage(`${productTitle} is added to the cart.`);
    setTimeout(() => setMessage(null), 9000); // Clear the message after 9 seconds
  };

  return (
    <div>
      {/* Marquee Section */}
      <div className="relative overflow-hidden bg-black h-12 flex items-center mt-7">
        <div className="absolute whitespace-nowrap animate-marquee">
          <h2 className="inline-block font-medium text-2xl text-red-600 px-8">
            New Arrivals - Explore Now - kids Accessories - Bacha Party - Explore Now
          </h2>
        </div>
      </div>

      {/* Message Section */}
      {message && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-700 text-black py-2 px-4 rounded shadow-lg z-50 font-semibold">
          {message}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-10 xl:gap-x-10 xl:gap-y-10 pt-8 pl-16">
        {productsData.map((item, index) => (
          <div key={index} className="relative max-w-[300px] mx-auto sm:mx-auto lg:mx-0">
            {/* Product Card */}
            <div className="px-6  border border-red-700 rounded-xl max-w-[400px]">
              <div>
                <Image
                  className=" rounded-full w-[300px] h-[250px] pt-3 hover:scale-110 transition-transform duration-300"
                  src={item.img}
                  width={200}
                  height={300}
                  alt={item.title}
                />
              </div>

              <div className="space-y-2 py-2">
                <h2 className="text-red-600 font-medium uppercase">{item.title}</h2>
                <p className="text-red-600 max-w-[150px]">{item.desc}</p>
                <div>{generatingRating(item.rating)}</div>

                <div className="font-bold flex items-center gap-2">
                  <span className="text-red-600">PKR:{item.price}</span>
                  <span>PKR:{item.price}</span>
                  <del className="text-red-600 font-normal">PKR:{parseInt(item.price) + 900}</del>
                </div>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(item.title)}
              className="mt-2  py-2 px-4 bg-red-600 text-black rounded-md font-semibold hover:bg-black hover:text-red-600 transition-all duration-300 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
