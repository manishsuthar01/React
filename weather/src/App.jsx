import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Pages/Home";
import WeatherContext from "./Context/WeatherContext";
import BottomNav from "./Components/BottomNav";

function App() {
  return (
    <WeatherContext>
      <Home />
    </WeatherContext>
  );
}

export default App;
