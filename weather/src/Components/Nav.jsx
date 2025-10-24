import React, { useContext, useState } from "react";
import { Search, X } from "lucide-react";
import { Weathercontext } from "../Context/WeatherContext";

const Nav = () => {
  const { setcity } = useContext(Weathercontext);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") setcity(query);
    setQuery("");
    setShowSearch(false);
  };

  return (
    <nav  id="navbar" className="w-full bg-[#8574C4] text-white sticky top-0 p-1 shadow-fuchsia-300 shadow-2xs z-50 border-indigo-100  border-x ">
      <div className="md:max-w-7xl w-full mx-auto flex flex-row justify-between items-center px-4 sm:px-5 lg:px-8 py-4">
        {/* Left Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-light ">WeatherPro</h2>
          <p className="text-xs sm:text-sm text-white/80">
            Premium Weather Experience
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5 sm:gap-7">
          {/* Desktop Search */}
          <div className="hidden sm:flex bg-white text-gray-800 rounded-xl shadow-lg px-3 py-2 w-48 hover:w-60 transition-all">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search City..."
              className="flex-1 outline-none text-sm bg-transparent"
            />
            <Search
              className="w-5 h-5 cursor-pointer hover:opacity-80"
              onClick={handleSearch}
            />
          </div>

          {/* Mobile Search Icon */}
          <div className="sm:hidden">
            <Search
              className="w-6 h-6 cursor-pointer hover:opacity-80"
              onClick={() => setShowSearch(true)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {showSearch && (
        <div className="absolute top-0 left-0 w-full bg-[#7F8BE5] px-4 py-3 flex items-center gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search city..."
            className="flex-1 rounded-lg px-3 py-2 text-black outline-none"
          />
          <X
            className="w-6 h-6 cursor-pointer hover:opacity-80"
            onClick={() => setShowSearch(false)}
          />
        </div>
      )}
    </nav>
  );
};

export default Nav;
