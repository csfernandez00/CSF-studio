import React from "react";
import ScreenshotsShowCase from "./ScreenshotsShowCase";
import { SectionTitle } from "../../Common/Components/styles";

function LeftColumn({ game }) {
	return (
		<>
			<SectionTitle
				style={{
					padding: "0",
					margin: "1rem 0 -.5rem 0",
					fontSize: "2.5rem",
				}}
			>
				Fortune Follow: The Mansion
			</SectionTitle>
			<ScreenshotsShowCase images={game.screenshots} />
			<SectionTitle
				style={{
					padding: "0",
					margin: "-2rem 0 -1.5rem 0",
					fontSize: "1.8rem",
				}}
			>
				<hr />
				About the game
			</SectionTitle>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					color: "#999",
					fontSize: "1.1rem",
					padding: "0 3rem 0 0",
				}}
			>
				<p> {game.about[0]} </p>
				<p> {game.about[1]} </p>
				<p> {game.about[2]} </p>
			</div>
			<SectionTitle
				style={{
					padding: "0",
					margin: "1rem 0 -1.5rem 0",
					fontSize: "1.4rem",
				}}
			>
				Features
			</SectionTitle>
			<ul
				style={{
					display: "flex",
					flexDirection: "column",
					color: "#999",
					fontSize: "1.1rem",
					gap: "1rem",
					marginLeft: "-1rem",
					marginBottom: "3rem",
				}}
			>
				{game.features.map((el) => {
					return <li>{el}</li>;
				})}
			</ul>
			<iframe
				frameborder="0"
				src="https://itch.io/embed/1981302?linkback=true&amp;border_width=3&amp;bg_color=242424&amp;fg_color=eeeeee&amp;link_color=fa5c5c&amp;border_color=777"
				width="646"
				height="171"
			>
				<a href="https://csfgamestudio.itch.io/fortune-follow-the-mansion">
					Fortune Follow: The Mansion by CSF Games Studio
				</a>
			</iframe>
			<iframe
				src="https://store.steampowered.com/widget/2366450/"
				frameborder="0"
				width="646"
				height="190"
			></iframe>
		</>
	);
}

export default LeftColumn;
