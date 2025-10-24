import React, { useRef, forwardRef, useImperativeHandle } from "react";
import ImperChild from "./ImperChild";

const ImperParent = () => {
  const videoRef = useRef();

  return (
    <div>
      <ImperChild ref={videoRef} />
      <button onClick={() => videoRef.current.play()}>play</button>
      <button onClick={() => videoRef.current.pause()}>pause</button>
      <button onClick={() => videoRef.current.volume5()}>volume 0</button>
      <button onClick={() => videoRef.current.volume10()}>volume 0.5</button>
    </div>
  );
};

export default ImperParent;
