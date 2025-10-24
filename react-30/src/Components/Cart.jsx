import React, { useContext, useState } from "react";
import { context } from "../Context/CartContext";

const Cart = () => {
  const [data, setData] = useContext(context);

   return (
    <div>
      <h2>Cart Items:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
          
        ))}
      </ul>
    </div>
  );
};

export default Cart;
