import Wrapper from "../styles/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import NavLinks from "../Navlinks/NavLinks";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../../features/user/userSlice";
import { SidebarData } from "../links";
import SubMenu from "../Navlinks/DropDown";
import { logoutUser } from "../../../features/user/userSlice";
import { useNavigate } from "react-router";
import { Button } from "@chakra-ui/react";

const SmallSidebar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isSidebarOpen } = useSelector((state) => state.user);
	const showSideBar = () => {
		dispatch(toggleSidebar());
	};
	const logOut = () => {
		dispatch(logoutUser());
		navigate("/");
	};

	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
				}
				onClick={showSideBar}
			>
				<div className="content">
					{/* <button type="button" className="close-btn" onClick={showSideBar}>
						<FaTimes />
					</button> */}
					<div>
						<header></header>

						{SidebarData.map((item, index) => {
							return (
								<SubMenu item={item} key={index} toggleSidebar={showSideBar} />
							);
						})}
					</div>

					<div className="logout-btn">
						<Button
							onClick={logOut}
							className="logout"
							bg={"#4688E4"}
							color={"white"}
						>
							logout{" "}
						</Button>
						{/* <div className="userImage">
							<img src="" alt="" />
							<h4>lsldkdd dkslkskdlsksl</h4>
						</div> */}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
