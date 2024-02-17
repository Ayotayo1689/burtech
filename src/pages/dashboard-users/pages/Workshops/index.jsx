import React, { useState, useEffect } from "react";
import {
	Pages,
	Title,
	Tab,
	SearchField,
	AddButton,
	ProductTable,
	TableTitle,
	TableContent,
	TableButton,
	Image,
} from "../../styles/orders";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Product from "../../../../assests/d-product.png";
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
	transition,
} from "@chakra-ui/react";
import TransactionHistory, { TitleItems } from "./data";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import {
	setSearchText,
	SetFilteredWorkshops,
} from "../../../../features/user/userSlice";
const Index = () => {
	const finalRef = React.useRef(null);
	const dispatch = useDispatch();
	const { isLoading, filteredWorkshops, searchText } = useSelector(
		(store) => store.user
	);
	const updateFilter = (event) => {
		dispatch(setSearchText(event.target.value));
	};
	useEffect(() => {
		//clear search text on mount
		dispatch(setSearchText());
	}, []);
	useEffect(() => {
		dispatch(SetFilteredWorkshops());
	}, [searchText]);
	function formatDate(timestamp) {
		const date = new Date(timestamp);
		const day = date.getDate();
		const month = date.toLocaleString("en-US", { month: "short" });

		const year = date.getFullYear();

		return `${day} ${month}, ${year}`;
	}
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
	const workshopsItems = filteredWorkshops?.map((workshop) => {
		return <Item workshop={workshop} />;
	});
	return (
		<Box
			position={{ lg: "absolute" }}
			width={{ lg: "calc(100vw - 250px)" }}
			top={{ lg: "6rem" }}
			left={{ lg: "240px" }}
			p={{ lg: "1rem 2rem" }}
		>
			<Title>My Workshops</Title>
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
			<Tab ref={finalRef}>
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
					{filteredWorkshops?.length < 1 ? (
						<Text
							mt={10}
							fontWeight={"bold"}
							textAlign={"center"}
							fontSize={"1rem"}
						>
							Sorry No Workshops To Display
						</Text>
					) : (
						<TableContainer>
							<Table variant="striped">
								<Thead padding={"4rem"}>
									<Tr>{TableHeadings}</Tr>
								</Thead>

								<Tbody>{workshopsItems}</Tbody>
							</Table>
						</TableContainer>
					)}
				</Skeleton>
			</section>
		</Box>
	);
};

export default Index;
