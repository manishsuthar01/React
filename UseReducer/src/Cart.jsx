import React, { useReducer } from "react";

const Cart = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { cart:[...state.cart,action.item] };
      case "remove":
        return { cart: state.cart.filter((item) => action.id !== item.id) };
      case "clear":
        return { cart:[]};
      default:
        return state;
    }
  };

  const intval = {
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, intval);
  return (
    <div style={{ border: "2px solid", padding: 18, margin: 55, gap: 5 }}>
      <h2>Shoping Cart</h2>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id}>
            {item.name}-${item.price}
            <button onClick={() => dispatch({ type: "remove", id: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          dispatch({
            type: "add",
            item: { id: Date.now(), name: "Apple", price: 10 },
          })
        }
      >
        Add Apple
      </button>

      <button onClick={() => dispatch({ type: "clear" })}>Clear Cart</button>
    </div>
  );
};

export default Cart;
