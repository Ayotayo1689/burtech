import React, { useState, useEffect } from "react";
import { Pages, Title, Tab, SearchField, Image } from "../../styles/orders";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Flex,
	Text,
	Box,
	Skeleton,
} from "@chakra-ui/react";
import { TitleItems } from "./data";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import {
	setSearchText,
	SetFilteredQuotes,
} from "../../../../features/user/userSlice";
const Index = () => {
	const { allQuotes, isLoading, user, filteredQuotes, searchText } =
		useSelector((store) => store.user);
	const dispatch = useDispatch();
	const updateFilter = (event) => {
		dispatch(setSearchText(event.target.value));
	};
	useEffect(() => {
		//clear search text on mount
		dispatch(setSearchText());
	}, []);
	useEffect(() => {
		dispatch(SetFilteredQuotes());
	}, [searchText]);
	const [date, setDate] = useState(new Date());
	const TableHeadings = TitleItems.map((heading) => {
		return (
			<Th
				py={"1.1rem"}
				fontWeight={"bold"}
				key={heading.id}
				fontSize={"1.2rem"}
				textTransform={"capitalize"}
			>
				{heading.title}
			</Th>
		);
	});

	const TransactionItems = filteredQuotes.map((quote) => {
		const colours = [
			{ color: "#fff", bg: "#12B76A" },
			{ color: "#000", bg: "#E5AE40" },
			{ color: "#F04438", bg: "#FEE4E2" },
		];

		let colour;

		if (quote.status.toLowerCase().startsWith("rec")) {
			colour = colours[0];
		} else if (quote.status.toLowerCase().startsWith("pen")) {
			colour = colours[1];
		} else {
			colour = colours[2];
		}

		return <Item quote={quote} colour={colour} />;
	});
	return (
		<Box
			position={{ lg: "absolute" }}
			width={{ lg: "calc(100vw - 250px)" }}
			top={{ lg: "6rem" }}
			left={{ lg: "240px" }}
			p={{ lg: "1rem 2rem" }}
		>
			<Title>My Quotes</Title>
			{/* <Pages>
				<Breadcrumb
					spacing="8px"
					separator={<ChevronRightIcon color="gray.500" />}
				>
					<BreadcrumbItem isCurrentPag>
						<BreadcrumbLink href="#">Home</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</Pages> */}
			<Tab>
				<div className="right">
					{/* <span>Show 10</span>
					<MdKeyboardArrowDown />
					<span>Entries</span> */}
				</div>
				<div className="left">
					<form onSubmit={(e) => e.preventDefault()}>
						<SearchField>
							<input
								type="text"
								placeholder="Search..."
								value={searchText}
								onChange={updateFilter}
							/>
							<FaSearch />
						</SearchField>
					</form>
				</div>
			</Tab>

			<section className="transactions">
				<Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"}>
					{filteredQuotes?.length < 1 ? (
						<Text
							mt={10}
							fontWeight={"bold"}
							fontSize={"1rem"}
							textAlign={"center"}
						>
							Sorry, No Quotes To Display
						</Text>
					) : (
						<TableContainer>
							<Table variant="striped">
								<Thead padding={"4rem"}>
									<Tr>{TableHeadings}</Tr>
								</Thead>

								<Tbody>{TransactionItems}</Tbody>
							</Table>
						</TableContainer>
					)}
				</Skeleton>
			</section>
		</Box>
	);
};

export default Index;
