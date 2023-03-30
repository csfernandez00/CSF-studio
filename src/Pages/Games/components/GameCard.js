import React, { useState } from "react";

import { CardContainer, ComingSoonText } from "../styles";

function GameCard({ title, image, status }) {
	const [mouseOver, setMouseOver] = useState(false);

	const boxStyleReleased = {
		backgroundImage: `url(${image})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "50% 50%",
		filter: status === "released" ? "grayscale(0)" : "grayscale(1)",
		boxShadow: mouseOver
			? "10px 20px 30px #00000080"
			: "10px 10px 20px #00000080, inset 400px 400px 400px #00000010,inset -400px -400px 400px #00000010",
		cursor: "pointer",
	};

	const boxStyleComing = {
		backgroundImage: `url(${image})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "50% 50%",
		filter: status === "released" ? "grayscale(0)" : "grayscale(1)",
		boxShadow:
			"10px 10px 20px #00000080, inset 400px 400px 400px #00000070,inset -400px -400px 400px #00000070",
	};

	return status === "released" ? (
		<CardContainer
			href={`/game/${title}`}
			onMouseEnter={() => {
				setMouseOver(true);
			}}
			onMouseLeave={() => {
				setMouseOver(false);
			}}
			style={status === "released" ? boxStyleReleased : boxStyleComing}
		>
			{status === "coming" ? (
				<ComingSoonText>Coming soon</ComingSoonText>
			) : null}
		</CardContainer>
	) : (
		<CardContainer
			onMouseEnter={() => {
				setMouseOver(true);
			}}
			onMouseLeave={() => {
				setMouseOver(false);
			}}
			style={status === "released" ? boxStyleReleased : boxStyleComing}
		>
			{status === "coming" ? (
				<ComingSoonText>Coming soon</ComingSoonText>
			) : null}
		</CardContainer>
	);
}

export default GameCard;
