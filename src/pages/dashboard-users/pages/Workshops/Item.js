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
	getAllWorkshops,
	SetFilteredWorkshops,
} from "../../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Item = ({ workshop }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const { user } = useSelector((store) => store.user);
	const { toast } = createStandaloneToast();
	function formatDate(timestamp) {
		const date = new Date(timestamp);
		const day = date.getDate();
		const month = date.toLocaleString("en-US", { month: "short" });

		const year = date.getFullYear();

		return `${day} ${month}, ${year}`;
	}
	const deleteQoute = async () => {
		setIsLoading(true);
		try {
			const resp = await axiosInstance.delete(`/enrollments/${workshop.id}/`);
			toast({
				title: "Success",
				description: "workshop deleted",
				status: "info",
				duration: 3000,
				isClosable: true,
				position: "top",
				variant: "left-accent",
			});
			dispatch(getAllWorkshops(user?.user_id || ""));
			dispatch(SetFilteredWorkshops());
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
		<Tr key={workshop.id} fontSize={"1rem"} fontWeight={500}>
			<Td>
				<Text>{workshop?.title}</Text>
			</Td>
			<Td>
				<Text>{formatDate(workshop?.datetime || "")}</Text>
			</Td>

			<Td>
				<Text>9am-11am</Text>{" "}
			</Td>
			<Td>
				<Text>{workshop?.duration}</Text>
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
