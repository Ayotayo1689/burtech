import links from "../links";
import { NavLink } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

const NavLinks = ({ toggleSidebar }) => {
	return (
		<div className="nav-links">
			{links.map((link) => {
				const { text, path, id, icon } = link;

				return (
					<button key={id}>
						<NavLink
							to={path}
							onClick={toggleSidebar}
							className={({ isActive }) =>
								isActive ? "nav-link active" : "nav-link"
							}
						>
							{/* <span className="icon">{icon}</span> */}
							{text}
							<span className="arrow">
								<MdArrowForwardIos />
							</span>
						</NavLink>
					</button>
				);
			})}
		</div>
	);
};

export default NavLinks;
