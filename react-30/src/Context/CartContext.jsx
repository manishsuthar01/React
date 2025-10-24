import React, { createContext, useContext,useState } from "react";

export const context = createContext();

const CartContext = ({children}) => {
   const [data, setData] = useState([
    { id: 1, name: "mobile" },
    { id: 2, name: "laptop" },
    { id: 3, name: "tablet" },
    { id: 4, name: "headphone" },
  ]);
  return(
    <context.Provider value={[data,setData]}>
         {children}
    </context.Provider>
  )
};

export default CartContext;
