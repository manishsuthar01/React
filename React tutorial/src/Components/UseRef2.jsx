import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

const UseRef2 = () => {
  const [count, setcount] = useState(0);

  useLayoutEffect(() => {
    console.log("component rendered ");
  });
  const handle = () => {
    setcount(count + 1);
    console.log(`clicked ${count} times `);
  };

  return (
    <div>
      UseRef2
      <button onClick={handle}>click_to_render</button>
    </div>
  );
};

export default UseRef2;
