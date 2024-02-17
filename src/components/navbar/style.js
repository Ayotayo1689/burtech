import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../themes";

const { primaryColor, textColor, secondaryColor } = colors;
export const Container = styled.div`
	height: 13vh;
	width: 100%;
	position: fixed;
	top: 0;
	/* background-color: red; */
	box-shadow: 0px 10px 20px 0px rgba(8, 0, 42, 0.18);
	z-index: 999;

	@media (max-width: 992px) {
		display: none;
	}
`;
export const Wrapper = styled.div`
	width: 95%;
	margin: 0 auto;
	max-width: 1300px;
	height: 100%;
	display: flex;
	/* justify-content: space-between; */
	align-items: center;
	flex-direction: column;
	font-size: 14px;

	position: relative;
`;

// Top Navbar menu
export const Top = styled.div`
	padding: 0 2.5rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	/* gap: 75px; */

	align-items: center;
	background-color: #fff;
	@media (min-width: 768px) {
		padding: 0 1.5rem;
		/* display: block; */
	}
	@media (max-width: 992px) {
		display: none;
	}
`;
export const Logo = styled.div`
	img {
		width: 150px;
	}

	@media (max-width: 992px) {
		img {
			width: 170px;
		}
	}
`;
export const Right = styled.div`
	display: flex;
	align-items: center;
	padding: 10px 0;
	/* justify-content: flex-end; */

	@media (max-width: 992px) {
		justify-content: flex-end;
	}
`;
export const Contact = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding-right: 1.6rem;

	@media (max-width: 576px) {
		padding-right: 0.6rem;
	}
`;

export const Mail = styled.div`
	display: flex;
	align-items: center;
	padding: 10px;
	margin: 0 15px;

	:hover {
		cursor: pointer;
	}

	svg {
		width: 24px;
		height: 24px;
		color: ${secondaryColor};
		margin-right: 10px;
		cursor: pointer;
	}
	div {
		h6 {
			font-size: 14px;
			font-weight: 600;
		}
	}

	@media (max-width: 992px) {
		div {
			display: none;
		}
	}
`;

export const SearchField = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;

	background: transparent;
	border: 1.5px solid rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	padding: 0 10px;

	height: 40px;
	width: 350px;

	@media (max-width: 768px) {
		width: 100%;
		height: 35px;
		padding: 0 6px;
		border-radius: 10px;
	}

	input {
		border: none;
		background: transparent;
		outline: none;

		&::placeholder {
			/* text-transform: capitalize; */
			color: #56585a;
			font-size: 0.8rem;
			font-family: inherit;
		}
	}
	svg {
		font-size: 16px;
		font-weight: 200;
		color: ${secondaryColor};
		height: 100%;
		// border-left: 1.5px solid rgba(0, 0, 0, 0.5);
	}
`;

export const AuthLink = styled.div`
	margin-left: 1.2rem;
	display: flex;
	align-items: center;
	position: relative;

	@media (max-width: 992px) {
		margin-left: 0.4rem;
	}
	::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 2px;
		border-radius: 4px;
		background: ${textColor};
		opacity: 0.3;
	}
	a {
		color: ${primaryColor};
		transition: 0.5s linear;
		display: inline-flex;
		align-items: center;
		text-decoration: none;
		svg {
			font-size: 18px;
			margin: 0 10px;
		}
		:hover {
			/* color: ${primaryColor}; */
			/* text-decoration: underline; */
		}
	}
	button,
	a {
		background: #4e97fd;
		color: white;
		opacity: 0.845;
		border: none;
		padding: 10px 30px;
		margin-left: 20px;
		border-radius: 6px;
		border: none;
		font-size: 14px;
		font-weight: 500;
		cursor: pointer;
		@media (max-width: 576px) {
			padding: 9px 12px;
			border-radius: 4px;
		}

		:hover {
			opacity: 100;
		}
	}
`;

