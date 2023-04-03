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
	cursor: pointer;
`;

export const NavItemsCont = styled.ul`
	display: flex;
	flex-direction: row;
	list-style-type: none;
	gap: 2rem;
	color: #eee;
	font-weight: bold;
	font-size: 1.1rem;
	@media screen and (max-width: 700px) {
		display: none;
	}
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
	@media screen and (max-width: 700px) {
		padding-left: 0;
		text-align: center;
	}
`;

export const FooterCont = styled.div`
	width: 100%;
	height: 35vh;
	background-color: #111;
	box-shadow: 0px -20px 100px #000;
	@media screen and (max-width: 700px) {
		height: 100%;
	}
`;

export const FooterGrid = styled.div`
	width: 60%;
	height: fit-content;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 100%;
	@media screen and (max-width: 700px) {
		width: 90%;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(2, 1fr);
		gap: 1rem;
		padding: 2rem 0;
	}
`;

export const FooterLogo = styled.img`
	object-fit: cover;
	width: 80%;
	height: 80%;
	opacity: 20%;
	padding-top: 2rem;
	margin-left: 2rem;

	@media screen and (max-width: 700px) {
		position: absolute;
		width: 80%;
		height: 30%;
		margin-left: 1.5rem;
		padding: 0;
		opacity: 1%;
		overflow: hidden;
	}
`;

export const FooterNav = styled.ul`
	display: flex;
	flex-direction: column;
	list-style-type: none;
	color: #777;
	gap: 1rem;
	font-size: 1.5rem;
	z-index: 1000;
	@media screen and (max-width: 700px) {
		padding: 0;
	}
`;

export const FooterCol = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 2rem;
	@media screen and (max-width: 700px) {
		padding-top: 0rem;
	}
`;

export const FooterThirdCol = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 4rem;
	align-items: center;
	margin-left: -4rem;

	@media screen and (max-width: 700px) {
		padding-top: 0rem;
		margin-left: 0rem;
	}
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
	@media screen and (max-width: 700px) {
		gap: 0.5rem;
		font-size: 2rem;
		margin: auto;
		padding: 0;
	}
`;

export const FooterNavItem = styled.li`
	cursor: pointer;
	transition: 0.2s;
	:hover {
		transform: translateX(2px);
		color: #aaa;
	}
	@media screen and (max-width: 700px) {
		text-align: center;
		padding-left: 0;
	}
`;
