import styled from "styled-components";
import { colors } from "../../../themes";
import { HeroLeft } from "../../portfolio/style";
import { Button } from "@chakra-ui/react";

const { primaryColor } = colors;

export const Container = styled.div`
	@media (min-width: 992px) {
		left: 250px;
		width: calc(100vw - 260px);
		position: absolute;
		top: 6rem;
		padding: 1rem 2rem;
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

	margin: 1rem 0;
	.pages {
		display: flex;
		align-items: center;

		font-size: 14px;
		font-weight: 500;
	}
`;

export const Profile = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-start;
	flex-direction: row;

	margin-top: 2rem;
	width: 100%;

	@media (max-width: 992px) {
		flex-direction: column-reverse;
		gap: 2rem;
	}
`;
export const ProfileContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;

	border: 1px solid #ccc;
	border-radius: 8px;
	padding: 1rem;

	text-align: start;
	margin-right: 2rem;
	@media (min-width: 992px) {
		width: 55%;
	}
`;

export const Heading = styled.h2`
	text-align: start;
	font-size: 22px;
	font-weight: 500;

	margin-left: 0.8rem;

	/* Neutral/80% */
	color: #2b2c2d;
	text-align: start !important;
`;

export const FormWrapper = styled.form`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;
export const GridWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 2;
	@media (min-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
export const UpdateButton = styled(Button)`
	margin: 2rem 0;
	padding: 0.5rem 1rem;
	border-radius: 6px;
	background-color: ${primaryColor};
	color: #fff;

	font-size: 14px;
	font-weight: 500;
	@media (min-width: 992px) {
		width: 130px;
	}
`;

export const ProfileStatus = styled.div`
	display: flex;
	justify-content: flex-start;
	/* align-items: center; */
	flex-direction: column;

	border-radius: 8px;
	border: 1px solid #ccc;
	padding: 1rem;

	h2 {
		text-align: start;
		font-size: 19px;
		font-weight: 500;

		margin-bottom: 0.8rem;
	}
	@media (min-width: 992px) {
		width: 40%;
	}
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	margin-bottom: 1.3rem;
`;

export const GreenStatus = styled.a`
	padding: 0.5rem 1rem;
	margin-right: 1rem;

	border-radius: 6px;
	background: #009e78;
	color: #fff;

	font-size: 14px;
	svg {
		margin-left: 10px;
		font-size: 18px;
	}

	display: flex;
	align-items: center;
`;

export const YellowStatus = styled.a`
	padding: 0.5rem 1rem;
	border-radius: 6px;
	background: #ffbc0a;
	color: #000;
	font-size: 14px;
	svg {
		margin-left: 10px;
		font-size: 18px;
	}

	display: flex;
	align-items: center;
`;

export const Username = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Name = styled.p`
	font-size: 16px;
	font-weight: 400;
`;

export const Edit = styled.button`
	border: none;
	text-transform: uppercase;
	color: ${primaryColor};
`;

export const SubHeading = styled.h4`
	font-weight: 600;
	font-size: 16px;
	line-height: 22px;
	/* identical to box height */

	/* Neutral/80% */
	color: #2b2c2d;
	margin: 1rem 0;
`;

export const Text = styled.p`
	font-weight: 400;
	font-size: 15px;
	line-height: 20px;

	/* Neutral/80% */
	color: #2b2c2d;
`;
