import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./style";
import { CompanySubMenu, SubMenuItems, MenuItem } from "./dropdownStyle";

const menuItems = [
	{
		id: 1,
		title: "About",
		path: "/about",
		className: "dropdown-link",
	},
	{
		id: 2,
		title: "Careers",
		path: "/careers",
		className: "dropdown-link",
	},
	// {
	// 	id: 3,
	// 	title: "Workshops",
	// 	path: "/workshop",
	// 	className: "dropdown-link",
	// },
];

const CompanyDropdown = () => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<div>
			<CompanySubMenu className={dropdown ? "submenu clicked" : "submenu"}>
				{menuItems.map((item) => {
					return (
						<SubMenuItems key={item.id}>
							<MenuItem to={item.path} onClick={() => setDropdown(!dropdown)}>
								{item.title}
							</MenuItem>
						</SubMenuItems>
					);
				})}
			</CompanySubMenu>
		</div>
	);
};

export default CompanyDropdown;
