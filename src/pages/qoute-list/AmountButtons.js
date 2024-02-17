import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { toggleCartItemAmount } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Text, Button } from "@chakra-ui/react";
const AmountButtons = ({ amount, id }) => {
	const dispatch = useDispatch();
	return (
		<Wrapper className="amount-btns">
			<Button
				className="amount-btn"
				type="button"
				onClick={() => {
					dispatch(toggleCartItemAmount({ id, value: "dec" }));
				}}
			>
				<FaMinus />
			</Button>
			<Text fontSize={"1.4rem"} fontWeight={"bold"}>
				{amount}
			</Text>
			<Button
				type="button"
				className="amount-btn"
				onClick={() => {
					dispatch(toggleCartItemAmount({ id, value: "inc" }));
				}}
			>
				<FaPlus />
			</Button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;
	@media (max-width: 900px) {
		display: flex;
	}
	h2 {
		margin-bottom: 0;
	}
	button {
		background: transparent;
		border-color: transparent;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	h2 {
		margin-bottom: 0;
	}
`;

export default AmountButtons;
