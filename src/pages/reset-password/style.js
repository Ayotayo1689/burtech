import styled from "styled-components";
import { colors } from "../../themes";
import { Button } from "@chakra-ui/react";

const { primaryColor } = colors;

export const Container = styled.div`
	width: 100%;
	padding: 30px 0;
`;
export const Wrapper = styled.div`
	width: 95%;
	max-width: 1300px;
	margin: 0 auto;
	padding-top: 30px;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	h2,
	p {
		text-align: center;
	}
	h2 {
		font-size: 32px;
		font-weight: 600;
		margin-top: 2rem;
	}
`;
export const Logo = styled.div`
	img {
		height: 50px;
	}

	@media (max-width: 576px) {
		img {
			width: 140px;
			height: 50px;
		}
	}
`;

export const Form = styled.form`
	padding: 1rem 2rem;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	input {
		margin-bottom: 1rem;
		padding: 1rem;
		border: 1px solid #ccc;
		border-radius: 3px;

		width: 350px;
	}
`;

export const SubmitButton = styled(Button)`
	padding: 0.7rem 1rem;
	font-size: 16px;
	text-align: center;
	background: ${primaryColor};
	color: #fff;
	border-radius: 6px;

	width: 150px;
`;

export const Redirect = styled.p`
	font-size: 16px;

	a {
		font-size: 16px;
		color: blue;
		cursor: pointer;

		:hover {
			text-decoration: underline;
		}
	}
`;

export const Image = styled.img`
	width: 70px;
	height: 70px;

	margin-top: 4rem;
`;
