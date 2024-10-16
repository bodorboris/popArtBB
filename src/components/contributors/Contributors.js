import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Contributors.scss";
import contributorImage1 from "../../img/dejan-markovic.png";
import contributorImage2 from "../../img/Andrea-Erdeljan.png";
import contributorImage3 from "../../img/Stefan-sredojevic.png";
import contributorImage4 from "../../img/Tim-Ling.png";
import contributorImage5 from "../../img/kozomora.png";
import contributorImage from "../../img/anon.png";
import joinBtn from "../../img/btnCommunity.png";
import hireme from "../../img/Boris-Bodor.png";

const initialContributorsData = [
	{
		image: contributorImage1,
		header: "Dejan Markovic",
		text: "Professor at UCLA",
	},
	{
		image: contributorImage2,
		header: "Andrea Erdeljan",
		text: "Verification Engineer",
	},
	{
		image: contributorImage3,
		header: "Stefan Sredojevic",
		text: "Co-founder and COO at Anari AI",
	},
	{
		image: contributorImage4,
		header: "Tim Ling",
		text: "Student at UCLA",
	},
	{
		image: contributorImage5,
		header: "Kozomora",
		text: "Verification Engineer",
	},
	{
		image: contributorImage,
		header: "Contributor 6",
		joinBtn: true,
	},
];

function Contributors() {
	const [contributorsData, setContributorsData] = useState(
		initialContributorsData
	);
	const [hover, setHover] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const handleJoinClick = () => {
		const newContributorsData = [...contributorsData];
		newContributorsData[5] = {
			image: hireme,
			header: "Boris Bodor",
			text: "Newest Hire",
		};
		setContributorsData(newContributorsData);
	};

	return (
		<div className="contributors-container">
			<header className="contributors-header large-text">
				CONTRIBUTORS
			</header>
			<div className="contributors-sections">
				{contributorsData.map((contributor, index) => (
					<div key={index} className="contributors-section">
						<img
							src={contributor.image}
							alt={contributor.header}
							className="contributors-image"
						/>
						<h2 className="contributors-section-header">
							{contributor.header}
						</h2>
						{contributor.joinBtn ? (
							<animated.img
								src={joinBtn}
								alt="Join Us"
								className="join-btn-image"
								style={hover}
								onMouseEnter={() =>
									setHover({ transform: "scale(1.1)" })
								}
								onMouseLeave={() =>
									setHover({ transform: "scale(1)" })
								}
								onClick={handleJoinClick}
							/>
						) : (
							<p className="contributors-section-text">
								{contributor.text}
							</p>
						)}
					</div>
				))}
			</div>
			<div className="contributors-footer large-text">
				...and 20+ people designing the future.
			</div>
		</div>
	);
}

export default Contributors;
