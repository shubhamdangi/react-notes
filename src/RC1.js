import React, { useContext } from "react";
import { CountContext } from "./App";

function RC1() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h3>RC1 Count = {countContext.countState}</h3>
      <button
        onClick={() => {
          countContext.countDispatch("increment");
        }}
      >
        increment by rc1
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("decrement");
        }}
      >
        decrement by rc1
      </button>
      <button
        onClick={() => {
          countContext.countDispatch("reset");
        }}
      >
        reset by rc1
      </button>
    </div>
  );
}

export default RC1;
