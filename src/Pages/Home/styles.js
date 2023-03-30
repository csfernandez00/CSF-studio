import styled from "styled-components";
import homeBackground from "../../images/HomeBg.png";

export const Background = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${homeBackground});
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	z-index: -10;
	box-shadow: 0px 50px 100px #000, inset 0 -100px 400px #000,
		inset 0 100px 400px #000;
	background-attachment: fixed;
`;

export const BackgroundShadow = styled.div`
	width: 100%;
	height: 100%;
	background-color: #000;
	background-size: cover;
	background-repeat: no-repeat;
	position: absolute;
	opacity: 50%;
	z-index: -10;
`;

export const GameTitleCont = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0rem;
	width: 55%;
	height: 100vh;
	padding-left: 0rem;
`;

export const LinkBtn = styled.a`
	color: #fff;
	text-decoration: none;
	margin-left: 8.5rem;
	border: 2px solid #fff;
	padding: 0.8rem 1rem 0.8rem 2rem;
	width: fit-content;
	border-radius: 3rem;
	text-align: center;
	font-weight: bold;
	font-size: 1.4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	box-shadow: 0 0 50px #ffffff50;
	transition: 0.2s;

	:hover {
		box-shadow: 0 0 80px #ffffff50, inset 0 0 50px #ffffff50;
	}
`;

export const ArrowDown = styled.span`
	transition: 0.2s;
	font-size: 3rem;
	color: #fff;
	background-color: transparent;
	position: absolute;
	top: 92vh;
	left: 48.6%;
	cursor: pointer;
	:hover {
		transform: translateY(4px);
	}
`;
