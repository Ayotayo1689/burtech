import styled from "styled-components";
import background from "../../assests/Rectangle.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
	background: #f2f4fa;

	@media (min-width: 992px) {
		padding: 30px 0;
		margin-top: 2vh;
	}
`;
export const Wrapper = styled.div`
	width: 95%;
	max-width: 1300px;
	margin: 0 auto;
	padding-top: 30px;
`;

export const Top = styled.div`
	display: flex;
	padding: 2rem 0;

	/* background-color: #ccc; */
	background-size: contain;
	background: url(${background});

	h2 {
		margin: auto;
		font-weight: 600;
		font-size: 3rem;
		line-height: 73px;
		text-align: center;

		color: #ffffff;
		font-weight: 600;
		@media (max-width: 576px) {
			font-size: 34px;
		}
	}
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;

	h2 {
		font-size: 32px;
		line-height: 130%;
		text-align: center;
		font-weight: 500;
		/* Neutral/90% */
		color: #151616;
		margin-bottom: 3rem;

		text-transform: capitalize;
	}
`;
export const ServiceContainer = styled.div`
	display: grid;
	gap: 2rem;

	margin-bottom: 3rem;

	@media (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
export const ServiceBox = styled(Link)`
	padding: 2rem;

	display: flex;
	justify-content: flex-start;
	flex-direction: column;

	text-align: start;
	border-radius: 6px;
	background: #fff;

	@media (max-width: 576px) {
		padding: 1rem 2rem;
	}
	:hover {
		box-shadow: 0px 0px 37px -11px rgba(0, 0, 0, 0.22);
		cursor: pointer;
		transition: all ease-in-out 0.3s;
	}

	h3 {
		font-weight: 600;
		font-size: 24px;
		line-height: 130%;
		/* identical to box height, or 34px */

		margin: 1rem 0;

		color: #000000;
	}
	p {
		font-weight: 400;
		font-size: 16px;
		line-height: 170%;

		margin-bottom: 0.6rem;

		/* Neutral/80% */
		color: #2b2c2d;
	}
`;
export const Icon = styled.img`
	width: 60px;
	height: 60px;

	margin-bottom: 0.6rem;
`;
// export const Link = styled.a`
// 	font-weight: 700;
// 	font-size: 14px;
// 	line-height: 170%;

// 	color: #2b2c2d;
// 	cursor: pointer;

// 	/* padding: 1rem 2rem; */
// 	:hover {
// 		color: ${primaryColor};
// 	}
// `;
