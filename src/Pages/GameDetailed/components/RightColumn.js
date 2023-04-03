import React from "react";
import { SectionTitle } from "../../Common/Components/styles";

function RightColumn({ game }) {
	return (
		<div>
			<img
				src={game.image}
				alt="Fortune follow: the Mansion"
				style={{ width: "100%", borderRadius: ".5rem", marginTop: "5.4rem" }}
			/>
			<iframe
				width="100%"
				height="23.5%"
				src="https://www.youtube.com/embed/syLOby_XuZs"
				style={{ borderRadius: ".5rem", marginTop: ".5rem" }}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			></iframe>
			<a
				href="https://store.steampowered.com/app/2366450/Fortune_Follow_The_Mansion/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img
					src="https://cf.geekdo-images.com/camo/dcbaa09829f17deb19b9ba76c570780240ee9173/687474703a2f2f636f696e2d656375726575696c2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f31322f6c6f676f5f617661696c61626c655f737465616d5f776562736974652e706e67"
					alt="available on steam"
					style={{ width: "108%", borderRadius: ".5rem", marginLeft: "-1rem" }}
				/>
			</a>
			<a
				href="https://store.epicgames.com/en-US/p/fortune-follow-the-mansion-bad0b2"
				target="_blank"
				rel="noreferrer noopener"
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					marginBottom: "1rem",
					backgroundColor: "#111",
					padding: "1rem 0",
					borderRadius: "1rem",
					width: "100%",
					boxShadow: "inset 10px 10px 40px #333, 10px 10px 40px #000",
					gap: "2.5rem",
					textDecoration: "none",
				}}
			>
				<img
					src="https://cdn2.downdetector.com/static/uploads/c/300/2a687/epic-games-store.png"
					alt="available on epic"
					style={{ width: "13%", marginLeft: "2.5rem" }}
				></img>
				<SectionTitle style={{ padding: "0", margin: "0", fontSize: "2rem" }}>
					Available on EPIC GAMES
				</SectionTitle>
			</a>

			<a
				href="https://csfgamestudio.itch.io/fortune-follow-the-mansion"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img
					src="https://static.itch.io/images/badge-color.svg"
					alt="available on itch"
					style={{ width: "100%", borderRadius: ".5rem" }}
				/>
			</a>
		</div>
	);
}

export default RightColumn;
