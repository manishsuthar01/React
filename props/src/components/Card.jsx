import React from "react";
import "./card.css"; // Assuming you have some styles for the card component

function Card(props) {
    const {name,age,profession} = props;
  return (
    <div className="card">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <h2>{name}</h2>
      <h2>city :{age} </h2>
      <p>profession :{profession} </p>
      <button>Add friend </button>
    </div>
  );
}  

export default Card;
