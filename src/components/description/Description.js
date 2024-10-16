import React from "react";
import "./Description.scss";
import aiganapravi from "../../img/aiganapravi.gif";
import OctagonStar from "../octagonStar/OctagonStar";
import Arrows from "../arrows/Arrows";
import GridOrange from "../gridOrange/GridOrange";

function Description() {
	return (
		<div className="description-container">
			<div className="orangeGrid">
				<GridOrange />
			</div>
			<div className="starDiv">
				<OctagonStar />
			</div>
			<div className="arrowDiv">
				<Arrows />
			</div>
			<header className="description-header large-text">
				<span className="description-neon-green-text">IPSUM</span> DOLOR
				SIT
			</header>
			<p className="description-paragraph small-text">
				Lorem ipsum dolor sit amet consectetur. Ultrices in justo sit
				tincidunt lacinia id auctor eros dignissim. In id nec netus
				sagittis ornare duis turpis. Enim pellentesque suscipit ante nec
				vestibulum proin eget viverra. Eget vehicula massa urna
				tristique rhoncus ut. Cursus non pretium aliquet ipsum gravida
				fames aliquet. Egestas eget in congue augue. Sed arcu
				condimentum varius vitae cursus. Quis non tellus id faucibus.
				Augue nec aliquam varius mauris mauris tortor. Mauris odio a
				ultrices porttitor amet at. <br />
				<br /> Eget vehicula massa urna tristique rhoncus ut. Cursus non
				pretium aliquet ipsum gravida fames aliquet. Egestas eget in
				congue augue.
			</p>
			<div className="description-image-container">
				<img src={aiganapravi} alt="no" />
			</div>
		</div>
	);
}

export default Description;
