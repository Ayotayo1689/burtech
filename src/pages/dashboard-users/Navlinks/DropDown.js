import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";
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
		border-left: 4px solid #4e97fd;
		cursor: pointer;
		svg {
			color: #4e97fd;
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

const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false);
	const dispatch = useDispatch();

	const closeSidebar = () => {
		console.log("hi");
		dispatch(toggleSidebar());
	};
	const showSubnav = () => setSubnav(!subnav);

	return (
		<>
			<SidebarLink to={item.path}>
				<Flex
					justifyContent={"center"}
					alignItems={"center"}
					onClick={closeSidebar}
				>
					{item.icon}
					<SidebarLabel>{item.title}</SidebarLabel>
				</Flex>
			</SidebarLink>
		</>
	);
};

export default SubMenu;
