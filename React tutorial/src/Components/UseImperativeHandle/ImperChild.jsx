import React, { useRef, forwardRef, useImperativeHandle } from "react";

const ImperChild = forwardRef((props, ref) => {
  const videoref = useRef();
useImperativeHandle(ref,()=>({
    play:()=>videoref.current.play(),
    pause:()=>videoref.current.pause(),
    volume5:()=>videoref.current.volume=0,
    volume10:()=>videoref.current.volume=0.3,
}))
  return (
    <video ref={videoref} width="300" controls={false}>
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
});

export default ImperChild;
