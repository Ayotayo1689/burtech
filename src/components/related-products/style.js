import styled from "styled-components";
import { colors } from "../../themes";
import { Link } from "react-router-dom";
const { primaryColor, textColor } = colors;

export const ProductBox = styled(Link)`
	border-radius: 12px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: 1px solid #ccc;

	margin-bottom: 2rem;
	padding: 1rem;

	@media (max-width: 576px) {
		margin-bottom: 1rem;
	}

	img {
		margin: 1.2rem 0;
		width: 200px;
		height: 200px;
		@media (max-width: 576px) {
			width: 150px;
			height: 150px;
		}
	}
	h4 {
		font-weight: 600;
		font-size: 18px;
		/* identical to box height */

		/* Neutral/90% */
		color: #151616;
		/* margin-bottom: 1rem; */
		@media (max-width: 576px) {
			margin-bottom: 0.6rem;
		}
	}
	P {
		font-weight: 400;
		font-size: 14px;
		line-height: 24px;
		text-align: center;
		text-transform: capitalize;

		/* Neutral/90% */
		color: #151616;
		/* padding: ; */
		@media (max-width: 576px) {
			font-weight: 300;
		}
	}
`;
export const ProductLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;

	color: ${primaryColor};
	text-decoration: none;
	font-size: 14px;
	font-weight: 600;

	/* margin-bottom: 2rem; */
	margin-top: 0.8rem;

	svg {
		font-size: 16px;
		color: ${primaryColor};
		margin-left: 0.8rem;
	}

	:hover {
		text-decoration: underline;
		color: ${primaryColor};
	}
`;
