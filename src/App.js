import { createContext, useReducer } from "react";
import "./App.css";
import Callbackprac from "./Callbackprac";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import FetchLoading from "./FetchLoading";
import FetchLoadingTwo from "./FetchLoadingTwo";
import ParentCom from "./ParentCom";
import Prac1, { Information } from "./Prac1";
import Prac2 from "./Prac2";
import RC1 from "./RC1";
import Reducer from "./Reducer";
import Reducer2 from "./Reducer2";
import ReducerPrac from "./ReucerPrac";

const num = 223;
export const Usercontext = createContext();
export const CountContext = createContext();
export const India = createContext();
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
      <h1>HELLO WORLD! id-904809487311</h1>
      <India.Provider value={num}>
        <Prac1 />
      </India.Provider>
      {/* <Prac2 /> */}
      <ReducerPrac />
      <h2>{count}</h2>
      <Callbackprac />
      <ParentCom />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <RC1 />
      </CountContext.Provider>
      <Comp3 />
      <Comp2 />
      <FetchLoading />
      <FetchLoadingTwo />

      <Usercontext.Provider value={num}>
        <Comp1 />
      </Usercontext.Provider>
      <Reducer />

      <Reducer2 />
    </div>
  );
}

export default App;
