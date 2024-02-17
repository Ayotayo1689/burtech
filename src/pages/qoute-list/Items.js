import React from "react";
import {
	QuoteProducts,
	ProductImage,
	ProductQuantity,
	DeleteQuoteItem,
	ProductImageWrapper,
} from "./style";
import AmountButtons from "./AmountButtons";
import { useSelector, useDispatch } from "react-redux";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { removeCartItem } from "../../features/cart/cartSlice";

const Items = ({ productImage }) => {
	const dispatch = useDispatch();
	const { cart } = useSelector((store) => store.cart);
	const [isMobileDevice] = useMediaQuery("(max-width: 920px)");
	if (cart.length < 1) {
		return (
			<Flex justifyContent={"center"}>
				<Text
					fontWeight={"extrabold"}
					fontSize={{ base: "1rem", lg: "1.5rem" }}
				>
					Sorry No Items In Your Cart
				</Text>
			</Flex>
		);
	}
	return (
		<Box paddingInline={{ lg: "4rem" }}>
			{cart?.map((item, key) => {
				return (
					<QuoteProducts key={key}>
						<ProductImage>
							<ProductImageWrapper>
								<img src={item.image} />
							</ProductImageWrapper>
							<h6>{item.name}</h6>
						</ProductImage>
						<ProductQuantity>
							{/* <NumberInput defaultValue={1} min={1}>
									<NumberInputField />
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput> */}
							<AmountButtons amount={item.amount} id={item.id}></AmountButtons>
							{isMobileDevice && (
								<Button
									onClick={() => {
										dispatch(removeCartItem(item.id));
									}}
								>
									<DeleteIcon color="#4688e4" marginRight={"0.3rem"} />
								</Button>
							)}
							{!isMobileDevice && (
								<DeleteQuoteItem>
									<Button
										onClick={() => {
											dispatch(removeCartItem(item.id));
										}}
									>
										<DeleteIcon color="#4688e4" marginRight={"0.3rem"} />
										<span>Remove Item</span>
									</Button>
								</DeleteQuoteItem>
							)}
						</ProductQuantity>
					</QuoteProducts>
				);
			})}
		</Box>
	);
};

export default Items;
