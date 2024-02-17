import React, { useEffect } from "react";
import moment from "moment/moment";

import {
	Skeleton,
	Box,
	Grid,
	Image,
	Heading,
	Text,
	Stack,
	ButtonGroup,
	SimpleGrid,
	Input,
	Flex,
	CheckboxGroup,
	Checkbox,
	InputGroup,
	InputRightElement,
	createStandaloneToast,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Newsletter from "../../components/Newsletter";
import BackgroundImg from "../../assests/worshop/careersbg.png";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchText } from "../../features/blogs/blogsSlice";
import { SetFilteredBlogs } from "../../features/blogs/blogsSlice";

const Blog = () => {
	const { toast } = createStandaloneToast();
	const dispatch = useDispatch();

	const { blogs, isLoading, filteredBlogs, searchText } = useSelector(
		(store) => store.blogs
	);
	// console.log(blogs)
	const updateFilter = (event) => {
		dispatch(setSearchText(event.target.value));
	};
	useEffect(() => {
		//clear search text on mount

		dispatch(setSearchText());
	}, []);
	useEffect(() => {
		dispatch(SetFilteredBlogs());
	}, [searchText]);
	return (
		<>
			<Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"}>
				<Box
					my={{ base: "0rem", lg: "3rem" }}
					mb={{ base: "1.5rem" }}
					background="#f2f4fa"
					paddingBlockEnd={{ lg: "5rem" }}
				>
					<Box>
						<Section>
							<Text
								fontSize={"2.7rem"}
								textAlign={"center"}
								fontWeight={"semibold"}
								color={"white"}
							>
								Blogs
							</Text>
						</Section>
					</Box>
					<Grid
						templateColumns={{ base: "1fr", lg: "300px 1fr" }}
						gap={"6rem"}
						px={{ base: "1.5rem", md: "6rem" }}
						maxWidth={"1600px"}
						mx={"auto"}
					>
						<Flex
							direction={"column"}
							gap="2rem"
							display={{ base: "none", lg: "block" }}
						>
							<Flex>
								<div className="left">
									<form onSubmit={(e) => e.preventDefault()}>
										<InputGroup>
											<Input
												placeholder="Search..."
												type="text"
												value={searchText}
												onChange={updateFilter}
											/>
											<InputRightElement children={<FaSearch />} />
										</InputGroup>
									</form>
								</div>
							</Flex>
							<Box>
								<Text
									as="h2"
									fontSize={"2xl"}
									fontWeight={"semibold"}
									mb={"1rem"}
								>
									Recent Articles
								</Text>
								{blogs.slice(0, 4).map((item) => {
									const { id, date_published, title } = item;
									return (
										<Link to={`/blog/${id}`}>
											<Box key={id} mb={6}>
												<Text fontWeight={"semibold"} fontSize={"md"} mb={2}>
													{title}
												</Text>
												<Text color={"#4688E4"}>
													{moment(date_published).format(
														"MMMM Do YYYY, h:mm a"
													)}
												</Text>
											</Box>
										</Link>
									);
								})}
							</Box>
							<Box>
								<Text
									as="h4"
									fontSize={"2xl"}
									fontWeight={"semibold"}
									mb={"1rem"}
								>
									Categories
								</Text>
								<CheckboxGroup
									colorScheme="blue"
									defaultValue={["Reviews", "Maintenance"]}
								>
									<Stack spacing={[1, 5]} direction={["column", "column"]}>
										<Checkbox value="Reviews">Reviews</Checkbox>
										<Checkbox value="Maintenance">Maintenance </Checkbox>
									</Stack>
								</CheckboxGroup>
							</Box>
						</Flex>
						<SimpleGrid
							spacing={"3rem"}
							templateColumns={{
								base: "1fr",
								lg: "1fr 1fr",
								"2xl": "1fr 1fr 1fr ",
							}}
						>
							{filteredBlogs.map((item) => {
								const {
									image,
									title,
									id,
									content,
									author_name,
									date_published,
								} = item;
								return (
									<Link to={`/blog/${id}`}>
										<Flex
											maxW="sm"
											overflow="hidden"
											variant="outline"
											padding={"0rem"}
											direction={"column"}
											key={id}
											w={"100%"}
										>
											<Flex direction={"column"}>
												<Box w={"100%"} h={"200px"}>
													<Image
														borderRadius="lg"
														objectFit="cover"
														src={image}
														alt="Caffe Latte"
														w={"100%"}
														h={"100%"}
													/>
												</Box>
												<Stack mt="6" spacing="3">
													<Heading size="md" fontWeight={"semibold"}>
														{title}
													</Heading>
													<Flex gap={1}>
														<Text color="#4688E4" fontSize="md">
															By
														</Text>
														<Text color="#929292" textTransform={"capitalize"}>
															{author_name}
														</Text>
														<Text
															fontSize="md"
															display={"inline"}
															color={"black"}
														>
															/{" "}
															{moment(date_published).format(
																"MMMM Do YYYY, h:mm a"
															)}
														</Text>
													</Flex>

													<Text>{`${content.slice(0, 200)}...`}</Text>
												</Stack>
											</Flex>
											<Box mt={"1.5rem"}>
												<ButtonGroup spacing="2">
													<LinkButton to={`/blog/${id}`}>Read now</LinkButton>
												</ButtonGroup>
											</Box>
										</Flex>
									</Link>
								);
							})}
						</SimpleGrid>
					</Grid>
				</Box>
				{/* Newletter */}
				<Newsletter />
			</Skeleton>
		</>
	);
};

export default Blog;
const Section = styled.section`
	background: white;
	width: 100%;
	background: linear-gradient(0deg, rgba(2, 19, 38, 0.8), rgba(2, 19, 38, 0.8)),
		url(${BackgroundImg});
	background-size: cover;
	background-position: center;
	padding: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 8vh;
	margin-bottom: 3rem;
`;
const LinkButton = styled(Link)`
	background: #4e97fd;

	display: flex;
	align-items: center;
	text-decoration: none;
	color: white;
	font-size: 16px;
	padding: 0.7rem 1rem;
	border-radius: 10px;
	&:hover {
		cursor: pointer;
	}
`;
