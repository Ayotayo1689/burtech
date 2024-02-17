import { useState } from "react";
import Wrapper from "./styles";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../features/user/userSlice";
import SideBar from "./categories/Categories";
import { setShowMenu } from "../../features/user/userSlice";
import { SidebarData } from "./sidebar/data";
import SubMenu from "./sidebar/Sidebar";

const SmallSidebar = () => {
	const dispatch = useDispatch();
	const [Index, setIndex] = useState(0);
	const { isSidebarOpen } = useSelector((state) => state.user);

	const showSideBar = () => {
		dispatch(toggleSidebar());
	};
	const showSideBarAndMenu = () => {
		dispatch(toggleSidebar());

		dispatch(setShowMenu());
	};
	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
				}
			>
				<div className="content">
					<button type="button" className="close-btn" onClick={showSideBar}>
						<FaTimes />
					</button>
					<div>
						{/* <SideBar
							showSideBar={showSideBarAndMenu}
							Index={Index}
							setIndex={setIndex}
						></SideBar> */}
						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />;
						})}
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
