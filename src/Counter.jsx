import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // console.log("Increment button clicked"); => Click to increment
    setCount(count + 1);
  };

  // console.log(`Counter count: ${count}`); => Start count

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );

}
