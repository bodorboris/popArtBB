import React from "react";
import "./Introduction.scss";
import { useSpring, animated } from "react-spring";
import covekVideo from "../../img/covekVideo.png";
import OctagonStar from "../octagonStar/OctagonStar";
import sedmogonYellow from "../../img/sedmogonYellow.png";

function Introduction() {
	const [spinSpring, setSpinSpring] = useSpring(() => ({
		transform: "rotate(0deg)",
		config: { duration: 500 },
	}));
	return (
		<div className="introduction-container">
			<div className="video-sedmogon">
				<animated.img
					src={sedmogonYellow}
					alt="Sedmogon Yellow"
					className="sedmogon"
					style={spinSpring}
					onMouseEnter={() =>
						setSpinSpring({ transform: "rotate(360deg)" })
					}
					onMouseLeave={() =>
						setSpinSpring({ transform: "rotate(0deg)" })
					}
				/>
			</div>
			<div className="intro-starDiv">
				<OctagonStar />
			</div>
			<header className="introduction-header large-text">
				INTRODUCTION TO OUR WORKFLOW
			</header>
			<div className="introduction-image-container">
				<img src={covekVideo} alt="no" />
			</div>
		</div>
	);
}

export default Introduction;
