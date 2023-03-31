import styled from "styled-components";

export const GameDetailedContainer = styled.div`
	width: 65%;
	min-height: 100vh;
	padding-bottom: 5rem;
	margin: auto;
	display: grid;
	grid-template-columns: 65% 30%;
	gap: 2.5rem;
`;

export const GameDetailedGridColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-top: 10vh;
`;

export const Miniature = styled.img`
	width: 24%;
	object-fit: cover;
	border-radius: 0.5rem;
	box-shadow: 5px 5px 10px #000;
	cursor: pointer;
	border: 1px solid #000;

	:hover {
		border: 1px solid #333;
	}
`;

export const MiniatureSelecter = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.2%;
	overflow-x: hidden;
	padding: 0.5rem 0rem 1rem;
	margin-bottom: 1rem;
	margin-top: -3rem;
`;

export const MainScreenshot = styled.img`
	width: 100%;
	object-fit: cover;
	border-radius: 1rem;
	box-shadow: 0px 0 10px #000;
	user-select: none;
`;
