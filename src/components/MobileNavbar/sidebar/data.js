import {
	MdKeyboardArrowRight,
	MdOutlineKeyboardArrowDown,
	MdLineWeight,
} from "react-icons/md";

export const SidebarData = [
	{
		title: "HOME",
		path: "/",
		iconClosed: <MdKeyboardArrowRight />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},

	{
		title: "COMPANY",
		path: "categories",
		iconClosed: <MdKeyboardArrowRight fontSize={"2rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"2rem"} />,

		subNav: [
			{
				title: "About",
				path: "about",
				icon: <MdLineWeight />,
				cName: "sub-nav",
			},
			{
				title: "Careers",
				path: "careers",
				icon: <MdLineWeight />,
				cName: "sub-nav",
			},
			{
				title: "Contact Us",
				path: "contact",
				icon: <MdLineWeight />,
				cName: "sub-nav",
			},
		],
	},
	// {
	// 	title: "CATEGORIES",
	// 	path: "workshops",
	// 	iconClosed: <MdKeyboardArrowRight />,
	// 	iconOpened: <MdOutlineKeyboardArrowDown />,

	// 	subNav: [
	// 		{
	// 			title: "List Workshops",
	// 			path: "workshops",
	// 			icon: <MdLineWeight />,
	// 			cName: "sub-nav",
	// 		},
	// 		{
	// 			title: "Add workshops",
	// 			path: "add-workshops",
	// 			icon: <MdLineWeight />,
	// 			cName: "sub-nav",
	// 		},
	// 	],
	// },
	{
		title: "SERVICES",
		path: "services",
		iconClosed: <MdKeyboardArrowRight fontSize={"1.4rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"1.4rem"} />,
	},
	{
		title: "SPECIAL OFFERS",
		path: "special-Offers",
		iconClosed: <MdKeyboardArrowRight />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "BLOGS",
		path: "blogs",
		iconClosed: <MdKeyboardArrowRight />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	// {
	// 	title: "EDUCATIONAL",
	// 	path: "admin-quotes",
	// 	iconClosed: <MdKeyboardArrowRight />,
	// 	iconOpened: <MdOutlineKeyboardArrowDown />,
	// },
	// {
	// 	title: "OUR PORTFOLIO",
	// 	path: "settings",
	// },
];
