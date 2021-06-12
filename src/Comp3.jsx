import React, { useEffect, useState } from "react";

function Comp3() {
  const [val, setval] = useState(0);
  const [sec, setSec] = useState(10000);
  const [name, setName] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // useEffect(() => {
  //   alert("count is incremented");
  // }, [val]);

  // useEffect(() => {
  //   const interval = setInterval(tick, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  useEffect(() => {
    console.log("document is being incremented");
    document.title = `your score is ${val}`;
  }, [val]);

  const tick = () => {
    setSec(sec - 1);
  };
  return (
    <>
      <button
        onClick={() => {
          setval(val + 1);
        }}
      >
        + {val}
      </button>
      <h1>your time starts in </h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="type here for test"
      />
      <p>{name}</p>
    </>
  );
}

export default Comp3;
