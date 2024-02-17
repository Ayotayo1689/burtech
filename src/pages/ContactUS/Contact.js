import React from "react";
import { Grid, Box, Text, Image } from "@chakra-ui/react";
import img from "../../assests/worshop/map.png";
import BackgroundImg from "../../assests/worshop/careersbg.png";

import styled from "styled-components";
import UserInfo from "./Form";
import Address from "./Address";
const Contact = () => {
	return (
		<Box my={{ lg: "3rem" }}>
			<Section>
				<Text
					fontSize={"1.7rem"}
					textAlign={"center"}
					fontWeight={"semibold"}
					color={"white"}
				>
					Contact Us
				</Text>
			</Section>

			<Image width={"100%"} src={img}></Image>
			<Grid
				templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
				px={{ base: "1rem", md: "8rem" }}
				gap={{ base: "2rem", md: "8rem" }}
				my={{ base: "1rem", md: "4rem" }}
			>
				<UserInfo />
				<Address />
			</Grid>
		</Box>
	);
};

export default Contact;
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
`;
