import { Box, Heading, Skeleton } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Products = ({ items, query, isLoading }) => {
	// const newItems = items?.filter((item) =>
	// 	item.name.toLowerCase().startsWith(query.toLowerCase())
	// );
	// if (newItems.length < 1) {
	// 	return <Heading>NO items Matches your search</Heading>;
	// }

	return (
		<Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"}>
			<Box>
				{items?.map((result, key) => {
					<Link to={`/product-details/${result.id}`} key={key}>
						{result.name.slice(0, 25)}
					</Link>;
				})}
			</Box>
		</Skeleton>
	);
};

export default Products;
