import React from 'react';
import { FaHeart, FaSearch, FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const HeaderMain = () => {
  return (
    <div className="border-b border-black py-4 bg-red-700">
      <div className="container flex justify-between items-center flex-wrap sm:flex-nowrap">
        {/* Logo Section */}
        <div className="font-bold text-2xl sm:text-4xl text-black">
          COCOMO
        </div>

        {/* Large Screen: Search Bar */}
        <div className="hidden sm:block w-[300px] md:w-[70%] mx-auto relative">
          <input
            className="border border-black p-2 px-4 rounded-lg w-full bg-red-500 placeholder-black"
            type="text"
            placeholder="Enter product name"
          />
          <FaSearch className="absolute right-0 top-0 mr-3 mt-3 text-black size-{20}" />
        </div>

        {/* Icons Section */}
        <div className="flex gap-2 sm:gap-4 text-black text-[20px] sm:text-[30px]">
          {/* Small Screen: Search Icon */}
          <FaSearch className="block sm:hidden text-black" />

          {/* User Icon */}
          <FaUser />

          {/* Favorites Icon */}
          <div className="relative">
            <FaHeart />
            <div className="bg-red-500 rounded-full absolute top-0 right-0 w-[14px] sm:w-[18px] h-[14px] sm:h-[18px] text-[10px] sm:text-[12px] text-black grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <FaCartShopping />
            <div className="bg-red-500 rounded-full absolute top-0 right-0 w-[14px] sm:w-[18px] h-[14px] sm:h-[18px] text-[10px] sm:text-[12px] text-black grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
