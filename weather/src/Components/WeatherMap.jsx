import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Weathercontext } from "../Context/WeatherContext";
import React, { useContext, useEffect, useState } from "react";

export default function WeatherMap() {
  const { weatherData } = useContext(Weathercontext);

  const [location, setlocation] = useState({});
  const [activeLayer, setActiveLayer] = useState("clouds_new");
  const KEY = "3ec389fe4aeae5e82464b6d508a83bc1";

  useEffect(() => {
    if (weatherData) {
      setlocation(weatherData.location);
    }
  }, [weatherData]);

  if (!location?.lat || !location?.lon) return null; // prevent errors on first render

  // Available overlays
  const layers = {
    Clouds: "clouds_new",
    Rain: "precipitation_new",
    Temperature: "temp_new",
    Wind: "wind_new",
    Pressure: "pressure_new",
  };

  return (
    <section
      id="map"
      className=" bg-[#8574C4] rounded-2xl p-6 text-white shadow-md m-4 gap-5 mb-12 border-indigo-100 border-x "
    >
      <h1 className="text-3xl font-light">Weather Map</h1>

      {/* Toggle buttons */}
      <div className="flex gap-3 mt-4 flex-wrap">
        {Object.keys(layers).map((name) => (
          <button
            key={name}
            onClick={() => setActiveLayer(layers[name])}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              activeLayer === layers[name]
                ? "bg-white text-[#8574C4]"
                : "bg-[#6d5bb5] text-white hover:bg-[#7b68cc]"
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="border-2 border-[#adb1d1] rounded-2xl overflow-hidden mt-6">
        <MapContainer
          center={[location.lat, location.lon]}
          zoom={6}
          style={{ height: "400px", width: "100%" }}
        >
          {/* Base map */}
          {/* Base map (always visible) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Active weather layer */}
          <TileLayer
            url={`https://tile.openweathermap.org/map/${activeLayer}/{z}/{x}/{y}.png?appid=${KEY}`}
            opacity={0.99}
          />

          <Marker position={[location.lat, location.lon]}>
            <Popup className="text-black">{location.name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
}
