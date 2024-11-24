"use client"

import React, { useState } from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/product-1.webp",
    title: "Fleece Swaddle",
    desc: "WINTER ARRIVALS",
    rating: 4,
    price: "3000",
  },
  {
    img: "/product-2.webp",
    title: "white cap",
    desc: "WINTER ARRIVALS",
    rating: 4,
    price: "2000",
  },
  {
    img: "/product-3.webp",
    title: "baby Socks",
    desc: "WINTER ARRIVALS",
    rating: 4,
    price: "1000",
  },
  {
    img: "/product-4.webp",
    title: "baby fruit feeding",
    desc: "FEEDING ESSENTIAL",
    rating: 4,
    price: "1500",
  },
  {
    img: "/product-5.webp",
    title: "baby feeding set",
    desc: "FEEDING ESSENTIAL",
    rating: 4,
    price: "1600",
  },
  {
    img: "/product-6.webp",
    title: "BABY STRAW water bottle",
    desc: "FEEDING ESSENTIAL",
    rating: 4,
    price: "800",
  },
];

const NewProduct = () => {
  const [message, setMessage] = useState<string | null>(null);

  const handleAddToCart = (productTitle: string) => {
    setMessage(`${productTitle} is added to the cart.`);
    setTimeout(() => setMessage(null), 9000); // Clear the message after 2 seconds
  };

  return (
    <div>
      <div className="container pt-16">
        {/* Marquee Section */}
        <div className="relative overflow-hidden bg-black h-12 flex items-center">
          <div className="absolute whitespace-nowrap animate-marquee">
            <h2 className="inline-block font-medium text-2xl text-red-600 px-8">
              New Products - Winter Arrivals - Explore Now - All Products - Bacha Party - Explore Now
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
        <div className="grid grid-cols-1 sm:pl-3  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 xl:gap-x-10 xl:gap-y-10 pt-8 pl-16  ">
          {productsData.map((item, index) => (
            <div key={index} className="relative max-w-[300px]">
              <ProductCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(item.title)}
                className="mt-2 py-2 px-4 bg-red-600 text-black rounded-md font-semibold hover:bg-black hover:text-red-600 transition-all duration-300 w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
