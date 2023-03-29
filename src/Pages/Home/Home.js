import React from "react";
import { Background, BackgroundShadow, GameTitleCont, LinkBtn } from "./styles";
import GameTitle from "../../images/FortuneFollowTitle.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function Home() {
	return (
		<>
			<Background id="home">
				<BackgroundShadow></BackgroundShadow>
			</Background>
			<GameTitleCont>
				<img
					src={GameTitle}
					alt="Fortune Follow"
					style={{ marginLeft: "0%", marginTop: "2rem" }}
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
				<BsFillArrowRightCircleFill
					style={{
						fontSize: "4rem",
						color: "#111",
						position: "absolute",
						top: "87vh",
						left: "48.4%",
						transform: "rotate(90deg)",
						opacity: "40%",
					}}
				/>
			</GameTitleCont>
		</>
	);
}

export default Home;
