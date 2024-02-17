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
// A custom component to render a single comment

const Comment = ({ comment }) => {
	const [showReplyBox, setShowReplyBox] = useState(false); // state to show or hide the reply box
	const [replyContent, setReplyContent] = useState(""); // state to store the reply content
	const [replies, setReplies] = useState(
		comment.replies ? comment.replies : []
	); // state to store the replies of the comment

	// A mock function to post a comment or reply to an API
	const postComment = (comment) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(comment);
			}, 500);
		});
	};
	// A function to handle the reply button click
	const handleReplyClick = () => {
		setShowReplyBox(!showReplyBox); // toggle the reply box visibility
		setReplyContent(""); // clear the reply content
	};

	// A function to handle the reply submit button click
	const handleReplySubmit = async () => {
		if (replyContent.trim()) {
			// if there is some reply content
			const newReply = {
				// create a new reply object with a random id and the current user name
				id: Math.floor(Math.random() * 1000),
				author: "You",
				content: replyContent.trim(),
				date: "14 oct 2020",
			};
			const postedReply = await postComment(newReply); // post the new reply to the API and get the response
			setReplies([...replies, postedReply]); // update the replies state with the new reply
			setShowReplyBox(false); // hide the reply box
			setReplyContent(""); // clear the reply content
		}
	};

	// A function to handle the reply content change
	const handleReplyChange = (e) => {
		setReplyContent(e.target.value); // update the reply content state with the input value
	};

	return (
		<Box p={4} borderWidth={0} borderRadius={8}>
			<Grid templateColumns="60px 1fr" alignItems={"flex-start"}>
				<Flex align="center">
					<Avatar name={comment.author} />
				</Flex>
				<Flex direction={"column"} alignItems={"flex-start"}>
					<Text fontWeight="bold">{comment.author}</Text>
					<Text>{comment.date}</Text>

					<Text mt={2}>{comment.content}</Text>

					<Text mt={2} size="sm" onClick={handleReplyClick} color={"red"}>
						{showReplyBox ? "Cancel" : "Reply"}
					</Text>
					{showReplyBox && (
						<Box mt={2}>
							<Textarea
								value={replyContent}
								onChange={handleReplyChange}
								placeholder="Write your reply here..."
							/>
							<Button mt={2} colorScheme="green" onClick={handleReplySubmit}>
								Submit
							</Button>
						</Box>
					)}
					{replies.length > 0 && (
						<Box mt={4} ml={8}>
							{replies.map((reply) => (
								<Comment key={reply.id} comment={reply} />
							))}
						</Box>
					)}
				</Flex>
			</Grid>
		</Box>
	);
};

export default Comment;
