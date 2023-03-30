import React, { useState } from "react";
import { Miniature, MiniatureSelecter, MainScreenshot } from "../styles";

function ScreenshotsShowCase({ images }) {
	const [selectedImage, setSelectedImage] = useState(images[0]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "0rem",
			}}
		>
			<MainScreenshot src={selectedImage} alt="Fortune Follow: The Mansion" />

			<MiniatureSelecter>
				{images.map((img) => {
					return (
						<Miniature
							onClick={() => {
								setSelectedImage(img);
							}}
							src={img}
							alt="Fortune Follow: The Mansion"
							style={
								selectedImage === img
									? { border: "1px solid #777", boxShadow: "0 0 10px #777" }
									: {}
							}
						/>
					);
				})}
			</MiniatureSelecter>
		</div>
	);
}

export default ScreenshotsShowCase;
