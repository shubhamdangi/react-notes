import React, { createContext, useState, useContext } from "react";
import { India } from "./App";
import Prac2 from "./Prac2";
export const Information = createContext();

function Prac1() {
  const ind = useContext(India);
  const [info, setInfo] = useState(0);

  const num = 889;

  function Change() {
    setInfo(info + 1);
    console.log(info);
  }

  return (
    <div>
      the info is {ind}
      <Information.Provider value={{ num }}>
        <Prac2 />
        <button onClick={Change}>change info</button>
      </Information.Provider>
    </div>
  );
}

export default Prac1;
