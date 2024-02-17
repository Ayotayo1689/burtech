import React from "react";

import Item from "./Item";
const Offer = ({ data }) => {
	return (
		<>
			{data.map((item, index) => (
				<Item item={item} index={index} />
			))}
		</>
	);
};

export default Offer;
