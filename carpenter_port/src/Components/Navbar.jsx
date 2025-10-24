import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  if(open){

  }
  return (
    <nav className=" shadow-md fixed top-0 left-0 min-w-full z-50 backdrop-blur-lg ">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className=" font-semibold text-[#c6a144] ">Balaji Furniture</h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-wrap  text-1xl text-[#c6a144]">
          <li><a href="#about" className="hover:text-yellow-200">About</a></li>
          <li><a href="#services" className="hover:text-yellow-200">Services</a></li>
          <li><a href="#portfolio" className="hover:text-yellow-200">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-yellow-200">Contact</a></li>
        </ul>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-[#b68813e1] text-2xl hover:cursor-pointer" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden text-[#c6a144] shadow-md flex flex-col items-center py-4 gap-4">
          <li><a onClick={() => setOpen(false)} href="#about" className="hover:text-yellow-200">About</a></li>
          <li><a onClick={() => setOpen(false)} href="#services" className="hover:text-yellow-200">Services</a></li>
          <li><a onClick={() => setOpen(false)} href="#portfolio" className="hover:text-yellow-200">Portfolio</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact" className="hover:text-yellow-200">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
