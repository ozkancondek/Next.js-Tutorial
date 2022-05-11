import { useEffect, useState } from "react";

const FastRefresh = () => {
  const [counter, setCounter] = useState(0);
  const [click, setClick] = useState(0);

  const startCounter = () =>
    setInterval(() => setCounter((prev) => prev + 1), 1000);

  const increaseClick = () => {
    setClick(click++);
  };

  return (
    <div>
      <div>
        {" "}
        <h2>Fast refresh Page</h2>
        <br />
        <hr />
      </div>
      <div>
        {" "}
        <h4>component 1</h4>
        <p onClick={startCounter}>Start Counter:{counter}</p>
        <hr />
        <br />
      </div>
      <div>
        {" "}
        <h4>component 2</h4>
        <p onClick={increaseClick}>Click to:{click}</p>
        <hr />
        <br />
      </div>
    </div>
  );
};

export default FastRefresh;
