import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import ReactMarkdown from "react-markdown";

import {
	Container,
	Wrapper,
	DesktopFeatures,
	MobileFeatures,
	QouteSection,
	Details,
	Category,
	Manufacturer,
	SocialMedia,
	ProductsContainer,
	Related,
} from "./style";

// Chakra UI
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Flex,
	Button,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Skeleton,
	Box,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	createStandaloneToast,
} from "@chakra-ui/react";
import RelatedProduct from "../../components/related-products/RelatedProduct";

// icons are imported here
import { FaCheck, FaTwitter, FaArrowAltCircleLeft } from "react-icons/fa";
import { BsFacebook, BsPlus } from "react-icons/bs";
import { AiFillInstagram, AiOutlineCodeSandbox } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiEditBoxLine } from "react-icons/ri";
import { CgMenuBoxed } from "react-icons/cg";

// components are imported here
import Newsletter from "../../components/Newsletter";
import ProductImages from "./ProductImages";
import Model from "./SingleModel";
import QouteForm from "../product-details/QouteForm";
import { getSingleProduct } from "../../features/products/productSlice";
import { addToCart } from "../../features/cart/cartSlice";

const ProductDetails = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { toast } = createStandaloneToast();
	const { productId } = useParams();
	const dispatch = useDispatch();
	const { product, isLoading } = useSelector((store) => store.products);
	useEffect(() => {
		dispatch(getSingleProduct(productId));
	}, [productId]);
	function renderListItemsFromText(text) {
		const regex = /\r\n\r\n|\r\n/;

		let newItem = text.split(regex);
		return newItem.map((item, index) => (
			<li key={index}>
				<FaCheck />
				{item}
			</li>
		));
	}
	const navigate = useNavigate();
	function handleClick() {
		navigate(-1);
	}

	return (
		<>
			<Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"} w="100%">
				<Container>
					<Wrapper>
					<Box
						width={".1rem"}
						my={{ base: "1rem", md: "2rem" }}
						display={{ base: "none", md: "block" }}
					>
						<FaArrowAltCircleLeft onClick={handleClick} style={{ fontSize: '32px', cursor: 'pointer' }} />
					</Box>

						<Details>
							<Box maxWidth={"500px"} paddingTop="1rem">
								<ProductImages image={product?.main_image} />
							</Box>

							{/* The qouatation form by the rught */}
							<QouteSection>
								{/* <QouteForm
									productId={productId}
									name={product?.name}
									model={product?.model_number}
									upload={true}
								/> */}
								<h2>
									{product?.name} {product?.model_number}
								</h2>
								<ReactMarkdown className="description">
									{product?.description}
								</ReactMarkdown>

								{/* Bottom text under the qoutation form */}
								<Box>
									<Category>
										{/* Colors: <span></span>
										<input
											type="color"
											id="color1"
											name="color1"
											value="#1751AC"
											style={{ marginLeft: "20px" }}
										></input>
										<span></span>
										<input
											type="color"
											id="color2"
											name="color2"
											value="#EF3737"
											style={{ margin: "0 10px" }}
										></input>
										<span></span>
										<input
											type="color"
											id="color3"
											name="color3"
											value="#DBDBDB"
										></input> */}
										{/* <input type="color" id="colorPicker" list="colorOptions" style={{ margin: '0 10px' }} />
											<datalist id="colorOptions">
												<option value="#1751AC">Blue</option>
												<option value="#EF3737">Red</option>
												<option value="#CCCCC">Gray</option>
											</datalist> */}
									</Category>
									<Manufacturer>
										Manufacturer: <span>{product?.manufacturer}</span>
									</Manufacturer>
									<Flex justify="start" align="center" m={4}>
										<Button
											color={"#4688E4"}
											variant={"outline"}
											rightIcon={<BsPlus />}
											mr={3}
											onClick={() => {
												console.log(product)
												dispatch(
													addToCart({ product, amount: 1, id: productId })
												);
												toast({
													title: "Awesome!",
													description:
														"Product has been added to your Qoute list",
													status: "info",
													duration: 3000,
													isClosable: true,
													position: "top",
													variant: "left-accent",
												});
											}}
										>
											Add to cart
										</Button>
										<Button
											variant="solid"
											alignSelf={"self-start"}
											bg={"#4688E4"}
											color={"white"}
											onClick={onOpen}
										>
											Get Quote
										</Button>

										<Modal
											onClose={onClose}
											isOpen={isOpen}
											isCentered
											size={"2xl"}
										>
											<ModalOverlay />
											<ModalContent>
												<ModalHeader>
													Kindly fill out this form to get a quote!
												</ModalHeader>
												<ModalCloseButton />
												<ModalBody>
													<QouteForm
														productId={productId}
														name={product?.name}
														model={product?.model_number}
														upload={true}
														onClose={onClose}
													/>
												</ModalBody>
											</ModalContent>
										</Modal>
									</Flex>
									<SocialMedia>
										Share: <BsFacebook className="fb" />{" "}
										<FaTwitter className="tweet" />{" "}
										<AiFillInstagram className="ig" />{" "}
									</SocialMedia>
								</Box>
							</QouteSection>
						</Details>
					</Wrapper>
				</Container>
				<Tabs
					variant="enclosed"
					colorScheme="red"
					isFitted={true}
					display={{ base: "none", md: "none", lg: "block" }}
					my={"5rem"}
				>
					<TabList>
						<Tab mr={"2rem"} px={"3rem"} fontWeight={"bold"}>
							<RiEditBoxLine /> Features
						</Tab>
						<Tab mr={"2rem"} px={"3rem"} fontWeight={"bold"}>
							<CgMenuBoxed /> Description
						</Tab>

						<Tab mr={"2rem"} px={"3rem"} fontWeight={"bold"}>
							<TfiMenuAlt /> Details
						</Tab>
					</TabList>
					<TabPanels my={"3rem"}>
						<TabPanel>
							<DesktopFeatures>
								<h3>Features of the {product?.name.toLowerCase()} </h3>
								<ul>{renderListItemsFromText(product?.features || "")}</ul>
							</DesktopFeatures>
						</TabPanel>
						<TabPanel>
							<DesktopFeatures>
								<h3>Description of the {product?.name.toLowerCase()} </h3>
								<ReactMarkdown className="description">
									{product?.description}
								</ReactMarkdown>
							</DesktopFeatures>
						</TabPanel>

						<TabPanel>
							<DesktopFeatures>
								<h3>Details of the {product?.name.toLowerCase()} </h3>
								<ReactMarkdown className="description">
									{product?.details}
								</ReactMarkdown>
								{/* <ul>
									{renderListItemsFromText(product?.details.details || "")}
								</ul> */}
							</DesktopFeatures>
						</TabPanel>
					</TabPanels>
				</Tabs>

				<Container>
					<Wrapper>
						<Accordion
							defaultIndex={[0]}
							allowMultiple
							display={{ base: "block", md: "block", lg: "none" }}
						>
							<AccordionItem>
								<h2>
									<AccordionButton
										display="flex"
										alignItems="center"
										justifyContent="space-between"
									>
										<Flex
											align="center"
											justify="center"
											textAlign="left"
											fontSize={18}
										>
											<RiEditBoxLine style={{ marginRight: "10px" }} /> Features
										</Flex>
										<AccordionIcon fontSize={18} />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<MobileFeatures>
										<h3>Features of the {product?.name.toLowerCase()} </h3>
										<ul>{renderListItemsFromText(product?.features || "")}</ul>
									</MobileFeatures>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton
										display="flex"
										alignItems="center"
										justifyContent="space-between"
									>
										<Flex
											align="center"
											justify="center"
											textAlign="left"
											fontSize={18}
										>
											<CgMenuBoxed style={{ marginRight: "10px" }} />{" "}
											Description
										</Flex>
										<AccordionIcon fontSize={18} />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<MobileFeatures>
										<h3>Description of the {product?.name.toLowerCase()} </h3>
										<ul>
											{renderListItemsFromText(product?.description || "")}
										</ul>
									</MobileFeatures>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton
										display="flex"
										alignItems="center"
										justifyContent="space-between"
									>
										<Flex
											align="center"
											justify="center"
											textAlign="left"
											fontSize={18}
										>
											<TfiMenuAlt style={{ marginRight: "10px" }} /> Details
										</Flex>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<MobileFeatures>
										<h3>Details of the {product?.name.toLowerCase()} </h3>
										<ul>{renderListItemsFromText(product?.details || "")}</ul>
									</MobileFeatures>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
						{/* related products here */}
						<Related>
							<h3>Related Products</h3>
							<p>Browse the collection of top products</p>
							<ProductsContainer>
								{/* {product?.related_products?.map((item) => (
									<RelatedProduct />
								))} */}
								{product?.related_products?.slice(0, 3).map((item, index) => (
									<RelatedProduct key={index} id={item} />
								))}
							</ProductsContainer>
						</Related>
					</Wrapper>
				</Container>
			</Skeleton>
			<Newsletter />
		</>
	);
};

export default ProductDetails;
