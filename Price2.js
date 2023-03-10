import React, { useEffect, useState } from "react";
import video from "./Images/video/tansh.mp4";
function Price2() {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (a>10) {
        alert("POP UP!!!");
      }  
      setA((a) => a + 1);
    }, 1000);
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h1>{a}</h1>
      <video width = "800" height="400" controls="controls">
        <source src = "images/video/tansh.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
export default Price2;