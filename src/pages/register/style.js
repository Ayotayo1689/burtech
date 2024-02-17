import styled from "styled-components";
import { colors } from "../../themes";
import { Button } from "@chakra-ui/react";
import LoginImg from "../../assests/login-img.png";

const { primaryColor } = colors;

export const Container = styled.div`
	width: 100vw;
	height: 100vh;

	display: grid;
	grid-template-columns: 50% 50%;
	@media (max-width: 992px) {
		width: 100%;
		grid-template-columns: 100%;
	}
`;
export const Wrapper = styled.div`
	width: 50%;
	padding: 1.5rem 2rem;
	h2 {
		font-size: 32px;
		color: #0d0b33;
		text-align: center;
		font-weight: 500;

		margin-top: 1rem;
		@media (max-width: 992px) {
			font-size: 24px;
		}
	}
	@media (max-width: 992px) {
		width: 100%;
		padding: 1rem;
	}
`;

export const Image = styled.div`
	width: 200px;
	height: 45px;

	img {
		width: 100%;
		height: 100%;
	}

	@media (max-width: 992px) {
		width: 100px;
		height: 35px;
	}
`;

export const Form = styled.form`
	background: white;
	/* box-shadow: 0px 40px 80px 0px #02021a24; */
	border-radius: 20px;
	padding: 20px 70px;
	width: 500px;
	margin: 20px auto;
	label {
		color: #0d0b33;
		display: inline-block;
		padding-bottom: 10px;
		font-weight: 500;
	}
	p {
		font-size: 14px;
	}
	#terms {
		display: flex;
		input {
			margin-right: 10px;
			cursor: pointer;
		}
	}
	#already-user {
		text-align: center;
		a {
			color: ${primaryColor};

			:hover {
				text-decoration: underline;
			}
		}
	}
	@media (max-width: 576px) {
		width: 100%;
		padding: 1rem;
	}
`;
export const InputContainer = styled.div`
	background: white;
	width: 100%;
	margin-bottom: 20px;
	height: 50px;
	background: #f6f6f7;
	border-radius: 10px;
	border: 2px solid transparent;
	display: flex;
	align-items: center;
	color: #8e8c94;
	padding-right: 15px;
	:focus-within {
		border: 2px solid ${primaryColor};
	}
	input {
		border: none;
		outline: none;
		height: 100%;
		width: 100%;
		background: transparent;
	}
	select {
		height: 100%;
		width: 100%;
		border: none;
		outline: none;
		background: transparent;
	}
	svg {
		margin: 0 10px;
		font-size: 18px;
	}
	@media (max-width: 992px) {
		height: 45px;
	}
	@media (max-width: 576px) {
		height: 35px;
	}
`;
export const GoogleButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;

	border: none;
	width: 100%;
	height: 50px;
	font-size: 16px;
	font-weight: 600;
	border-radius: 10px;
	background-color: #4285f4;
	color: white;
	cursor: pointer;
	text-align: center;

	margin-bottom: 20px;

	svg {
		font-size: 24px;
		margin-right: 10px;
	}
	@media (max-width: 992px) {
		height: 45px;
	}
	@media (max-width: 576px) {
		height: 35px;
	}
`;

export const SubmitBtn = styled(Button)`
	border: none;
	width: 100%;
	background: ${primaryColor};
	color: white;
	height: 50px;
	font-size: 16px;
	font-weight: 600;
	border-radius: 10px;
	margin: 10px 0;
	cursor: pointer;
	@media (max-width: 576px) {
		height: 35px;
	}
`;

export const SideImg = styled.div`
	width: 100%;
	background: url(${LoginImg}) center / cover no-repeat;
	@media (max-width: 992px) {
		display: none;
	}
`;
export const SideImage = styled.img`
	width: 100%;
	height: 100%;
`;
