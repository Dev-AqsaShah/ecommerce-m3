"use client";
import React from 'react';
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';

const HeaderTop = () => {
  return (
    <div className="border-b border-black bg-red-500 ">
      <div className=" container py-4">
        <div className="flex justify-between items-center flex-wrap sm:flex-nowrap">
          {/* Social Icons */}
          <div className="flex gap-2 rounded-md text-[14px] lg:flex">
            <div className="header_top__icon_wrapper cursor-pointer hover:text-red-800">
              <FaFacebook />
            </div>
            <div className="header_top__icon_wrapper cursor-pointer hover:text-red-800">
              <FaTwitter />
            </div>
            <div className="header_top__icon_wrapper cursor-pointer hover:text-red-800">
              <FaInstagramSquare />
            </div>
            <div className="header_top__icon_wrapper cursor-pointer hover:text-red-800">
              <FaGithub />
            </div>
            <div className="header_top__icon_wrapper cursor-pointer hover:text-red-800">
              <SiLinkedin />
            </div>
          </div>

          {/* Center Text (Hidden on Small Screens) */}
          <div className="text-black text-[12px] hidden sm:block">
            <b>FREE DELIVERY</b> limited time offer just for one week.
          </div>

          {/* Dropdowns */}
          <div className="flex gap-2 sm:gap-4">
            <select
              className="text-red-500 text-[12px] w-[70px] bg-black"
              name="currency"
              id="currency"
            >
              <option value="USD $">USD $</option>
              <option value="PKR">PKR</option>
              <option value="INR">INR</option>
            </select>

            <select
              className="text-red-500 bg-black text-[12px] w-[80px]"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Urdu">Urdu</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
