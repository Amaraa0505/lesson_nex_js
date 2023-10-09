import React from "react";
import { useState } from "react";
const About = () => {
  const [count, setCount] = useState(100);
  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1 className="flex justify-center mt-3">Count: {count}</h1>
      <div className="flex justify-center gap-3">
        <MyButton title="nemeh" onClick={add} />
        <MyButton title="hasah" onClick={sub} />
      </div>
    </div>
  );
};

export default About;
