import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Container = styled.div`
	height: fit-content;
	display: flex;

	@media (min-width: 992px) {
		margin-top: 3rem;
	}
`;

export const Wrapper = styled.div`
	overflow: hidden;
	background: #f2f4fa;
	
	h2 {
		font-weight: 600;
		font-size: 30px;
		line-height: 170%;
		/* identical to box height, or 51px */
		text-transform: uppercase;
		text-align: center;

		/* Neutral/80% */
		color: #2b2c2d;
	}
	p {
		font-weight: 400;
		font-size: 18px;
		// line-height: 170%;
		text-align: center;
		/* identical to box height, or 43px */

		/* Neutral/80% */
		color: #2b2c2d;
		margin-bottom: 1.5rem;
	}
`;

export const TopProducts = styled.div`
	padding: 5rem 6rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	align-items: center;

	@media (max-width: 576px) {
		padding: 2.3rem 1.5rem;
	}

	h3 {
		font-weight: 600;
		font-size: 30px;
		line-height: 170%;

		@media (max-width: 576px) {
			font-weight: 500;
			font-size: 24px;
		}
	}
	p {
		font-weight: 500;
		font-size: 16px;
		line-height: 170%;

		@media (max-width: 576px) {
			font-weight: 400;
			font-size: 16px;
		}
	}
`;

// products container starts here

export const ProductsContainer = styled(motion.div)`
	margin-top: 5rem;

	display: grid;
	gap: 2rem;
	max-width: 1200px;

	@media (max-width: 576px) {
		margin-top: 2.5rem;
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Section = styled.div`
	padding-top: 2rem;
	margin-bottom: 2rem;
	text-align: center;

	h3 {
		font-weight: 600;
		font-size: 30px;
		line-height: 170%;

		@media (max-width: 576px) {
			font-weight: 500;
			font-size: 24px;
		}
	}
	p {
		font-weight: 500;
		font-size: 16px;
		line-height: 170%;

		@media (max-width: 576px) {
			font-weight: 400;
			font-size: 16px;
		}
	}
`;

// values container styles starts here

export const ValuesContainer = styled.div`
	padding: 2rem 4rem;
	display: grid;
	// grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin: 0 auto;
	max-width: 2300px;

	@media (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 0.8rem 1rem;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
export const MissionContainer = styled.div`
	padding: 2rem 4rem;
	display: grid;
	// grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin: 0 auto;
	max-width: 2300px;

	@media (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 0.8rem 1rem;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Associates = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 3rem 0;

	.wrapper {
		max-width: 1200px;
		position: relative;
	}
	.wrapper svg {
		top: 50%;
		height: 26px;
		width: 26px;
		cursor: pointer;
		font-size: 1.2rem;
		position: absolute;
		text-align: center;
		line-height: 26px;
		background-color: #fff;
		border-radius: 50%;
		transform: translateY(-50%);
	}
	.wrapper .carousel {
		white-space: nowrap;
		overflow: hidden;
		cursor: pointer;

		display: flex;
	}
	.slider {
		overflow: hidden;
		width: 100%;
	}

	.slider__wrapper {
		display: flex;
	}

	.slider__slide {
		/* flex: 0 0 100%; */
		margin-right: 15px;
	}

	.slider__slide img {
		width: 60px;
		height: 50px;
	}

	.wrapper svg:first-child {
		left: -23px;
	}
	.wrapper svg:last-child {
		right: -23px;
	}

	h2 {
		font-weight: 600;
		font-size: 30px;
		line-height: 170%;
		/* identical to box height, or 51px */
		text-transform: uppercase;

		/* Neutral/80% */
		color: #2b2c2d;
	}
	p {
		font-weight: 300;
		font-size: 25px;
		line-height: 170%;
		/* identical to box height, or 43px */

		/* Neutral/80% */
		color: #2b2c2d;
		margin-bottom: 1.5rem;
	}

	@media (max-width: 576px) {
		margin: 1.5rem 0.8rem;
	}
`;
export const Brand = styled.img`
	width: calc(100% / 7);
	height: 50px;
	/* background: #151616; */
	margin-left: 14px;

	margin-right: 1rem;
	:first-child {
		margin-left: 0px;
	}

	@media (max-width: 576px) {
		width: calc(100% / 5);
		height: 45px;
	}
`;

export const BlogContainer = styled(motion.div)`
	padding: 0 2rem;
	display: grid;
	justify-items: center;
	align-items: center;
	// grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	text-align: start;
	width: 85%;
	margin: 3rem auto;
	max-width: 1200px;

	@media (max-width: 600px) {
		grid-template-columns: 100%;
		width: 100%;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
		width: 100%;
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
export const Blog = styled(Link)`
	padding-bottom: 1.2rem;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	max-width: 500px;

	text-align: start;
	box-shadow: 2px 10px 50px 4px rgba(183, 183, 183, 0.35);
	border-radius: 4px;
	background: #fff;

	div {
		display: flex;
		justify-content: flex-start;
		flex-direction: row;
		/* margin: 1.5rem 1rem; */
		width: 100%;

		:first-child {
			/* margin-top: 2rem; */
		}
		.red {
			color: #4688E4;
			margin-left: 15px;

			@media (max-width: 576px) {
				margin-left: unset;
				font-size: 0.9rem;
				margin-left: 1.5rem;
			}
		}
	}
`;

export const BigImage = styled.img`
	width: 100%;
	height: 230px;

	border-radius: 10px;

	@media (max-width: 576px) {
		width: 100%;
		// margin-top: -14px;
		// object-fit: contain;
	}
`;

export const Heading = styled.h3`
	font-weight: 600;
	font-size: 20px;
	line-height: 140.02%;
	color: #151616;
	margin: 1rem;
	text-align: start;
`;

export const Text = styled.span`
	font-weight: 800;
	font-size: 16px;
	line-height: 27px;
	text-align: start;

	display: inline-flex;

	:last-child {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	svg {
		margin-right: 10px;
	}

	/* color: #2B2C2D; */
	@media (max-width: 576px) {
		padding: 0 1rem;
		text-align: start;
	}

	span {
		/* color: #4E97FD !important; */
		font-weight: 600;
	}
`;

export const Description = styled.p`
	margin-top: 1rem;
	font-weight: 400;
	font-size: 16px !important;
	text-align: center;
	margin: 0 0.9rem;
	color: #2b2c2d;
	@media (max-width: 576px) {
		font-size: 14px;
		margin-top: 0.5rem;
	}
`;

export const LinkButton = styled(Link)`
	background: #4e97fd;

	display: flex;
	align-items: center;
	text-decoration: none;
	text-align: center;
	color: white;
	font-size: 18px;
	padding: 0.7rem 1.5rem;
	border-radius: 10px;

	margin: 1rem auto;
	&:hover {
		cursor: pointer;
	}

	@media (max-width: 576px) {
		padding: 0.4rem 1rem;
		font-size: 14px;
		margin-bottom: 0px;
	}
`;
