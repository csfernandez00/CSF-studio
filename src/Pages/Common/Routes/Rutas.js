import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../../Home/Home";
import Footer from "../Components/Footer";
import Games from "../../Games/Games";
import News from "../../News/News";
import GameDetailed from "../../GameDetailed/GameDetailed";
import { games } from "../../Games/gamesInfo";
import NavBarGameDetailed from "../Components/NavBarGameDetailed";
import FooterGameDetailed from "../Components/FooterGameDetailed";
const Rutas = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<>
							<NavBar />
							<Home />
							<Games />
							<News />
							<Footer />
						</>
					}
				/>
				<Route
					path="/game/fortune-follow-the-mansion"
					element={
						<>
							<NavBarGameDetailed />
							<GameDetailed game={games[0]} />
							<FooterGameDetailed />
						</>
					}
				/>
				<Route
					path="/game/exodus-run"
					element={
						<>
							<NavBarGameDetailed />
							<GameDetailed game={games[1]} />
							<FooterGameDetailed />
						</>
					}
				/>
				<Route
					path="/game/lost-years"
					element={
						<>
							<NavBarGameDetailed />
							<GameDetailed game={games[2]} />
							<FooterGameDetailed />
						</>
					}
				/>
			</Routes>
		</Router>
	);
};

export default Rutas;
