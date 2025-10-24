import React from "react";
import { FaCode, FaPencilRuler, FaPenNib } from "react-icons/fa";

const Services = () => {
  const services = [
    { id: 1, name: "Frontend Developer", logo: <FaCode /> },
    { id: 2, name: "UI / UX Designer", logo: <FaPencilRuler /> },
    { id: 3, name: "Content Creation", logo: <FaPenNib /> },
  ];

  return (
    <section
      id="services"
      className="bg-[#0F172A]  sm:p-8 flex flex-col items-center justify-center py-12"
    >
      <h2 className="text-3xl sm:text-4xl text-white  mb-2">Services</h2>
      <p className="text-gray-500 text-sm  mb-8">What I Offer</p>
       
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  mx-auto mt-16 mb-20">
        {services.map((work) => (
          <article
            key={work.id}
            className="p-6 sm:p-8 flex flex-col items-start justify-end gap-4 bg-[#0f1625]
             text-white h-80 md:h-80 w-72 md:w-72 rounded-lg shadow-lg
             transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <p className="text-4xl sm:text-5xl text-[#570d90]">{work.logo}</p>
            <h1 className="text-xl sm:text-2xl font-semibold">{work.name}</h1>
            <button className="text-[#570d90] hover:underline hover:cursor-pointer">
              View More →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
