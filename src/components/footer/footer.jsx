import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { createStandaloneToast } from "@chakra-ui/react";
import { getOffices } from "../../features/office/officeSlice";

// import styles here
import {
	Bottom,
	Container,
	Logo,
	QuickLink,
	Section,
	SocialLink,
	SocialLinks,
	Top,
	Box,
	Wrapper,
	PoweredBy,
} from "./style";
import { Flex, Text, Skeleton } from "@chakra-ui/react";
import { setSelectedTab } from "../../features/products/productSlice";
import { setCategory } from "../../features/categories/categoriesSlice";
import { setFilteredProducts } from "../../features/products/productSlice";

// import icons and images here
import { GrFacebookOption, GrTwitter, GrYoutube } from "react-icons/gr";
import { HiLocationMarker } from "react-icons/hi";
import logo from "../../assests/footer-logo.png";

const Footer = () => {
	const dispatch = useDispatch();
	const { offices } = useSelector((store) => store.offices);
	const { data, isLoading, category } = useSelector(
		(store) => store.categories
	);
	console.log(offices);
	const { biodatas } = useSelector((store) => store.biodata);
	const { isLoading: LoadingProducts } = useSelector((store) => store.products);
	return (
		<Container>
			<Wrapper>
				<Top>
					<Section>
						<Logo src={logo} alt="logo" />
						<p>{biodatas?.footer_text}</p>
						{/* <SocialLinks>
                        <SocialLink href='https://facebook.com/Burtech' target="_blank" iconColor="#285da1"><GrFacebookOption /></SocialLink>
                        <SocialLink href='https://twitter.com/Burtech' target="_blank" iconColor="#03a9f4"><GrTwitter /></SocialLink>
                        <SocialLink href='/' target="_blank" iconColor="#d2173f"><FaPinterestP /></SocialLink>
                        <SocialLink href='https://youtube.com/Burtech' target="_blank" iconColor="#d2173f"><GrYoutube /></SocialLink>
                    </SocialLinks> */}
					</Section>
					<Section>
						<h3>Categories</h3>

						<Skeleton
							isLoaded={!isLoading && !LoadingProducts}
							fadeDuration={1}
						>
							<ul>
								{data
									?.filter((item) => item?.is_prime === true)
									?.map((value, key) => (
										<li key={key}>
											<Link
												onClick={() => {
													dispatch(setSelectedTab(0));
													dispatch(setCategory(value));
													dispatch(setFilteredProducts(value?.id));
												}}
												to="/products"
											>
												{value.name}
											</Link>
										</li>
									))}
							</ul>
						</Skeleton>
					</Section>

					<Section>
						<h3>Our Company</h3>
						<ul>
							<li>
								<Link to="/about">About us</Link>
							</li>
							<li>
								<Link to="/careers">Careers</Link>
							</li>
							<li>
								<Link to="/contact">Contact us</Link>
							</li>
							<li>
								<Link to="/services">Services</Link>
							</li>
							<li>
								<Link to="/blogs">Blogs</Link>
							</li>
						</ul>
					</Section>
					<Section>
						<Flex gap={1}>
							<HiLocationMarker color={"#2379C2"} />
							<Text color={"#2379C2"} fontWeight={"semibold"}>
								Address
							</Text>
						</Flex>
						<ul>
							<Text mb={"1rem"}>
								We are located in Strategic Cities all over Nigeria
							</Text>

							<Flex direction={"column"} gap={3}>
								{offices?.map((item, index) => {
									return (
										<Box mb={6} key={index}>
											<h4>{item?.name}</h4>
											<p> {item?.address}</p>
										</Box>
									);
								})}

								<Flex
									display="flex"
									alignItems="start"
									justifyContent="start"
									direction="column"
								>
									<h4>Call us</h4>

									<Flex
										direction={{ base: "column", lg: "row" }}
										mb={2}
										gap={{ base: 2, lg: 6 }}
									>
										{biodatas?.phone_numbers?.map((item, index) => {
											return (
												<p style={{ cursor: "pointer" }} key={index}>
													<a href={`tel:${item}`}> {item}</a>
												</p>
											);
										})}
									</Flex>

									{/* {offices.map((item) => {
                                    // const { id, date, title } = item;
                                    return (
                                        <Box key={item?.id} mb={6}>
                                            <h4>{item?.name}</h4>
                                            <p>{item?.address}</p>
                                            <p>{item?.phone_numbers}</p>
                                        </Box>
                                    );
                                })} */}
								</Flex>
							</Flex>
						</ul>
					</Section>
				</Top>
			</Wrapper>
			<Bottom>
				<p>Copyright &copy; 2023 All Rights Reserved</p>
				<span>
					Powered by -{" "}
					<a
						href="https://tantainnovatives.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						Tanta Innovatives
					</a>
				</span>
				{/* <QuickLink>
				<Link to="/privacy-policy">Privacy Policy</Link>
			</QuickLink> */}
			</Bottom>
		</Container>
	);
};

export default Footer;
