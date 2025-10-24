import React, { useContext, useEffect, useState } from "react";
import { Weathercontext } from "../Context/WeatherContext";

export default function HourlyForecast() {
  const { weatherData } = useContext(Weathercontext);

  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    if (weatherData?.forecast?.forecastday?.[0]?.hour) {
      setHourlyData(weatherData.forecast.forecastday[0].hour);
    }
  }, [weatherData]);
  

  return (
    <section className=" bg-[#8574C4] rounded-2xl p-6 text-white  m-4 gap-5 mt-8 mb-8 border-indigo-100  border-x ">
      <h1 className="text-3xl font-light ">Hourly Forecast</h1>
      <div className="flex gap-4 overflow-x-auto mt-6 p-2 scrollbar-hide">
        {hourlyData.map((h) => (
          <div
            key={h.time_epoch}
            className="bg-[#9c90c6] rounded-xl p-4 min-w-[80px] text-center border-indigo-100  border-x "
          >
            {/* Hour in AM/PM */}
            <p className="font-semibold">
              {new Date(h.time).toLocaleTimeString([], {
                hour: "numeric",
                hour12: true,
              })}
            </p>

            {/* Icon */}
            <img
              src={h.condition.icon}
              alt={h.condition.text}
              className="w-10 mx-auto"
            />

            {/* Temp */}
            <p className="text-lg font-bold">{h.temp_c}°C</p>
          </div>
        ))}
      </div>
    </section>
  );
}
