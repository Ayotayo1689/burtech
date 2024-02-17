import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSingleProduct } from "../../features/products/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

// cpomponents, images and icons are imported here
import { FaArrowAltCircleLeft } from "react-icons/fa";
import NewsLetter from "../../components/Newsletter";
import productImage from "../../assests/featured-product2.png";
import QouteForm from "../product-details/QouteForm";

import Items from "./Items"; // styles are imported here
import {
	Container,
	Section,
	QouteContainer,
	QuoteSectionHeading,
	QuotesProductSection,
	QuotProductHeading,
	CheckoutWrapper,
	ContinueShopping,
	Checkout,
} from "./style";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Flex,
	Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { clearCart } from "../../features/cart/cartSlice";

const QouteList = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { productId } = useParams();
	const dispatch = useDispatch();
	const { cart } = useSelector((store) => store.cart);
	const { product, isLoading } = useSelector((store) => store.products);
	useEffect(() => {
		dispatch(getSingleProduct(productId));
	}, [productId]);

	const navigate = useNavigate();

	function handleClick() {
		navigate(-1);
	}

	return (
		<Container>
			<Section>
				<QouteContainer>
					<QuoteSectionHeading>
						<Text
							fontWeight={"extrabold"}
							fontSize={{ base: "1.5rem", lg: "2.3rem" }}
						>
							My Quote Items
						</Text>
					</QuoteSectionHeading>

					<QuotesProductSection>
						<QuotProductHeading>
							<Text fontWeight={"bold"} fontSize={"1.3rem"}>
								Products
							</Text>
						</QuotProductHeading>
						<Items productImage={productImage} />
						<CheckoutWrapper>
							<Checkout>
								<Button>
									<Link to={"/products"}>Continue Shopping</Link>
								</Button>
							</Checkout>

							{cart.length < 1 ? (
								<Checkout>
									<Button>
										<Link to={"/products"}>Add items to Cart</Link>
									</Button>
								</Checkout>
							) : (
								<Checkout>
									{/* <button>Checkout all items</button> */}
									<Button onClick={onOpen}>Checkout all items</Button>

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
													multiple={true}
												/>
											</ModalBody>
										</ModalContent>
									</Modal>
								</Checkout>
							)}
						</CheckoutWrapper>
						<Flex paddingInlineStart={{ base: "1rem", lg: "4rem" }}>
							<Button
								bg={"red"}
								color={"white"}
								onClick={() => {
									dispatch(clearCart());
								}}
							>
								Clear Cart
							</Button>
						</Flex>
					</QuotesProductSection>

					<NewsLetter />
				</QouteContainer>
			</Section>
		</Container>
	);
};

export default QouteList;
