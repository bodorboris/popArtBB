import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./News.scss";
import imgNews from "../../img/imgNews.png";
import btnNews from "../../img/btnNews.png";
import GridBlue from "../gridBlue/GridBlue";
import Arrows from "../arrows/Arrows";
import OctagonStar from "../octagonStar/OctagonStar";

const newsData = [
	{
		image: imgNews,
		date: "October 10, 2023",
		header: "Exciting News Article 1",
		text: "This is a brief description of the first news article. It provides an overview of the content.",
	},
	{
		image: imgNews,
		date: "October 12, 2023",
		header: "Exciting News Article 2",
		text: "This is a brief description of the second news article. It provides an overview of the content.",
	},
];

function News() {
	const [hovered, setHovered] = useState(false);

	const buttonSpring = useSpring({
		transform: hovered ? "scale(1.1)" : "scale(1)",
		config: { tension: 300, friction: 10 },
	});

	return (
		<div className="news-container">
			<div className="news-grid">
				<GridBlue />
			</div>
			<div className="news-arrows">
				<Arrows />
			</div>
			<div className="news-star">
				<OctagonStar />
			</div>
			<header className="news-header large-text">LATEST NEWS</header>
			<div className="news-sections">
				{newsData.map((news, index) => (
					<div key={index} className="news-section">
						<img
							src={news.image}
							alt={news.header}
							className="news-image"
						/>
						<p className="news-date">{news.date}</p>
						<h2 className="news-section-header">{news.header}</h2>
						<p className="news-section-text">{news.text}</p>
						<p className="news-read-more">READ MORE</p>
					</div>
				))}
			</div>
			<div className="news-footer">
				<animated.img
					src={btnNews}
					alt="Read More"
					className="read-more-btn"
					style={buttonSpring}
					onMouseEnter={() => setHovered(true)}
					onMouseLeave={() => setHovered(false)}
				/>
			</div>
		</div>
	);
}

export default News;
