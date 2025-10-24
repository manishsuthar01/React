import React, { useReducer } from "react";

const Counter = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return { count: state.count + state.step, step: state.step };
      case "dec":
        return { count: state.count - state.step, step: state.step };
      case "stepi":
        return { count: state.count, step: state.step + 1 };
      case "stepd":
        return { count: state.count, step: state.step > 1 ? state.step - 1 : 1 };
      default:
        return state;
    }
  };

  const intval = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, intval);
  return (
    <div style={{ border: "2px solid", padding: 18, margin: 55, gap: 5 }}>
      <p>counter with step inc and dec</p>
      <p>{state.count}</p>
      <p>{state.step}</p>
      <button onClick={() => dispatch({ type: "inc" })}>increment</button>
      <button onClick={() => dispatch({ type: "dec" })}>decrement</button>
      <button onClick={() => dispatch({ type: "stepi" })}>stepInc</button>
      <button onClick={() => dispatch({ type: "stepd" })}>stepdec</button>
    </div>
  );
};

export default Counter;
