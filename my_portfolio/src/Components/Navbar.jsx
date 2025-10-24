import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  if(open){

  }
  return (
    <nav id="navbar" className=" bg-[#0F172A] fixed top-0 left-0 min-w-full z-50 backdrop-blur-lg w-full overflow-hidden ">
      <div className="container mx-auto flex justify-between items-center p-4 sm:px-6 lg:px-8 ">
        <h1 className=" font-semibold text-[#F8FAFC] text-2xl">Manish</h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-13 text-wrap  text-1xl text-[#CBD5E1]">
          <li><a href="#hero"     className="hover:text-[#3B82F6]">Home</a></li>
          <li><a href="https://drive.google.com/file/d/1yDV15f_1KbFhEtS7baJz7Z28FgwH9slx/view" className="hover:text-[#3B82F6]">Resume</a></li>
          <li><a href="#skills"   className="hover:text-[#3B82F6]">Skills</a></li>
          <li><a href="#services" className="hover:text-[#3B82F6]">Services</a></li>
          <li><a href="#projects"         className="hover:text-[#3B82F6]">Project</a></li>
          <li><a href="#contact"  className="hover:text-[#3B82F6]">Contact</a></li>
        </ul>
        {/* Mobile Menu Button */}
        <button className="md:hidden  text-[#CBD5E1] text-2xl hover:cursor-pointer " onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden  text-[#CBD5E1] shadow-md flex flex-col items-center py-4 gap-4">
          <li><a onClick={() => setOpen(false)} href="#hero"     className="hover:text-[#3B82F6]">Home</a></li>
          <li><a onClick={() => setOpen(false)} href="#services"  className="hover:text-[#3B82F6]">Services</a></li>
          <li><a onClick={() => setOpen(false)} href="https://drive.google.com/file/d/1yDV15f_1KbFhEtS7baJz7Z28FgwH9slx/view" className="hover:text-[#3B82F6]">Resume</a></li>
          <li><a onClick={() => setOpen(false)} href="#contact"   className="hover:text-[#3B82F6]">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
