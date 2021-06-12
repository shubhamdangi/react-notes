import React, { useReducer } from "react";

const initialState = 0; //step 2-b and c below
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
  }
};

function Reducer() {
  const [count, dispatch] = useReducer(reducer, initialState);  //step 2-a
  return (
    <div>
      <h1>count is ={count}</h1> <br />
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Reducer;
