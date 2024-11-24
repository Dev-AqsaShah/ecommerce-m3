"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          {/* Column 1: Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold text-red-600">COCOMO</h2>
            <p className="mt-4 text-gray-400">
            Explore excellence in every item we offer. Your satisfaction is our promise.            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold text-red-600">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#home" className="hover:text-red-600 transition">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-600 transition">Products</a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-600 transition">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-600 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-red-600">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://github.com/Dev-AqsaShah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/developer_aqsashah?igsh=MTJ4dW9vZ211Zm5sMA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com/in/aqsa-shah-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://linkedin.com/in/aqsa-shah-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-600 transition"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-gray-400 mt-8">
          <p>
            © {new Date().getFullYear()} COCOMO. All Rights Reserved. | Designed by{" "}
            <span className="text-red-600 font-bold">Aqsa Shah</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
