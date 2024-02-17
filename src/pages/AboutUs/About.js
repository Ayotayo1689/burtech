import { ValuesContainer, MissionContainer } from "../home/style";
import Values from "../../components/values/values";
import Mission from "../../components/misson/Mission";
import { data, missionData } from "../home/home";
import { Box, Text, Grid, Image, Heading, Flex } from "@chakra-ui/react";
import img from "../../assests/worshop/about.png";

// import Reviews from "./Review";
import styled from "styled-components";
import BackgroundImg from "../../assests/worshop/careersbg.png";
import { motion } from "framer-motion";
import Newsletter from "../../components/Newsletter";

const MotionImage = motion(Image);
const MotionBox = motion(Box);

const About = () => {
	return (
		<Box my={{ base: "", lg: "3rem" }} background="#f2f4fa">
			<Section>
				<Text
					fontSize={"2.7rem"}
					textAlign={"center"}
					fontWeight={"semibold"}
					color={"white"}
				>
					About Us
				</Text>
			</Section>
			<Text
				textAlign={"center"}
				mb={{ base: "1.5rem", md: "4rem" }}
				fontSize={"1.1rem"}
				fontWeight={"bold"}
			>
				About Our Business Firm
			</Text>
			<Grid
				templateColumns={{ base: "1fr", md: "1fr 1fr" }}
				px={{ base: "1.5rem", md: "5rem" }}
				gap={"2rem"}
				mb={{ base: "1.5rem", md: "4rem" }}
			>
				<MotionBox
					initial={{ x: "100vw" }}
					animate={{ x: 0 }}
					transition={{ type: "spring", delay: 0.5 }}
				>
					<Text fontSize={"1.5rem"} fontWeight={"semibold"} mb={"5"}>
						Burtech Nigeria Limited
					</Text>
					<Text lineHeight={"2"}>
						Welcome to our website, your go-to source for high-quality lab
						supplies. We are dedicated to providing the scientific community
						with reliable, durable, and precise equipment to conduct their
						experiments with confidence.
					</Text>
					<Text lineHeight={"2"}>
						Our extensive product range includes everything from basic glassware
						to advanced analytical instruments, all of which meet strict
						industry standards for accuracy and safety. Our team of experts is
						committed to offering exceptional customer service and technical
						support, ensuring that you have everything you need to succeed in
						your research endeavors.
					</Text>
				</MotionBox>
				<MotionImage
					initial={{ x: "-100vw" }}
					animate={{ x: 0 }}
					transition={{ type: "spring", delay: 0.5 }}
					src={img}
				></MotionImage>
			</Grid>

			<Grid
				templateColumns={{ base: "1fr", md: "1fr 1fr" }}
				px={{ base: "1.5rem", md: "5rem" }}
				gap={"2rem"}
				mb={{ base: "1.5rem", md: "4rem" }}
			>
				<MotionImage
					initial={{ x: "-100vw" }}
					animate={{ x: 0 }}
					transition={{ type: "spring", delay: 0.5 }}
					src={img}
				></MotionImage>
				<MotionBox
					initial={{ x: "100vw" }}
					animate={{ x: 0 }}
					transition={{ type: "spring", delay: 0.5 }}
				>
					<Text fontSize={"1.5rem"} fontWeight={"bold"} mb={"5"}>
						More about Burtech
					</Text>
					{/* <Text lineHeight={"2"}>
						Since 1981, we have set a standard in Scientific and Labouratory
						Equipment, Furniture & fittings. The quality of our products and
						services has continued to improve over the years.
					</Text> */}
					<Text lineHeight={"2"}>
						Burtech is a foremost and leading indigenous scientific and technological equipment company which started operation in 1981 and incorporated in 1985 with CAC-RC No. 69627. We are actively involved in the design, manufacture, supply, and installation of laboratory furniture & fittings in Nigeria. Since inception till present, Burtech has become a reliable brand providing a total solution and scientific support in education, science, technology, and healthcare. We are connected with the best and renowned international scientific and technological companies all around the world.
					</Text>
				</MotionBox>
			</Grid>
			<MissionContainer>
				<Mission data={missionData} />
			</MissionContainer>
			{/* The Core Values */}

			<ValuesContainer>
				<Values data={data} />
			</ValuesContainer>
			{/* <Reviews /> */}
			<Newsletter />
		</Box>
	);
};

export default About;
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
