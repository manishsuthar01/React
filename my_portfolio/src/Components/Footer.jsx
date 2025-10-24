import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-20 flex flex-col bg-[#0e131f] text-white md:py-12 ">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto px-4 md:px-8 gap-6 md:gap-12">
        
        {/* Left - Branding */}
        <div className="flex flex-col md:items-start  items-center justify-center">
          <h2 className="text-3xl font-semibold">Manish</h2>
          <h3 className="text-gray-400">Frontend Developer</h3>
        </div>

        {/* Middle - Navigation */}
        <ul className="flex gap-4 flex-row">
          <li className="hover:text-gray-300 cursor-pointer"><a href="#hero">Home</a></li>
          <li className="hover:text-gray-300 cursor-pointer"><a href="#services">Services</a></li>
          <li className="hover:text-gray-300 cursor-pointer"><a href="#portfolio">Portfolio</a></li>
        </ul>

        {/* Right - Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/manish-suthar1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/manishsuthar01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/qr/6NPON56EBQR5B1" // ✅ replace with WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-6 text-center text-gray-500 text-xs md:text-sm">
        © {new Date().getFullYear()} Manish — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
