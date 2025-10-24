import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, settime] = useState(60);

    useEffect(() => {
        if(time<=0){
            return;
        }
      const timer = setTimeout(() => {
        settime(time - 1);
      }, 1000);

      return () => clearTimeout(timer);
    },[time]);

  return <div>Timer :{time}</div>;
};

export default Timer;
