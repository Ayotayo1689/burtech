import React from "react";
import {
	Container,
	Buttons,
	ButtonItem,
	Title,
	ProductName,
	AddButton,
	Price,
} from "./style";
import { Flex, Box, Image, createStandaloneToast } from "@chakra-ui/react";
import axiosInstance from "../../utils/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
const Item = ({ item, index }) => {
	const { toast } = createStandaloneToast();

	const [isLoading, setIsLoading] = useState(false);
	const { user } = useSelector((store) => store.user);
	const navigate = useNavigate();
	const formatPrice = (number) => {
		const newNumber = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "NGN",
		}).format(number);
		return newNumber;
	};
	const makeOrder = async (info) => {
		if (!user) {
			return toast({
				title: "Error",
				description: "You must be Signed in",
				status: "error",
				duration: 4000,
				isClosable: true,
				position: "top",
				variant: "left-accent",
			});
		}
		try {
			setIsLoading(true);
			const date = new Date();
			const year = date.getFullYear();
			const month = (date.getMonth() + 1).toString().padStart(2, "0");
			const day = date.getDate().toString().padStart(2, "0");
			const formattedDate = `${year}-${month}-${day}`;
			const response = await axiosInstance.post(`/orders/`, {
				user: user?.user_id,

				id: info.productId,
				date_ordered: formattedDate,
				status: "pending",
				special_offers: info.productId,
				product: info.productId,
			});
			toast({
				title: "Success!",
				description: "Added to Order list",
				status: "info",
				duration: 4000,
				isClosable: true,
				position: "top",
				variant: "left-accent",
			});
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);

			toast({
				title: "Error",
				description: "Please try again",
				status: "error",
				duration: 4000,
				isClosable: true,
				position: "top",
				variant: "left-accent",
			});

			console.error(error);
		}
	};

	return (
		<Container key={index}>
			<Buttons>
				<ButtonItem className="sale">Sale</ButtonItem>
				<ButtonItem className="percent">{item?.percentage_off}% off</ButtonItem>
			</Buttons>
			<Box my={"1rem"}>
				<Image
					src={item?.image}
					alt={item?.description}
					width={"10rem"}
					height={"10rem"}
				/>
			</Box>
			<Flex direction={"column"} alignItems={"center"} gap={".5rem"}>
				<ProductName>{item?.description}</ProductName>
				<Price>
					{formatPrice(item?.price)}{" "}
					<span> {formatPrice(item?.price * 1.5)}</span>{" "}
				</Price>
				<AddButton
					isLoading={isLoading}
					bg={"#4688E4"}
					onClick={() => {
						makeOrder({ productId: item.id });
					}}
				>
					Add to Order List
				</AddButton>
			</Flex>
		</Container>
	);
};

export default Item;
