import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_quwae1f",
        "template_z6fk0wi",
        form.current,
        "pVwbg4C3i_Qli7pti"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("❌ Failed to send. Please try again.");
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-16 bg-[#0F172A] flex flex-col  items-center justify-center gap-7 lg:gap-10 px-4 "
    >
      <h2 className="text-3xl text-white  text-center ">Get in Touch</h2>
      <p className=" md:text-base text-gray-500 font-light ">
        Feel free to reach out for collaboration opportunities or just say
        hello!
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center  lg:text-left gap-8 lg:gap-20 px-4 w-full">
        {/* Contact Form */}
        <div className="w-full max-w-md">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="bg-[#0f1625] p-6 rounded-lg shadow space-y-4 text-white"
          >
            <input type="hidden" name="title" value="Contact Form Submission" />
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded text-gray-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 rounded text-gray-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border p-2 rounded text-gray-500"
              rows="4"
              required
            />

            <button
              type="submit"
              className="w-full text-gray-300 bg-gray-800 py-2 rounded font-semibold hover:bg-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      
      </div>
    </section>
  );
};

export default Contact;
