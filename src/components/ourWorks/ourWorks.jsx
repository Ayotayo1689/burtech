import React from "react";
import { workshop1 } from "../../assests/worshop";

import {
	OurWorksWrapper,
	OurWorksCards,
	Card,
	CardImage,
	CardText,
} from "./style";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "@chakra-ui/react";

function OurWorks({ items }) {
	const { ourWorks, isLoading } = useSelector((store) => store.services);

	return (
		<Skeleton isLoaded={!isLoading} fadeDuration={1} rounded={"xl"}>
			<OurWorksWrapper>
				<OurWorksCards>
					{ourWorks?.map((item, index) => {
						return (
							<Card key={index}>
								<CardImage>
									<img src={item?.image} />
								</CardImage>
								<CardText>
									<h3>{item?.name}</h3>
									<p>{item?.description}</p>
								</CardText>

								{/* <Link to={`/workshop-details/${item?.id}`}>
									<Button variant="ghost" colorScheme="red" border={0}>
										{" "}
										Read more{" "}
									</Button>
								</Link> */}
							</Card>
						);
					})}
				</OurWorksCards>
			</OurWorksWrapper>
		</Skeleton>
	);
}

export default OurWorks;
