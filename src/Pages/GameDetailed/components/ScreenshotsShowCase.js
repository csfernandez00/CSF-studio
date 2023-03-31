import React, { useState } from "react";
import { Miniature, MiniatureSelecter, MainScreenshot } from "../styles";
import {
	BsFillArrowRightCircleFill,
	BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { useEffect } from "react";

function ScreenshotsShowCase({ images }) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [miniaturesStyle, setMiniaturesStyle] = useState({
		display: "flex",
		flexDirection: "row",
	});

	const nextImage = () => {
		if (selectedIndex !== images.length - 1) {
			setSelectedIndex(selectedIndex + 1);
		}
	};

	const prevImage = () => {
		if (selectedIndex !== 0) {
			setSelectedIndex(selectedIndex - 1);
		}
	};

	useEffect(() => {
		if (selectedIndex > 3 && selectedIndex < 8) {
			setMiniaturesStyle({
				transform: "translateX(-99.25%)",
				display: "flex",
				flexDirection: "row",
				gap: ".3rem",
				userSelect: "none",
			});
		} else if (selectedIndex >= 8 && selectedIndex < 12) {
			setMiniaturesStyle({
				transform: "translateX(-198.5%)",
				display: "flex",
				flexDirection: "row",
				gap: ".3rem",
				userSelect: "none",
			});
		} else {
			setMiniaturesStyle({
				transform: "translateX(0px)",
				display: "flex",
				flexDirection: "row",
				gap: ".3rem",
				userSelect: "none",
			});
		}
	}, [selectedIndex]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "0rem",
			}}
		>
			<div style={{ userSelect: "none" }}>
				<MainScreenshot
					src={images[selectedIndex]}
					alt="Fortune Follow: The Mansion"
				></MainScreenshot>
				<BsFillArrowLeftCircleFill
					onClick={prevImage}
					style={
						selectedIndex !== 0
							? {
									position: "relative",
									color: "white",
									top: "-50%",
									left: "1%",
									fontSize: "3rem",
									color: "#222",
									cursor: "pointer",
							  }
							: {
									position: "relative",
									color: "white",
									top: "-50%",
									left: "1%",
									fontSize: "3rem",
									color: "#222",
									opacity: "0%",
							  }
					}
				></BsFillArrowLeftCircleFill>
				<BsFillArrowRightCircleFill
					onClick={nextImage}
					style={
						selectedIndex !== images.length - 1
							? {
									position: "relative",
									color: "white",
									top: "-50%",
									left: "87%",
									fontSize: "3rem",
									color: "#222",
									cursor: "pointer",
							  }
							: {
									position: "relative",
									color: "white",
									top: "-50%",
									left: "87%",
									fontSize: "3rem",
									color: "#222",
									opacity: "0%",
							  }
					}
				></BsFillArrowRightCircleFill>
			</div>

			<MiniatureSelecter style={{ userSelect: "none" }}>
				<div style={miniaturesStyle}>
					{images.map((img, index) => {
						return (
							<Miniature
								onClick={() => {
									setSelectedIndex(index);
								}}
								src={img}
								alt="Fortune Follow: The Mansion"
								style={
									selectedIndex === index
										? { border: "1px solid #777", boxShadow: "0 0 10px #777" }
										: {}
								}
							/>
						);
					})}
				</div>
			</MiniatureSelecter>
		</div>
	);
}

export default ScreenshotsShowCase;
