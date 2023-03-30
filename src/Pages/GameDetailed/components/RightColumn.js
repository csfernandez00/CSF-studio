import React from "react";

function RightColumn({ game }) {
	return (
		<div>
			<img
				src={game.image}
				alt="Fortune follow: the Mansion"
				style={{ width: "90%", borderRadius: ".5rem", marginTop: "5.4rem" }}
			/>
		</div>
	);
}

export default RightColumn;
