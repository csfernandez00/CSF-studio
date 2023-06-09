import React, { useEffect, useState } from "react";
import {
	FooterCont,
	FooterGrid,
	FooterNav,
	FooterCol,
	FooterSocial,
	FooterNavItem,
	SectionTitle,
	FooterLogo,
	FooterThirdCol,
} from "./styles";
import csfLogo from "../../../images/LogoCsf.png";
import { FaTwitter, FaYoutube, FaTiktok } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

function Footer() {
	const [mouseOver, setMouseOver] = useState(false);
	const [mouseOver2, setMouseOver2] = useState(false);
	const [mouseOver3, setMouseOver3] = useState(false);
	const [mouseOver4, setMouseOver4] = useState(false);
	const [home, setHome] = useState();
	const [games, setGames] = useState();
	const [news, setNews] = useState();

	useEffect(() => {
		setHome(document.getElementById("home"));
		setGames(document.getElementById("games"));
		setNews(document.getElementById("news"));
	}, []);

	const styleNormal = {
		color: "#777",
		outline: "1px solid #777",
		borderRadius: "50%",
		padding: ".8rem",
		transition: ".2s",
	};

	const styleHovered = {
		backgroundColor: "#777",
		color: "#000",
		outline: "1px solid #777",
		borderRadius: "50%",
		padding: ".8rem",
		boxShadow: "inset 5px 0 10px #000, inset -5px 0 10px #ddd",
		transition: ".2s",
	};

	const normalStyle = {
		color: "#777",
		marginRight: "1.2rem",
		fontSize: "2rem",
		cursor: "pointer",
		transition: ".2s",
	};

	const hoverStyle = {
		color: "#ccc",
		marginRight: "1.2rem",
		fontSize: "2.1rem",
		cursor: "pointer",
		transition: ".2s",
	};

	const scrollToSection = (section) => {
		window.scrollTo(0, section?.offsetTop - 100);
	};

	return (
		<FooterCont>
			<FooterGrid>
				<FooterLogo src={csfLogo} alt="Csf Games Studio" />
				<FooterCol>
					<FooterNav>
						<FooterNavItem
							onClick={() => {
								scrollToSection(home);
							}}
						>
							Home
						</FooterNavItem>
						<FooterNavItem
							onClick={() => {
								scrollToSection(games);
							}}
						>
							Our Games
						</FooterNavItem>
						<FooterNavItem
							onClick={() => {
								scrollToSection(news);
							}}
						>
							News
						</FooterNavItem>
					</FooterNav>
					<FooterSocial>
						<li>
							<a
								onMouseEnter={() => {
									setMouseOver(true);
								}}
								onMouseLeave={() => {
									setMouseOver(false);
								}}
								href="https://twitter.com/CSFGameStudio"
								style={{ textDecoration: "none" }}
								target="_blank"
								rel="noreferrer noopener"
							>
								<FaTwitter style={mouseOver ? styleHovered : styleNormal} />
							</a>
						</li>
						<li>
							<a
								onMouseEnter={() => {
									setMouseOver2(true);
								}}
								onMouseLeave={() => {
									setMouseOver2(false);
								}}
								href="https://www.youtube.com/@CSFGameStudio"
								style={{ textDecoration: "none" }}
								target="_blank"
								rel="noreferrer noopener"
							>
								<FaYoutube style={mouseOver2 ? styleHovered : styleNormal} />
							</a>
						</li>
						<li>
							<a
								onMouseEnter={() => {
									setMouseOver3(true);
								}}
								onMouseLeave={() => {
									setMouseOver3(false);
								}}
								href="https://www.tiktok.com/@csfgamesstudio"
								style={{ textDecoration: "none" }}
								target="_blank"
								rel="noreferrer noopener"
							>
								<FaTiktok style={mouseOver3 ? styleHovered : styleNormal} />
							</a>
						</li>
					</FooterSocial>
				</FooterCol>
				<FooterThirdCol>
					<SectionTitle
						style={{ color: "#777", padding: "0", marginBottom: "0.5rem" }}
					>
						Suscribe to our newsletter
					</SectionTitle>
					<form
						style={{
							display: "flex",
							flexDirection: "row",
							backgroundColor: "#242424",
							borderRadius: "1.8rem",
							alignItems: "center",
							width: "95%",
						}}
						name="Newsletter"
					>
						<input type="hidden" name="form-name" value="contact" />
						<input
							name="Email"
							type="email"
							placeholder="email..."
							required
							style={{
								outline: "none",
								border: "none",
								padding: "1.2rem 2rem",
								width: "100%",
								backgroundColor: "transparent",
								fontSize: "1.2rem",
								color: "#777",
							}}
						></input>
						<button
							type="submit"
							style={{
								backgroundColor: "transparent",
								border: "none",
								padding: "0",
							}}
						>
							<FiSend
								style={mouseOver4 ? hoverStyle : normalStyle}
								onMouseEnter={() => {
									setMouseOver4(true);
								}}
								onMouseLeave={() => {
									setMouseOver4(false);
								}}
							/>
						</button>
					</form>
					<p style={{ color: "#444" }}>Contact us: csfgamesstudio@gmail.com</p>
				</FooterThirdCol>
			</FooterGrid>
		</FooterCont>
	);
}

export default Footer;
