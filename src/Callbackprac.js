import React, { useCallback, useState } from "react";

function Callbackprac() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  function handleOne() {
    setCountOne(countOne + 1);
    console.log("Count one incremented");
  }
  function handleTwo() {
    setCountTwo(countTwo + 1);
    console.log("Count Two incremented");
  }
  return (
    <div>
      <button onClick={handleOne}>count one {countOne}</button>
      <button onClick={handleTwo}>count two {countTwo}</button>
    </div>
  );
}

export default Callbackprac;
