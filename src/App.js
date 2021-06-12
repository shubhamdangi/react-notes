import { createContext, useReducer } from "react";
import "./App.css";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import FetchLoading from "./FetchLoading";
import FetchLoadingTwo from "./FetchLoadingTwo";
import RC1 from "./RC1";
import Reducer from "./Reducer";
import Reducer2 from "./Reducer2";

const num = 223;
export const Usercontext = createContext();
export const CountContext = createContext();
const initialState = 0;
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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>HELLO WORLD! 001006</h1>
      <h2>{count}</h2>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <RC1 />
      </CountContext.Provider>
      <Comp3 />
      <Comp2 />
      <FetchLoading />
      <FetchLoadingTwo />

      {/* <Usercontext.Provider value={num}>
        <Comp1 />
      </Usercontext.Provider> */}
      <Reducer />

      <Reducer2 />
    </div>
  );
}

export default App;
