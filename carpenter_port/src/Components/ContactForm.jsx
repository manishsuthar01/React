import React, { useState, useRef } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(); // ✅ Create form ref

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_quwae1f", // ✅ Your Service ID
        "template_z6fk0wi", // ✅ Your Template ID
        form.current, // ✅ Use the ref
        "pVwbg4C3i_Qli7pti" // ✅ Your Public Key
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
      className="py-16 bg-[#f2f0ed] text-black flex flex-row flex-wrap items-center justify-center gap-10"
    >
      <div className="container mx-auto px-4 max-w-lg flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-3 text-center">Get in Touch</h2>
        <span className="w-20 bg-[#c39215] h-1 block"></span>
        <h3 className="text-center mb-8">
          Ready to start your woodworking project? Contact us today for a
          consultation
        </h3>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow space-y-4"
        >
          {/* Hidden fields to match EmailJS template */}
          <input type="hidden" name="title" value="Contact Form Submission" />
          <input
            type="hidden"
            name="time"
            value={new Date().toLocaleString()}
          />

          <input
            type="text"
            name="name" // matches {{name}} in EmailJS
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="email"
            name="email" // matches {{email}} in EmailJS
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            name="message" // matches {{message}} in EmailJS
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-2 rounded"
            rows="4"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#ce9e26e1] py-2 rounded font-semibold hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 max-w-lg flex flex-col items-center justify-center ">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Contact Information
        </h2>
        <div className="space-y-5 text-gray-700">
          <div className="flex items-start gap-3">
            <MapPin className="text-[#c6a144] mt-1" size={20} />
            <div>
              <p className="font-semibold text-gray-900">Workshop Address</p>
              <p>123 Craftsman Lane</p>
              <p>Woodville, CA 92101</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="text-[#c6a144] mt-1" size={20} />
            <div>
              <p className="font-semibold text-gray-900">Phone</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-[#c6a144] mt-1" size={20} />
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <p>info@woodcraftsman.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="text-[#c6a144] mt-1" size={20} />
            <div>
              <p className="font-semibold text-gray-900">Workshop Hours</p>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="font-semibold mb-3 text-gray-900">Follow Us</p>
          <div className="flex gap-4 text-xl text-[#c6a144]">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaPinterestP />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
