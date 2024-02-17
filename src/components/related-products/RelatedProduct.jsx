import React from "react";
import { ProductBox, ProductLink } from "./style";
import { FaArrowRight } from "react-icons/fa";
import Phoenix from "../../assests/phoenix-removebg.png";

import axiosInstance from "../../utils/axios";
import { useState } from "react";
import { useEffect } from "react";
import { Skeleton, createStandaloneToast } from "@chakra-ui/react";
const RelatedProduct = ({ id }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [item, setItem] = useState({});
	const { toast } = createStandaloneToast();

	useEffect(() => {
		const fetchItem = async () => {
			setIsLoading(true);
			try {
				const resp = await axiosInstance.get(`/products/${id}/`);
				setItem(resp.data);
			} catch (error) {
				toast({
					title: "An error occurred",
					description: "please try again",
					status: "error",
					duration: 5000,
					isClosable: true,
					variant: "left-accent",
					position: "top",
				});
			}
			setIsLoading(false);
		};
		fetchItem();
	}, []);

	return (
		<Skeleton
			isLoaded={!isLoading}
			fadeDuration={1}
			rounded={"xl"}
			w="100%"
			key={id}
		>
			<ProductBox to={`/product-details/${id}`}>
				<img src={item?.main_image} alt={item?.name} />
				<h4>{item?.name}</h4>
				<p>{`${item?.description?.slice(0, 100)}.....`}</p>
				<ProductLink to={`/product-details/${id}`}>
					View Product <FaArrowRight />
				</ProductLink>
			</ProductBox>
		</Skeleton>
	);
};

export default RelatedProduct;
