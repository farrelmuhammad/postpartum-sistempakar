import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(80%,0)" },
    to: { transform: "translate(8%,0)" },
    config: { duration: 10000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    <div key={key}>
      <animated.div style={scrolling}>{text}</animated.div>
    </div>
  );
};

export default TextScroller;
