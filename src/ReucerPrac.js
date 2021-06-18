import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
  }
};

function ReucerPrac() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {state}
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 2 });
        }}
      >
        +
      </button>
    </div>
  );
}

export default ReucerPrac;
