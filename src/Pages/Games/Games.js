import React from "react";
import { SectionTitle } from "../Common/Components/styles";
import GameCard from "./components/GameCard";
import { GamesCont, GamesGrid } from "./styles";
import { games } from "./gamesInfo";
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
