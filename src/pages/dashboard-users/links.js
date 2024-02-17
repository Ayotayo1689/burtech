import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import {
	MdKeyboardArrowRight,
	MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { ReactComponent as Icon } from "../../assests/worshop/navicon1.svg";
import { ReactComponent as Icon2 } from "../../assests/worshop/Briefcase.svg";
import { ReactComponent as Icon3 } from "../../assests/worshop/setting.svg";
// import { ReactComponent as Icon3 } from "../../assests/worshop/navicon3.svg";

const links = [
	{
		id: 1,
		text: "Dashboard",
		path: "/users-dashboard",
		icon: <IoBarChartSharp />,
	},
	{ id: 2, text: "Orders", path: "orders", icon: <MdQueryStats /> },
	{ id: 3, text: "WorkShops", path: "workshops", icon: <IoBarChartSharp /> },
	{ id: 4, text: "Settings", path: "settings", icon: <FiSettings /> },
];

export const SidebarData = [
	{
		title: "Quotes",
		path: "/users-dashboard",
		icon: <Icon />,
		iconClosed: <MdKeyboardArrowRight />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "Orders",
		path: "orders",
		icon: <Icon2 />,
		iconClosed: <MdKeyboardArrowRight />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},

	{
		title: "Settings",
		path: "settings",
		icon: <Icon3 />,
		iconClosed: <MdKeyboardArrowRight />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
];

export default links;
