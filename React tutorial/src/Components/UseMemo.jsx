import React, { useMemo, useState } from "react";

const UseMemo = () => {
  console.log("ok");

  const [val, setval] = useState(0);


  const expCal = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 9999; i++) {
      total += i;
      console.log(total);
    }

    return total;
  },[val]);

  //   let expCal2 = 0;
  //   for (let i = 0; i < 99009; i++) {
  //     expCal2 += i;
  //     console.log(i);
  //   }

  return (
    <div>
      <h1>UseMemo</h1>
      <p>{val}</p>
      <p>{expCal}</p>
      {/* <p>{expCal2}</p> */}
      <button onClick={() => setval(val + 1)}>change val</button>
    </div>
  );
};

export default UseMemo;
