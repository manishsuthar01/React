import React, { useContext, useEffect, useState } from "react";
import { Weathercontext } from "../Context/WeatherContext";

export default function Alert() {
  const { weatherData } = useContext(Weathercontext);
  const [alert, setalert] = useState([]);

  useEffect(() => {
    if (weatherData?.alerts?.alert?.length > 0) {
      setalert(weatherData.alerts.alert);
    } else {
      setalert([]);
    }
  }, [weatherData]);

  return (
    <section className=" bg-[#8574C4] rounded-2xl p-6 text-white  shadow-md  m-4 gap-5">
      <h1 className="text-3xl font-light">Weather Alert</h1>

      <div className="bg-[#9984A3] rounded-xl p-4 text-white mt-6">
        {alert.length > 0 ? (
          alert.map((item, index) => (
            <div key={index} className="mb-2">
              <h4 className="font-semibold text-[#F7CA19]">{item.headline}</h4>
              <p>{item.msg}</p>
            </div>
          ))
        ) : (
          <p className="text">There are no active alerts for this city!</p>
        )}
      </div>
    </section>
  );
}
