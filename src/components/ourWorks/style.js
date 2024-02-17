import styled from "styled-components";

export const OurWorksWrapper = styled.section`
	margin-top: 3.5rem;

	@media (max-width: 600px) {
		// border: 1px solid;
		margin-top: 10rem;
	}
`;

export const OurWorksCards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 4rem;
	padding: 4rem 6rem;

	@media (max-width: 600px) {
		grid-template-columns: 100%;
		padding: 2rem;
		gap: 3rem;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		// gap: 2rem;
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
		// gap: 2rem;
	}
`;
export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* align-items: center; */
`;
export const CardImage = styled.div`
	width: 100%;
	height: 200px;

	> img {
		width: 100%;
		height: 100%;
	}
`;
export const CardText = styled.div`
	text-align: start;
	margin-top: 20px;
	padding: 1rem;

	h3 {
		font-weight: 600;
		font-size: 20px;
	}
	p {
		font-weight: 400;
		font-size: 16px;
		margin-top: 20px;
	}

	@media (max-width: 600px) {
		h3 {
			font-size: 18px;
		}
	}

	@media (min-width: 768px) {
		p {
			font-size: 18px;
		}
	}

	@media (min-width: 992px) {
		p {
			font-size: 16px;
		}
	}
`;
