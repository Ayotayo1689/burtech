import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../themes";
import { Button } from "@chakra-ui/react";
const { primaryColor } = colors;

export const Container = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Buttons = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	margin-left: -3rem;
	.sale {
		background-color: #009e23;
		color: #fff;
	}
	.percent {
		background: #ffcd1c;
		color: #000;
	}
`;
export const ButtonItem = styled.button`
	padding: 0.3rem 0.5rem;
	font-size: 10px;
	border-radius: 5px;

	:first-of-type {
		margin-right: 0.6rem;
	}
`;
export const Image = styled.img`
	width: 210px;
`;

export const Price = styled.p`
	color: #009e78;
	font-size: 1.1rem;

	span {
		font-size: 0.7rem;
		color: #abb1b4;
		text-decoration: line-through;
	}
`;
export const Title = styled.h5`
	font-weight: 300;
	font-size: 14px;
`;
export const ProductName = styled.p`
	font-size: 18px;
	font-weight: 600;
	line-height: 24px;
	text-transform: capitalize;
`;

export const AddButton = styled(Button)`
	border-radius: 6px;
	border: none;
	padding: 0.6rem 0.7rem;

	font-size: 14px;

	color: #fff;
	background-color: ${primaryColor};
`;
