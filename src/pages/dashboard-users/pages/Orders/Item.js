import {
	Tr,
	Td,
	Flex,
	Text,
	createStandaloneToast,
	Spinner,
} from "@chakra-ui/react";
import { Image } from "../../styles/orders";

import { RiDeleteBin5Line } from "react-icons/ri";
import axiosInstance from "../../../../utils/axios";
import {
	getAllOrders,
	SetFilteredOrders,
} from "../../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Item = ({ order, colour }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const { user } = useSelector((store) => store.user);
	const { toast } = createStandaloneToast();

	const deleteQoute = async () => {
		setIsLoading(true);
		try {
			const resp = await axiosInstance.delete(`/orders/${order.id}/`);
			toast({
				title: "Success",
				description: "order deleted",
				status: "info",
				duration: 3000,
				isClosable: true,
				position: "top",
				variant: "left-accent",
			});
			dispatch(getAllOrders(user?.user_id || ""));
			setTimeout(() => {
				dispatch(SetFilteredOrders());
			}, 1000);
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
	return (
		<Tr key={order.id} fontSize={"1rem"} fontWeight={500}>
			<Td>
				<Image src={order?.product_image} />
			</Td>
			<Td>
				{/* <Image src={Product} /> */}
				<Text>{order?.product_name}</Text>
			</Td>
			<Td textAlign={"center"}>
				<Text
					color={colour.color}
					rounded={"md"}
					bg={colour.bg}
					p={"0.2rem"}
					py={".6rem"}
					textTransform={"capitalize"}
					fontWeight={"normal"}
				>
					{order.status}
				</Text>{" "}
			</Td>
			<Td>
				<Flex gap={".5rem"}>
					<Text>{order.date_ordered}</Text>
				</Flex>
			</Td>

			{/* <Td>
					<TableButton>
						Info <IoMdArrowDropdown />
					</TableButton>
				</Td> */}
			<Td>
				<p className="red">
					{isLoading ? (
						<Spinner
							thickness="4px"
							speed="0.65s"
							emptyColor="gray.200"
							color="red.500"
							size="lg"
						/>
					) : (
						<RiDeleteBin5Line
							color="red"
							fontSize={"2rem"}
							onClick={deleteQoute}
						/>
					)}
				</p>
			</Td>
		</Tr>
	);
};

export default Item;
