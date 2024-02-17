import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@chakra-ui/layout";
import SideBar from "./sideBar/sideBar";
import MenuItems from "./Menu/MenuItems";
import { MenuWrapper } from "../../components/hero/style";
import Newsletter from "../../components/Newsletter";
import { setFilteredProducts } from "../../features/products/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Categories = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [Index, setIndex] = useState(0);
	const { category } = useSelector((store) => store.categories);

	return (
		<>
			<Grid
				templateColumns={{ base: "1fr", lg: "350px 1fr" }}
				mt={{ lg: "2rem" }}
			>
				<SideBar Index={Index} setIndex={setIndex} />
				<MenuWrapper>
					<MenuItems Index={Index} />
				</MenuWrapper>
			</Grid>
			<Newsletter />
		</>
	);
};

export default Categories;
