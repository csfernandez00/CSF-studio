import styled from "styled-components";

export const NavContainer = styled.nav`
	position: fixed;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 1rem;
	z-index: 1000;
	width: 100%;
	height: 8vh;
`;

export const NavLogo = styled.img`
	width: 80px;
`;

export const NavItemsCont = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	gap: 2rem;
	color: #eee;
	font-weight: bold;
	font-size: 1.1rem;
`;

export const NavItem = styled.a`
	cursor: pointer;
	padding: 0.5rem;
	color: #ddd;
	text-decoration: none;

	:hover {
		color: #fff;
		transform: translateY(1px);
		transition: 0.2s;
	}
`;

export const SectionTitle = styled.h2`
	color: #ccc;
	font-size: 1.8rem;
	padding-left: 8rem;
	z-index: 100;
`;

export const FooterCont = styled.div`
	width: 100%;
	height: 35vh;
	background-color: #111;
	box-shadow: 0px -20px 100px #000;
`;

export const FooterGrid = styled.div`
	width: 60%;
	height: 100%;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
`;

export const FooterNav = styled.ul`
	display: flex;
	flex-direction: column;
	list-style-type: none;
	color: #777;
	gap: 1rem;
	font-size: 1.5rem;
`;

export const FooterCol = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 2rem;
`;

export const FooterRow = styled.div`
	display: flex;
	flex-direction: row;
`;

export const FooterSocial = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	color: #777;
	gap: 0.5rem;
	font-size: 1.5rem;
	margin-top: 0.2rem;
`;

export const FooterNavItem = styled.li`
	cursor: pointer;
	transition: 0.2s;
	:hover {
		transform: translateX(2px);
		color: #aaa;
	}
`;
