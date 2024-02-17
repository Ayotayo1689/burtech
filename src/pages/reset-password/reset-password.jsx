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
import { useParams } from "react-router";
import { Grid, FormControl, FormLabel, Input } from "@chakra-ui/react";

const ResetPassword = () => {
	const navigate = useNavigate();
	const { toast } = createStandaloneToast();
	const { Uid, Token } = useParams();
	const baseUrl =
		process.env.REACT_APP_BASE_URL || "https://api.sandbox.burtechproducts.com";
	const formOne = useFormik({
		initialValues: {
			password: "",
			re_password: "",
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.min(6, "Must be at least 6 characters")
				.required("Required"),
			re_password: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.required("Required"),
		}),
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			try {
				const resp = await axios.post(
					`${baseUrl}/auth/confirm-password-reset/`,
					{
						uid: Uid,
						token: Token,
						new_password: values.password,
					}
				);
				toast({
					title: "Password Changed",
					description: "Your Password has been changed successfully",
					status: "info",
					duration: 5000,
					isClosable: true,
					position: "top",
					variant: "left-accent",
				});
				setSubmitting(false);
				resetForm();
				setTimeout(() => {
					navigate("/login");
				}, 1000);
			} catch (error) {
				console.log(error);
				setSubmitting(false);
				toast({
					title: "An error occurred",
					description: error.response?.data?.new_password[0],
					status: "error",
					duration: 5000,
					isClosable: true,
					position: "top",
					variant: "left-accent",
				});
			}
			setSubmitting(false);
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

				<h2>Enter Your New Password</h2>
				<p>Please choose a new password</p>

				<Form onSubmit={formOne.handleSubmit}>
					<Grid>
						<FormControl my={4}>
							<FormLabel>New Password</FormLabel>
							<Input
								type="password"
								placeholder="Password"
								required
								id="password"
								name="password"
								onChange={formOne.handleChange}
								onBlur={formOne.handleBlur}
								value={formOne.values.password}
							/>
							{formOne.touched.password && formOne.errors.password ? (
								<div className="red-font">{formOne.errors.password}</div>
							) : null}
						</FormControl>
						<FormControl my={4}>
							<FormLabel>Confirm Password</FormLabel>
							<Input
								type="password"
								placeholder="Confirm Password"
								required
								id="re_password"
								name="re_password"
								onChange={formOne.handleChange}
								onBlur={formOne.handleBlur}
								value={formOne.values.re_password}
							/>
							{formOne.touched.re_password && formOne.errors.re_password ? (
								<div className="red-font">{formOne.errors.re_password}</div>
							) : null}
						</FormControl>
					</Grid>
					<SubmitButton
						type="submit"
						bg={"#4688E4"}
						isLoading={formOne.isSubmitting}
					>
						Update password
					</SubmitButton>
				</Form>

				<Redirect>
					If not, click the link to go back to <a href="/">Home</a>
				</Redirect>
			</Wrapper>
		</Container>
	);
};

export default ResetPassword;
