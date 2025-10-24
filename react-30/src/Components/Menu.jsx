import React, { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-4">
      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row items-center justify-around space-x-6">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Sign In</li>
        <li>Sign Out</li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden inline-block border px-4 py-2 rounded"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mt-4 md:hidden">
          <ul className="flex flex-col space-y-2 border p-4 rounded-lg shadow-md bg-white">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Sign In</li>
            <li>Sign Out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
