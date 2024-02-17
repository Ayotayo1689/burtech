import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
	Container,
	Top,
	Logo,
	NavLinks,
	Right,
	Bottom,
	NavLink,
	Mail,
	SearchField,
	AuthLink,
	Mobile,
	MobileTop,
	MobileBottom,
	IconsContainer,
	IconNav,
} from "./style";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

// icons are imported here
import { MdEmail, MdOutlineLocalOffer } from "react-icons/md";
import { BsTelephoneFill, BsCart3 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { BiBrain } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineUsers } from "react-icons/hi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { TiArrowSortedDown } from "react-icons/ti";
import { FiSettings } from "react-icons/fi";
import { AiOutlineUserSwitch } from "react-icons/ai";

import logo from "../../assests/burtech-texticon.png";
import CompanyDropdown from "./companyDropdown";

import {
	toggleSidebar,
	logoutUser,
	toggleMenu,
} from "../../features/user/userSlice";
import { SearchModal } from "../searchBar/search";

const Nav = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((store) => store.user);
	const [dropdown, setDropdown] = useState(false);
	const { total_items } = useSelector((store) => store.cart);
	const { biodatas } = useSelector((store) => store.biodata);
	console.log(biodatas);

	const showSideBar = () => {
		dispatch(toggleSidebar());
	};
	const logOut = () => {
		dispatch(logoutUser());
		navigate("/");
	};
	let location = useLocation();

	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		// window.location.href = "https://Burtech-backend.onrender.com/admin/";
	};

	return (
		<>
			<Container>
				<Top>
					<Logo>
						<Link
							to="/"
							onClick={() => {
								dispatch(toggleMenu());
							}}
						>
							<img src={logo} alt="logo" />
						</Link>
					</Logo>

					<Mail>
						{biodatas?.phone_numbers?.slice(0, 1)?.map((item) => (
							<span style={{ display: "flex", alignItems: "center" }}>
								<a href={`tel:${item}`}>
									<BsTelephoneFill />
								</a>

								<div className="phone-contact">
									<h6>Phone /WhatsApp</h6>
									<a href={`tel:${item}`}> {item}</a>
								</div>
							</span>
						))}
					</Mail>

					<Mail>
						<a href={`mailto:${biodatas?.sales_email}`}>
							{" "}
							<MdEmail />
						</a>
						<div className="mail">
							<h6>Email Address</h6>
							<a href={`mailto:${biodatas?.sales_email}`}>
								{" "}
								{biodatas?.sales_email}
							</a>
						</div>
					</Mail>

					<SearchField>
						<SearchModal />
					</SearchField>
					{user ? (
						<Flex alignItems={"center"} gap={"1rem"}>
							<Button onClick={logOut} color="white" bg={"#4688E4"}>
								<AiOutlineUserSwitch size={"2rem"} />
								Logout
							</Button>
							<Link to="/users-dashboard">
								<FiSettings size={"1.6rem"} color="#4688E4" />
							</Link>
						</Flex>
					) : (
						<AuthLink>
							<Link to="/login">
								<AiOutlineUserSwitch size={"2rem"} />
								Login
							</Link>
							{/* <button onClick={handleClick}>Login</button> */}
						</AuthLink>
					)}
				</Top>

				<Bottom>
					<GiHamburgerMenu />

					<NavLinks>
						<NavLink
							to="/"
							className={isActive ? "active" : ""}
							onClick={() => {
								dispatch(toggleMenu());
								handleClick();
							}}
						>
							Home
						</NavLink>

						<NavLink
							className="company-dropdown"
							onMouseEnter={() => setDropdown(true)}
							onMouseLeave={() => setDropdown(false)}
						>
							<span>Company</span>
							<TiArrowSortedDown style={{ display: "inline" }} />
							{/* <Icon className='icon'/> */}
							{dropdown && <CompanyDropdown />}
						</NavLink>
						<NavLink
							to="/products"
							className={isActive ? "active" : ""}
							onClick={handleClick}
						>
							Categories{" "}
						</NavLink>
						<NavLink
							to="/services"
							className={isActive ? "active" : ""}
							onClick={handleClick}
						>
							Services{" "}
						</NavLink>
						<NavLink
							to="/contact"
							className={isActive ? "active" : ""}
							onClick={handleClick}
						>
							Contact Us
						</NavLink>

						<NavLink
							to="/special-offers"
							className={isActive ? "active" : ""}
							onClick={handleClick}
						>
							Special Offers
						</NavLink>
						<NavLink
							to="/blogs"
							className={isActive ? "active" : ""}
							onClick={handleClick}
						>
							Blogs
						</NavLink>
					</NavLinks>

					<Link to="/my-qoute-list" style={{ position: "relative" }}>
						<span className="cart-container">
							<BsCart3 style={{ display: "block" }}></BsCart3>
							<span className="cart-value">{total_items}</span>
						</span>
					</Link>
				</Bottom>
			</Container>

			{/* FOR DEVICES LESSER 768px (min-width = 768px) */}
			<Box display={{ lg: "none" }}>
				<Mobile>
					<MobileTop>
						<GiHamburgerMenu onClick={showSideBar} />
						<Logo>
							<Link
								to="/"
								onClick={() => {
									dispatch(toggleMenu());
								}}
							>
								<img src={logo} alt="logo" />
							</Link>
						</Logo>
						<Box>
							{user ? (
								<Flex alignItems={"center"}>
									<Link to="/users-dashboard">
										<FiSettings size={"1.3rem"} color="#4688E4" />
									</Link>
									<Link to="/my-qoute-list" style={{ position: "relative" }}>
										<span className="cart-container">
											<BsCart3 style={{ display: "block" }}></BsCart3>
											<span className="cart-value">{total_items}</span>
										</span>
									</Link>
								</Flex>
							) : (
								<AuthLink>
									<Link to="/login">Login</Link>
									{/* <button onClick={handleClick}>Login</button> */}
								</AuthLink>
							)}
						</Box>
					</MobileTop>
				</Mobile>
				<Flex
					justifyContent={"center"}
					paddingBlock={"1rem"}
					paddingInline={"4rem"}
				>
					<SearchField>
						<SearchModal />
					</SearchField>
				</Flex>
			</Box>

			{/* The code below is for the bottom navigation, it's going to be sticky */}
			{/* <MobileBottom>
				<IconsContainer>
					<IconNav to="/">
						<IoHomeOutline />
						Home
					</IconNav>
					<IconNav to="/products">
						<HiOutlineSquares2X2 />
						Categories
					</IconNav>

					<IconNav to="/my-qoute-list">
						<BsCart3 style={{ display: "block" }} size={"24px"} />
						Cart
					</IconNav>
					<IconNav to="/special-offers">
						<MdOutlineLocalOffer />
						Special Offers
					</IconNav>
				</IconsContainer>
			</MobileBottom> */}
		</>
	);
};

export default Nav;
