import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Flex,
	Text,
} from "@chakra-ui/react";
import { Image } from "../dashboard-users/styles/orders";
import QouteModal from "./QouteModal";

const Model = ({ modelID, image, name, productId }) => {
	return (
		<TableContainer borderBottom="1px solid gray" py={"1rem"}>
			<Table variant="unstyled">
				<Thead padding={"4rem"}>
					<Tr>
						<Th
							py={".6rem"}
							fontWeight={"bold"}
							fontSize={"1rem"}
							textTransform={"capitalize"}
						>
							Product{" "}
						</Th>
						<Th
							py={".6rem"}
							fontWeight={"bold"}
							fontSize={"1rem"}
							textTransform={"capitalize"}
						>
							Details{" "}
						</Th>
					</Tr>
				</Thead>

				<Tbody>
					<Tr fontSize={"1rem"} fontWeight={500}>
						<Td>
							<Flex
								alignItems={"center"}
								gap={"1rem"}
								direction={{ base: "column", lg: "row" }}
							>
								<Image src={image} />
								<Text>
									{" "}
									Model: <span className="red-font">{modelID} </span>{" "}
								</Text>
							</Flex>
						</Td>
						<Td>
							<Flex direction={"column"}>
								<Text fontWeight={"normal"}>Maximum Capacity: 00.0 </Text>
								<Text fontWeight={"normal"}> Readability: 00.0</Text>
							</Flex>
						</Td>
						<Td>
							<QouteModal
								modelID={modelID}
								name={name}
								productId={productId}
							></QouteModal>
						</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};
export default Model;
