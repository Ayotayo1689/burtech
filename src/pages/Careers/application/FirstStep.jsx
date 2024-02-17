import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Button,
	Box,
	Flex,
} from "@chakra-ui/react";
import FileDropzone from "./Filedropzone";
import axiosInstance from "../../../utils/axios";
import { useNavigate } from "react-router";
import { createStandaloneToast } from "@chakra-ui/react";

const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	workPhone: Yup.string().required("Required"),
	role: Yup.string().required("Required"),
	comment: Yup.string().required("Required"),
});

const ApplyModal = ({ role, onClose }) => {
	const handleFileDrop = (files, setFieldValue) => {
		setFieldValue("file", files[0]);
	};

	const navigate = useNavigate();
	const { toast } = createStandaloneToast();
	function handleClick() {
		navigate("/my-qoute-list");
	}
	return (
		<Box p={4}>
			<Formik
				initialValues={{
					name: "",
					email: "",
					workPhone: "",
					role: role,
					comment: "",
					file: null,
				}}
				validationSchema={SignupSchema}
				onSubmit={(values, { setSubmitting }) => {
					let formData = new FormData();
					formData.append("name", values.name);
					formData.append("email", values.email);
					formData.append("phone", values.workPhone);
					formData.append("message", values.comment);
					formData.append("role", role);
					// formData.append("file", values.file);

					toast({
						title: "Success",
						description: "You will be contacted",
						status: "info",
						duration: 5000,
						isClosable: true,
						position: "top",
						variant: "left-accent",
					});
					setSubmitting(false);
					onClose();
				}}
			>
				{({ errors, touched, setFieldValue, values, isSubmitting }) => (
					<Form padding={"0rem"}>
						<Flex direction={"column"} gap={"2rem"} padding={"0rem"} ml={"-3"}>
							<Field name="name">
								{({ field }) => (
									<FormControl>
										<Input
											sx={{ padding: "14px" }}
											border="2px solid #8e8c94"
											{...field}
											id="name"
											placeholder="Enter your Full name"
										/>
										{errors.name && touched.name ? (
											<div>{errors.name}</div>
										) : null}
									</FormControl>
								)}
							</Field>

							<Field name="workPhone">
								{({ field }) => (
									<FormControl>
										<Input
											sx={{ padding: "14px" }}
											{...field}
											id="workPhone"
											placeholder="Phone"
											border="2px solid #8e8c94"
										/>
										{errors.workPhone && touched.workPhone ? (
											<div>{errors.workPhone}</div>
										) : null}
									</FormControl>
								)}
							</Field>
							<Field name="email">
								{({ field }) => (
									<FormControl>
										<Input
											sx={{ padding: "14px" }}
											{...field}
											id="email"
											placeholder="Email"
											border="2px solid #8e8c94"
										/>
										{errors.email && touched.email ? (
											<div>{errors.email}</div>
										) : null}
									</FormControl>
								)}
							</Field>

							<Field name="role">
								{({ field }) => (
									<FormControl>
										<FormLabel>Role</FormLabel>
										<Input
											sx={{ padding: "14px" }}
											{...field}
											id="role"
											placeholder="Role"
											border="2px solid #8e8c94"
											readOnly
										/>
										{errors.role && touched.role ? (
											<div>{errors.role}</div>
										) : null}
									</FormControl>
								)}
							</Field>
							<FileDropzone
								onDrop={(files) => handleFileDrop(files, setFieldValue)}
								file={values.file}
							/>
							<Field name="comment">
								{({ field }) => (
									<FormControl>
										<Textarea
											{...field}
											id="comment"
											placeholder="Why do you want to work for us
"
											border="2px solid #8e8c94"
										/>
										{errors.comment && touched.comment ? (
											<div>{errors.comment}</div>
										) : null}
									</FormControl>
								)}
							</Field>

							{/* Add your file drag and drop field here */}

							<Button
								mt={4}
								type="submit"
								alignSelf={"self-start"}
								bg={"#4688E4"}
								fontWeight={"normal"}
								color={"white"}
								isLoading={isSubmitting}
							>
								Apply Now
							</Button>
						</Flex>
					</Form>
				)}
			</Formik>
		</Box>
	);
};

export default ApplyModal;
