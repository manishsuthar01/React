import React, { useContext } from "react";
import { Weathercontext } from "../Context/WeatherContext";
import { Menu, MapPin, Search, Bell, User, X } from "lucide-react";


export default function Header() {
  const { weatherData } = useContext(Weathercontext);

  const time = weatherData.location.localtime;

  return (
    <header id="hero" className=" w-full text-white py-6 flex flex-col items-center mt-2  ">
      {/* City */}
      <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
        <MapPin className="w-5 h-5 cursor-pointer hover:opacity-80 transition" />
        {weatherData.location.name}
      </h1>

      {/* Region + Country */}
      <p className="text-2xl sm:text-2xl text-white/90 p-2">
        {weatherData.location.region}, {weatherData.location.country}
      </p>

      {/* Time */}
      <p className="text-sm sm:text-sm text-white/80">{time}</p>
    </header>
  );
}
