import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ComingSoonPage = () => {
	return (
		<Box
			backdropFilter="auto"
			backdropBlur="md"
			bg="gray.200"
			w="100%"
			h="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center"
			position="relative"
		>
			{/* Background image
			<Image
				src="https://source.unsplash.com/random/1600x900"
				alt="Background Image"
				w="100%"
				h="100%"
				objectFit="cover"
				position="fixed"
				zIndex="-1"
			/> */}

			{/* Blur effect */}
			<Box
				bg="white"
				p="6"
				borderRadius="md"
				boxShadow="md"
				position="relative"
				zIndex="1"
				filter="blur(10px)"
				backdropFilter="blur(10px)"
			>
				{/* Content */}

				<Text fontSize="4xl" fontWeight="bold" color="white" mb="6">
					Coming Soon!
				</Text>
				<Text fontSize="xl" color="white" textAlign="center">
					Our website is under construction. We'll be back soon with a new look
					and feel!
				</Text>
			</Box>
		</Box>
	);
};

export default ComingSoonPage;
