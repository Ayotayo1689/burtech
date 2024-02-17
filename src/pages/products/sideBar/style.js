import styled from "styled-components";
import { colors } from "../../../themes";

const { primaryColor, textColor, secondaryColor } = colors;

export const SideBarContainer = styled.div`
	height: inherit;
	// background: ${secondaryColor};
	padding: 38px 28px;
	// position: fixed;
	// left: 0;
	top: 20vh;
	height: 85vh;
	overflow: scroll;
	.active {
		background: #d6dde1;
	}
	@media (max-width: 992px) {
		display: none;
	}
`;
export const SideNavHeading = styled.div`
	margin-bottom: 31px;

	h5 {
		font-weight: 600;
		font-size: 18px;
		color: #6b6f71;
	}
`;
export const SideNavList = styled.ul`
	// padding: 1rem;
`;

export const SideNavItems = styled.button`
	list-style-type: none;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 2rem;
	cursor: pointer;
	background: none;
	border: none;
	text-align: start;
	border-radius: 10px;
	padding: 0.5rem 0.7rem;
	transition: all 0.2s ease-in;
	font-weight: 600;
`;

export const SideNavIcons = styled.div`
	min-width: 50px;
	height: 50px;

	> img {
		width: 100%;
		height: 100%;
	}
`;
export const SideNavText = styled.div`
	span {
		font-size: 17px;
		color: #404243;
		text-transform: uppercase;
	}
`;
