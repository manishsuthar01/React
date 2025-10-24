import React, { useEffect, useLayoutEffect, useState ,useRef} from "react";

const UseLayout = () => {
  const boxRef = useRef();

  useEffect(() => {
    console.log("useEffect -> Box height:", boxRef.current.offsetHeight);
  });

  useLayoutEffect(() => {
    console.log("useLayoutEffect -> Box height:", boxRef.current.offsetHeight);
  });

  return (
    <div ref={boxRef} style={{ height: "200px", background: "lightblue" }}>
      Hello
    </div>
  );
};

export default UseLayout;
