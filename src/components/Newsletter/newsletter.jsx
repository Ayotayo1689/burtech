import React, { useState } from "react";
import { Container, Text, Form, InputContainer, SubmitButton } from "./style";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useToast, Flex } from "@chakra-ui/react";

import axiosInstance from "../../utils/axios";
const Newsletter = () => {
	const toast = useToast({
		position: "top",
	});
	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email address")
			.required("Email is required"),
		name: Yup.string().required("Name is required"),
	});
	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
		},
		validationSchema,
		onSubmit: async (values, { setSubmitting }) => {
			try {
				const response = await axiosInstance.post("/newsletter/", values);

				console.log(response.data);
				toast({
					title: "Thank You!",
					description: "Your Email Has Been Saved!",
					status: "info",
					duration: 5000,
					isClosable: true,
				});
				setSubmitting(false);
			} catch (error) {
				console.error(error?.response);
				setSubmitting(false);
				let errorMsg =
					"There was an error submitting your form. Please try again.";
				let mainError = "An error occurred";
				if (error?.response?.status === 400) {
					mainError = "Already Subscribed";
					errorMsg = "Sorry,This email is already Subscribed,Try another";
				}

				toast({
					title: mainError,
					description: errorMsg,
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
		},
	});

	return (
		<>
			<Container>
				<Text>Join our newsletter</Text>
				<Form onSubmit={formik.handleSubmit}>
					<Flex direction={"column"}>
						<InputContainer>
							<input
								type="text"
								placeholder="Your full name"
								id="name"
								name="name"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.name}
								required
							/>
						</InputContainer>
						{formik.touched.name && formik.errors.name ? (
							<div style={{ color: "red" }}>{formik.errors.name}</div>
						) : null}
					</Flex>
					<Flex direction={"column"}>
						<InputContainer>
							<input
								type="email"
								id="email"
								name="email"
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
								placeholder="Your email address"
								required
							/>
						</InputContainer>
						{formik.touched.email && formik.errors.email ? (
							<div style={{ color: "red" }}>{formik.errors.email}</div>
						) : null}
					</Flex>

					<SubmitButton
						type="submit"
						bg={"#4688E4"}
						isLoading={formik.isSubmitting}
						py={"1.5rem"}
						px={"1.5rem"}
					>
						Submit
					</SubmitButton>
				</Form>
			</Container>
		</>
	);
};

export default Newsletter;
