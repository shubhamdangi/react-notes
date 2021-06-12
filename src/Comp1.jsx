import { React, useContext } from "react";
import { Usercontext } from "./App";

function Comp1() {
  const user = useContext(Usercontext);
  return (
    <div className="title">
      <h1>{user}</h1>
      <button>num+</button>
    </div>
  );
}

export default Comp1;
