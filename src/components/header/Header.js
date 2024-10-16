import React from "react";
import { useSpring, animated } from "react-spring";
import "./Header.scss";
import logoIpsum from "../../img/logoIpsum.png";
import line from "../../img/line.png";

function Header() {
	const [homeSpring, setHomeSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [docSpring, setDocSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	return (
		<div className="header">
			<img src={logoIpsum} alt="Logo" className="logo" />
			<div className="nav">
				<animated.span
					className="header-text small-text"
					style={homeSpring}
					onMouseEnter={() =>
						setHomeSpring({ transform: "scale(1.3)" })
					}
					onMouseLeave={() =>
						setHomeSpring({ transform: "scale(1)" })
					}
				>
					Home
				</animated.span>
				<img src={line} alt="Line" className="line" />
				<animated.span
					className="header-text small-text"
					style={docSpring}
					onMouseEnter={() =>
						setDocSpring({ transform: "scale(1.1)" })
					}
					onMouseLeave={() => setDocSpring({ transform: "scale(1)" })}
				>
					Documentation
				</animated.span>
			</div>
		</div>
	);
}

export default Header;
