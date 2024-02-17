import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router";
import { createStandaloneToast } from "@chakra-ui/react";
import forgetPassword from "../../assests/forgot-password.png";
import logo from "../../assests/burtech-texticon.png";
import {
	Container,
	Wrapper,
	Image,
	SubmitButton,
	Logo,
	Form,
	Redirect,
} from "./style";
import * as Yup from "yup";
import axios from "axios";

const Forget = () => {
	const navigate = useNavigate();
	const { toast } = createStandaloneToast();
	const baseUrl =
		process.env.REACT_APP_BASE_URL || "https://api.sandbox.burtechproducts.com";

	// const [email, setEmail] = useState('');

	// const handleSubmit = async (event) => {
	//   event.preventDefault();
	//   try {
	//     const response = await axios.post('/forgot-password', {
	//       email,
	//     });
	//     console.log(response.data); // success message
	//   } catch (error) {
	//     console.error(error);
	//   }
	// };
	const formik = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address").required("Required"),
		}),

		onSubmit: async (values, { setSubmitting, resetForm }) => {
			try {
				console.log(values);
				const resp = await axios.post(
					`${baseUrl}/auth/forgot-password/`,
					values
				);
				toast({
					title: "Email sent!",
					description: "Check your email for Instructions",
					status: "info",
					duration: 3000,
					isClosable: true,
					position: "top",
					variant: "left-accent",
				});
				setSubmitting(false);
				resetForm();
				// setTimeout(() => {
				// 	alert(JSON.stringify(values, null, 2));
				// 	setSubmitting(false);
				// }, 400);
			} catch (error) {
				console.log(error);
				setSubmitting(false);
				toast({
					title: "An error occurred",
					description: "please try again",
					status: "error",
					duration: 5000,
					isClosable: true,
					variant: "left-accent",
					position: "top",
				});
			}
		},
	});
	return (
		<Container>
			<Wrapper>
				<Logo>
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</Logo>
				<Image src={forgetPassword} alt="forget password" />

				<h2>Password Reset</h2>
				<p>Did you request to reset your password be reset?</p>

				<Form onSubmit={formik.handleSubmit}>
					{formik.touched.email && formik.errors.email ? (
						<div>{formik.errors.email}</div>
					) : null}
					<input
						placeholder="Email"
						required
						id="email"
						name="email"
						type="email"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>

					<SubmitButton
						type="submit"
						isLoading={formik.isSubmitting}
						bg={"#4688E4"}
					>
						Reset Password
					</SubmitButton>
				</Form>

				<Redirect>
					If not just click the link to go back to <a href="/">Home</a>
				</Redirect>
			</Wrapper>
		</Container>
	);
};

export default Forget;
