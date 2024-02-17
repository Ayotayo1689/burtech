import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";

import {
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
	Box,
	Flex,
	Text,
} from "@chakra-ui/react";
import axiosInstance from "../../utils/axios";

const UserInfo = () => {
	const initialValues = {
		name: "",
		message: "",
		subject: "",
		email: "",
	};

	const toast = useToast({
		position: "top",
	});
	const categories = ["Option 1", "Option 2", "Option 3"];
	const validationSchema = Yup.object({
		name: Yup.string().required("name is required"),
		message: Yup.string().required("message is required"),
		subject: Yup.string().required("comment is required"),
		email: Yup.string().required("email is required"),
	});

	const onSubmit = async (values, actions) => {
		setTimeout(() => {}, 1000);

		console.log(values);

		// submit logic goes here
		try {
			const response = await axiosInstance.post("/contact-us/", values);

			console.log(response.data);
			toast({
				title: "Thank you!  Your info has been Saved",
				subject: "You would",
				description: "You would be contacted within 24hrs",
				status: "info",
				duration: 10000,
				isClosable: true,
			});
			actions.setSubmitting(false);
			actions.resetForm();
		} catch (error) {
			console.error(error);

			toast({
				title: "An error occurred",
				subject: "There was an error submitting your form. Please try again.",
				status: "error",
				duration: 5000,
				isClosable: true,
			});
			actions.setSubmitting(false);
		}
	};

	return (
		<Box>
			<Text fontSize={"1.4rem"} fontWeight={"semibold"}>
				Send Us Feedback
			</Text>
			<Text mb={"2rem"}>
				You can send us feedback rightaway. We’ll surely get back to you.
			</Text>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{({ errors, touched, isSubmitting, values }) => (
					<Form>
						<FormControl
							isInvalid={errors.name && touched.name}
							mt={4}
							width={"75%"}
						>
							<FormLabel htmlFor="name">Name*</FormLabel>
							<Field
								as={Input}
								id="name"
								name="name"
								placeholder="Enter your First Name"
							></Field>
							{errors.name && touched.name && (
								<Box color="red" mt={1}>
									{errors.name}
								</Box>
							)}
						</FormControl>
						<FormControl
							isInvalid={errors.email && touched.email}
							mt={4}
							width={"75%"}
						>
							<FormLabel htmlFor="email">Email*</FormLabel>
							<Field
								as={Input}
								id="email"
								name="email"
								placeholder="Enter your Email"
							/>
							{errors.email && touched.email && (
								<Box color="red" mt={1}>
									{errors.email}
								</Box>
							)}
						</FormControl>
						<FormControl
							isInvalid={errors.subject && touched.subject}
							mt={4}
							width={"75%"}
						>
							<Flex alignItems={"center"} justifyContent={"space-between"}>
								<FormLabel htmlFor="subject"> Subject</FormLabel>
							</Flex>
							<Field
								as={Input}
								id="subject"
								name="subject"
								placeholder="Enter your Last Name"
							/>
							{errors.subject && touched.subject && (
								<Box color="red" mt={1}>
									{errors.subject}
								</Box>
							)}
						</FormControl>

						<FormControl isInvalid={errors.message && touched.message} mt={4}>
							<FormLabel htmlFor="message">Message</FormLabel>
							<Field
								as={Textarea}
								id="message"
								name="message"
								placeholder="Please leave your comments here"
								height={"8rem"}
							/>
							{errors.message && touched.message && (
								<Box color="red" mt={1}>
									{errors.message}
								</Box>
							)}
						</FormControl>
						<Flex
							direction={"column"}
							py={"4"}
							gap={"1.5rem"}
							alignItems={"start"}
						>
							<Button
								colorScheme="blue"
								type="submit"
								isLoading={isSubmitting}
								border="1px"
								borderColor="gray.200"
								rounded="xl"
								fontWeight={"light"}
								fontSize="md"
								py={"1rem"}
								bg={"#4E97FD"}
								width={"25%"}
							>
								Submit
							</Button>
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default UserInfo;
