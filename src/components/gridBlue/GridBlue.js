import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import "./GridBlue.scss";
import octagonTeal from "../../img/octagonTeal.png";

function GridBlue() {
  const [hovered, setHovered] = useState(false);
  const images = Array(12).fill(octagonTeal);

  const springs = useSprings(
    images.length,
    images.map((_, i) => ({
      transform: hovered ? "scale(1.3) translateX(10px)" : "scale(1) translateX(0px)",
      config: { tension: 300, friction: 10 },
      delay: i * 100,
    }))
  );

  return (
    <div
      className="grid-blue"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {springs.map((props, index) => (
        <animated.img
          key={index}
          src={octagonTeal}
          alt={`Octagon ${index + 1}`}
          className="octagon-image"
          style={props}
        />
      ))}
    </div>
  );
}

export default GridBlue;