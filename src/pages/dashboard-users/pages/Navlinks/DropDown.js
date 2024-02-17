import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";

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
		border-left: 4px solid red;
		cursor: pointer;
		svg {
			color: red;
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

	&:hover {
		cursor: pointer;
	}
`;

const SubMenu = ({ item, toggleSidebar }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	return (
		<>
			<SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
				<Flex justifyContent={"center"} alignItems={"center"}>
					{item.icon}
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
						<DropdownLink to={item.path} key={index}>
							{item.icon}
							<SidebarLabel>{item.title}</SidebarLabel>
						</DropdownLink>
					);
				})}
		</>
	);
};

export default SubMenu;
