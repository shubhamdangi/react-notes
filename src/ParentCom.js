import React, { useState, useCallback, useMemo } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import useCount from "./useCount";

function ParentCom() {
  const [val, increment, decrement, reset] = useCount(10);
  const [inc, setInc] = useState(0);

  const handleInc = useCallback(() => {
    setInc(inc + 1);
    console.log("increment rendered");
  }, [inc]);

  function handleDec() {
    setInc(inc - 1);
    console.log("decrement rendered");
  }
  return (
    <div>
      <Child1 count={inc} handlePlus={handleInc} handleMinus={handleDec} />
      <Child2 />

      <button onClick={increment}>inc {val}</button>
      <button onClick={decrement}>decre {val}</button>
      <button onClick={reset}>reset {val}</button>
    </div>
  );
}

export default ParentCom;
