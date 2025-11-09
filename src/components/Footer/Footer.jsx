import React from 'react';
import {  FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0abde3] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Project Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">TheBookHaven</h2>
          <p className="text-sm mt-1">
            Explore, add, update, and manage books in your digital library.
          </p>
        </div>

        {/* Middle: Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="p-2 rounded-full bg-white text-[#0abde3] hover:bg-[#0097c2] hover:text-white transition"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white text-[#0abde3] hover:bg-[#0097c2] hover:text-white transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white text-[#0abde3] hover:bg-[#0097c2] hover:text-white transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right text-sm">
          &copy; {new Date().getFullYear()} TheBookHaven. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
