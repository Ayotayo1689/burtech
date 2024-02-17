import React, { useEffect, useState } from "react";
import icon1 from "../../../assests/homeIcon11.png";
import icon2 from "../../../assests/homeIcon22.png";
import icon3 from "../../../assests/homeIcon33.png";

import {
	SideBarContainer,
	SideNavItems,
	SideNavHeading,
	SideNavIcons,
	SideNavText,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "@chakra-ui/react";
import { setCategory } from "../../../features/categories/categoriesSlice";
import { setSelectedTab } from "../../../features/products/productSlice";
import { setFilteredProducts } from "../../../features/products/productSlice";

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
	icon2,
	icon3,
	icon2,
	icon3,
	icon1,
	icon1,
	icon2,
	icon3,
	icon2,
	icon3,
	icon2,
	icon3,
	icon1,
	icon1,
	icon2,
	icon3,
	icon2,
	icon3,
	icon2,
	icon3,
	icon1,
];

function Categories({}) {
	const dispatch = useDispatch();
	const { data, isLoading, category } = useSelector(
		(store) => store.categories
	);
	const { isLoading: LoadingProducts } = useSelector((store) => store.products);

	return (
		<Skeleton isLoaded={!isLoading && !LoadingProducts} fadeDuration={1}>
			<SideBarContainer>
				<ul>
					{data
						?.filter((item) => item?.is_prime === true)
						?.map((value, key) => (
							<SideNavItems
								key={key}
								onClick={() => {
									dispatch(setSelectedTab(0));
									dispatch(setCategory(value));
									dispatch(setFilteredProducts(value?.id));
								}}
								to={"/products"}
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

export default Categories;
