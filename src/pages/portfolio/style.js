import styled from "styled-components";
import background from "../../assests/portfolio-bg.png";

export const PortfolioContainer = styled.div`
	h2,
	h3,
	p {
		color: #2b2c2d;
	}

	h2,
	h3 {
		font-size: 30px;
		font-weight: 600;
		text-align: center;
	}

	@media (max-width: 600px) {
		// padding-top: 3.5rem;

		h2,
		h3 {
			font-size: 20px;
		}
	}

	@media (min-width: 768px) {
		h2,
		h3 {
			font-size: 20px;
		}
	}
`;
//---------Hero section---------
export const HeroWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	background-image: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.5) 0%,
			rgba(0, 0, 0, 0.42) 105.41%
		),
		url(${background});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 80vh;

	@media (max-width: 600px) {
		flex-direction: column;
		gap: 1rem;
		margin-top: 0;
		padding: 2rem 0;
	}
	@media (min-width: 992px) {
		margin-top: 3rem;
	}
`;
export const HeroLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 50%;

	// > span{
	//     font-style: italic;
	//     font-weight: 500;
	//     font-size: 50px;
	//     color: #FFFFFF;
	// }

	h4 {
		font-weight: 400;
		font-size: 50px;
		margin: 19px 0;
		color: #ffffff;
	}

	a {
		text-decoration: none;
		span {
			text-transform: uppercase;
			color: #ffffff;
			font-size: 20px;
			font-weight: 600;
			padding: 15px 20px;
			background: #4e97fd;
			border-radius: 8px;
		}
	}

	@media (max-width: 600px) {
		width: unset;

		> span {
			font-size: 30px;
		}

		h4 {
			font-size: 30px;
		}

		a {
			padding: 10px 15px;
		}
	}

	@media (min-width: 768px) {
		> span {
			font-size: 28px;
		}

		h4 {
			font-size: 28px;
		}

		a {
			padding: 10px 15px;
		}
	}

	@media (min-width: 992px) {
		width: 50%;

		span {
			font-size: 50px;
		}

		h4 {
			font-size: 50px;
		}

		a {
			padding: 15px 20px;
		}
	}
`;
export const HeroRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;

	@media (max-width: 600px) {
		// justify-content: center;
	}
`;
export const HeroRightImage = styled.div`
	width: 70%;

	img {
		width: 100%;
	}

	@media (max-width: 600px) {
		width: 40%;
		padding-bottom: 1rem;
	}
`;

export const OurWorksHeading = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	margin-top: 2rem;

	h2 {
		font-size: 34px;
		font-weight: 600;
	}

	p {
		font-size: 20px;
		font-weight: 300;
	}

	@media (max-width: 576px) {
		h2 {
			font-size: 24px;
			font-weight: 500;
		}

		p {
			font-size: 16px;
		}
	}

	@media (min-width: 992px) {
		h2 {
			font-size: 30px;
		}
		p {
			font-size: 20px;
		}
	}
`;

//---------Client Review Section--------

export const ReviewSectionWrapper = styled.section`
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	// padding: 50px 250px;
	margin-top: 3.5rem;

	@media (max-width: 600px) {
		padding: 1rem;
	}

	@media (min-width: 768px) {
		padding: 1rem;
	}
`;
export const OpenedQuotes = styled.div`
	position: absolute;
	left: 6rem;
	top: 0;

	@media (max-width: 600px) {
		left: 2rem;
	}
`;
export const ClosedQuotes = styled.div`
	position: absolute;
	right: 6rem;
	bottom: 0;

	@media (max-width: 600px) {
		right: 2rem;
		top: 100%;
	}
`;
export const ReviewHeading = styled.div`
	text-align: center;

	h3 {
		// font-size: 30px;
		font-weight: 600;
	}

	p {
		// font-size: 20px;
		font-weight: 300;
	}

	@media (max-width: 600px) {
		margin-top: 4rem;

		h3 {
			font-size: 20px;
		}

		p {
			font-size: 16px;
		}
	}

	@media (min-width: 768px) {
		h3 {
			font-size: 25px;
		}

		p {
			font-size: 18px;
		}
	}

	@media (min-width: 992px) {
		h3 {
			font-size: 30px;
		}

		p {
			font-size: 20px;
		}
	}
`;
export const ClientReview = styled.div`
	text-align: center;

	> p {
		font-size: 17px;
		margin-top: 25px;
		font-weight: 300;
	}

	@media (max-width: 600px) {
		p {
			font-size: 15px;
		}
	}
`;
export const ClientProfile = styled.div`
	margin-top: 25px;
`;
export const ClientInfo = styled.div`
	h5 {
		font-weight: 600;
		font-size: 32px;
		color: #4688e4;
	}

	p {
		font-size: 18px;
		font-weight: 300;
	}

	> img {
		margin: 0 auto;
	}

	@media (max-width: 600px) {
		h5 {
			font-size: 25px;
		}

		p {
			font-size: 15px;
		}
	}

	@media (min-width: 768px) {
	}
`;
export const ClientImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-top: 10px;
`;
export const ClientImage1 = styled.div`
	width: 129px;

	> img {
		width: 100%;
	}

	@media (max-width: 600px) {
		width: 100px;
	}
`;
export const ClientImage2 = styled.div`
	width: 99.2px;

	> img {
		width: 100%;
	}

	@media (max-width: 600px) {
		width: 80px;
	}
`;

//----------Featured Products--------

export const FeaturedProductsWrapper = styled.section`
	margin-top: 6rem;
`;
export const FeaturedProductsCards = styled.div`
	display: grid;
	// grid-template-columns: repeat(3, 1fr);
	gap: 4rem;
	padding: 4rem 6rem;

	@media (max-width: 600px) {
		grid-template-columns: 100%;
		padding: 2rem;
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
export const ProductCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const ProductCardImage = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	img {
		width: 70%;
	}
`;
export const CardText = styled.div`
	text-align: center;
	margin-top: 20px;

	h3 {
		font-weight: 600;
		font-size: 20px;
	}
	p {
		font-weight: 400;
		font-size: 16px;
		margin-top: 20px;
	}
`;
export const FeaturedProductLink = styled.a`
	text-decoration: none;
	color: #4e97fd;
	font-weight: 500;
	font-size: 18px;

	div {
		margin-top: 17px;

		img {
			display: inline;
		}
	}
`;
