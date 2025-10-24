import React from "react";

const FAQ = () => {
  const faqs = [
    { q: "Do you offer home visits?", a: "Yes, I provide on-site measurements and consultations." },
    { q: "What’s your delivery time?", a: "Depends on the project size, usually 2–4 weeks." },
  ];

  return (
    <section className="py-16 bg-[#f2f0ed]  text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="mb-4">
            <h3 className="font-semibold">{faq.q}</h3>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
