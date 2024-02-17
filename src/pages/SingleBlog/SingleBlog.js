import { useState, useEffect } from "react";
import moment from "moment/moment";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
	Box,
	Grid,
	Image,
	Heading,
	Text,
	Flex,
	Skeleton,
} from "@chakra-ui/react";
import { createStandaloneToast } from "@chakra-ui/react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { getSingleBlog } from "../../features/blogs/blogsSlice";
import { FaCheck } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
const SingleBlog = () => {
	const dispatch = useDispatch();
	const { blogId } = useParams();
	const { blog, blogs, isLoading } = useSelector((store) => store.blogs);
	function renderListItemsFromText(text) {
		const regex = /\r\n\r\n|\r\n/;

		let newItem = text.split(regex);
		return newItem.map((item, index) => (
			<Text my={"2rem"} fontSize={"1.3rem"} key={index}>
				{item}
			</Text>
		));
	}
	useEffect(() => {
		dispatch(getSingleBlog(blogId));
	}, [blogId]);

	const navigate = useNavigate();
	function handleClick() {
		navigate(-1);
	}

	// console.log(blog);

	const md = `# This is a heading
## This is a subheading
### This is a sub-subheading

This is a paragraph. You can **bold** text or *italicize* text.

You can also create lists:
- Item 1
- Item 2
- Item 3

Or numbered lists:
1. First item
2. Second item
3. Third item`;
	return (
		<Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"}>
			<Box
				my={{ base: "2rem", md: "4rem" }}
				px={{ base: "1rem", md: "6rem" }}
				maxWidth={"1600px"}
				mx={"auto"}
			>
				<Box
					width={".1rem"}
					my={{ base: "1rem", md: "2rem" }}
					display={{ base: "none", md: "block" }}
				>
					<FaArrowAltCircleLeft onClick={handleClick} style={{ fontSize: '32px', cursor: 'pointer' }} />
				</Box>
				<Grid templateColumns={{ base: "1fr", md: "300px 1fr" }} gap={"7rem"}>
					<Flex
						direction={"column"}
						gap="4rem"
						display={{ base: "none", md: "block" }}
					>
						<Box>
							<Text
								as="h2"
								fontSize={"2xl"}
								fontWeight={"semibold"}
								mb={"1rem"}
							>
								Recent Articles
							</Text>
							{blogs.map((item) => {
								const { id, date_published, title } = item;
								return (
									<Link to={`/blog/${id}`}>
										<Box key={id} mb={6}>
											<Text fontWeight={"semibold"} fontSize={"md"} mb={2}>
												{title}
											</Text>
											<Text color={"#4688E4"}>
												{moment(date_published).format("MMMM Do YYYY, h:mm a")}
											</Text>
										</Box>
									</Link>
								);
							})}
						</Box>
					</Flex>

					<Box>
						<Flex direction={"column"}>
							{console.log(blog)}
							<Heading size="lg" fontWeight={"semibold"}>
								{blog?.title}
							</Heading>
							<Text my={"1rem"}>
								Published:{" "}
								{moment(blog?.date_published).format("MMMM Do YYYY, h:mm a")}{" "}
								{/* <Text display={"inline"} color="red">
									{" "}
									5 Comments{" "}
								</Text>{" "} */}
							</Text>
							<Image
								borderRadius="lg"
								objectFit="cover"
								src={blog?.image}
								alt="Caffe Latte"
								width={{ xl: "35vw" }}
								mx={"auto"}
								mt={"1rem"}
							/>

							<Text fontSize="md" my={"1.3rem"}>
								{renderListItemsFromText(
									blog?.content.replace(/\\n/g, "\n").replace(/\\r/g, "\r") ||
										""
								)}
							</Text>
						</Flex>

						{/* <Box mt={"1.5rem"}>
							<CommentSection />
						</Box> */}
					</Box>
				</Grid>
			</Box>
		</Skeleton>
	);
};

export default SingleBlog;
