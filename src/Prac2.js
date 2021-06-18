import React, { useContext } from "react";
import Information from "./Prac1";

function Prac2() {
  const info1 = useContext(Information);
  return (
    <div>
      <h2>THE INFO PASSED IN PRAC 2 IS {info1}</h2>
    </div>
  );
}

export default Prac2;
