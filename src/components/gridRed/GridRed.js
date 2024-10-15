import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import "./GridRed.scss";
import circleRed from "../../img/circleRed.png";

function GridRed() {
	const [hovered, setHovered] = useState(false);
	const images = Array(10).fill(circleRed);

	const springs = useSprings(
		images.length,
		images.map((_, i) => ({
			transform: hovered ? "scale(1.3)" : "scale(1)",
			delay: i * 100,
		}))
	);

	return (
		<div
			className="grid-red"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{springs.map((props, index) => (
				<animated.img
					key={index}
					src={circleRed}
					alt={`Circle ${index + 1}`}
					className="circle-image"
					style={props}
				/>
			))}
		</div>
	);
}

export default GridRed;
