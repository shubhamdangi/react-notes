import { useEffect } from "react";

function useTitlle(count) {
  useEffect(() => {
    document.title = `you have (${count}) messages`;
  }, [count]);
}

export default useTitlle;
