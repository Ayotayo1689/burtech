import React, { useEffect, useState } from "react";
import icon1 from "../../assests/homeIcon1.png";
import icon2 from "../../assests/homeIcon2.png";
import icon3 from "../../assests/homeIcon3.png";
import icon4 from "../../assests/homeIcon4.png";

import {
	SideBarContainer,
	SideNavItems,
	SideNavHeading,
	SideNavIcons,
	SideNavText,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../features/categories/categoriesSlice";
import { Skeleton } from "@chakra-ui/react";
import { FaSchool } from "react-icons/fa";
import { setSelectedTab } from "../../features/products/productSlice";
import { setFilteredProducts } from "../../features/products/productSlice";

//  const sideBarData = [
// 	{
// 		title: "Laboratry Design and Specification",
// 		icon: icon1,
// 		id: 0,
// 	},

// 	{
// 		title: "Laboratory Furniture and Fittings",
// 		icon: icon2,
// 		id: 1,
// 	},

// 	{
// 		title: "Language Laboratories, IcT and E-Library",
// 		icon: icon3,
// 		id: 2,
// 	},

// 	{
// 		title: "Schools Furnishing",
// 		icon: icon4,
// 		id: 3,
// 	},
// ];
const icons = [
	icon1,
	icon2,
	icon3,
	icon4,
	icon2,
	icon3,
	icon2,
	icon4,
	icon3,
	icon1,
	icon2,
	icon3,
	icon4,
	icon2,
	icon3,
	icon2,
	icon4,
	icon3,
	icon1,
	icon2,
	icon3,
	icon4,
	icon2,
	icon3,
	icon2,
	icon4,
	icon3,
	icon1,
	icon2,
	icon3,
	icon4,
	icon2,
	icon3,
	icon2,
	icon4,
	icon3,
	icon1,
	icon2,
	icon3,
	icon4,
	icon2,
	icon3,
	icon2,
	icon4,
	icon3,
	icon1,
	icon2,
	icon3,
	icon4,
	icon2,
	icon3,
	icon2,
	icon4,
	icon3,
	icon1,
	icon2,
	icon3,
	icon4,
	icon2,
	icon3,
	icon2,
	icon4,
	icon3,
	icon1,
];

function SideBar({ toggleMenu, setIndex, Index }) {
	const dispatch = useDispatch();
	const { data, isLoading, category } = useSelector(
		(store) => store.categories
	);
	const { isLoading: LoadingProducts } = useSelector((store) => store.products);

	const handleClick = (Index) => {
		toggleMenu();
		setIndex(Index);
	};

	return (
		<Skeleton isLoaded={!isLoading && !LoadingProducts} fadeDuration={1}>
			<SideBarContainer>
				<SideNavHeading>
					<h5>Product CATEGORIES</h5>
				</SideNavHeading>
				<ul>
					{data
						?.filter((item) => item?.is_prime === true)
						?.map((value, key) => (
							<SideNavItems
								key={key}
								onClick={() => {
									dispatch(setSelectedTab(0));
									handleClick(key);
									dispatch(setCategory(value));
									dispatch(setFilteredProducts(value?.id));
								}}
								className={Index === key ? "active" : ""}
							>
								<SideNavIcons>
									<img src={icons[key]} />
								</SideNavIcons>
								<SideNavText>
									<span>{value.name}</span>
								</SideNavText>
							</SideNavItems>
						))}
				</ul>
			</SideBarContainer>
		</Skeleton>
	);
}

export default SideBar;
