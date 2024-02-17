import Wrapper from "../styles/BigSidebar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/menu";
import { SidebarData } from "../links";
import SubMenu from "../Navlinks/DropDown";
import logo from "../../../assests/burtech-texticon.png";

const BigSidebar = () => {
	const { isSidebarOpen } = useSelector((state) => state.user);

	return (
		<Wrapper>
			<div className="sidebar-container show-sidebar">
				<div className="content">
					<header>
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
					</header>

					{SidebarData.map((item, index) => {
						return <SubMenu item={item} key={index} />;
					})}
				</div>
			</div>
		</Wrapper>
	);
};

export default BigSidebar;
