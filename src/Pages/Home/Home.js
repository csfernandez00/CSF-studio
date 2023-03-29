import React, { useEffect, useState } from "react";
import {
	ArrowDown,
	Background,
	BackgroundShadow,
	GameTitleCont,
	LinkBtn,
} from "./styles";
import GameTitle from "../../images/FortuneFollowTitle.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";

function Home() {
	const [games, setGames] = useState();

	useEffect(() => {
		setGames(document.getElementById("games"));
	}, []);

	const scrollToSection = (section) => {
		window.scrollTo(0, section?.offsetTop - 100);
	};

	return (
		<div style={{ marginBottom: "5rem" }}>
			<Background id="home">
				<BackgroundShadow></BackgroundShadow>
			</Background>
			<GameTitleCont>
				<img
					src={GameTitle}
					alt="Fortune Follow"
					style={{ marginLeft: "0%", marginTop: "5rem" }}
				></img>
				<div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
					<p
						style={{
							color: "#aaa",
							paddingLeft: "9rem",
							marginTop: "-6rem",
							fontSize: "1.7rem",
							fontStyle: "italic",
						}}
					>
						A photorealistic puzzle and horror game. <br />
						Coming out April 2023.
					</p>

					<LinkBtn>
						Keep reading
						<BsFillArrowRightCircleFill
							className="flecha"
							style={{ fontSize: "2rem" }}
						/>
					</LinkBtn>
				</div>
				<ArrowDown
					style={{}}
					onClick={() => {
						scrollToSection(games);
					}}
				>
					<AiOutlineArrowDown />
				</ArrowDown>
			</GameTitleCont>
		</div>
	);
}

export default Home;
