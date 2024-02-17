import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import styled from "styled-components";
import { reviews } from "./data";
import { ReactComponent as Quote1 } from "../../assests/worshop/Quotes.svg";
import { ReactComponent as Quote2 } from "../../assests/worshop/Quotes1.svg";
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
	const [main, setMain] = useState(reviews[0]);

	return (
		<Wrapper>
			<Box
				position="absolute"
				top="0"
				left="5rem"
				mt={"4rem"}
				display={{ base: "none", md: "block" }}
			>
				<Quote1 />
			</Box>
			<Flex
				my={"1.5rem"}
				textAlign={"center"}
				direction={"column"}
				px={{ base: "1.5rem", md: "13rem" }}
			>
				<Text fontSize={"2rem"} fontWeight={"semibold"}>
					Client Reviews
				</Text>
				<Text mb="3">what our clients say about us</Text>

				<Text>{main.text}</Text>
				<Text
					color={"red"}
					fontSize={"1.4rem"}
					mt={"1.6rem"}
					fontWeight={"semibold"}
				>
					{main.name}
				</Text>
				<Text>{main.job}</Text>
				<Flex mx={"auto"} mt={".3rem"}>
					<AiFillStar color="#FFBC0A" />
					<AiFillStar color="#FFBC0A" />
					<AiFillStar color="#FFBC0A" />
					<AiFillStar color="#FFBC0A" />
					<AiFillStar color="#FFBC0A" />
				</Flex>
			</Flex>

			<Box className="gallery">
				{reviews.map((item, index) => {
					return (
						<Image
							src={item.img}
							alt="gallery"
							key={index}
							borderRadius="full"
							onClick={() => setMain(reviews[index])}
							className={`${item.img === main.img ? "active img" : "img"} `}
						/>
					);
				})}
			</Box>
			<Box
				position="absolute"
				bottom="0"
				right="5rem"
				fontSize="1rem"
				display={{ base: "none", md: "block" }}
			>
				<Quote2 />
			</Box>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	text-align: center;
	padding-inline: 5rem;
	margin: 0 auto;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;

	.img {
		width: 5rem;
		display: block;
		border-radius: var(--radius);
		object-fit: cover;
		cursor: pointer;
	}
	.gallery {
		margin-top: 1rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin: 0 auto;
		align-items: center;
		justify-content: center;
		justify-items: center;
		height: fit-content;
		width: 30%;
	}
	.active {
	}
	@media (max-width: 576px) {
		padding-inline: 1rem;
		.gallery {
			gap: 1rem;
			height: fit-content;
			width: 50%;
		}
	}
	@media (min-width: 992px) {
	}
`;

export default Reviews;
