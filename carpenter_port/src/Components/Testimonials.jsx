import React from "react";
import { Star, StarHalf } from "lucide-react";
import { testimonials } from "../data/testimonialsData";

export default function TestimonialsSection() {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="text-yellow-500 fill-yellow-500" size={18} />);
    }
    if (hasHalf) {
      stars.push(<StarHalf key="half" className="text-yellow-500 fill-yellow-500" size={18} />);
    }
    return stars;
  };

  return (
    <section className="bg-[#f2f0ed] py-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-light text-black"> <b>Client</b> Testimonials</h2>
        <div className="w-16 h-1 bg-[#c6a144] mx-auto mt-2 mb-4 rounded"></div>
        <p className="text-gray-600">
          What our clients say about our craftsmanship and service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
          >
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              {renderStars(testimonial.rating)}
            </div>

            <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
