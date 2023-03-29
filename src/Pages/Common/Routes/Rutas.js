import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../../Home/Home";
import Footer from "../Components/Footer";
import Games from "../../Games/Games";
import News from "../../News/News";

const Rutas = () => {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Home />
							<Games />
							<News />
							<Footer />
						</>
					}
				/>
			</Routes>
		</Router>
	);
};

export default Rutas;
