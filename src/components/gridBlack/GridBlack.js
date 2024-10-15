import React, { useState } from "react";
import { useSprings, animated } from "react-spring";
import "./GridBlack.scss";
import sedmogonBlack from "../../img/sedmogonBlack.png";

function GridBlack() {
	const [hovered, setHovered] = useState(false);
	const images = Array(25).fill(sedmogonBlack);

	const springs = useSprings(
		images.length,
		images.map((_, i) => ({
			transform: hovered
				? "scale(1.2) rotate(360deg) translateX(10px)"
				: "scale(1) rotate(0deg) translateX(0px)",
			delay: i * 100,
			config: { duration: 500 },
		}))
	);

	return (
		<div
			className="grid-black"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{springs.map((props, index) => (
				<animated.img
					key={index}
					src={sedmogonBlack}
					alt={`Circle ${index + 1}`}
					className="circle-image"
					style={props}
				/>
			))}
		</div>
	);
}

export default GridBlack;
