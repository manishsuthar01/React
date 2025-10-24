import React, { useContext, useEffect, useState } from "react";
import { Weathercontext } from "../Context/WeatherContext";

export default function WeeklyForecast() {
  const { weatherData } = useContext(Weathercontext);
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    if (weatherData?.forecast?.forecastday?.length > 0) {
      setWeeklyData(weatherData.forecast.forecastday);
    }
  }, [weatherData]);



  return (
    <section className=" bg-[#8574C4] rounded-2xl p-6 text-white shadow-md  m-5 gap-5 mt-12 mb-12 border-indigo-100  border-x ">
      <h1 className="text-3xl font-light ">Weekly Forecast</h1>
      <div className="grid gap-3 mt-6">
        {weeklyData.map((day, i) => (
          <div
            key={i}
            className="bg-[#a095c8] rounded-xl p-3 flex justify-between items-center border-indigo-100  border-x "
          >
            <p>{new Date(day.date).toLocaleDateString("en-US", { weekday: "long" })}</p>
            <img src={day.day.condition.icon} alt="icon" className="w-8" />
            <p>
              🌡 {day.day.maxtemp_c}°C / {day.day.mintemp_c}°C
            </p>
            <p>💧 {day.day.avghumidity}%</p>
            <p>🔆 {day.day.uv}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
