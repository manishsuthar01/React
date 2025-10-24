import React, { useState } from "react";
import { createContext } from "react";

export const context = createContext();
const Context = ({ children }) => {
  const [isdark, setisdark] = useState(false);

  const handlechange = () => {
    setisdark((prev) => !prev);
  };
  return (
    <context.Provider value={{isdark, handlechange}}>
      {children}
    </context.Provider>
  );
};

export default Context;
