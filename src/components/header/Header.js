import React from "react";
import { useSpring, animated } from "react-spring";
import "./Header.scss";
import logoIpsum from "../../img/logoIpsum.png";
import line from "../../img/line.png";
import sedmogonYellow from "../../img/sedmogonYellow.png";

function Header() {
	const [homeSpring, setHomeSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [docSpring, setDocSpring] = useSpring(() => ({
		transform: "scale(1)",
		config: { tension: 300, friction: 10 },
	}));

	const [spinSpring, setSpinSpring] = useSpring(() => ({
		transform: "rotate(0deg)",
		config: { duration: 500 },
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
	);
}

export default Header;
