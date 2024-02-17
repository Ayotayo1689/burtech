import React from "react";
import { useNavigate } from "react-router-dom";
import Newsletter from "../../components/Newsletter";
import Offer from "../../components/offer/Offer";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { Container, Wrapper, Offers, Heading } from "./style";
import { useSelector } from "react-redux";
import { offerA, offerB, offerC, offerD, offerE } from "../../assests/offers";
// import ComingSoonPage from "./blur";

export const data = [
	{
		id: 1,
		image: `${offerA}`,
		category: "School & Office Furniture",
		name: "Aluminium Magnetic Stirer",
		price: "10,299",
	},
	{
		id: 2,
		image: `${offerB}`,
		category: "School & Office Furniture",
		name: "Drying Oven/Incubator",
		price: "10,299",
	},
	{
		id: 3,
		image: `${offerC}`,
		category: "School & Office Furniture",
		name: "Automatic Ivf Equipmentname",
		price: "10,299",
	},
	{
		id: 4,
		image: `${offerD}`,
		category: "School & Office Furniture",
		name: "Tissue Rotary Microtomename",
		price: "10,299",
	},
	{
		id: 5,
		image: `${offerE}`,
		category: "School & Office Furniture",
		name: "Lecture Theater Furniture",
		price: "10,299",
	},
	{
		id: 6,
		image: `${offerD}`,
		category: "School & Office Furniture",
		name: "Dry Maker Board",
		price: "10,299",
	},
];
const SpecialOffers = () => {
	const navigate = useNavigate();

	function handleClick() {
		navigate(-1);
	}
	const { specialOffers } = useSelector((store) => store.specialOffers);

	return (
		<>
			<Container>
				<Wrapper>
					<Heading>Special Offers</Heading>
					<Offers>
						<Offer data={specialOffers} />
					</Offers>
				</Wrapper>
			</Container>
			<Newsletter />
		</>
	);
};

export default SpecialOffers;
