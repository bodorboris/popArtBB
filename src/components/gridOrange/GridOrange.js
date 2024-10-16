import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import "./GridOrange.scss";
import devetgonOrange from "../../img/devetgonOrange.png";

function GridOrange() {
	const [hovered, setHovered] = useState(false);
	const images = Array(10).fill(devetgonOrange);

	const springs = useSprings(
		images.length,
		images.map((_, i) => ({
			transform: hovered
				? "scale(1.3) rotate(360deg)"
				: "scale(1) rotate(0deg)",
			delay: i * 100,
			config: { duration: 1000 },
		}))
	);

	return (
		<div
			className="grid-orange"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{springs.map((props, index) => (
				<animated.img
					key={index}
					src={devetgonOrange}
					alt={`Circle ${index + 1}`}
					className="circle-image"
					style={props}
				/>
			))}
		</div>
	);
}

export default GridOrange;
