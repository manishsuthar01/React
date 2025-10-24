import React, { useContext } from "react";
import { ContextData } from "../Context/context";

const Header = () => {
    const data=useContext(ContextData)
  return <div>
    Header {data.age}
    
  </div>;
};

export default Header; 
