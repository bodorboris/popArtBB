import React from "react";
import "./App.scss";
import AppContainer from "./AppContainer.js";
import Header from "./components/header/Header.js";
import Hero from "./components/hero/Hero.js";

function App() {
	return (
		<AppContainer>
			<Header />
			<Hero />
		</AppContainer>
	);
}

export default App;
