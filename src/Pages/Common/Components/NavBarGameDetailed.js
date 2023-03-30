import React from "react";
import { NavContainer, NavItem, NavItemsCont, NavLogo } from "./styles";
import logo from "../../../images/LogoCsfGames.png";

function NavBarGameDetailed() {
	return (
		<NavContainer
			style={{
				backgroundColor: "#050505",
				transition: ".4s",
				boxShadow: "0 0 20px #000",
			}}
		>
			<a href="/">
				<NavLogo src={logo} alt="csf games studio"></NavLogo>
			</a>
			<NavItemsCont>
				<NavItem href="/">Home</NavItem>
			</NavItemsCont>
		</NavContainer>
	);
}

export default NavBarGameDetailed;
