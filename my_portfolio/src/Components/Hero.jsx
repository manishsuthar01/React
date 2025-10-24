import React from "react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import hero from "../assets/hero.png"
import profile from "../assets/111.png"

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-[#0F172A]  text-white flex flex-col md:flex-row items-center justify-center p-8">
      {/* Left - Avatar */}
      <div className="w-48 h-48 md:w-64 md:h-64 mb-6 md:mb-0">
        <img
          src={profile}
          alt="Shobhit Avatar"
          className="rounded-full border-2 border-purple-500 shadow-lg "
        />
      </div>

      {/* Right - Text */}
      <div className="md:ml-12 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-[#F1F5F9]">
         Hii, I am Manish 
        </h1>
        <h2 className="text-xl md:text-2xl text-purple-300 mt-2">
          Frontend Developer
        </h2>
        <p className="mt-4 max-w-md text-gray-300">
          Passionate frontend developer specializing in clean UI and user
          experience.
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <a
            href="https://www.linkedin.com/in/manish-suthar1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/manishsuthar01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-2xl"
          >
            <FaGithub />
          </a>
           <a
            href="https://wa.me/qr/6NPON56EBQR5B1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 text-2xl"
          >
            <FaWhatsapp/>
          </a>
        </div>

        {/* Contact Button */}
        <button className="mt-6 px-6 py-3 bg-[#3B82F6] text-white font-semibold rounded-lg hover:scale-105 hover:bg-[#2563EB] transition">
          <a href="#contact-me"> Contact Me</a> 
        </button>
      </div>
    </section>
  );
};

export default Hero;
