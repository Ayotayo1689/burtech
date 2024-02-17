import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Form,
	InputContainer,
	SubmitBtn,
	Wrapper,
	Image,
	SideImage,
	SideImg,
} from "./style";
import { FaRegEnvelope, FaRegUserCircle } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import Logo from "../../assests/burtech-texticon.png";
import LoginImg from "../../assests/login-img.png";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const Register = () => {
	const { isLoading, success } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			full_name: "",
			email: "",
			username: "",
			password: "",
			re_password: "",
			agreeToTerms: false,
			organisation: "",
		},
		validationSchema: Yup.object({
			full_name: Yup.string()
				.max(50, "Must be 15 characters or less")
				.required("Required"),
			email: Yup.string().email("Invalid email address").required("Required"),
			username: Yup.string().required("Required"),
			password: Yup.string()
				.min(6, "Must be at least 6 characters")
				.required("Required"),
			re_password: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.required("Required"),
			agreeToTerms: Yup.boolean()
				.oneOf([true], "You must accept the terms and conditions")
				.required("Required"),
			organisation: Yup.string().required("Required"),
		}),
		onSubmit: async (values, { setSubmitting }) => {
			try {
				dispatch(registerUser(values));
				// setTimeout(() => {
				// 	alert(JSON.stringify(values, null, 2));
				// 	setSubmitting(false);
				// }, 400);
			} catch (error) {
				console.log(error);
			}
		},
	});
	useEffect(() => {
		if (success) {
			setTimeout(() => {
				navigate("/login");
			}, 1000);
		}
	}, [success]);
	return (
		<Container>
			<Wrapper>
				<Image>
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
				</Image>
				<h2>Create an account</h2>
				<Form onSubmit={formik.handleSubmit}>
					{/* <label>Full Name</label> */}
					<InputContainer>
						<FaRegUserCircle />
						<input
							placeholder="Full Name"
							required
							id="full_name"
							name="full_name"
							type="text"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.full_name}
						/>
						{formik.touched.full_name && formik.errors.full_name ? (
							<div className="red-font">{formik.errors.full_name}</div>
						) : null}
					</InputContainer>
					{/* <label>UserName</label> */}
					<InputContainer>
						<FaRegUserCircle />
						<input
							type="text"
							placeholder="UserName"
							required
							id="username"
							name="username"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.username}
						/>
						{formik.touched.username && formik.errors.username ? (
							<div className="red-font">{formik.errors.username}</div>
						) : null}
					</InputContainer>
					<InputContainer>
						<FaRegUserCircle />
						<input
							type="text"
							placeholder="Company"
							required
							id="organisation"
							name="organisation"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.organisation}
						/>
						{formik.touched.organisation && formik.errors.organisation ? (
							<div className="red-font">{formik.errors.organisation}</div>
						) : null}
					</InputContainer>
					{/* <label>Email</label> */}
					<InputContainer>
						<FaRegEnvelope />
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
						{formik.touched.email && formik.errors.email ? (
							<div className="red-font">{formik.errors.email}</div>
						) : null}
					</InputContainer>

					{/* <label>Password</label> */}
					<InputContainer>
						<FiLock />
						<input
							type="password"
							placeholder="Password"
							required
							id="password"
							name="password"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.password}
						/>
						{formik.touched.password && formik.errors.password ? (
							<div className="red-font">{formik.errors.password}</div>
						) : null}
					</InputContainer>

					{/* <label>Confirm Password</label> */}
					<InputContainer>
						<FiLock />
						<input
							type="password"
							placeholder="Confirm Password"
							required
							id="re_password"
							name="re_password"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.re_password}
						/>
						{formik.touched.re_password && formik.errors.re_password ? (
							<div className="red-font">{formik.errors.re_password}</div>
						) : null}
					</InputContainer>

					<div id="terms">
						{" "}
						<input
							type="checkbox"
							id="agreeToTerms"
							name="agreeToTerms"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							checked={formik.values.agreeToTerms}
						/>
						<p>I agree to the Terms &amp; Conditions</p>
					</div>
					{formik.touched.agreeToTerms && formik.errors.agreeToTerms ? (
						<div className="red-font">{formik.errors.agreeToTerms}</div>
					) : null}

					<SubmitBtn type="submit" bg={"#4688E4"} isLoading={isLoading}>
						Sign Up
					</SubmitBtn>
					{/* <GoogleButton><FcGoogle /> Continue With Google</GoogleButton> */}
					<p id="already-user">
						Already registered? <Link to="/login">Sign In</Link>
					</p>
				</Form>
			</Wrapper>
			<SideImg></SideImg>
		</Container>
	);
};

export default Register;
