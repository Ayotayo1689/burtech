import styled from "styled-components";

export const Container = styled.div`
	@media (min-width: 992px) {
		padding: 30px 0;
	}
`;
export const Wrapper = styled.div`
	width: 95%;
	max-width: 1300px;
	margin: 0 auto;
	padding-top: 1rem;

	@media (min-width: 992px) {
		padding-top: 30px;
	}
	svg {
		font-size: 32px;
		margin-top: 2rem;
	}
`;
export const Offers = styled.div`
	display: grid;
	// grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	@media (max-width: 600px) {
		grid-template-columns: 100%;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		margin-top: 6rem;
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
		margin-top: unset;
	}
`;

export const Heading = styled.h2`
	text-align: center;
	font-weight: 600;
	font-size: 32px;
	margin-bottom: 2rem;
`;
