import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
  }
};

function Reducer2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count.firstCounter}</h1>
      <h1>{count.secondCounter}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment", value: 1 });
        }}
      >
        increment by 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 1 });
        }}
      >
        decrement by 1
      </button>
      <br />

      <button
        onClick={() => {
          dispatch({ type: "increment", value: 5 });
        }}
      >
        increment by 5
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", value: 5 });
        }}
      >
        decrement by 5
      </button>
      <br />
      <button
        onClick={() => {
          dispatch({ type: "increment2", value: 1 });
        }}
      >
        increment count 2
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement2", value: 1 });
        }}
      >
        decrement count 2
      </button>
    </div>
  );
}

export default Reducer2;
