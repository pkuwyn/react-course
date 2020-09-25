import React, { useState, useEffect } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  //   const tick = () => {
  //     console.log(count);
  //     setCount((prevCount) => prevCount + 1);
  //   };
  //   const tick = () => {
  //     console.log(count);
  //     setCount(count + 1);
  //   };

  console.log(count);
  useEffect(() => {
    const timer = setInterval(() => {
      //   console.log(count);
      setCount(count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h1>{count}</h1>;
};

export default Test;
