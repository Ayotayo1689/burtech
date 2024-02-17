import React, { useState } from "react";
import ReactDOM from "react-dom";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, connectSearchBox, Hits } from "react-instantsearch-dom";
import { FaSearch, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
	Input,
	Flex,
	Box,
	Text,
} from "@chakra-ui/react";

const SearchBox = connectSearchBox(({ currentRefinement, refine }) => (
	<input
		type="text"
		value={currentRefinement}
		onChange={(event) => refine(event.currentTarget.value)}
		placeholder="
		Search Burtech"
	/>
));

export function SearchModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [query, setQuery] = useState("");

	const handleQueryChange = (event) => {
		event.preventDefault();
		setQuery(event.currentTarget.value);
		onOpen();
	};

	const handleClose = () => {
		setQuery("");
		onClose();
	};

	return (
		<>
			<SearchBox currentRefinement={query} refine={setQuery} />
			<button onClick={handleQueryChange} type="submit">
				<FaSearch />
			</button>
			<Modal
				isOpen={isOpen}
				onClose={handleClose}
				size={{ base: "sm", lg: "3xl", "2xl": "5xl" }}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Search Results</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Hits
							hitComponent={(hit) => (
								<Result {...hit} handleClose={handleClose} />
							)}
							handleClose={onClose}
						/>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}

function Result({ hit, handleClose }) {
	console.log(hit);
	switch (hit.type) {
		case "products":
			return (
				<Box onClick={handleClose}>
					<Text
						rounded={"md"}
						px={"1"}
						py={"1"}
						mb={"2"}
						width={"fit-content"}
						textTransform={"capitalize"}
						shadow={"md"}
						bg={"#4688E4"}
						color={"white"}
					>
						{hit.type}
					</Text>
					<Link my={".3rem"} to={`/product-details/${hit.id}`}>
						<Text color="#4688E4" textDecoration={"underline"}>
							{hit.name}
						</Text>
					</Link>
					<Text my={".4rem"}>{`${hit.description}...`}</Text>
				</Box>
			);
			break;
		case "workshops":
			return (
				<Box onClick={handleClose}>
					<Text
						rounded={"md"}
						px={"1"}
						py={"1"}
						mb={"2"}
						width={"fit-content"}
						textTransform={"capitalize"}
						shadow={"md"}
						bg={"#4688E4"}
						color={"white"}
					>
						{hit.type}
					</Text>
					<Link my={".3rem"} to={`/workshop-details/${hit.id}`}>
						<Text color="#4688E4" textDecoration={"underline"}>
							{hit.name}
						</Text>
					</Link>
					<Text my={".4rem"}>{`${hit.description.slice(0, 150)}...`}</Text>
				</Box>
			);
			break;
		case "subcategories":
			return (
				<Box onClick={handleClose}>
					<Text
						rounded={"md"}
						px={"1"}
						py={"1"}
						mb={"2"}
						width={"fit-content"}
						textTransform={"capitalize"}
						shadow={"md"}
						bg={"#4688E4"}
						color={"white"}
					>
						{hit.type}
					</Text>
					<Link my={".3rem"} to={`/sub-categories/${hit.id}`}>
						<Text color="#4688E4" textDecoration={"underline"}>
							{hit.name}
						</Text>
					</Link>
					<Text my={".4rem"}>{`${hit.description.slice(0, 150)}...`}</Text>
				</Box>
			);
			break;
		case "blogs":
			return (
				<Box onClick={handleClose}>
					<Text
						rounded={"md"}
						px={"1"}
						py={"1"}
						mb={"2"}
						width={"fit-content"}
						textTransform={"capitalize"}
						shadow={"md"}
						bg={"#4688E4"}
						color={"white"}
					>
						{hit.type}
					</Text>
					<Link my={".3rem"} to={`/singleBlog/${hit.id}`}>
						<Text color="#4688E4" textDecoration={"underline"}>
							{hit.name}
						</Text>
					</Link>
					<Text my={".4rem"}>{`${hit.description.slice(0, 150)}...`}</Text>
				</Box>
			);
			break;
		default:
			return <Box display={"none"}></Box>;
			break;
	}
}
