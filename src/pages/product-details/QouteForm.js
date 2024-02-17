import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
	FormControl,
	Input,
	Textarea,
	Button,
	Box,
	Flex,
	FormLabel,
} from "@chakra-ui/react";
import FileDropzone from "./Filedropzone";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router";
import { createStandaloneToast } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";

const SignupSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	workPhone: Yup.string().required("Required"),
	contactAddress: Yup.string().required("Required"),
	comment: Yup.string().required("Required"),
});

const QouteForm = ({ productId, name, model, upload, onClose, multiple }) => {
	const dispatch = useDispatch();
	const { user } = useSelector((store) => store.user);
	const handleFileDrop = (files, setFieldValue) => {
		setFieldValue("file", files[0]);
	};

	const { cart } = useSelector((store) => store.cart);

	const navigate = useNavigate();
	const { toast } = createStandaloneToast();
	// function handleClick() {
	// 	navigate("/my-qoute-list");
	// }
	return (
		<Box p={4}>
			<Formik
				initialValues={{
					name: user?.full_name || "",
					email: user?.email || "",
					workPhone: user?.phone || "",
					contactAddress: user?.address || "",
					comment: "",
					file: null,
				}}
				validationSchema={SignupSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					let cartItems;
					if (multiple) {
						cartItems = cart?.map((item) => {
							return {
								quantity: item.amount,
								product: item.id,
							};
						});
					} else {
						cartItems = [
							{
								quantity: "1",
								product: productId,
							},
						];
					}

					console.log(cartItems);
					const date = new Date();
					const year = date.getFullYear();
					const month = (date.getMonth() + 1).toString().padStart(2, "0");
					const day = date.getDate().toString().padStart(2, "0");
					const formattedDate = `${year}-${month}-${day}`;
					let formData = new FormData();
					formData.append("name", values.name);
					formData.append("email", values.email);
					formData.append("phone", values.workPhone);
					formData.append("message", values.comment);
					formData.append("status", "pending");
					formData.append("date", formattedDate);
					formData.append("quotation_items", cartItems);
					if (user?.user_id) {
						formData.append("user", user?.user_id);
					}

					const data = {
						quotation_items: cartItems,
						name: values.name,
						email: values.email,
						phone: values.workPhone,
						message: values.comment,
						status: "pending",
						date: formattedDate,
					};
					if (user?.user_id) {
						data.user = user?.user_id;
					}
					// formData.append("file", values.file);

					axiosInstance
						.post("/quotations/", data)
						.then(() => {
							toast({
								title: "Success",
								description: multiple
									? "Your Quote-List Has Been Received"
									: "Your Quote Request Has Been Received",
								status: "info",
								duration: 6000,
								isClosable: true,
								position: "top",
								variant: "left-accent",
							});
							setSubmitting(false);
							resetForm();
							setTimeout(() => {
								if (onClose) {
									onClose();
								}
							}, 3000);

							if (multiple) {
								dispatch(clearCart());
							}
							// navigate("/my-qoute-list");
						})
						.catch((error) => {
							setSubmitting(false);
							const msg = Object.values(error.response.data).join("\n");

							toast({
								title: "An error occurred",
								description: msg,
								status: "error",
								duration: 5000,
								isClosable: true,
								variant: "left-accent",
								position: "top",
							});
						});
				}}
			>
				{({ errors, touched, setFieldValue, values, isSubmitting }) => (
					<Form padding={"0rem"}>
						<Flex direction={"column"} gap={"2rem"} padding={"0rem"} ml={"-3"}>
							<Field name="name">
								{({ field }) => (
									<FormControl>
										<FormLabel htmlFor="name">Full Name</FormLabel>

										<Input
											sx={{ padding: "14px" }}
											border="2px solid #8e8c94"
											{...field}
											id="name"
											placeholder="Enter your Full name"
										/>
										{errors.name && touched.name ? (
											<div className="red-font">{errors.name}</div>
										) : null}
									</FormControl>
								)}
							</Field>
							<Flex gap={"1rem"}>
								<Field name="workPhone">
									{({ field }) => (
										<FormControl>
											<FormLabel htmlFor="workPhone">Phone</FormLabel>

											<Input
												sx={{ padding: "14px" }}
												{...field}
												id="workPhone"
												placeholder="Work Phone"
												border="2px solid #8e8c94"
											/>
											{errors.workPhone && touched.workPhone ? (
												<div className="red-font">{errors.workPhone}</div>
											) : null}
										</FormControl>
									)}
								</Field>
								<Field name="email">
									{({ field }) => (
										<FormControl>
											<FormLabel htmlFor="email">Email</FormLabel>

											<Input
												sx={{ padding: "14px" }}
												{...field}
												id="email"
												placeholder="Email"
												border="2px solid #8e8c94"
											/>
											{errors.email && touched.email ? (
												<div className="red-font">{errors.email}</div>
											) : null}
										</FormControl>
									)}
								</Field>
							</Flex>

							<Field name="contactAddress">
								{({ field }) => (
									<FormControl>
										<FormLabel htmlFor="contackAddress">
											Contact Address
										</FormLabel>

										<Input
											sx={{ padding: "14px" }}
											{...field}
											id="contactAddress"
											placeholder="Contact Address"
											border="2px solid #8e8c94"
										/>
										{errors.contactAddress && touched.contactAddress ? (
											<div className="red-font">{errors.contactAddress}</div>
										) : null}
									</FormControl>
								)}
							</Field>
							{upload && (
								<FileDropzone
									onDrop={(files) => handleFileDrop(files, setFieldValue)}
									file={values.file}
								/>
							)}

							<Field name="comment">
								{({ field }) => (
									<FormControl>
										<Textarea
											{...field}
											id="comment"
											placeholder="please provide any additional comment
"
											border="2px solid #8e8c94"
										/>
										{errors.comment && touched.comment ? (
											<div className="red-font">{errors.comment}</div>
										) : null}
									</FormControl>
								)}
							</Field>

							{/* Add your file drag and drop field here */}

							<Button
								mt={2}
								type="submit"
								alignSelf={"self-start"}
								bg={"#4688E4"}
								fontWeight={"normal"}
								color={"white"}
								isLoading={isSubmitting}
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

export default QouteForm;
