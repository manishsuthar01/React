import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const Reducer = (state, action) => {
    switch (action.type) {
      case "off":
        return { bulb: "off" };
      case "on":
        return { bulb: "on" };
      case "toggle":
        return { bulb: state.bulb === "off" ? "on" : "off" };
      default:
        return state;
    }
  };

  const intArg = { bulb: "off" };
  const [state, dispatch] = useReducer(Reducer, intArg);

  return (
    <div style={{border:"2px solid",padding:18,margin:55,gap:5}}>
      <p>simple bulb state change with useReducer</p>
      <p>{state.bulb}</p>
      <button onClick={()=>dispatch({ type: "off" })}>off</button>
      <button onClick={()=>dispatch({ type: "on" })}>on</button>
      <button onClick={()=>dispatch({ type: "toggle" })}>toggle</button>
    </div>
  );
}

export default App;
