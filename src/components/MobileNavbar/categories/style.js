import styled from "styled-components";
import { colors } from "../../../themes";
import { Link } from "react-router-dom";

const { primaryColor, textColor, secondaryColor } = colors;

export const SideBarContainer = styled.div`
	display: none;
	@media (max-width: 992px) {
		display: block;
	}
	// background: ${secondaryColor};
	padding: 0px 5px;
	// position: fixed;
	// left: 0;

	top: 20vh;
	overflow: hidden;
	.active {
		background: #d6dde1;
	}
`;
export const SideNavHeading = styled.div`
	margin-bottom: 31px;

	h5 {
		font-weight: 600;
		font-size: 18px;
		color: #6b6f71;
		text-transform: uppercase;
	}
`;
export const SideNavList = styled.ul`
	// padding: 1rem;
`;

export const SideNavItems = styled(Link)`
	list-style-type: none;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 0.8rem;
	cursor: pointer;
	background: none;
	border: 1px solid #e5eaf1;

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
		font-size: 1rem;
		color: white;

		text-transform: uppercase;
	}
`;
