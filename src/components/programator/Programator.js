import React from "react";
import { useSpring, animated } from "react-spring";
import GridRed from "../gridRed/GridRed";
import GridBlue from "../gridBlue/GridBlue";
import Arrows from "../arrows/Arrows";
import programatorImage from "../../img/programator.png";
import "./Programator.scss";

function Programator() {
	const [imageSpring, setImageSpring] = useSpring(() => ({
		transform: "scale(1) rotate(0deg) translateY(0px)",
		config: { tension: 300, friction: 10 },
	}));

	return (
		<div className="programator-container">
			<div className="prog-grid-red">
				<GridRed />
			</div>
			<div className="prog-grid-blue">
				<GridBlue />
			</div>
			<div className="prog-arrows">
				<Arrows />
			</div>
			<div className="image-container">
				<animated.img
					src={programatorImage}
					alt="Programator"
					className="programator-image"
					style={imageSpring}
					onMouseEnter={() =>
						setImageSpring({
							transform:
								"scale(1.2) rotate(10deg) translateY(-10px)",
						})
					}
					onMouseLeave={() =>
						setImageSpring({
							transform: "scale(1) rotate(0deg) translateY(0px)",
						})
					}
				/>
			</div>
		</div>
	);
}

export default Programator;
