import styled from "styled-components";
import BackgroundImg from "../../assests/worshop/careersbg.png";

export const Section = styled.section`
	background: white;
	width: 100%;
	background: linear-gradient(0deg, rgba(2, 19, 38, 0.8), rgba(2, 19, 38, 0.8)),
		url(${BackgroundImg});
	background-size: cover;
	background-position: center;
	padding: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 8vh;
	margin-bottom: 3rem;
`;
