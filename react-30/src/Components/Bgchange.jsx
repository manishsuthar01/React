import React, { useRef, useState } from "react";

const Bgchange = () => {
  const [bg, setbg] = useState("bg-amber-900");

  const bgchange = (e) => {
    setbg(bg ==="bg-amber-900" ? "bg-amber-500" : "bg-amber-900");
  };

  return (
    <div className={`w-full h-screen  flex items-center justify-center ${bg}`}>
      <button onClick={bgchange} className="text-3xl rounded-full border-2 p-3">
        change the background
      </button>
    </div>
  );
};

export default Bgchange;
