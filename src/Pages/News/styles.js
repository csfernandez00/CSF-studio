import styled from "styled-components";

export const NewsCont = styled.div`
	padding-bottom: 8rem;
	width: 100%;
	@media screen and (max-width: 700px) {
		padding-bottom: 1rem;
	}
`;

export const NewsGrid = styled.div`
	padding: 0 8rem 4rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 78vh;
	gap: 1rem;
	z-index: -10;
	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: repeat(3, auto);
		padding: 0 1rem 4rem;
	}
`;

export const CardContainer = styled.div`
	border-radius: 1.5rem;
`;
