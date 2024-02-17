import styled from "styled-components";
import { Link } from "react-router-dom";

export const SubCategoriesContainer = styled.div`
	display: grid;
	gap: 41px;
	max-width: 1600px;
	grid-template-columns: 1fr 2fr;
	padding: 2rem 3rem;
	margin: 5rem 0rem;

	// width: 80%;
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 1rem 1rem;
	}

	// @media (max-width: 756px){}
`;
export const SubCategoriesLeft = styled.div`
	> h4 {
		font-size: 24px;
		color: #151616;
	}
`;
export const SubCategoriesCard = styled.div`
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	margin-top: 30px;
`;
export const SubCategoriesCardHeading = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	background: #474f57;
	border-radius: 8px 8px 0 0;
	padding: 1rem;

	h4 {
		font-size: 1.1rem;
		color: #ffffff;
	}
`;
export const SubCategoriesList = styled.ul`
	li {
		list-style-type: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 20px;
		cursor: pointer;
	}

	li span {
		font-size: 16px;
		color: #404243;
	}
	.active {
		background: #d6dde1;
	}
`;

export const SubCategoriesRight = styled.div`
	> h4 {
		font-size: 24px;
		color: #151616;
		@media (max-width: 768px) {
			text-align: center;
		}
	}
`;
export const SubCategoriesProducts = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	margin-top: 30px;
	gap: 1.5rem;
	align-items: center;
	@media (max-width: 768px) {
		padding: 0rem 3rem;
	}
	@media (min-width: 756px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
export const ProductCard = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 0;
	gap: 1rem;
	box-shadow: 0px 1px 2.5px rgba(0, 0, 0, 0.5);
	border-radius: 16px;

	> * {
		flex: 1;
	}

	p {
		margin: 0 12px;
		text-align: center;
	}
`;
export const ProductImage = styled.div`
	width: 100px;

	img {
		width: 100%;
	}

	p {
		font-size: 1rem;
		color: #2b2c2d;
		font-weight: 600;
	}
`;
