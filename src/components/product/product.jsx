import React from "react";
import { ProductBox, ProductLink } from "./style";
import { FaArrowRight } from "react-icons/fa";

const Product = ({ item, desc }) => {
	return (
		<ProductBox to={`/product-details/${item?.id}`} key={item.id}>
			<img src={item?.main_image} alt="Phoenix" />
			<h4>{item?.name}</h4>
			{desc && <p>{`${item?.description.slice(0, 100)}.....`}</p>}
			<ProductLink to={`/product-details/${item?.id}`}>
				View Product <FaArrowRight />
			</ProductLink>
		</ProductBox>
	);
};

export default Product;
