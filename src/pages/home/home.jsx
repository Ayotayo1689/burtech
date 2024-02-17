import React, { useState, useEffect, useRef } from "react";
import moment from "moment/moment";

// import components here
import SideBar from "../../components/sideBar/sideBar";
import Hero from "../../components/hero/hero";
import Newsletter from "../../components/Newsletter";
import Product from "../../components/product";
import Marquee from "react-fast-marquee";

// service icons are imported here
import Shipping from "../../assests/icons8-shipping.svg";
import Heart from "../../assests/Group.svg";
import Star from "../../assests/icons8-star.svg";
import Vision from "../../assests/vision.svg";
import PromiseImg from "../../assests/promise.svg";
import MissionImg from "../../assests/mission.svg";
import { FaRegUser } from "react-icons/fa";

// brand images are imported here
import {
	bigb,
	esco,
	genlab,
	haier,
	ohaus,
	sterlin,
	stuart,
	techne,
	supafem,
	vecstar,
	buck,
} from "../../assests/brand";

import {
	Container,
	TopProducts,
	ProductsContainer,
	Section,
	ValuesContainer,
	Associates,
	BlogContainer,
	Heading,
	Text,
	Description,
	LinkButton,
	Wrapper,
	Blog,
	MissionContainers,
	MissionContainer,
} from "./style";
import Values from "../../components/values/values";
import Mission from "../../components/misson/Mission";
import { useDispatch, useSelector } from "react-redux";
import { setShowMenu } from "../../features/user/userSlice";

import {
	Skeleton,
	Flex,
	Box,
	Image,
	createStandaloneToast,
} from "@chakra-ui/react";

export const data = [
	{
		id: 1,
		image: `${Shipping}`,
		title: "Prompt Shipping on all Orders",
		text: "You are assured that your products are in safe hands and will arrive promptly and on schedule. With Burtech, you are secure!",
	},
	{
		id: 2,
		image: `${Heart}`,
		title: "AMAZING CUSTOMER SERVICE",
		text: "Our world-class customer service and after-sales team are available 24/7 to attend with your issues leaving you with a smile!",
	},
	{
		id: 3,
		image: `${Star}`,
		title: "Prompt Shipping on all Orders",
		text: "When you buy from Burtech, you are guaranteed to get top-notch, world-class products. If that quality product is available on this planet, we get it to you",
	},
];

export const missionData = [
	{
		id: 1,
		image: `${Vision}`,
		title: "Our Vision",
		text: "You are assured that your products are in safe hands and will arrive promptly and on schedule. With Burtech, you are secure!",
		items: [
			"High-quality Products",
			"Wide range of lab equipment ",
			"Manufacture durable and reliable ",
			"Efficiency of electrical installations",
		],
	},
	{
		id: 2,
		image: `${PromiseImg}`,
		title: "Our Promise",
		text: "Our world-class customer service and after-sales team are available 24/7 to attend with your issues leaving you with a smile!",
		items: [
			"Compliance with industry standards",
			"Exceptional customer service  ",
			"Empowerment and success ",
			"Innovation and advancement",
		],
	},
	{
		id: 3,
		image: `${MissionImg}`,
		title: "Our Mission",
		text: "When you buy from Burtech, you are guaranteed to get top-notch, world-class products. If that quality product is available on this planet, we get it to you",
		items: [
			"To establish itself as the foremost supplier of top-notch laboratory supplies in Nigeria",
			"To earn recognition of our unwavering dedication to excellence",
			"To actively contribute to the progress and enhancement of scientific knowledge in Nigeria",
			"To exceed customer expectations ",
		],
	},
];

const images = [
	`${esco}`,
	`${bigb}`,
	`${genlab}`,
	`${haier}`,
	`${ohaus}`,
	`${sterlin}`,
	`${stuart}`,
	`${techne}`,
	`${supafem}`,
	`${vecstar}`,
	`${buck}`,
];

