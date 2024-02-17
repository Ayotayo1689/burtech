import styled from "styled-components";
import { colors } from "../../themes";
import { Button } from "@chakra-ui/button";
const { primaryColor } = colors;

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	gap: 1rem;

	padding: 4rem 5rem;
	margin-top: 4rem;

	border-top: 1px solid rgba(0, 0, 0, 0.3);

	@media (max-width: 992px) {
		padding: 1rem;
		margin-top: 2rem;

		justify-content: center;
		flex-direction: column;
	}
`;
export const Text = styled.h3`
	font-weight: 600;
	font-size: 32px;
	line-height: 48px;
	/* identical to box height */

	color: #000000;

	@media (max-width: 992px) {
		font-weight: 600;
		font-size: 24px;
		line-height: 32px;

		text-align: center;

		margin-bottom: 1.2rem;
	}

	@media (min-width: 768px) {
		font-size: 20px;
	}

	@media (min-width: 992px) {
		font-size: 24px;
	}
`;
export const Form = styled.form`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;

	@media (max-width: 992px) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 1rem;
	}
`;

export const InputContainer = styled.div`
	width: 300px;
	height: 60px;

	margin-right: 20px;
	padding: 0 0.8rem;
	background: #fff;
	color: #8e8c94;
	border-radius: 10px;
	/* border: 2px solid transparent; */
	display: flex;
	align-items: center;
	flex-direction: column;
	:focus-within {
		border: 2px solid ${primaryColor};
		padding: 0.6rem 0.8rem;
	}
	@media (max-width: 992px) {
		width: 95%;
		height: 42.33px;
		margin-bottom: 1rem;
		margin-right: 0px;
	}
	input {
		border: none;
		outline: none;
		height: 100%;
		width: 100%;
		background: transparent;
	}
`;

export const SubmitButton = styled(Button)`
	background-color: ${primaryColor};
	color: #fff;

	padding: 1.1rem 2rem;
	border: none;
	border-radius: 10px;
	@media (max-width: 992px) {
		padding: 0.8rem 1.5rem;
		font-size: 14px;
		border-radius: 5px;
	}
	@media (max-width: 576px) {
		padding: 0.7rem 1.1rem;
		font-size: 14px;
		border-radius: 4px;
	}
	:hover {
		cursor: pointer;
	}
	:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}
`;
