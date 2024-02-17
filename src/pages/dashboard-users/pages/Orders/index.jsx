import React, { useState } from "react";
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
import Item from "./Item";

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
import TransactionHistory, { TitleItems } from "./data";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import {
	setSearchText,
	SetFilteredOrders,
} from "../../../../features/user/userSlice";
import { useEffect } from "react";

const Index = () => {
	const finalRef = React.useRef(null);
	const dispatch = useDispatch();
	const { isLoading, filteredOrders, searchText, allOrders } = useSelector(
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
		dispatch(SetFilteredOrders());
	}, [searchText]);

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
	const TransactionItems = filteredOrders?.map((order) => {
		const colours = [
			{ color: "#fff", bg: "#12B76A" },
			{ color: "#000", bg: "#E5AE40" },
			{ color: "#F04438", bg: "#FEE4E2" },
		];

		let colour;

		if (order.status.toLowerCase().startsWith("rec")) {
			colour = colours[0];
		} else if (order.status.toLowerCase().startsWith("pen")) {
			colour = colours[1];
		} else {
			colour = colours[2];
		}

		return <Item order={order} colour={colour} />;
	});
	return (
		<Box
			position={{ lg: "absolute" }}
			width={{ lg: "calc(100vw - 250px)" }}
			top={{ lg: "6rem" }}
			left={{ lg: "240px" }}
			p={{ lg: "1rem 2rem" }}
		>
			<Title>My Orders</Title>
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
					{filteredOrders?.length < 1 ? (
						<Text
							mt={10}
							fontWeight={"bold"}
							fontSize={"1rem"}
							textAlign={"center"}
						>
							Sorry, No Orders To Display
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
