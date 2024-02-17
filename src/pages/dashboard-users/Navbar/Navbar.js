import Wrapper from "../styles/Navbar";

import { useDispatch } from "react-redux";
import { MdOutlineMenu } from "react-icons/md";
import { toggleSidebar } from "../../../features/user/userSlice";
import sidebarIcon from "../../../assests/dashboardNav/Sidebar.png";
import magnifyingGlass from "../../../assests/dashboardNav/MagnifyingGlass.png";
import userImage from "../../../assests/dashboardNav/dashboard-user-image.png";
import dropdown from "../../../assests/dashboardNav/dashboard-dropdown.png";
import { useNavigate } from "react-router";
import { FiSettings } from "react-icons/fi";
import { logoutUser } from "../../../features/user/userSlice";
import logo from "../../../assests/burtech-texticon.png";
import { Link } from "react-router-dom";
import {
	Box,
	Image,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
} from "@chakra-ui/react";
import { AiOutlineUserSwitch } from "react-icons/ai";

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logOut = () => {
		dispatch(logoutUser());
		navigate("/");
	};
	const showSideBar = () => {
		dispatch(toggleSidebar());
	};

	return (
		<Wrapper>
			<div className="nav-center">
				<button type="button" className="toggle-btn" onClick={showSideBar}>
					<MdOutlineMenu color="#4688E4" />
				</button>
				<Box display={{ lg: "none" }} mr={"1rem"}>
					<Link to="/">
						<Image width={"7rem"} src={logo} alt="logo" />
					</Link>
				</Box>
			</div>
			<div className="desktop-nav">
				<div className="left">
					<div className="sidebaricon">
						<img src={sidebarIcon} />
					</div>
					{/* <div className="search">
						<img src={magnifyingGlass} />
						<input placeholder="Search..." />
					</div> */}
				</div>
				<div className="right">
					<Button ml={"4rem"} onClick={logOut} bg={"#4688E4"} color={"white"}>
						<AiOutlineUserSwitch size={"2rem"} />
						Logout
					</Button>

					{/* <FaRegBell /> */}
					<Link to="/users-dashboard/settings">
						<FiSettings color="#4688E4" size={"2rem"} />
					</Link>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
