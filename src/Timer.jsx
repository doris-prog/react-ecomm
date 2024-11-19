import React, { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Timer start
    const timer = setInterval(() => {
      // console.log("Timer effect triggered");
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Timer cleared
    return () => {
      clearInterval(timer);
      // console.log("Timer cleared");
    };
  }, []);
  return <div>
    Timer: {count} seconds
  </div>
}