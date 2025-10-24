import React, { useContext } from "react";
import { Weathercontext } from "../Context/WeatherContext";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function CurrentWeather() {
  const { weatherData } = useContext(Weathercontext);

  const weatherBackgrounds = {
    Sunny: "bg-gradient-to-br from-yellow-400 to-orange-500",
    Clear: "bg-gradient-to-b from-blue-500 to-indigo-700",
    Cloudy: "bg-gradient-to-br from-gray-400 to-gray-700",
    Overcast: "bg-gradient-to-br from-gray-500 to-gray-800",
    Rain: "bg-gradient-to-br from-blue-400 to-blue-800",
    Thunderstorm: "bg-gradient-to-br from-purple-700 to-gray-900",
    Snow: "bg-gradient-to-br from-blue-200 to-white",
    Mist: "bg-gradient-to-br from-gray-300 to-gray-600",
    Default: "bg-[#8574C4]",
  };
  const condition = weatherData?.current?.condition?.text;
  const backgroundClass =
    weatherBackgrounds[condition] || weatherBackgrounds.Default;

  return (
    <section
      className={` ${backgroundClass}  rounded-2xl p-6 text-white text-center shadow-md flex flex-col items-center m-4 gap- mb-9 border-indigo-100  border-x `}
    >
      {/* Weather Icon */}
      <img
        src={weatherData.current.condition.icon}
        alt="Weather Icon"
        className="mx-auto w-20 sm:w-24 mt-2 drop-shadow-lg"
      />

      {/* Temperature */}
      <h2 className="text-5xl sm:text-6xl font-light mt-4">
        {weatherData.current.temp_c}°C
      </h2>

      {/* Condition */}
      <p className="mt-2 text-lg sm:text-2xl font-medium">
        {weatherData.current.condition.text}
      </p>

      {/* Feels like */}
      <p className="text-sm sm:text-base text-white/90 mt-1">
        Feels like {weatherData.current.feelslike_c}°C
      </p>
      <div className="flex flex-row gap-5  mt-5">
        <span className="">
          <ArrowUp />
          <p>high</p>
          {weatherData.forecast.forecastday[0].day.maxtemp_c}
        </span>
        <span className="">
          <ArrowDown />
          <p>low</p>
          {weatherData.forecast.forecastday[0].day.mintemp_c}
        </span>
      </div>
    </section>
  );
}