const Home = () => {
	const [Index, setIndex] = useState(null);

	const dispatch = useDispatch();
	const toggleMenu = () => {
		dispatch(setShowMenu());
	};
	const { products, isLoading } = useSelector((store) => store.products);
	const { showMenu } = useSelector((store) => store.user);

	const { toast } = createStandaloneToast();
	const { blogs } = useSelector((store) => store.blogs);

	const LogoMarquee = () => {
		return (
			<Marquee gradient={false}>
				{images.map((image, index) => (
					<Box key={index} mr="10px">
						<Image src={image} alt="Logo" height="4rem" width="100px" />
					</Box>
				))}
			</Marquee>
		);
	};

	return (
		<Wrapper>
			<Container>
				<SideBar Index={Index} toggleMenu={toggleMenu} setIndex={setIndex} />
				<Hero showMenu={showMenu} Index={Index} />
			</Container>
			<Section style={{ marginTop: "2rem" }}>
				<h3>Our Mission</h3>
				<p>What we deliver to our customers</p>
				<MissionContainer>
					<Mission data={missionData} />
				</MissionContainer>
			</Section>

			<Section>
				<h3>Our Values</h3>
				<p>Here are our core values</p>
				<ValuesContainer>
					<Values data={data} />
				</ValuesContainer>
			</Section>
			{/* The Top Products slider */}
			<TopProducts>
				<h3>Our Top Collection</h3>
				<p>Browse our collection of top products</p>

				<Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"}>
					<ProductsContainer
						initial={{ x: "100vw" }}
						animate={{ x: 0 }}
						transition={{ type: "spring", delay: 0.5 }}
					>
						{products.slice(0, 3).map((item, key) => (
							<Product item={item} key={key} desc />
						))}
					</ProductsContainer>
				</Skeleton>
			</TopProducts>

			{/* Core Values*/}

			{/* Blog section */}
			<Flex direction={"column"} alignItems={"center"}>
				<div className="blog-heading">
					<h2>Latest Blogs</h2>
					<p>Latest from Burtech Nigeria</p>
				</div>
				<BlogContainer
					initial={{ x: "100vw" }}
					animate={{ x: 0 }}
					transition={{ type: "spring", delay: 0.5 }}
				>
					{blogs.slice(0, 3).map((item) => {
						const { image, title, id, author_name, date_published } = item;
						return (
							<Flex
								maxW="sm"
								overflow="hidden"
								variant="outline"
								padding={"0rem"}
								direction={"column"}
								key={id}
							>
								<Blog to={`/blog/${id}`}>
									<Box w={"100%"} h={"230px"} mb="2rem">
										<Image
											src={image}
											alt={title}
											borderTopRadius="10px"
											w={"100%"}
											h={"100%"}
										/>
									</Box>
									<div>
										<Text>
											{" "}
											<span className="red">
												{moment(date_published).format("MMMM Do YYYY, h:mm a")}
											</span>
										</Text>
									</div>
									<Heading>{title}</Heading>
									<div>
										<Text>
											{" "}
											<span className="red">
												<FaRegUser />
											</span>{" "}
											By{" "}
											<span
												style={{
													marginLeft: "8px",
													color: "#929292",
													textTransform: "capitalize",
												}}
											>
												{author_name}
											</span>
										</Text>
									</div>
									{/* <Description>
										{`${item?.content.slice(0, 200)}...`}
									</Description>
									<LinkButton to={`/singleblog/${item?.id}`}>Read more</LinkButton> */}
								</Blog>
							</Flex>
						);
					})}
				</BlogContainer>
			</Flex>
			{/* 
			<Associates>
				<h2>Associates</h2>
				<p>Our Partners</p>
				<div className="wrapper">
					<div className="carousel">
						<div>
							<LogoMarquee logos={images} />
						</div>
					</div>
				</div>
			</Associates> */}
			<Newsletter />
		</Wrapper>
	);
};

export default Home;
