import React, { useEffect, useState } from "react";
import icon1 from "../../../assests/homeIcon1.png";
import icon2 from "../../../assests/homeIcon2.png";
import icon3 from "../../../assests/homeIcon3.png";
import icon4 from "../../../assests/homeIcon4.png";

import {
	SideBarContainer,
	SideNavItems,
	SideNavHeading,
	SideNavIcons,
	SideNavText,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../../features/categories/categoriesSlice";
import { Skeleton } from "@chakra-ui/react";
import { setFilteredProducts } from "../../../features/products/productSlice";

//
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

function SideBar({ setIndex, Index }) {
	const dispatch = useDispatch();
	const { data, isLoading, category } = useSelector(
		(store) => store.categories
	);
	const { isLoading: LoadingProducts } = useSelector((store) => store.products);
	const handleClick = (Index) => {
		setIndex(Index);
	};
	useEffect(() => {
		dispatch(setFilteredProducts(category?.id));
	}, [LoadingProducts]);

	return (
		<Skeleton isLoaded={!isLoading && !LoadingProducts}>
			<SideBarContainer>
				<SideNavHeading>
					<h5>PRODUCT CATEGORIES</h5>
				</SideNavHeading>
				<ul>
					{data
						?.filter((item) => item?.is_prime === true)
						?.map((value, key) => (
							<SideNavItems
								key={key}
								onClick={() => {
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
