import React from "react";

import { GameDetailedContainer, GameDetailedGridColumn } from "./styles";

import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";

function GameDetailed({ game }) {
	return (
		<GameDetailedContainer>
			<GameDetailedGridColumn>
				<LeftColumn game={game} />
			</GameDetailedGridColumn>
			<GameDetailedGridColumn>
				<RightColumn game={game} />
			</GameDetailedGridColumn>
		</GameDetailedContainer>
	);
}

export default GameDetailed;
