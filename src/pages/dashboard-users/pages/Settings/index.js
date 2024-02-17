import React, { useState } from "react";
import {
	Container,
	Pages,
	Title,
	Profile,
	ProfileContainer,
	Heading,
	ProfileStatus,
	GridWrapper,
	UpdateButton,
	FormWrapper,
	Buttons,
	GreenStatus,
	YellowStatus,
	Username,
	Name,
	Edit,
	SubHeading,
} from "../../styles/settings";
import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Select,
	FormControl,
	FormLabel,
	Input,
	Switch,
	Stack,
	Button,
	Textarea,
	Text,
	Box,
	Grid,
	Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BiAlarm, BiCheckCircle } from "react-icons/bi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";
import { getUserFromLocalStorage } from "../../../../utils/localStorage";
import axios from "axios";
import axiosInstance from "../../../../utils/axios";
import { addUserInfo } from "../../../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { addUserToLocalStorage } from "../../../../utils/localStorage";
const Index = () => {
	const user = getUserFromLocalStorage();
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const toast = useToast({
		position: "top",
	});

	const baseUrl =
		process.env.REACT_APP_BASE_URL || "https://api.sandbox.burtechproducts.com";
	const formOne = useFormik({
		initialValues: {
			oldPassword: "",
			password: "",
			re_password: "",
		},
		validationSchema: Yup.object({
			oldPassword: Yup.string().required("Required"),
			password: Yup.string()
				.min(6, "Must be at least 6 characters")
				.required("Required"),
			re_password: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.required("Required"),
		}),
		onSubmit: async (values, { setSubmitting }) => {
			try {
				// setTimeout(() => {
				// 	alert(JSON.stringify(values, null, 2));
				// 	setSubmitting(false);
				// }, 400);
				let token;
				if (user) {
					token = user.token;
				} else {
					token = "";
				}
				const resp = await axios.post(
					`${baseUrl}/auth/change-password/`,
					{
						new_password: values.password,
						current_password: values.oldPassword,
					},
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				toast({
					title: "Password Changed",
					description: "Your Password has been changed successfully",
					status: "info",
					duration: 5000,
					isClosable: true,
				});
			} catch (error) {
				const msg = Object.values(error.response.data).join("\n");
				toast({
					title: "An error occurred",
					description: msg,
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
			setSubmitting(false);
		},
	});
	const formTwo = useFormik({
		initialValues: {
			email: user?.email || "",
			full_name: user?.full_name || "",
			address: user?.address || "",
			phone: user?.phone || "",
			organisation: user?.organisation || "",
		},
		validationSchema: Yup.object({
			email: Yup.string().email("Invalid email address"),

			full_name: Yup.string(),
			address: Yup.string(),
			phone: Yup.string(),
			organisation: Yup.string(),
		}),
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			try {
				// setTimeout(() => {
				// 	alert(JSON.stringify(values, null, 2));
				// 	setSubmitting(false);
				// }, 400);
				//
				const resp = await axiosInstance.put("/user-profiles/me/", values);
				dispatch(addUserInfo({ ...user, ...resp.data }));
				addUserToLocalStorage({ ...user, ...resp.data });

				toast({
					title: "Profile Updated",
					status: "info",
					duration: 5000,
					isClosable: true,
				});
				resetForm();
			} catch (error) {
				const msg = Object.values(error.response.data).join("\n");

				toast({
					title: "An error occurred",
					description: msg,
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			}
			setSubmitting(false);
		},
	});

	return (
		<div>
			<Container>
				<Title>Settings</Title>
				{/* <Pages>
					<Breadcrumb
						spacing="8px"
						separator={<ChevronRightIcon color="gray.500" />}
					>
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Home</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem isCurrentPage>
							<BreadcrumbLink href="#">Settings</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
				</Pages> */}
				<Profile>
					<ProfileContainer>
						<Heading>Profile Details</Heading>
						<Tabs>
							<TabList>
								<Tab>Personal Data</Tab>
								{/* <Tab>Settings</Tab> */}
								<Tab>Password</Tab>
							</TabList>

							<TabPanels>
								<TabPanel className="form-panel">
									<FormWrapper onSubmit={formTwo.handleSubmit}>
										<GridWrapper>
											<FormControl my={4}>
												<FormLabel>Full Name</FormLabel>
												<Input
													type="text"
													required
													id="full_name"
													name="full_name"
													onChange={formTwo.handleChange}
													onBlur={formTwo.handleBlur}
													value={formTwo.values.full_name}
												/>
												{formTwo.touched.full_name &&
												formTwo.errors.full_name ? (
													<div className="red-font">
														{formTwo.errors.full_name}
													</div>
												) : null}
											</FormControl>
											<FormControl my={4} ml={{ lg: 4 }}>
												<FormLabel>Email address</FormLabel>
												<Input
													placeholder="Email"
													required
													id="email"
													name="email"
													type="email"
													onChange={formTwo.handleChange}
													onBlur={formTwo.handleBlur}
													value={formTwo.values.email}
												/>
												{formTwo.touched.email && formTwo.errors.email ? (
													<div className="red-font">{formTwo.errors.email}</div>
												) : null}
											</FormControl>
											<FormControl my={4}>
												<FormLabel>Mobile Number</FormLabel>
												<Input
													type="text"
													placeholder="+234801234567"
													id="phone"
													name="phone"
													onChange={formTwo.handleChange}
													onBlur={formTwo.handleBlur}
													value={formTwo.values.phone}
												/>
												{formTwo.touched.phone && formTwo.errors.phone ? (
													<div className="red-font">{formTwo.errors.phone}</div>
												) : null}
											</FormControl>
											<FormControl my={4} ml={{ lg: 4 }}>
												<FormLabel>Company</FormLabel>
												<Input
													type="text"
													placeholder="Company"
													id="organisation"
													name="organisation"
													onChange={formTwo.handleChange}
													onBlur={formTwo.handleBlur}
													value={formTwo.values.organisation}
												/>
												{formTwo.touched.organisation &&
												formTwo.errors.organisation ? (
													<div className="red-font">
														{formTwo.errors.organisation}
													</div>
												) : null}
											</FormControl>
											<FormControl my={4}>
												<FormLabel>Address</FormLabel>
												<Textarea
													type="text"
													id="address"
													placeholder=""
													name="address"
													onChange={formTwo.handleChange}
													onBlur={formTwo.handleBlur}
													value={formTwo.values.address}
												/>
												{formTwo.touched.address && formTwo.errors.address ? (
													<div className="red-font">
														{formTwo.errors.address}
													</div>
												) : null}
											</FormControl>
										</GridWrapper>
										<UpdateButton
											bg={"#4688E4"}
											isLoading={formTwo.isSubmitting}
											type="submit"
										>
											Update Profile
										</UpdateButton>
									</FormWrapper>
								</TabPanel>
								{/* <TabPanel>
									<SubHeading>Security Settings</SubHeading>
									<Stack my={3} direction="row">
										<Switch id="isChecked" isChecked colorScheme="red" />
										<Text>Save my Activities Log</Text>
									</Stack>
									<Stack my={3} direction="row">
										<Switch colorScheme="red" />
										<Text>Confirm me through email before password change</Text>
									</Stack>
									<SubHeading>Managed Notification</SubHeading>
									<Stack my={3} direction="row">
										<Switch id="isChecked" isChecked colorScheme="red" />
										<Text>Save my Activities Log</Text>
									</Stack>
									<Stack my={3} direction="row">
										<Switch id="isChecked" isChecked colorScheme="red" />
										<Text>Confirm me through email before password change</Text>
									</Stack>
								</TabPanel> */}
								<TabPanel>
									<FormWrapper onSubmit={formOne.handleSubmit}>
										<FormControl my={4} w={{ lg: "45%" }}>
											<FormLabel>Old Password</FormLabel>
											<Input
												type="password"
												placeholder="Old Password"
												required
												id="oldPassword"
												name="oldPassword"
												onChange={formOne.handleChange}
												onBlur={formOne.handleBlur}
												value={formOne.values.oldPassword}
											/>
											{formOne.touched.oldPassword &&
											formOne.errors.oldPassword ? (
												<div className="red-font">
													{formOne.errors.oldPassword}
												</div>
											) : null}
										</FormControl>
										<FormControl my={4} ml={{ lg: 4 }}>
											{/* <FormLabel>New Password</FormLabel>
											<Input type='password' /> */}
										</FormControl>
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
													<div className="red-font">
														{formOne.errors.password}
													</div>
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
												{formOne.touched.re_password &&
												formOne.errors.re_password ? (
													<div className="red-font">
														{formOne.errors.re_password}
													</div>
												) : null}
											</FormControl>
										</Grid>
										<UpdateButton
											type="submit"
											bg={"#4688E4"}
											isLoading={formOne.isSubmitting}
										>
											Update Profile
										</UpdateButton>
									</FormWrapper>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</ProfileContainer>
					<ProfileStatus>
						<h2>Your Account Status</h2>
						<Buttons>
							<GreenStatus className="green">
								Email Verified <BiCheckCircle />
							</GreenStatus>

							{user?.phone ? (
								<GreenStatus className="green">
									<Flex>
										Phone Verified <BiCheckCircle />
									</Flex>
								</GreenStatus>
							) : (
								<YellowStatus className="yellow">
									<Flex>
										Phone Pending <BiAlarm />
									</Flex>
								</YellowStatus>
							)}
						</Buttons>
						<Grid>
							<Box mb={4}>
								<h2>User Name</h2>
								<Username>
									<Name>{user?.username || "N/A"}</Name>
								</Username>
							</Box>
							<Box mb={4}>
								<h2>Full Name</h2>
								<Username>
									<Name>{user?.full_name || "N/A"}</Name>
								</Username>
							</Box>
							<Box mb={4}>
								<h2>Email</h2>
								<Username>
									<Name>{user?.email || "N/A"}</Name>
								</Username>
							</Box>
							<Box mb={4}>
								<h2>Phone</h2>
								<Username>
									<Name>{user?.phone || "N/A"}</Name>
								</Username>
							</Box>
							<Box mb={4}>
								<h2>Company</h2>
								<Username>
									<Name>{user?.organisation || "N/A"}</Name>
								</Username>
							</Box>
							<Box mb={4}>
								<h2>Address</h2>
								<Username>
									<Name>{user?.address || "N/A"}</Name>
								</Username>
							</Box>
						</Grid>
					</ProfileStatus>
				</Profile>
			</Container>
		</div>
	);
};

export default Index;
