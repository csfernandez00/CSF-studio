import React, { useEffect, useState } from "react";
import { NavContainer, NavItem, NavItemsCont, NavLogo } from "./styles";
import logo from "../../../images/LogoCsfGames.png";

function NavBar() {
	const [navBg, setNavBg] = useState();
	const [home, setHome] = useState();
	const [games, setGames] = useState();
	const [news, setNews] = useState();

	useEffect(() => {
		setHome(document.getElementById("home"));
		setGames(document.getElementById("games"));
		setNews(document.getElementById("news"));
	}, []);

	const scrollToSection = (section) => {
		window.scrollTo(0, section?.offsetTop - 100);
	};

	window.onscroll = () => {
		if (window.scrollY > 40) {
			setNavBg("#050505");
		} else {
			setNavBg("transparent");
		}
	};

	return (
		<NavContainer style={{ backgroundColor: navBg, transition: ".4s" }}>
			<NavLogo
				src={logo}
				alt="csf games studio"
				onClick={() => {
					scrollToSection(home);
				}}
			></NavLogo>
			<NavItemsCont>
				<NavItem
					onClick={() => {
						scrollToSection(home);
					}}
				>
					Home
				</NavItem>
				<NavItem
					onClick={() => {
						scrollToSection(games);
					}}
				>
					Our Games
				</NavItem>
				<NavItem
					onClick={() => {
						scrollToSection(news);
					}}
				>
					News
				</NavItem>
			</NavItemsCont>
		</NavContainer>
	);
}

export default NavBar;
