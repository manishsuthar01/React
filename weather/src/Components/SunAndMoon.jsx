import React, { useContext, useEffect, useState } from "react";
import { Weathercontext } from "../Context/WeatherContext";
import { WiSunrise, WiSunset, WiMoonrise, WiMoonset } from "react-icons/wi";

export default function SunAndMoon() {
  const { weatherData } = useContext(Weathercontext);
  const [astro, setAstro] = useState({});

  useEffect(() => {
    if (weatherData?.forecast?.forecastday?.length > 0) {
      setAstro(weatherData.forecast.forecastday[0].astro);
    }
  }, [weatherData]);

  return (
    <section className=" bg-[#8574C4] rounded-2xl p-6 text-white shadow-md m-4 gap-5 mt-12 mb-12">
  
      <h1 className="text-3xl font-light mb-2">Sun & Moon</h1>
      {/* Sunrise & Sunset Row */}
      <div className="flex justify-between border-b border-[#adb1d1] pb-4 mb-4">
        <div className="flex flex-col items-center flex-1">
          <WiSunrise className="text-6xl" />
          <p className="mt-2 font-medium">Sunrise</p>
          <p className="text-lg">{astro.sunrise}</p>
        </div>
        <div className="flex flex-col items-center flex-1">
          <WiSunset className="text-6xl" />
          <p className="mt-2 font-medium">Sunset</p>
          <p className="text-lg">{astro.sunset}</p>
        </div>
      </div>
      {/* Moonrise, Moonset, Moonphase Row */}
      <div className="grid grid-cols-3 text-center gap-4">
        <div>
          <p className="mt-2 font-medium">Moonrise</p>
          <p>{astro.moonrise}</p>
        </div>
        <div>
          <p className="mt-2 font-medium">Moonset</p>
          <p>{astro.moonset}</p>
        </div>
        <div>
          <p className="text-lg font-medium">Moon Phase</p>
          <p>{astro.moon_phase}</p>
        </div>
      </div>
    </section>
  );
}
