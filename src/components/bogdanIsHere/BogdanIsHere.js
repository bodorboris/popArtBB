import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./BogdanIsHere.scss";
import bogdanImage from "../../img/bogdan.png";
import bogdanBlocker from "../../img/bogdanBlocker.png";
import OctagonStar from "../octagonStar/OctagonStar";
import Arrows from "../arrows/Arrows";
import hexa from "../../img/hexa.png";

function BogdanIsHere() {
	const [spin, setSpin] = useState(false);

	const spinAnimation = useSpring({
		transform: spin ? "rotate(360deg)" : "rotate(0deg)",
		config: { duration: 1000 },
		onRest: () => setSpin(false), // Reset spin state after animation completes
	});

	const handleSpin = () => {
		setSpin(true);
	};

	return (
		<div className="bogdan-container">
			<div className="blockerDiv">
				<img src={bogdanBlocker} alt="Blocker" />
			</div>
			<div className="bogdanStar">
				<OctagonStar />
			</div>
			<div className="bogdanArrows">
				<Arrows />
			</div>
			<div className="bogdanHexa" onClick={handleSpin}>
				<animated.img src={hexa} alt="Hexa" style={spinAnimation} />
			</div>
			<animated.img
				src={bogdanImage}
				alt="Bogdan"
				className="bogdan-image"
				style={spinAnimation}
			/>
			<div className="bogdan-text-container">
				<h1 className="bogdan-main-header">Bogdan is here!</h1>
				<h2 className="bogdan-sub-header">Our founder</h2>
				<p className="bogdan-paragraph">
					Ultrices amet in a duis viverra nullam et. Amet nunc sed
					dignissim mus cras. Fringilla molestie turpis neque leo
					viverra magna. Aliquam sociis proin nulla gravida. Id ac id
					nisi quis pulvinar. Pulvinar massa aenean hendrerit purus
					aliquet. Odio nunc turpis quis habitant elementum habitasse
					venenatis vestibulum. Dui arcu id sagittis enim sagittis in
					enim dignissim. Tincidunt commodo mollis amet mollis. Ut
					consectetur metus lectus quam ultrices consectetur
					adipiscing.
				</p>
			</div>
		</div>
	);
}

export default BogdanIsHere;
