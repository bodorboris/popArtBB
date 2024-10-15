import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import octagonStar from "../../img/octagonStar.png";
import "./OctagonStar.scss";

function OctagonStar() {
	const [hovered, setHovered] = useState(false);

	const spin = useSpring({
		transform: hovered ? "rotate(360deg)" : "rotate(0deg)",
		config: { duration: 1000 },
	});

	return (
		<div
			className="octagon-star-container"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<animated.img
				src={octagonStar}
				alt="Octagon Star"
				className="octagon-star"
				style={spin}
			/>
		</div>
	);
}

export default OctagonStar;
