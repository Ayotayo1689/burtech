import React from "react";
import { Image, Title, Value } from "./style";
import { ListItem, UnorderedList, Flex, Text } from "@chakra-ui/react";

const Mission = ({ data }) => {
	return (
		<>
			{data.map((item, index) => (
				<Value key={index}>
					<Image src={item.image} alt={item.text} />
					<Title>{item.title}</Title>
					{/* <Text>{item.text}</Text> */}
					{/* <Text
						px={"2rem"}
						style={{ marginBottom: "0.5rem", fontWeight: "bold" }}
						alignSelf={"start"}
					>
						{item.title} is to:
					</Text> */}
					<UnorderedList textAlign={"start"}>
						{item?.items?.map((item, index) => (
							<ListItem key={index}>{item}</ListItem>
						))}
					</UnorderedList>
				</Value>
			))}
		</>
	);
};

export default Mission;
