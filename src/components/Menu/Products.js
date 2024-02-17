import { Tabs, TabList, Tab, Grid, Flex, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Product from "../product";
import { setFilteredProducts } from "../../features/products/productSlice";

function Products() {
	const dispatch = useDispatch();
	const { filteredProducts } = useSelector((store) => store.products);

	const { category, data } = useSelector((store) => store.categories);
	const TabHead = data?.filter((item) => {
		for (let sub of category?.sub_categories) {
			if (Number(sub) === Number(item.id)) {
				return true;
			}
		}
	});

	return (
		<Wrapper>
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
					<Heading
						textTransform={"capitalize"}
						fontSize={"1.3rem"}
						fontWeight={"bold"}
						as={"h5"}
					>
						sorry no products to display
					</Heading>
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
	/* Set the overflow to scroll */
	max-width: 1400px;
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
	.my-element {
		overflow: scroll;
	}

	/* Target the vertical scrollbar */
	.my-element::-webkit-scrollbar {
		width: 1px; /* Set the width of the scrollbar */
		height: 3px; /* Set the height of the scrollbar */
	}

	/* Target the thumb of the vertical scrollbar */
	.my-element::-webkit-scrollbar-thumb {
		background-color: #ccc; /* Set the color of the thumb */
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
