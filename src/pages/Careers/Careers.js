import { Box, Text, Grid, Image } from "@chakra-ui/react";
import img from "../../assests/worshop/careers.png";
import styled from "styled-components";
// import { ReactComponent as Tick } from "../../assests/worshop/Check.svg";
import BackgroundImg from "../../assests/worshop/careersbg.png";
// import { RiArrowDropDownLine } from "react-icons/ri";
import { Skeleton } from "@chakra-ui/react";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import SingleDepartment from "./SingleDepartment";

const MotionImage = motion(Image);
const MotionBox = motion(Box);

const Careers = () => {
	const { careers, departments, isLoading } = useSelector(
		(store) => store.careers
	);

	return (
		<Box mb={{ base: "1.5rem", md: "8rem" }} mt={{ base: "0rem", lg: "3rem" }}>
			<Section>
				<Text
					fontSize={"1.7rem"}
					textAlign={"center"}
					fontWeight={"semibold"}
					color={"white"}
					textTransform={'capitalize'}
				>
					Careers at Burtech
				</Text>
			</Section>

			<Grid
				templateColumns={{ base: "1fr", md: "1fr 1fr" }}
				px={{ base: "1rem", md: "5rem" }}
				gap={"2rem"}
				mb={"4rem"}
			>
				<MotionBox
					initial={{ x: "-100vw" }}
					animate={{ x: 0 }}
					transition={{ type: "spring", delay: 0.5 }}
				>
					<Text fontSize={"1.5rem"} fontWeight={"semibold"} mb={"5"}>
						Our Goal
					</Text>
					<Text lineHeight={"2"}>
						We provide high-quality products to customers, offer competitive
						pricing, ensure excellent customer service, and maintain a
						user-friendly website that makes it easy for customers to find and
						purchase the equipment they need.
					</Text>
				</MotionBox>
				<MotionImage
					initial={{ x: "100vw" }}
					animate={{ x: 0 }}
					transition={{ type: "spring", delay: 0.5 }}
					src={img}
					justifySelf={"end"}
				></MotionImage>
			</Grid>
			<Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"}>
				<DepartmentSection className="departments-section">
					{departments?.map((item) => {
						return <SingleDepartment item={item} key={item.id} />;
					})}
				</DepartmentSection>
			</Skeleton>
		</Box>
	);
};

export default Careers;

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
// const List = styled.section`
// 	margin-block: 2rem;

// 	h5 {
// 		font-weight: 700;
// 	}
// 	h6 {
// 		font-size: 1rem;
// 		margin-block: 0.9rem;
// 	}
// 	section {
// 		display: flex;
// 		gap: 1rem;

// 		flex-direction: column;

// 		div {
// 			display: flex;
// 			align-items: center;
// 			gap: 0.5rem;
// 			flex-direction: row;
// 		}
// 		p {
// 			font-size: 1rem;
// 			font-weight: 500;
// 		}
// 		@media (max-width: 40rem) {
// 			align-items: flex-start;
// 			gap: 0.8rem;
// 		}
// 	}
// `;

const DepartmentSection = styled.section`
	width: 70%;
	padding-left: 4rem;

	.department {
		margin-top: 2.5rem;

		h3 {
			font-size: 24px;
			padding: 1rem 0;
			/* border-bottom: 1px solid gray; */
		}
	}
	.options {
		margin-top: 1rem;
		margin-left: 1.6rem;

		h4 {
			margin: 1rem 0;
		}
	}

	.sub-option {
		color: #4e97fd;
	}

	@media (max-width: 600px) {
		width: 100%;
		padding: 1rem;

		.department {
			h4 {
				font-size: 18px;
			}

			h3 {
				font-size: 18px;
			}
		}

		.sub-option {
			font-size: 18px;
		}
	}
`;
