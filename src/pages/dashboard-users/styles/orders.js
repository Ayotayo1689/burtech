import styled from "styled-components";
import { colors } from "../../../themes";

const { primaryColor, textColor, secondaryColor } = colors;

export const Container = styled.div`
	padding: 1rem 2rem;
	width: calc(100vw - 260px);
	position: absolute;
	top: 6rem;
	@media (min-width: 992px) {
		left: 250px;
	}
`;
export const Title = styled.h2`
	font-weight: 600;
	font-size: 30px;
	line-height: 41px;
	text-align: start;
`;
export const Pages = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;

	@media (min-width: 992px) {
		margin-bottom: 2.5rem;
	}

	.pages {
		display: flex;
		align-items: center;

		font-size: 14px;
		font-weight: 500;
	}
`;

export const AddButton = styled.a`
	padding: 0.5rem 1rem;
	border-radius: 6px;

	background-color: ${primaryColor};
	color: #fff;

	font-size: 14px;
	cursor: pointer;
`;
export const SearchField = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	background: transparent;
	border: 1.5px solid rgba(0, 0, 0, 0.5);
	border-radius: 8px;
	padding: 0 10px;

	height: 40px;
	width: 200px;

	input {
		border: none;
		background: transparent;
		outline: none;

		&::placeholder {
			/* text-transform: capitalize; */
			color: #56585a;
			font-size: 15px;
			font-family: inherit;
		}
	}
	svg {
		font-size: 16px;
		font-weight: 200;
		color: ${primaryColor};
		height: 100%;
		// border-left: 1.5px solid rgba(0, 0, 0, 0.5);
	}
`;
export const Tab = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 1rem;
	@media (min-width: 992px) {
		flex-direction: row;
		padding-left: 0.7rem;
	}
	.right {
		display: flex;
		justify-content: flex-start;
		align-items: center;

		font-size: 14px;
		font-weight: 400;
		color: #6b6f71;

		svg {
			font-size: 24px;
			margin: 0 10px;
		}
	}
`;

export const ProductTable = styled.table`
	width: 100%;
	color: #000000;
	margin: 1.5rem 0;

	td,
	th,
	td {
		padding: 10px;
		text-align: start;
	}
	th {
		font-weight: 700;
		font-size: 18px;
		color: #6b6f71;
	}
	td {
		color: #6b6f71;
		font-weight: 400;

		.yellow {
			padding: 0.4rem 0.8rem;
			border-radius: 6px;
			background: #ffbc0a;
			color: #000;
			font-size: 14px;
			text-align: center;

			width: 80px;
		}
		.green {
			padding: 0.5rem 1rem;
			margin-right: 1rem;

			border-radius: 6px;
			background: #009e78;
			color: #fff;
			text-align: center;

			width: 100px;
		}
		.red {
			color: red;

			svg {
				font-size: 24px;
			}
		}
	}
	.sub-cat {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	/* .center {
        display: flex;
        align-items: center;
        justify-content: center;
    } */
`;
export const TableTitle = styled.thead`
	/* background-color: #7EA8F8; */
	margin-bottom: 2rem;
`;

export const TableContent = styled.tbody`
	padding: 1.2rem 1rem;
	font-size: 14px;

	.green-text {
		background-color: #1aa886;
		color: #fff;
	}
	.count {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 3px 10px;

		/* width: 30px;
        height: 30px; */

		/* Success/100% */
		background: #009e78;
		border-radius: 50px;
	}
	.top {
		padding: 0.25rem 0.8rem;
		border-radius: 20px;
		background-color: #1aa886;
		color: #fff;

		text-align: center;
		width: 70px;
	}
`;
export const Image = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
`;

export const TableButton = styled.button`
	padding: 0.25rem 0.9rem;
	border-radius: 20px;
	border: 1px solid #1aa886;
	color: #1aa886;
	background-color: #fff;

	display: flex;
	align-items: center;
	justify-content: center;

	.divider {
		height: 100%;
		width: 6px;
		background-color: #1aa886;
		/* display: block; */
	}

	svg {
		margin-left: 0.5rem;
	}
`;
