import React, { useContext } from "react";
import { Weathercontext } from "../Context/WeatherContext";
import { Droplet, Wind, Gauge, Sun, CloudRain, Thermometer } from "lucide-react";

export default function WeatherStats() {
  const { weatherData } = useContext(Weathercontext);
  if (!weatherData) {
    return (
      <header className="p-4 text-white flex flex-col gap-1 items-center justify-center">
        <h1 className="text-2xl font-bold">Loading...</h1>
        <p className="text-sm">Fetching weather data...</p>
      </header>
    );
  }

  return (
    <section className="grid grid-cols-2 gap-6 p-4 text-white">
      <div className="bg-[#907ecf] rounded-xl p-7 flex flex-row justify-between shadow-md border-indigo-100  border-x ">
        <div className="flex gap-5 flex-col">
          <Droplet className="w-9 h-9" />
          <p className="text-lg sm:text-2xl font-semibold">
            {weatherData.current.humidity}%
          </p>
        </div>
        <span className="text-xl sm:text-2xl font-light ">Humidity</span>
      </div>

      <div className="bg-[#8574C4] rounded-xl p-7 flex flex-row justify-between shadow-md border-indigo-100  border-x ">
        <div className="flex flex-col gap-5">
          <Wind className="w-9 h-9" />
          <p className="text-lg sm:text-2xl font-semibold">
            {weatherData.current.wind_kph} km/h
          </p>
        </div>
        <span className="text-xl sm:text-2xl font-light">Wind</span>
      </div>

      <div className="bg-[#8574C4] rounded-xl p-7 flex flex-row justify-between shadow-md border-indigo-100  border-x ">
        <div className="flex flex-col gap-5">
          <Gauge className="w-9 h-9" />
          <p className="text-lg sm:text-2xl font-semibold">
            {weatherData.current.pressure_mb}  mb
          </p>
        </div>
        <span className="text-xl sm:text-2xl font-light">Pressure</span>
      </div>
 
      <div className="bg-[#8574C4] rounded-xl p-7 flex flex-row justify-between shadow-md border-indigo-100  border-x ">
        <div className="flex flex-col gap-5">
          <Sun className="w-9 h-9" />
          <p className="text-lg sm:text-2xl font-semibold">
            {weatherData.current.uv}
          </p>
        </div>
        <span className="text-xl sm:text-2xl font-light">UV Index</span>
      </div>

       <div className="bg-[#8574C4] rounded-xl p-7 flex flex-row justify-between shadow-md border-indigo-100  border-x ">
        <div className="flex flex-col gap-5">
          <CloudRain className="w-9 h-9" />
          <p className="text-lg sm:text-2xl font-semibold">
            {weatherData.current.precip_mm}
          </p>
        </div>
        <span className="text-xl sm:text-2xl font-light">Precipitation</span>
      </div>

 <div className="bg-[#8574C4] rounded-xl p-7 flex flex-row justify-between shadow-md border-indigo-100  border-x ">
        <div className="flex flex-col gap-5">
          <Thermometer className="w-9 h-9" />
          <p className="text-lg sm:text-2xl font-semibold">
            {weatherData.current.heatindex_c} 
          </p>
        </div>
        <span className="text-xl sm:text-2xl font-light">Heat Index</span>
      </div>

    </section>
  );
}
