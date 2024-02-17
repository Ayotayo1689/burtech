import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Box,
	s,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import ApplyModal from "./application/application";
const SingleDepartment = ({ item }) => {
	const { careers, departments, isLoading } = useSelector(
		(store) => store.careers
	);
	const jobs = careers?.filter((job) => job.dept === item.id);
	function renderListItemsFromText(text) {
		const items = text.split("\\r\\n");
		return items.map((item, index) => <li key={index}>{item}</li>);
	}

	return (
		<div className="department">
			<h3>{item?.name}</h3>
			<div className="options">
				<Accordion allowMultiple>
					{jobs?.map((job) => {
						return (
							<AccordionItem>
								<h2 className="sub-option">
									<AccordionButton>
										<Box as="span" flex="1" textAlign="left">
											{job.job_title}
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									<p>{job.job_type}</p>
									<p>{job.location}</p>
									<h4>Description</h4>
									<p>{job.job_description}</p>
									<h4>Responsibilites</h4>

									<ul>
										{renderListItemsFromText(job?.responsibilities || "")}
									</ul>

									<h4>Must-Have Skills:</h4>

									<ul>{renderListItemsFromText(job?.qualifications || "")}</ul>
									<ApplyModal role={job.job_title} />
								</AccordionPanel>
							</AccordionItem>
						);
					})}
				</Accordion>
			</div>
		</div>
	);
};

export default SingleDepartment;
