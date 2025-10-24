import React, { useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef(null);

  const [val, setval] = useState(0);

  const inputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>UseRefh2 </h2>
      <h1>{val}</h1>
      <input ref={inputRef} type="text" />
      <button onClick={() => setval(val + 1)}>Re-render</button>
      <button onClick={inputFocus}>input focus</button>
    </div>
  );
};

export default UseRef;
