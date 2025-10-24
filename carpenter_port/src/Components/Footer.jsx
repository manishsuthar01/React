import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaPinterestP, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [mail,setEmail]=useState('')
  const handlechange=(e)=>{
       setEmail(e.target.value)
  }
  return (
    <footer className="bg-[#3b241a] text-white py-10 px-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h3 className="text-lg font-bold text-yellow-600 mb-2">WoodCraft</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Crafting excellence in wood for over 20 years. Custom furniture, cabinetry, 
            and fine woodworking with a focus on quality and sustainability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
            <li><a href="#portfolio" className="hover:text-yellow-500">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-500">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Services</h4>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li className="hover:text-yellow-500">Custom Furniture</li>
            <li className="hover:text-yellow-500">Wood Restoration</li>
            <li className="hover:text-yellow-500">Custom Cabinetry</li>
            <li className="hover:text-yellow-500">Structural Carpentry</li>
            <li className="hover:text-yellow-500">Wood Turning</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
          <p className="text-sm text-gray-300 mb-3">
            Subscribe to our newsletter for the latest projects and woodworking tips.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              value={mail}
              onChange={handlechange}
              className="px-3 py-2 text-sm w-full bg-[#5a3b2b] text-white rounded-l focus:outline-none"
            />
            <button className="bg-yellow-600 px-4 rounded-r hover:bg-yellow-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4">
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-6.5 14.5a.5.5 0 0 1-.958-.07L8 9.26l-6.646-2.63a.5.5 0 0 1-.07-.958l14.5-6.5a.5.5 0 0 1 .54.11z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2023 WoodCraft. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-500"><FaPinterestP /></a>
          <a href="#" className="hover:text-yellow-500"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
