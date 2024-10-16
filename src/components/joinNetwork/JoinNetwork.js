import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./JoinNetwork.scss";
import GridRed from "../gridRed/GridRed";
import Arrows from "../arrows/Arrows";
import OctagonStar from "../octagonStar/OctagonStar";
import GridOrange from "../gridOrange/GridOrange";
import discordGiga from "../../img/discordGiga.png";
import gitGiga from "../../img/gitGiga.png";
import stackGiga from "../../img/stackGiga.png";
import quoraGiga from "../../img/quoraGiga.png";
import redditGiga from "../../img/redditGiga.png";
import youtubeGiga from "../../img/youtubeGiga.png";

function useRotateSpring() {
	const [hovered, setHovered] = useState(false);
	const spring = useSpring({
		transform: hovered ? "rotate(360deg)" : "rotate(0deg)",
		config: { duration: 1000 },
	});
	return [spring, setHovered];
}

function JoinNetwork() {
	const [discordSpring, setDiscordHovered] = useRotateSpring();
	const [gitSpring, setGitHovered] = useRotateSpring();
	const [stackSpring, setStackHovered] = useRotateSpring();
	const [quoraSpring, setQuoraHovered] = useRotateSpring();
	const [redditSpring, setRedditHovered] = useRotateSpring();
	const [youtubeSpring, setYoutubeHovered] = useRotateSpring();

	return (
		<div className="join-network-container">
			<div className="joinGrid">
				<GridRed />
			</div>
			<div className="joinArrows">
				<Arrows />
			</div>
			<div className="joinStar">
				<OctagonStar />
			</div>
			<div className="joinOrange">
				<GridOrange />
			</div>

			<header className="join-network-header large-text">
				<span className="yellow-start">START TODAY</span> - JOIN THE
				NETWORK
			</header>
			<div className="gigaContainer">
				<div
					className="discordGiga"
					onMouseEnter={() => setDiscordHovered(true)}
					onMouseLeave={() => setDiscordHovered(false)}
				>
					<animated.img
						src={discordGiga}
						alt="discordGiga"
						style={discordSpring}
					/>
				</div>
				<div
					className="gitGiga"
					onMouseEnter={() => setGitHovered(true)}
					onMouseLeave={() => setGitHovered(false)}
				>
					<animated.img
						src={gitGiga}
						alt="gitGiga"
						style={gitSpring}
					/>
				</div>
				<div
					className="stackGiga"
					onMouseEnter={() => setStackHovered(true)}
					onMouseLeave={() => setStackHovered(false)}
				>
					<animated.img
						src={stackGiga}
						alt="stackGiga"
						style={stackSpring}
					/>
				</div>
				<div
					className="quoraGiga"
					onMouseEnter={() => setQuoraHovered(true)}
					onMouseLeave={() => setQuoraHovered(false)}
				>
					<animated.img
						src={quoraGiga}
						alt="quoraGiga"
						style={quoraSpring}
					/>
				</div>
				<div
					className="redditGiga"
					onMouseEnter={() => setRedditHovered(true)}
					onMouseLeave={() => setRedditHovered(false)}
				>
					<animated.img
						src={redditGiga}
						alt="redditGiga"
						style={redditSpring}
					/>
				</div>
				<div
					className="youtubeGiga"
					onMouseEnter={() => setYoutubeHovered(true)}
					onMouseLeave={() => setYoutubeHovered(false)}
				>
					<animated.img
						src={youtubeGiga}
						alt="youtubeGiga"
						style={youtubeSpring}
					/>
				</div>
			</div>
		</div>
	);
}

export default JoinNetwork;
