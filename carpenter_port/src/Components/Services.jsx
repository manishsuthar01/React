import React from "react";
import { services } from "../data/servicesData";

const Services = () => {
  return (
    <section id="services" className="py-10">
      <div className="container mx-auto px-4 text-center mt-6">
        <h3 className="text-3xl  text-black font-light">
          <b>Craftsmanship</b> Services
        </h3>
        <span className="w-20 bg-[#c39215] h-1 inline-block "></span>
        <p className="block text-black mt-4">From concept to creation,we offer a range of woodworking services tailored to your <br /> needs</p>
        <div className="grid gap-8 md:grid-cols-3 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <service.icon
                className="mx-auto mb-4 text-[#c39215] "
                size={36}
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
