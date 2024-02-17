import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
import { colors } from "../../../themes";
import { toggleSidebar } from "../../../features/user/userSlice";
import { useDispatch } from "react-redux";
const SidebarLink = styled(Link)`
	display: flex;
	color: black;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	list-style: none;
	height: 60px;
	text-decoration: none;
	font-size: 15px;

	:first-of-type {
		margin-top: 2.5rem;
	}

	&:hover {
		border-left: 4px solid #4688e4;
		cursor: pointer;
		svg {
			color: ${colors.primaryColor};
		}
	}
`;

const SidebarLabel = styled.span`
	margin-left: 10px;
`;

const DropdownLink = styled(Link)`
	background: white;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: black;
	font-size: 15px;
	margin-block: 1rem;

	&:hover {
		cursor: pointer;
	}
`;

const SubMenu = ({ item }) => {
	const dispatch = useDispatch();
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	const handleClick = () => {
		if (item.subNav) {
			showSubnav();
		}
		if (!item.subNav) {
			dispatch(toggleSidebar());
		}
	};
	return (
		<>
			<SidebarLink to={item.subNav ? "/" : item.path} onClick={handleClick}>
				<Flex justifyContent={"center"} alignItems={"center"}>
					<SidebarLabel>{item.title}</SidebarLabel>
				</Flex>
				<div>
					{item.subNav && subnav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null}
				</div>
			</SidebarLink>

			{subnav &&
				item.subNav.map((item, index) => {
					return (
						<DropdownLink
							to={item.path}
							key={index}
							onClick={() => {
								dispatch(toggleSidebar());
							}}
						>
							{item.icon}
							<SidebarLabel>{item.title}</SidebarLabel>
						</DropdownLink>
					);
				})}
		</>
	);
};

export default SubMenu;
