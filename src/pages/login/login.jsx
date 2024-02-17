import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
	Container,
	Form,
	Help,
	InputContainer,
	SubmitBtn,
	Wrapper,
	Image,
	SideImage,
	SideImg,
	GoogleButton,
} from "./style";
import { FaRegEnvelope, FaRegUserCircle } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
import { FiLock } from "react-icons/fi";
import Logo from "../../assests/burtech-texticon.png";
import LoginImg from "../../assests/login-img.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/user/userSlice";
import { Navigate } from "react-router-dom";
// import { Button } from "@chakra-ui/react";

const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const { user, isLoading } = useSelector((store) => store.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleUserNameChange = (event) => {
		setUserName(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!userName && !password) {
			return toast.error("please provide all values");
		}

		dispatch(
			loginUser({
				username: userName,
				password: password,
			})
		);
		// console.log(user);

		// handle form submission logic here
	};
	useEffect(() => {
		if (user.username) {
			setTimeout(() => {
				navigate("/");
			}, 1000);
		}
	}, [user.username]);

	return (
		<Container>
			<Wrapper>
				<Image>
					<Link to="/">
						<img src={Logo} alt="logo" />
					</Link>
				</Image>

				<h2>Welcome Back</h2>
				<p>Please login your account</p>
				<Form onSubmit={handleSubmit}>
					<label>UserName</label>
					<InputContainer>
						<FaRegUserCircle />
						<input
							type="text"
							placeholder="UserName"
							required
							value={userName}
							onChange={handleUserNameChange}
						/>
					</InputContainer>

					<label>Password</label>
					<InputContainer>
						<FiLock />
						<input
							type="password"
							placeholder="Password"
							required
							value={password}
							onChange={handlePasswordChange}
						/>
					</InputContainer>

					<Help>
						<div id="terms">
							<input type="checkbox" />
							<p>Keep me signed in</p>
						</div>
						<Link to="/forgot-password">Forgot Password</Link>
					</Help>

					<SubmitBtn type="submit" bg={"#4688E4"} isLoading={isLoading}>
						Log In
					</SubmitBtn>
					{/* <GoogleButton>
						<FcGoogle /> Continue With Google
					</GoogleButton> */}
					<p id="already-user">
						Don't have any account? <Link to="/signup">Sign Up</Link>
					</p>
				</Form>
			</Wrapper>
			<SideImg></SideImg>
		</Container>
	);
};

export default Login;
