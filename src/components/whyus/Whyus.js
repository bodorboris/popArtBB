import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import devetgonYellow from "../../img/devetgonYellow.png";
import dblHexa from "../../img/dblHexa.png";
import "./Whyus.scss";
import GridBlue from "../gridBlue/GridBlue";

function Whyus() {
	const sectionData = [
		{
			header: "Section 1",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			header: "Section 2",
			text: "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
		},
		{
			header: "Section 3",
			text: "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
		},
		{
			header: "Section 4",
			text: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed.",
		},
		{
			header: "Section 5",
			text: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
		},
		{
			header: "Section 6",
			text: "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu.",
		},
	];

	const [sections, setSections] = useState([]);

	useEffect(() => {
		setSections(sectionData);
	}, []);
	const [spinSpring, setSpinSpring] = useSpring(() => ({
		transform: "rotate(0deg)",
		config: { duration: 1000 },
	}));

	return (
		<div className="whyus-container large-text">
			<div className="whyus-grid">
				<GridBlue />
			</div>
			<animated.img
				src={devetgonYellow}
				alt="Devetgon Yellow"
				className="whyus-devetgon-yellow"
				style={spinSpring}
				onMouseEnter={() =>
					setSpinSpring({ transform: "rotate(360deg)" })
				}
				onMouseLeave={() =>
					setSpinSpring({ transform: "rotate(0deg)" })
				}
			/>
			<div className="dblHexer">
				<img src={dblHexa} alt="dblHexa" />
			</div>
			<header className="whyus-header">
				<span className="whyus-neon-green-text">WHY</span> US
			</header>
			<div className="whyus-sections">
				{sections.map((section, index) => (
					<div key={index} className="whyus-section">
						<h2 className="whyus-section-header large-text">
							{section.header}
						</h2>
						<p className="whyus-section-text small-text">
							{section.text}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Whyus;
