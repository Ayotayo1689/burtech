import styled from "styled-components";
import { colors } from "../../themes";

const { primaryColor } = colors;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProductSection = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
`;
export const Header = styled.div`
	// text-align: center;
	font-size: 20px;
	margin: 1rem 6rem;
`;
export const ProductCategoryCard = styled.div`
	border: 1px solid rgba(255, 183, 183, 0.5);
	box-shadow: 5px 5px 5px #d3d3d3;
	padding: 0.8rem;
	height: fit-content;
	transition: all ease-out 0.5s;

	:hover {
		box-shadow: none;
	}
`;
export const ProductCategoryHeading = styled.div`
	border: 1px solid white;
	padding: 0.7rem;
	background-color: ${primaryColor};

	h4 {
		font-size: 18px;
		color: #fff;
		text-align: center;
	}
`;

export const ProductCategories = styled.div`
	border: 1px solid rgba(255, 183, 183, 0.5);
	padding: 0.8rem;
	margin-top: 0.8rem;
`;

export const ProductCategoryList = styled.ul`
	li {
		list-style-type: none;
	}

	li a {
		text-decoration: none;
		color: black;
		display: block;
		padding: 0.3rem;
		padding-left: 0.8rem;
		margin-top: 0.3rem;
		// border: 1px solid red;
		// background: rgba(255, 183, 183, 0.5);
		font-size: 15px;
	}
`;
