import React from "react";
import { portfolioItems } from "../data/PortfolioData";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-14 bg-gray-50 text-black">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-3xl  text-black font-light">
          <b>Featured Projects</b> 
        </h3>
        <span className="w-20 bg-[#c39215] h-1 inline-block "></span>
        <p className="block text-black mt-4">
         A showcase of our finest woodworking projects,each piece a testament to our <br />dedicated to quality
        </p>{" "}
        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {portfolioItems.map((items, index) => {
            return (
              <div
                key={index}
                className="rounded-lg  shadow-2xs hover:shadow-lg transition overflow-hidden p-2.5 border border-zinc-300"
              >
                <img
                  src={items.Image}
                  alt={items.title}
                  className="w-full h-64 object-cover rounded-lg hover:scale-115 transition"
                />
                <h3 className=" mt-2 font-semibold">{items.title}</h3>
                <p>{items.description}</p>
              </div>
            );
          })}
        </div>
        <button className="mt-8 bg-[#c39215] rounded p-2 cursor-pointer hover:bg-amber-200  ">View all project</button>
      </div>
    </section>
  );
};

export default Portfolio;
