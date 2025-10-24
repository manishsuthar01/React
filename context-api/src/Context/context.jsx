import React from "react";
import { createContext } from "react";
export const ContextData = createContext();

const context = (props) => {

  const obj={
    "name":"manish",
    "age":23,
    "city":"jaipur"
  }
  const name='manish'

  return (
    <div> 
      <ContextData.Provider value={obj}>
        {props.children}
      </ContextData.Provider>
    </div>
  );
};

export default context;
