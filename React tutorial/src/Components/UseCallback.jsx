import React, { useState, useMemo, useCallback } from "react";

const UseCallback = () => {
  const [val, setval] = useState(0);

  const funInmemo = useCallback(() => {
    let total = 0;
    for (let i = 0; i < 9999; i++) {
      total += i;
      console.log(total);
    }

    return total;
  }, [val]);

  return (
    <div>
      UseCallback
      <p>{val}</p>
      <p>{console.log(funInmemo())}</p>
      <button onClick={() => setval(val + 1)}>change val</button>
    </div>
  );
};

export default UseCallback;
