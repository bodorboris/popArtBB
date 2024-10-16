import React from "react";
import { useSpring, animated } from "react-spring";
import "./Hero.scss";
import btnJoin from "../../img/btnJoin.png";
import githubLogo from "../../img/githubLogo.png";
import discordLogo from "../../img/discordLogo.png";
import stackOverflowLogo from "../../img/stackOverflowLogo.png";
import redditLogo from "../../img/redditLogo.png";
import quoraLogo from "../../img/quoraLogo.png";
import youtubeLogo from "../../img/youtubeLogo.png";
import devetgonYellow from "../../img/devetgonYellow.png";
import OctagonStar from "../octagonStar/OctagonStar.js";

function Hero() {
	const [spinSpring, setSpinSpring] = useSpring(() => ({
		transform: "rotate(0deg)",
		config: { duration: 1000 },
	}));

	const [githubSpring, setGithubSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [discordSpring, setDiscordSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [stackOverflowSpring, setStackOverflowSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [redditSpring, setRedditSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [quoraSpring, setQuoraSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [youtubeSpring, setYoutubeSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [btnJoinSpring, setBtnJoinSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	return (
		<div className="hero">
			<div className="hero-content">
				<h1 className="hero-header">
					LOREM IPSUM DOLOR SIT AMET
					<span className="highlight"> CONSECTETUR</span>
				</h1>
				<p className="hero-text">
					Lorem ipsum dolor sit amet consectetur. Vestibulum enim
					aenean purus nam quis.
				</p>
				<animated.img
					src={btnJoin}
					alt="Join Button"
					className="btn-join"
					style={btnJoinSpring}
					onMouseEnter={() =>
						setBtnJoinSpring({ transform: "scale(1.4)" })
					}
					onMouseLeave={() =>
						setBtnJoinSpring({ transform: "scale(1)" })
					}
				/>
			</div>
			<div className="hero-images">
				<animated.img
					src={githubLogo}
					alt="GitHub"
					className="social-logo"
					style={githubSpring}
					onMouseEnter={() =>
						setGithubSpring({ transform: "scale(1.4)" })
					}
					onMouseLeave={() =>
						setGithubSpring({ transform: "scale(1)" })
					}
				/>
				<animated.img
					src={discordLogo}
					alt="Discord"
					className="social-logo"
					style={discordSpring}
					onMouseEnter={() =>
						setDiscordSpring({ transform: "scale(1.4)" })
					}
					onMouseLeave={() =>
						setDiscordSpring({ transform: "scale(1)" })
					}
				/>
				<animated.img
					src={stackOverflowLogo}
					alt="Stack Overflow"
					className="social-logo"
					style={stackOverflowSpring}
					onMouseEnter={() =>
						setStackOverflowSpring({ transform: "scale(1.4)" })
					}
					onMouseLeave={() =>
						setStackOverflowSpring({ transform: "scale(1)" })
					}
				/>
				<animated.img
					src={redditLogo}
					alt="Reddit"
					className="social-logo"
					style={redditSpring}
					onMouseEnter={() =>
						setRedditSpring({ transform: "scale(1.4)" })
					}
					onMouseLeave={() =>
						setRedditSpring({ transform: "scale(1)" })
					}
				/>
				<animated.img
					src={quoraLogo}
					alt="Quora"
					className="social-logo"
					style={quoraSpring}
					onMouseEnter={() =>
						setQuoraSpring({ transform: "scale(1.4)" })
					}
					onMouseLeave={() =>
						setQuoraSpring({ transform: "scale(1)" })
					}
				/>
				<animated.img
					src={youtubeLogo}
					alt="YouTube"
					className="social-logo"
					style={youtubeSpring}
					onMouseEnter={() =>
						setYoutubeSpring({ transform: "scale(1.4)" })
					}
					onMouseLeave={() =>
						setYoutubeSpring({ transform: "scale(1)" })
					}
				/>
			</div>
			<animated.img
				src={devetgonYellow}
				alt="Devetgon Yellow"
				className="devetgon-yellow-hero"
				style={spinSpring}
				onMouseEnter={() =>
					setSpinSpring({ transform: "rotate(360deg)" })
				}
				onMouseLeave={() =>
					setSpinSpring({ transform: "rotate(0deg)" })
				}
			/>
			<div className="octagon-star-hero">
				<OctagonStar />
			</div>
		</div>
	);
}

export default Hero;
