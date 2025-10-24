import React, { useReducer } from "react";

const Togle = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "off":
        return { bulb: "off" };
      case "on":
        return { bulb: "on" };
      case "toggle":
        return { bulb: state.bulb === "on" ? "off" : "on" };
      default:
        return state;
    }
  };

  const intval = {
    bulb: "off",
  };
  const [state, dispatch] = useReducer(reducer, intval);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 flex flex-col items-center gap-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-700">
          Bulb is:{" "}
          <span
            className={`${
              state.bulb === "on" ? "text-green-600" : "text-red-500"
            } font-semibold`}
          >
            {state.bulb.toUpperCase()}
          </span>
        </h1>

        {/* Bulb visual */}
        <div
          className={`w-20 h-20 rounded-full transition-all duration-500 shadow-lg ${
            state.bulb === "on"
              ? "bg-yellow-400 shadow-yellow-400/70"
              : "bg-gray-400 shadow-gray-400/50"
          }`}
        ></div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            className="px-6 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 shadow-md transition-all"
            onClick={() => dispatch({ type: "on" })}
          >
            Turn ON
          </button>
          <button
            className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 shadow-md transition-all"
            onClick={() => dispatch({ type: "off" })}
          >
            Turn OFF
          </button>
          <button
            className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 shadow-md transition-all"
            onClick={() => dispatch({ type: "toggle" })}
          >
            Toggle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Togle;
