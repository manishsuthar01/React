import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const Weathercontext = createContext();

const WeatherContext = ({ children }) => {
  const [city, setcity] = useState("jaipur");
  const [weatherData, setweatherData] = useState(null);
  const [loading,setloading]=useState(true);

  useEffect(() => {
    const fetchweather = async () => {
      setloading(true);
      if (!city) return;
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=*yourKey*&q=${city}&days=7&aqi=yes&alerts=yes&astro=yes`
        );
        const data = await res.json();
        setweatherData(data);
      } catch (err) {
        console.error("Error fetching weather :", err);
      }
      finally{
        setloading(false);
      }
    };
    fetchweather();
  }, [city]);

  return (
    <Weathercontext.Provider value={{ city, setcity, weatherData,loading }}>
      {children}
    </Weathercontext.Provider>
  );
};

export default WeatherContext;
