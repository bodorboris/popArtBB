import React from "react";
import { useSprings, animated } from "react-spring";
import "./arrows.scss";
import arr1 from "../../img/arr1.png";
import arr2 from "../../img/arr2.png";
import arr3 from "../../img/arr3.png";

const images = [
  { src: arr1, alt: "Arrow 1" },
  { src: arr2, alt: "Arrow 2" },
  { src: arr3, alt: "Arrow 3" },
];

function Arrows() {
  const [springs, setSprings] = useSprings(images.length, (index) => ({
    transform: "scale(1)",
    config: { tension: 300, friction: 10 },
  }));

  const handleMouseEnter = () => {
    setSprings((index) => ({
      transform: "scale(1.3)",
      delay: index * 200,
    }));
  };

  const handleMouseLeave = () => {
    setSprings((index) => ({
      transform: "scale(1)",
      delay: index * 200,
    }));
  };

  return (
    <div
      className="arrows-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {springs.map((style, index) => (
        <animated.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          style={style}
        />
      ))}
    </div>
  );
}

export default Arrows;