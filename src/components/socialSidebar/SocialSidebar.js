import React from "react";
import { useSpring, animated } from "react-spring";
import "./SocialSidebar.scss";
import githubLogo from "../../img/githubLogo.png";
import discordLogo from "../../img/discordLogo.png";
import stackOverflowLogo from "../../img/stackOverflowLogo.png";
import redditLogo from "../../img/redditLogo.png";
import quoraLogo from "../../img/quoraLogo.png";
import youtubeLogo from "../../img/youtubeLogo.png";

function SocialSidebar() {
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
		<div className="social-sidebar">
			<animated.img
				src={githubLogo}
				alt="GitHub"
				className="social-logo"
				style={githubSpring}
				onMouseEnter={() =>
					setGithubSpring({ transform: "scale(1.4)" })
				}
				onMouseLeave={() => setGithubSpring({ transform: "scale(1)" })}
			/>
			<animated.img
				src={discordLogo}
				alt="Discord"
				className="social-logo"
				style={discordSpring}
				onMouseEnter={() =>
					setDiscordSpring({ transform: "scale(1.4)" })
				}
				onMouseLeave={() => setDiscordSpring({ transform: "scale(1)" })}
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
				onMouseLeave={() => setRedditSpring({ transform: "scale(1)" })}
			/>
			<animated.img
				src={quoraLogo}
				alt="Quora"
				className="social-logo"
				style={quoraSpring}
				onMouseEnter={() => setQuoraSpring({ transform: "scale(1.4)" })}
				onMouseLeave={() => setQuoraSpring({ transform: "scale(1)" })}
			/>
			<animated.img
				src={youtubeLogo}
				alt="YouTube"
				className="social-logo"
				style={youtubeSpring}
				onMouseEnter={() =>
					setYoutubeSpring({ transform: "scale(1.4)" })
				}
				onMouseLeave={() => setYoutubeSpring({ transform: "scale(1)" })}
			/>
		</div>
	);
}

export default SocialSidebar;
