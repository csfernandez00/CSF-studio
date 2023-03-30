import styled from "styled-components";

export const GamesCont = styled.div`
	min-height: 80vh;
`;

export const GamesGrid = styled.div`
	padding: 0 8rem 4rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 400px);
	gap: 2rem;
	z-index: -10;
`;

export const CardContainer = styled.a`
	border-radius: 1.5rem;
	background-size: cover;
	box-shadow: 10px 10px 20px #00000080, inset 400px 400px 400px #00000010,
		inset -400px -400px 400px #00000010;
	transition: 0.3s;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;

	:hover {
		box-shadow: 10px 20px 30px #00000080;
	}
`;

export const ComingSoonText = styled.h2`
	color: #fff;
	font-size: 4rem;
	width: 150%;
	padding: 1rem;
	text-align: center;
	opacity: 20%;
	border-bottom: 8px solid #ffffff;
	border-top: 8px solid #ffffff;
	transform: rotate(-40deg);
`;
