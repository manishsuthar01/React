import React from "react";


const Hero = () => {
  return (
    <section id="hero"
      className="h-screen bg-cover bg-center  flex items-center  text-center  border-b-blue-900"
      
    >
      <div className="bg-opacity-50  rounded-lg text-white not-md:ml-0 ml-15 p-5">
        <h1 className="text-4xl md:text-6xl font-bold">
          Crafting Excellence in Wood
        </h1>
        <p className="mt-4 text-lg md:text-xl">
         Bringing your vison to life with precision,passion,and the finest <br />craftmaship 
        </p>
        <a
          href="#services"
          className="m-10 inline-block bg-[#b68813e1] text-black font-semibold py-2 px-6 rounded hover:bg-yellow-200"
        >
          View Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
