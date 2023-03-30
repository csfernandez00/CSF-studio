import React from "react";

function ScreenshotsShowCase({ images }) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
			}}
		>
			<img
				src={images[0]}
				alt="Fortune Follow: The Mansion"
				style={{
					width: "100%",
					objectFit: "cover",
					borderRadius: "1rem",
					boxShadow: "0px 0 10px #000",
				}}
			/>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "1.2%",
					overflowX: "scroll",
					padding: ".5rem 0rem 2rem ",
				}}
			>
				{images.map((img) => {
					return (
						<img
							src={img}
							alt="Fortune Follow: The Mansion"
							style={{
								width: "24%",
								objectFit: "cover",
								borderRadius: ".5rem",
								boxShadow: "5px 5px  10px #000",
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default ScreenshotsShowCase;
