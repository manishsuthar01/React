import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setcolor] = useState("");
  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setcolor(e.target.value)}
      />

      <div className={`w-52 h-52 `}
           style={{background:`${color}`}}
      ></div>
    </div>
  );
};

export default ColorPicker;
