import React from "react";
import "./App.scss";
import AppContainer from "./AppContainer.js";
import Header from "./components/header/Header.js";
import Hero from "./components/hero/Hero.js";
import Programator from "./components/programator/Programator.js";
import Description from "./components/description/Description.js";
import GridOrange from "./components/gridOrange/GridOrange.js";
import Whyus from "./components/whyus/Whyus.js";
import BogdanIsHere from "./components/bogdanIsHere/BogdanIsHere.js";
import Contributors from "./components/contributors/Contributors.js";
import JoinNetwork from "./components/joinNetwork/JoinNetwork.js";
import Introduction from "./components/introduction/Introduction.js";
import News from "./components/news/News.js";
import Footer from "./components/footer/Footer.js";

function App() {
	return (
		<AppContainer>
			<Header />
			<Hero />
			<Programator />
			<Description />
			<Whyus />
			<BogdanIsHere />
			<Contributors />
			<JoinNetwork />
			<Introduction />
			<News />
			<Footer />
		</AppContainer>
	);
}

export default App;
