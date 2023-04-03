import React, { useEffect, useState } from "react";
import {
	ArrowDown,
	Background,
	BackgroundShadow,
	GameTitleCont,
	ImgHome,
	IntroParagraph,
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
				<ImgHome src={GameTitle} alt="Fortune Follow"></ImgHome>
				<div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
					<IntroParagraph>
						A photorealistic puzzle and horror game. <br />
						Coming out April 2023.
					</IntroParagraph>

					<LinkBtn href="/game/fortune-follow-the-mansion">
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
