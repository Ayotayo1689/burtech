import styled from "styled-components";
import { colors } from "../../themes";
const { primaryColor } = colors;

export const Container = styled.div`
	padding-inline: 1rem;
	padding-block-start: 2.5rem;
	@media (max-width: 900px) {
		width: 100%;
		padding-block-start: 0.5rem;
	}
`;
export const Wrapper = styled.div`
	width: 95%;
	max-width: 1500px;
	margin: 0 auto;

	h2 {
		font-weight: 600;
		font-size: 30px;
		line-height: 130.52%;
		/* or 39px */

		/* Neutral/80% */
		color: #2b2c2d;
		text-align: start;

		margin: 2rem 0;

		@media (max-width: 900px) {
			font-size: 24px;
			line-height: 32px;

			text-align: center;
			width: 100%;
		}
	}
	@media (max-width: 900px) {
		width: 100%;
	}
`;
export const Details = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	flex-direction: row;

	gap: 15rem;

	@media (max-width: 900px) {
		width: 100%;
		flex-direction: column;
		gap: 3rem;
	}
`;
export const ImgContainer = styled.div`
	width: 50%;
	margin-right: 1.5rem;

	@media (max-width: 900px) {
		width: 100%;
	}
`;
export const Image = styled.img`
	width: 70%;
	height: 420px;

	@media (max-width: 900px) {
		width: 300px;
		height: 300px;
	}
`;
export const QouteSection = styled.div`
	width: 40%;
	padding-top: 2rem;

	@media (max-width: 900px) {
		width: 100%;
	}
	h3 {
		font-size: 28px;
		line-height: 32px;
		margin-bottom: 0.9rem;

		@media (max-width: 900px) {
			font-size: 18px;
			text-align: center;
		}
	}
	p {
		font-size: 16px;
		/* line-height: 24px; */
		font-weight: lighter;
		word-spacing: 1px;
		padding: 1rem 0;
		/* margin-bottom: 2rem; */

		@media (max-width: 900px) {
			font-size: 14px;
			font-weight: 500;
		}
	}
`;

export const Form = styled.form`
	@media (max-width: 900px) {
		width: 100%;
		padding: 1.2rem 1rem;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	p {
		font-size: 14px;
	}
`;

export const InputContainer = styled.div`
	width: 100%;
	height: 50px;

	margin-bottom: 10px;
	padding: 0 0.8rem;
	/* background: #f6f6f7; */
	border: transparent;
	color: #8e8c94;
	border-radius: 10px;
	border: 2px solid #8e8c94;
	display: flex;
	align-items: center;
	@media (max-width: 900px) {
		height: 40px;
		border-radius: 6px;
	}
	:last-of-type {
		height: 80px;
	}
	:focus-within {
		border: 2px solid ${primaryColor};
		padding: 0.6rem 0.8rem;
	}
	input,
	textarea {
		border: none;
		outline: none;
		height: 100%;
		width: 100%;
		background: transparent;
	}
	textarea {
		margin-top: 0.8rem;
	}
`;

export const Top = styled.div`
	width: 100%;
	height: 50px;

	margin-bottom: 10px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 900px) {
		height: 40px;
		flex-direction: column;
	}
	input {
		background: transparent;
		color: #8e8c94;

		border: 2px solid #8e8c94;
		padding-left: 1rem;
		border-radius: 10px;
		outline: none;

		height: 100%;
		width: 50%;
		@media (max-width: 900px) {
			width: 100%;
		}

		:focus-within {
			border: 2px solid ${primaryColor};
		}
		/* background: transparent; */
		:first-of-type {
			margin-right: 1rem;
		}
	}
`;
export const UploadContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 14px;
`;
export const Input = styled.input`
	display: none;
`;
export const SubmitBtn = styled.button`
	border: none;
	width: 30%;
	background: ${primaryColor};
	color: white;
	height: 50px;
	font-size: 16px;
	border-radius: 10px;
	margin: 20px 0;
	cursor: pointer;

	@media (max-width: 900px) {
	}
`;

export const Dropzone = styled.div`
	border: 2px dashed #ccc;
	width: 100%;
	margin: 1rem;
	cursor: pointer;

	p {
		text-align: center;
		margin-bottom: 0;
	}
`;

