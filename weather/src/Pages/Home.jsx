import React, { useContext } from "react";
import Header from "../Components/Header";
import CurrentWeather from "../Components/CurrentWeather.jsx";
import WeatherStats from "../Components/WeatherStats";
import HourlyForecast from "../Components/HourlyForecast";
import WeeklyForecast from "../Components/WeeklyForecasr";
import Alerts from "../Components/Alert";
import SunAndMoon from "../Components/SunAndMoon";
import WeatherMap from "../Components/WeatherMap";
import BottomNav from "../Components/BottomNav";
import Nav from "../Components/Nav.jsx";
import { Weathercontext } from "../Context/WeatherContext.jsx";
const Home = () => {
  const { loading, weatherData } = useContext(Weathercontext);
  if (loading || !weatherData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">Loading weather data...</p>
      </div>
    );
  }
  return (
    <div className="bg-[#785cb1]">
      <Nav />
      <Header />
      <CurrentWeather />
      <WeatherStats />
      <HourlyForecast />
      <WeeklyForecast />
      <Alerts />
      <SunAndMoon />
      <WeatherMap />
      <BottomNav />
    </div>
  );
};

export default Home;
