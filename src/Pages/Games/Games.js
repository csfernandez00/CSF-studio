import React from "react";
import { SectionTitle } from "../Common/Components/styles";
import GameCard from "./components/GameCard";
import { GamesCont, GamesGrid } from "./styles";
import cardBgFort from "../../images/CardBgFortuneFollow.png";
import ERBg from "../../images/ERBg2.png";
import LYBg from "../../images/LYBg2.png";

const games = [
	{
		title: "fortune-follow-the-mansion",
		image: cardBgFort,
		status: "released",
	},
	{ title: "fortune-follow-the-mansion", image: ERBg, status: "coming" },
	{ title: "fortune-follow-the-mansion", image: LYBg, status: "coming" },
];

function Games() {
	return (
		<GamesCont id="games">
			<SectionTitle>Our Games</SectionTitle>
			<GamesGrid>
				{games.map((game) => {
					return (
						<GameCard
							image={game.image}
							title={game.title}
							status={game.status}
						/>
					);
				})}
			</GamesGrid>
		</GamesCont>
	);
}

export default Games;
