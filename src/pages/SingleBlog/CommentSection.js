import React, { useState, useEffect } from "react";
import {
	Box,
	Flex,
	Avatar,
	Text,
	Textarea,
	Button,
	Spacer,
	Input,
	IconButton,
	Heading,
	Grid,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import Comment from "./Comment";

// The main component to render the comment section
const CommentSection = () => {
	const [comments, setComments] = useState([]); // state to store the comments of the blog post

	const [commentContent, setCommentContent] = useState({
		fullName: "",
		email: "",
		comment: "",
	}); // state to store input value of new comment

	const [loading, setLoading] = useState(false); // state to indicate whether comment is being posted or not
	// A mock function to post a comment or reply to an API
	const postComment = (comment) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(comment);
			}, 500);
		});
	};
	// A mock function to fetch comments from an API
	const fetchComments = () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						id: 1,
						author: "Alice",
						content: "This is a great blog post! dkslsd  slkd s dlk s",
						replies: [],
						date: "14 oct 2020",
					},
					{
						id: 4,
						author: "David",
						content: "This is a terrible blog post! ssk dslk slkd jslk s ",
						replies: [],
						date: "14 oct 2020",
					},
				]);
			}, 1000);
		});
	};

	useEffect(() => {
		fetchComments().then((data) => setComments(data));
	}, []);

	const handleCommentChange = (e) => {
		setCommentContent({ ...commentContent, [e.target.name]: e.target.value });
		console.log(commentContent);
	};

	const handleCommentSubmit = async () => {
		if (commentContent.comment.trim()) {
			setLoading(true);
			const newComment = {
				id: Math.floor(Math.random() * 1000),
				author: "You",
				content: commentContent.comment.trim(),
				replies: [],
				date: "14 oct 2929",
			};
			const postedComment = await postComment(newComment);
			setComments([postedComment, ...comments]);
			setLoading(false);
			setCommentContent("");
		}
	};
	return (
		<Box mx="auto" my="4">
			<Text>
				Comments:{" "}
				{comments.length < 10 ? `0${comments.length}` : comments.length}
			</Text>
			<Flex direction={"column"} gap={8} my={"8"}>
				{comments.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
			</Flex>
			<Text fontSize={"lg"} fontWeight={"semibold"}>
				Leave a reply
			</Text>
			<Flex mt={4} direction={"column"} gap={8}>
				<Flex gap={6}>
					<Input
						name="fullName"
						value={commentContent.fullName}
						onChange={handleCommentChange}
						placeholder="Full name"
					/>
					<Input
						name="email"
						value={commentContent.email}
						onChange={handleCommentChange}
						placeholder="Email Address"
					/>
				</Flex>
				<Textarea
					name="comment"
					value={commentContent.comment}
					onChange={handleCommentChange}
					placeholder="Write your comment here..."
					height={"20vh"}
				/>
				<Button
					ml={2}
					isLoading={loading}
					onClick={handleCommentSubmit}
					width={"20%"}
					bg={"#4E97FD"}
					color={"white"}
				>
					Submit
				</Button>
			</Flex>
		</Box>
	);
};

export default CommentSection;
