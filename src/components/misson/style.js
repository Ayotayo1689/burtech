import styled from "styled-components";

export const Image = styled.img`
	width: 90px;
	height: 90px;

	@media (max-width: 576px) {
		width: 60px;
		height: 60px;
	}
`;
export const Title = styled.h3`
	font-weight: 500;
	font-size: 24px;

	text-transform: uppercase;
	margin: 1.2rem 0;

	/* Neutral/80% */
	color: #2b2c2d;
	@media (max-width: 576px) {
		margin: 0.6rem;
		font-size: 22px;
	}
`;

export const Value = styled.div`
	padding: 2.4rem 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	border-radius: 4px;
	background: #fff;
    /* box-shadow: -1px 1px 4px 1px rgba(0, 0, 0, 0.26); */

	:hover {
		box-shadow: 0px 0px 37px -11px rgba(0,0,0,0.22);
		cursor: pointer;
		transition: all ease-in-out 0.3s;
	}
	@media (max-width: 576px) {
		padding: 1rem 0.8rem;
	}
`;
