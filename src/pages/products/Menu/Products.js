import { useEffect, useState } from "react";
import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Grid,
	Text,
	Flex,
	Box,
	Button,
	Spinner,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Product from "../../../components/product/product";
import { setFilteredProducts } from "../../../features/products/productSlice";
import { useNavigate } from "react-router";
import { BiArrowBack } from "react-icons/bi";
import { setCategory } from "../../../features/categories/categoriesSlice";
function Products({ subCategories }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { products, selectedTab, filteredProducts, isLoading } = useSelector(
		(store) => store.products
	);
	const { category, data } = useSelector((store) => store.categories);
	const TabHead = data?.filter((item) => {
		for (let sub of category?.sub_categories) {
			if (Number(sub) === Number(item.id)) {
				return true;
			}
		}
	});

	if (isLoading) {
		return (
			<Flex
				justifyContent={"center"}
				alignItems={"center"}
				mt={{ base: "2rem", lg: "8rem" }}
			>
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
			</Flex>
		);
	}
	return (
		<Wrapper>
			<Button
				onClick={() => {
					navigate(-1);
				}}
				display={{ lg: "none" }}
				marginLeft={"-4"}
				marginTop={"-2"}
			>
				<Flex alignItems={"center"} gap={"1"}>
					<BiArrowBack fontSize={"1.5rem"} />
					<Text>Back</Text>
				</Flex>
			</Button>

			<Text
				fontSize={"lg"}
				fontWeight={"semibold"}
				textAlign={"center"}
				my={"1rem"}
				display={{ lg: "none" }}
			>
				{category?.name}
			</Text>

			<Tabs width={"100%"} defaultIndex={-1}>
				<TabList
					overflow={"scroll"}
					className="my-element"
					px={"1rem"}
					display={"flex"}
					gap={"1rem"}
				>
					{TabHead?.map((item, index) => {
						return (
							<Tab
								key={index}
								background={"#56585A"}
								color={"white"}
								_selected={{
									backgroundColor: "white",
									color: " #4E97FD",
									borderBottom: "5px solid  #4E97FD;",
								}}
								onClick={() => dispatch(setFilteredProducts(item.id))}
								// isSelected={selectedTab === index}
								width={"fit-content"}
							>
								{item?.name}
							</Tab>
						);
					})}
				</TabList>
			</Tabs>
			{filteredProducts.length < 1 ? (
				<Flex
					width={"100%"}
					height={"50vh"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Text
						textTransform={"capitalize"}
						fontSize={"1.3rem"}
						fontWeight={"bold"}
					>
						sorry no products to display
					</Text>
				</Flex>
			) : (
				<Grid className="menu" marginBlock={"2rem"}>
					{filteredProducts?.map((item, index) => (
						<Product item={item} />
					))}
				</Grid>
			)}
		</Wrapper>
	);
}
export default Products;

const Wrapper = styled.div`
	@media (min-width: 992px) {
		padding-block-start: 1rem;
	}
	.menu {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		border-radius: 10px;
		align-items: flex-start;
		margin-inline: auto;
		max-width: 800px;

		div {
			background: white;
		}
		@media (min-width: 96rem) {
			grid-template-columns: 1fr 1fr 1fr;
			max-width: 1400px;
		}
		@media (max-width: 60rem) {
			grid-template-columns: 1fr;
		}
	}
	/* Set the overflow to scroll */
	.my-element {
		overflow: scroll;
	}

	/* Target the vertical scrollbar */
	.my-element::-webkit-scrollbar {
		width: 1px; /* Set the width of the scrollbar */
		height: 6px; /* Set the height of the scrollbar */
	}

	/* Target the thumb of the vertical scrollbar */
	.my-element::-webkit-scrollbar-thumb {
		background-color: #4e97fd; /* Set the color of the thumb */
		border-radius: 5px; /* Set the radius of the thumb */
	}

	/* Target the track of the vertical scrollbar */
	.my-element::-webkit-scrollbar-track {
		background-color: #f1f1f1; /* Set the color of the track */
	}

	/* Target the horizontal scrollbar */
	.my-element::-webkit-scrollbar-horizontal {
		height: 1px; /* Set the height of the scrollbar */
	}

	/* Target the thumb of the horizontal scrollbar */
	.my-element::-webkit-scrollbar-thumb-horizontal {
		background-color: #ccc; /* Set the color of the thumb */
		border-radius: 5px; /* Set the radius of the thumb */
	}

	/* Target the track of the horizontal scrollbar */
	.my-element::-webkit-scrollbar-track-horizontal {
		background-color: #f1f1f1; /* Set the color of the track */
	}
`;
