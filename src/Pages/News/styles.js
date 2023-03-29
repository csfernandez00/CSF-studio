import styled from "styled-components";

export const NewsCont = styled.div`
	padding-bottom: 8rem;
`;

export const NewsGrid = styled.div`
	padding: 0 8rem 4rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 78vh;
	gap: 1rem;
	z-index: -10;
`;

export const CardContainer = styled.div`
	border-radius: 1.5rem;
`;
