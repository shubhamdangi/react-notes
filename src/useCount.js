import { useState } from "react";

function useCount(init, amount) {
  const [val, setVal] = useState(init);

  const increment = () => {
    setVal(val + amount);
  };

  function decrement() {
    setVal(val - amount);
  }

  function reset() {
    return init;
  }

  return [val, increment, decrement, reset];
}

export default useCount;