// Navbar bottom section with red background
export const Bottom = styled.div`
	padding: 10px 2.5rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #4688e4;
	color: #fff;
	/* padding: 10px 0; */

	svg {
		font-size: 24px;
		color: #fff;
		margin-right: 1.2rem;
		cursor: pointer;

		display: none;

		@media (max-width: 576px) {
			display: block;
		}
	}
	.cart-container {
		display: flex;
		align-items: center;
		position: relative;
		svg {
			height: 3rem;
			margin-left: 5px;
			font-size: 2rem;
		}
	}
	.cart-value {
		position: absolute;
		top: -5px;
		right: -10px;
		background: white;
		width: 14px;
		height: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 1rem;
		color: black;
		padding: 16px;
	}

	@media (max-width: 768px) {
		padding: 10px 0.5rem;
	}
`;

export const NavLinks = styled.div`
	margin-right: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	// position: absolute;

	.company-dropdown {
		position: relative;
		height: 100%;
	}
`;

export const NavLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	transition: 0.3s linear;
	padding: 0.45rem 1.2rem;
	border-radius: 4px;

	&:hover {
		background-color: white;
		color: ${primaryColor};

		svg {
			color: inherit;
		}
	}

	&.active:active {
		background-color: white;
		color: ${primaryColor};
	}
	margin-right: 20px;

	svg {
		position: absolute;
		left: 83%;
		top: 0.8rem;
		font-size: 18px;

		margin-right: 0.8rem;
	}

	@media (max-width: 768px) {
		padding: 0.45rem 0.8rem;
		margin-right: 10px;
		font-size: 0.9rem;
	}
`;

export const DropdownContent = styled.div`
	position: absolute;
	z-index: 1;
	top: 16vh;
	min-width: 160px;

	display: ${(props) => (props.isOpen ? "block" : "none")};
	background-color: rgb(255, 183, 183);
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	padding: 12px;
	margin-left: 6rem;
`;

export const DropdownItem = styled.a`
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	cursor: pointer;

	&:hover {
		/* background-color: #f1f1f1; */
		color: #f1f1f1;
	}
`;

export const Mobile = styled.div`
	display: none;
	box-shadow: 0px 0px 20px 0px rgba(8, 0, 42, 0.18);

	@media (max-width: 992px) {
		display: block;
		margin: 0;
		padding: 0 1.5rem;
		width: 100%;
		top: -75px !important;
		/* background-color: red; */
		box-shadow: 0px 2px 5px 0px rgba(8, 0, 42, 0.18);
	}
	svg {
		font-size: 24px;
		color: #fff;
		margin-right: 1.2rem;
		cursor: pointer;

		display: none;

		@media (max-width: 576px) {
			display: block;
		}
	}
	.cart-container {
		display: flex;
		align-items: center;
		position: relative;
		svg {
			height: 1.5rem;
			margin-left: 5px;
			font-size: 1.4rem;
		}
	}
	.cart-value {
		position: absolute;
		top: -5px;
		right: -10px;
		background: ${primaryColor};
		width: 10px;
		height: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-size: 0.7rem;
		color: white;
		padding: 10px;
	}
`;

export const MobileTop = styled.div`
	display: none;

	@media (max-width: 992px) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.4rem 0;

		svg {
			font-size: 24px;
			color: ${primaryColor};
			margin-right: 0.6rem;
			cursor: pointer;
		}
	}
`;
export const MobileBottom = styled.div`
	display: none;

	@media (max-width: 992px) {
		display: block;
		width: 100%;
		position: fixed;
		bottom: 0;
		background-color: #fff;
		box-shadow: 0px 10px 20px 0px rgba(8, 0, 42, 0.18);
		z-index: 100;
	}
`;

export const IconsContainer = styled.div`
	@media (max-width: 992px) {
		display: flex;
		justify-content: center;
		align-items: center;

		padding: 0.6rem 0;
	}
	@media (min-width: 768px) {
		padding: 1rem 0;
	}
`;

export const IconNav = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	text-decoration: none;
	text-align: center;
	font-size: 13px;
	font-weight: 400;
	color: #000;

	margin-right: 1rem;
	@media (min-width: 768px) {
		margin-right: 2.5rem;
	}
	:last-of-type {
		margin-right: 0;
	}
	svg {
		font-size: 24px;
		margin-bottom: 0.4rem;
		font-weight: 600;
	}

	:hover {
		color: ${primaryColor};
		cursor: pointer;
	}
`;
