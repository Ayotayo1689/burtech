import React, { useState } from "react";
import { Container, Heading, Paragraph, Link, MenuWrapper } from "./style";
import "react-dropdown/style.css";
import { useSelector } from "react-redux";
import MenuItems from "../Menu/MenuItems";
import { Box } from "@chakra-ui/react";
import Categories from "../MobileNavbar/categories/Categories";

function Hero({ showMenu, Index }) {
	const { hero, isLoading } = useSelector((store) => store.services);
	const [index, setIndex] = useState(0);
	if (showMenu) {
		return (
			<MenuWrapper className="">
				<MenuItems Index={Index} />
			</MenuWrapper>
		);
	}
	const brStyle = {
		display: "block",
		"@media (max-width: 576px)": {
			display: "none",
		},
	};
	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.5 }}
			heroimage={hero?.image}
		>
			<Heading>{hero?.Header}</Heading>
			<Paragraph style={{ color: "white" }}>{hero?.text}</Paragraph>

			<Link
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				transition={{ duration: 0.2 }}
				href="/about"
			>
				LEARN MORE
			</Link>
			<Box>
				<Categories setIndex={setIndex} Index={index} />
			</Box>
		</Container>
	);
}

export default Hero;
