import React from "react";
import {
	Box,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Flex,
	Text,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";

const Address = () => {
	const { offices } = useSelector((store) => store.offices);
	const { biodatas } = useSelector((store) => store.biodata);

	return (
		<Box>
			<Text fontSize={"1.4rem"} fontWeight={"semibold"}>
				Contact us
			</Text>
			<Text mb={"2rem"}>
				We are located in Strategic Cities all over Nigeria
			</Text>
			<Flex direction={"column"} gap={5}>
				<Flex gap={3} alignItems={"start"}>
					<Flex alignItems={"center"} gap={2}>
						<HiLocationMarker color={"#4688E4"} fontSize={"1.5rem"} />
						<Text fontWeight={"semibold"}>Address</Text>
					</Flex>

					<Text padding={0}>
						{offices?.map((item, index) => {
							return <p key={index}>{item?.address}</p>;
						})}
					</Text>
				</Flex>
				<Flex gap={3}>
					<Flex alignItems={"center"} gap={2}>
						<IoCall color="#4688E4" fontSize={"1.5rem"} />
						<Text fontWeight={"semibold"}>Call Us</Text>
					</Flex>
					<Flex
						direction={{ base: "column", lg: "row" }}
						mb={2}
						gap={{ base: 2, lg: 6 }}
					>
						{biodatas?.phone_numbers?.map((item, index) => {
							return (
								<p style={{ cursor: "pointer" }} key={index}>
									<a href={`tel:${item}`}> {item}</a>
								</p>
							);
						})}
					</Flex>
				</Flex>
				<Flex gap={3}>
					<Flex alignItems={"center"} gap={2}>
						<MdEmail color="#4688E4" fontSize={"1.5rem"} />
						<Text fontWeight={"semibold"}>Email</Text>
					</Flex>
					<Text>{biodatas?.sales_email} </Text>
				</Flex>
			</Flex>
			{/* <Box my={"2rem"}>
				<Text fontSize={"1.4rem"} fontWeight={"semibold"}>
					Our Locations
				</Text>
				<Text>We are located in Strategic Cities all over Nigeria</Text>
			</Box>
			<Accordion allowToggle width={"60%"}>
				<AccordionItem border={"none"} boxShadow="base" rounded="xl" mb={2}>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Lagos Office
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						4, Alhaji Adejumo Avenue, Ilupeju Industrial Scheme, Off-Barracks
						Bus stop, Off Anthony-Oshodi Expressway, Lagos.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem border={"none"} boxShadow="base" rounded="xl" mb={2}>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Abuja Office
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						38, Port Harcourt Crescent, Area 11, Garki, Abuja.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem border={"none"} boxShadow="base" rounded="xl" mb={2}>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Owerri Office
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						Block 3, Achike Udenwa Avenue, New Owerri, Imo State.
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem border={"none"} boxShadow="base" rounded="xl" mb={2}>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								Kano Office
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4}>
						30, Airport Road, opp. Eldorado Cinema, Kano.
					</AccordionPanel>
				</AccordionItem>
			</Accordion> */}
		</Box>
	);
};

export default Address;
