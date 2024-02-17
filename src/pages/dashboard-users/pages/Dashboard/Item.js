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
import { getAllUserQuotes } from "../../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Item = ({ quote, colour }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const { user } = useSelector((store) => store.user);
	const { toast } = createStandaloneToast();

	const deleteQoute = async () => {
		setIsLoading(true);
		try {
			const resp = await axiosInstance.delete(`/quotations/${quote.id}/`);
			toast({
				title: "Success",
				description: "quote deleted",
				status: "info",
				duration: 3000,
				isClosable: true,
				position: "top",
				variant: "left-accent",
			});
			dispatch(getAllUserQuotes(user?.user_id || ""));
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
		<Tr key={quote.id} fontSize={"1rem"} fontWeight={500}>
			<Td>
				<Image src={quote?.product_image} />
			</Td>
			<Td>
				<Text>{quote?.product_name}</Text>
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
					{quote?.status}
				</Text>{" "}
			</Td>
			<Td>
				<Flex gap={".5rem"}>
					{/* <Text>{quote.date}</Text> */}
					<Text>{quote?.date}</Text>
				</Flex>
			</Td>
			{/* 
				<Td>
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
