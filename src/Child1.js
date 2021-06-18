import React from "react";
import useTitlle from "./useTitle";

function Child1({ count, handlePlus, handleMinus }) {
  console.log("chld1 rendered");
  useTitlle(count);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handlePlus}>++</button>
      <button onClick={handleMinus}>--</button>
    </div>
  );
}

export default Child1;
