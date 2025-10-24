import React, { useEffect, useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Taimon Farooq",
      role: "Client",
      image: "https://i.pravatar.cc/100?img=1",
      rating: 5,
      feedback:
        "A great experience! Manish created a clean, responsive, and professional website for my business. Highly recommend his dedication and skills.",
    },
    {
      id: 2,
      name: "Faheem Ahmad",
      role: "Project Partner",
      image: "https://i.pravatar.cc/100?img=2",
      rating: 5,
      feedback:
        "Manish is an incredible frontend developer with a deep understanding of UI/UX. His attention to detail and problem-solving ability make him stand out.",
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Startup Founder",
      image: "https://i.pravatar.cc/100?img=3",
      rating: 4,
      feedback:
        "I wanted a portfolio website for my startup, and Manish delivered beyond expectations. Clean design and super fast responsiveness!",
    },
    {
      id: 4,
      name: "Rahul Verma",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/100?img=4",
      rating: 5,
      feedback:
        "Working with Manish was smooth. His frontend skills are top-notch and he always meets deadlines with quality work.",
    },
    {
      id: 5,
      name: "Sana Khan",
      role: "Freelance Writer",
      image: "https://i.pravatar.cc/100?img=5",
      rating: 4,
      feedback:
        "I needed a personal blog website. Manish not only designed it beautifully but also guided me on how to manage content easily.",
    },
    
  ];

  const containerRef = useRef(null);

  // Scroll to the 2nd testimonial (center one) on load
  useEffect(() => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.children[0].offsetWidth +150; // card + gap
      containerRef.current.scrollTo({
        left: cardWidth, // move to 2nd card
        behavior: "smooth",
      });
    }
  }, []); 

  return (
    <section className="bg-[#0F172A] p-8 py-12 flex flex-col items-center justify-center ">
      <h2 className="text-3xl text-white ">Testimonial</h2>
      <p className="text-gray-500 text-sm">My Client saying</p>

      <div  
        ref={containerRef}
        className="flex gap-6 mt-20 md:max-w-3xl  max-w-full overflow-x-auto scroll-smooth scrollbar-hide px-4"
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[#0f1625] p-6 rounded-lg shadow-lg w-80 text-center text-white flex-shrink-0 "
          >
            <img
              src={t.image}   
              alt={t.name}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-400">{t.role}</p>
            <p className="mt-4 text-gray-300 text-sm md:text-base text-center p-4">{t.feedback}</p>
            <div className="mt-3 text-yellow-400">{"⭐".repeat(t.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
