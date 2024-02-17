import React from "react";
import { Medical, Shipping, Training, Classroom } from "../../assests/service";

import {
	Container,
	Wrapper,
	Top,
	Bottom,
	ServiceContainer,
	ServiceBox,
	Icon,
} from "./style";
import Newsletter from "../../components/Newsletter";
import { Text } from "@chakra-ui/react";

export const data = [
	{
		id: 1,
		image: `${Medical}`,
		title: "Medical Equipment & Furniture",
		text: "Rent or lease laboratory equipment and furniture, save money, stay up-to-date, and avoid maintenance with our EaaS/FaaS model.",
	},
	{
		id: 2,
		image: `${Training}`,
		title: "Training Equipment",
		text: "Our selection of training equipment includes everything from resistance bands, dumbbells, and kettlebells, to treadmills...",
	},
	{
		id: 3,
		image: `${Classroom}`,
		title: "Classroom Equipment & Furniture",
		text: "Our selection of classroom equipment includes projectors, interactive whiteboards, document cameras, and audio systems.",
	},
	{
		id: 4,
		image: `${Shipping}`,
		title: "Prompt Shipping on all Orders",
		text: "At Finlab, we strive to process and ship all orders as quickly and efficiently as possible. Whether you're ordering laboratory equipment, training gear.",
	},
	{
		id: 5,
		image: `${Training}`,
		title: "Training equipment",
		text: "Our selection of training equipment includes everything from resistance bands, dumbbells, and kettlebells, to treadmills...",
	},
];

const Services = () => {
	return (
		<Container>
			<Top>
				<h2>Our Services</h2>
			</Top>
			<Wrapper>
				<Bottom>
					<h2>What sets us apart</h2>

					<ServiceContainer>
						{data.map((item, index) => (
							<ServiceBox key={index}>
								<Icon src={item.image} alt={item.title} />
								<h3>{item.title}</h3>
								<p>{item.text}</p>
							</ServiceBox>
						))}
					</ServiceContainer>
				</Bottom>
			</Wrapper>
			<Newsletter />
		</Container>
	);
};

export default Services;
