import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const Routering = () => {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-gray-900 shadow-md mb-50">
        <ul className="flex gap-8 px-10 py-4 text-white">
          <li>
            <Link
              to="/"
              className="px-3 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-3 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-lg hover:bg-gray-700 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routering;
