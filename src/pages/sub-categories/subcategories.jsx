import React from "react";
import CaretIcon from "../../assests/Caret.png";

import {
	SubCategoriesContainer,
	SubCategoriesLeft,
	SubCategoriesCardHeading,
	SubCategoriesCard,
	SubCategoriesList,
	SubCategoriesRight,
	SubCategoriesProducts,
	ProductCard,
	ProductImage,
} from "./style";
import { Skeleton } from "@chakra-ui/skeleton";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { Text } from "@chakra-ui/layout";
import { setGroupId } from "../../features/products/productSlice";
import { Image } from "@chakra-ui/react";

const categoryData = [
	{
		id: 1,
		title: "Centrifuge",
		subCategories: [
			"Analytical",
			"Autoclave",
			"Balances",
			"Circulators",
			"Burners",
			"Bomb Calorimeter",
			"Centrifuges",
		],
	},
];

// const ProductsData = [
// 	{ id: 1, image: CardImage0, name: "Frontier" },
// 	{ id: 2, image: CardImage1, name: "Autoclave Pressure Cooker" },
// 	{ id: 3, image: CardImage2, name: "Autoclave sterilizer " },
// 	{ id: 4, image: CardImage3, name: "Biology Laboratory Equipment" },
// 	{ id: 5, image: CardImage4, name: "Melting Point Apparatus" },
// 	{ id: 6, image: CardImage5, name: "Beta-model" },
// 	{ id: 7, image: CardImage6, name: "laboratory centrifuge" },
// 	{ id: 8, image: CardImage7, name: "Phoenix" },
// 	{ id: 9, image: CardImage8, name: "Digital Melting Pot" },
// ];

function Subcategories() {
	const { subId } = useParams();
	const { products, groupId } = useSelector((store) => store.products);

	return (
		<Skeleton fadeDuration={1} rounded={"xl"}>
			<SubCategoriesContainer>
				<SubCategoriesLeft>
					<Text fontSize={"1.6rem"} fontWeight={"semibold"}>
						Category of Products
					</Text>
					{/* {categoryData.map((item, key) => (
						<SubCategoriesCard key={key}>
							<SubCategoriesCardHeading>
								<h4>{subCategory?.name}</h4>
							</SubCategoriesCardHeading>
							<SubCategoriesList>
								{newItems?.map((value, index) => (
									<li
										key={index}
										onClick={() => {
											setGroup(value.name);
											changeGroup(value.id);
										}}
										className={group === value.name ? "active" : ""}
									>
										<span>{value.name}</span>
										<img src={CaretIcon} alt="" />
									</li>
								))}
							</SubCategoriesList>
						</SubCategoriesCard>
					))} */}
				</SubCategoriesLeft>

				{/* <SubCategoriesRight>
					<h4>{group}</h4>
					<SubCategoriesProducts>
						{groupProducts.map((product) => (
							<ProductCard to={`/product-details/${product.id}`}>
								<ProductImage>
									<Image
										width={"5rem"}
										height={"5rem"}
										src={product.main_image}
										alt={product.name}
									/>
								</ProductImage>
								<p style={{ textTransform: "capitalize" }}>{product.name}</p>
							</ProductCard>
						))}
					</SubCategoriesProducts>
				</SubCategoriesRight> */}
			</SubCategoriesContainer>
		</Skeleton>
	);
}

export default Subcategories;
