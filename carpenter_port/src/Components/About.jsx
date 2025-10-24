import React from "react";
import image1 from "../assets/about.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 bg-white text-black "
    >
      <div className="container mx-auto px-4 md:flex items-center gap-8">
        
        {/* Image */}
        <img
          src={image1}
          alt="Carpenter at work"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-80"
        />

        {/* Content */}
        <div className="mt-6 md:mt-0 md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            Crafting Wood, Creating Memories
          </h2>
          <p className="text-gray-700 mb-3 leading-relaxed">
            With over 15 years of woodworking expertise, we transform raw timber 
            into custom, handcrafted pieces that reflect your unique style and needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Every creation is built with precision, passion, and the finest materials 
            to ensure durability, elegance, and timeless appeal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
