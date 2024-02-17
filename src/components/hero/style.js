import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../themes";
import HeroImage from "../../assests/heroImage.png";
import MenuBg from "../../assests/menuBg.jpg";

const { primaryColor, textColor, secondaryColor } = colors;

export const Container = styled(motion.div)`
	display: flex;
	justify-content: center;
	// align-items: center;
	flex-direction: column;
	width: 100%;
	padding: 2rem 4rem;
	background-color: #d3d3d3;
	background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
		url(${(props) => props.heroimage});
	background-size: cover;
	width: 100%;

	background-position: center;

	@media (max-width: 576px) {
		justify-content: center;
		align-items: center;
		padding: 32px 15px;

		/* height: 60vh; */
	}

	@media (min-width: 768px) {
		width: 100%;
		// margin-top: 1rem;
	}

	@media (min-width: 992px) {
		// font-size: 70px;
		justify-content: center;
		margin-top: unset;
	}
`;
export const Heading = styled.h1`
	font-weight: 700;
	font-size: 46px;
	color: #151616;
	color: white;
	@media (max-width: 992px) {
		display: none;
	}
	// text-align: center;
	margin-bottom: 1rem;

	@media (max-width: 576px) {
		width: 100%;
		font-size: 24px;
		text-align: center;

		margin-bottom: 1.5rem;
	}
	br {
		display: block;

		@media (max-width: 576px) {
			display: none;
		}
	}
`;

export const Paragraph = styled.p`
	width: 50%;
	font-weight: 400;
	font-size: 16px;
	@media (max-width: 992px) {
		display: none;
	}
	// line-height: 170%;
	text-align: left !important;
	@media (max-width: 576px) {
		width: 100%;
		font-size: 14px;
		font-weight: 500;
		margin-bottom: 1.5rem;
		text-align: center !important;
	}

	@media (max-width: 1200px) {
		font-size: 48px;
	}
`;

export const Link = styled(motion.a)`
	text-decoration: none;
	background-color: ${secondaryColor};
	padding: 12px 20px;
	color: #ffffff;
	border-radius: 8px;
	font-size: 16px;
	width: 140px;
	@media (max-width: 576px) {
		text-align: center;
		padding: 9px 12px;
		border-radius: 6px;
		font-size: 14px;
	}
	@media (max-width: 992px) {
		display: none;
	}
`;

export const MenuWrapper = styled.section`
	background: white;
	height: 100%;
	width: 100%;
	/* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${MenuBg}); */
	/* background-size: cover;
	background-position: center; */
	background-color: #f2f4fa;
	padding: 1rem;
	overflow: scroll;
	height: 85vh;

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;