// qoutation form eds here

// bottom categories under the qoutation form
export const Category = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;

	margin-top: 2rem;
	font-weight: 400;
	font-size: 14px;

	/* Neutral/50% */
	color: #6b6f71;
	/* margin: 0;
	padding: 0; */

	input {
		display: inline-flex;
		width: 35px;
		height: 35px;
		border-radius: 50%;
		/* margin-right: 15px; */
	}
`;
export const Manufacturer = styled.p`
	font-weight: 400;
	font-size: 14px;

	/* Neutral/50% */
	color: #6b6f71;
	margin: 0;
	padding: 0;

	span {
		color: #000;
		font-weight: 500;
	}
`;

export const SocialMedia = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-weight: 600;
	font-size: 16px;

	/* Neutral/50% */
	color: #000;
	.fb {
		color: #3c5a98;
	}
	.tweet {
		color: #1b95e0;
	}
	.ig {
		color: #e4405f;
	}
	svg {
		font-size: 24px;
		margin: 0 0.5rem;
	}
`;
export const Link = styled.a`
	text-align: center;
	text-transform: capitalize;
	background-color: ${primaryColor};
	color: #fff;

	padding: 1rem 4rem;
	margin-top: 1.5rem;
`;
export const ProductsContainer = styled.div`
	margin-top: 5rem;

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 5rem;

	@media (max-width: 900px) {
		margin-top: 2.5rem;
		grid-template-columns: repeat(1, 1fr);
		gap: 2rem;
	}
`;

export const DetailBar = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;

	padding: 0 6rem;
	padding-top: 0.6rem;

	background: #e7e9eb;

	@media (max-width: 900px) {
		display: none;
	}
`;

export const BarLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	color: #000;

	font-size: 14px;
	font-weight: 600;

	padding: 0.4rem 0.9rem;
	margin-right: 3rem;

	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	cursor: pointer;

	svg {
		font-size: 20px;
		color: #000;
		font-weight: 600;
		padding-right: 0.3rem;
	}

	:hover {
		background-color: #fff;
		color: ${primaryColor};

		svg {
			color: ${primaryColor};
		}
	}
`;
export const DesktopFeatures = styled.div`
	/* width: 60%; */
	text-align: start;
	padding-left: 3rem;

	@media (max-width: 900px) {
		display: none;
	}

	h3 {
		font-size: 20px;
		line-height: 28px;
		letter-spacing: 0.2px;
		margin-bottom: 0.9rem;
		font-weight: 500;
		color: ${primaryColor};
	}
	li {
		list-style: none;
		margin: 0.4rem 0;
		font-weight: 500;
		word-spacing: 2px;
		letter-spacing: 0.4px;

		display: flex;
		align-items: center;

		svg {
			font-size: 16px;
			margin-right: 0.6rem;
		}
	}
	li:first-of-type {
		margin-top: 1.4rem;
	}
`;
export const MobileFeatures = styled.div`
	/* width: 60%; */
	text-align: start;

	h3 {
		font-size: 18px;
		line-height: 28px;
		letter-spacing: 0.2px;
		margin-bottom: 0.9rem;
		font-weight: 500;
		color: ${primaryColor};
	}
	li {
		list-style: none;
		margin: 0.4rem 0;
		font-weight: 400;
		font-size: 14px;
		word-spacing: 2px;
		letter-spacing: 0.4px;

		display: flex;
		align-items: center;

		svg {
			font-size: 16px;
			margin-right: 0.6rem;
		}
	}
	li:first-of-type {
		margin-top: 1.4rem;
	}
`;
export const Related = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	text-align: center;

	h3 {
		font-size: 28px;
		font-weight: 600;
		/* line-height: 32px; */
		color: ${primaryColor};
		text-transform: uppercase;

		margin-top: 3rem;
		@media (max-width: 900px) {
			font-size: 24px;
			margin-top: 1.5rem;
		}
	}
	p {
		font-weight: 300;
		font-size: 18px;
		/* line-height: 24px; */
		/* identical to box height, or 34px */

		/* Neutral/80% */
		color: #2b2c2d;
		margin-top: 0.9rem;
		@media (max-width: 900px) {
			font-size: 16px;
		}
	}
`;
