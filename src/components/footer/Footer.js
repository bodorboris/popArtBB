import React from "react";
import { useSpring, animated } from "react-spring";
import "./Footer.scss";
import logoIpsum from "../../img/logoIpsum.png";
import githubLogo from "../../img/githubLogo.png";
import discordLogo from "../../img/discordLogo.png";
import stackOverflowLogo from "../../img/stackOverflowLogo.png";
import redditLogo from "../../img/redditLogo.png";
import quoraLogo from "../../img/quoraLogo.png";
import youtubeLogo from "../../img/youtubeLogo.png";
import OctagonStar from "../octagonStar/OctagonStar";
import GridBlack from "../gridBlack/GridBlack";
import Arrows from "../arrows/Arrows";

function Footer() {
	const [homeSpring, setHomeSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [docSpring, setDocSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [startSpring, setStartSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
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

	return (
		<div className="footer-container">
			<div className="footerStar">
				<OctagonStar />
			</div>
			<div className="footerGrid">
				<GridBlack />
			</div>
			<div className="footerArrows">
				<Arrows />
			</div>
			<div className="footer-logo">
				<img src={logoIpsum} alt="Logo Ipsum" />
			</div>
			<div className="footer-links">
				<animated.p
					style={homeSpring}
					onMouseEnter={() =>
						setHomeSpring({ transform: "scale(1.3)" })
					}
					onMouseLeave={() =>
						setHomeSpring({ transform: "scale(1)" })
					}
				>
					Home
				</animated.p>
				<animated.p
					style={docSpring}
					onMouseEnter={() =>
						setDocSpring({ transform: "scale(1.3)" })
					}
					onMouseLeave={() => setDocSpring({ transform: "scale(1)" })}
				>
					Documentation
				</animated.p>
				<animated.p
					style={startSpring}
					onMouseEnter={() =>
						setStartSpring({ transform: "scale(1.3)" })
					}
					onMouseLeave={() =>
						setStartSpring({ transform: "scale(1)" })
					}
				>
					Start Today
				</animated.p>
			</div>
			<div className="footer-social">
				<div className="social-row">
					<animated.img
						src={githubLogo}
						alt="GitHub"
						style={githubSpring}
						onMouseEnter={() =>
							setGithubSpring({ transform: "scale(1.3)" })
						}
						onMouseLeave={() =>
							setGithubSpring({ transform: "scale(1)" })
						}
					/>
					<animated.img
						src={discordLogo}
						alt="Discord"
						style={discordSpring}
						onMouseEnter={() =>
							setDiscordSpring({ transform: "scale(1.3)" })
						}
						onMouseLeave={() =>
							setDiscordSpring({ transform: "scale(1)" })
						}
					/>
				</div>
				<div className="social-row">
					<animated.img
						src={stackOverflowLogo}
						alt="Stack Overflow"
						style={stackOverflowSpring}
						onMouseEnter={() =>
							setStackOverflowSpring({ transform: "scale(1.3)" })
						}
						onMouseLeave={() =>
							setStackOverflowSpring({ transform: "scale(1)" })
						}
					/>
					<animated.img
						src={redditLogo}
						alt="Reddit"
						style={redditSpring}
						onMouseEnter={() =>
							setRedditSpring({ transform: "scale(1.3)" })
						}
						onMouseLeave={() =>
							setRedditSpring({ transform: "scale(1)" })
						}
					/>
				</div>
				<div className="social-row">
					<animated.img
						src={quoraLogo}
						alt="Quora"
						style={quoraSpring}
						onMouseEnter={() =>
							setQuoraSpring({ transform: "scale(1.3)" })
						}
						onMouseLeave={() =>
							setQuoraSpring({ transform: "scale(1)" })
						}
					/>
					<animated.img
						src={youtubeLogo}
						alt="YouTube"
						style={youtubeSpring}
						onMouseEnter={() =>
							setYoutubeSpring({ transform: "scale(1.3)" })
						}
						onMouseLeave={() =>
							setYoutubeSpring({ transform: "scale(1)" })
						}
					/>
				</div>
			</div>
			<div className="footer-credit">
				<p>Design and development by PopArt Studio.</p>
			</div>
		</div>
	);
}

export default Footer;
