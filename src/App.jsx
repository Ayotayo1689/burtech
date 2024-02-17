import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingWrapper from "./components/wrapper/landing-wrapper";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Services from "./pages/services";
// import Portfolio from "./pages/portfolio";
import Products from "./pages/products";
// import Education from "./pages/education";
// import WorkshopDetails from "./pages/workshop";
import ProductDetails from "./pages/product-details";
import QouteList from "./pages/qoute-list";
import About from "./pages/AboutUs/About";
import Contact from "./pages/ContactUS/Contact";
import Careers from "./pages/Careers/Careers";
import Blog from "./pages/Blog/Blog";
import SingleBlog from "./pages/SingleBlog/SingleBlog";
import SubCategories from "./pages/sub-categories";
import SpecialOffers from "./pages/special-offers/special-offers";
import Portfolio from "./pages/portfolio/portfolio";
// import SingleServicePage from "./pages/singleServicePage/SingleServicePage";
import Privacy from "./pages/privacy/privacy";
import Forget from "./pages/forget-password/forget";
import ResetPassword from "./pages/reset-password/reset-password";

import {
	UserLayout,
	UsersDashboard,
	Settings,
	Orders,
} from "./pages/dashboard-users";

import ScrollToTop from "./components/StrollToTop";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./features/categories/categoriesSlice";
import { getProducts } from "./features/products/productSlice";
import { getOurWorks, getHero } from "./features/services/servicesSlice";
import { getBlogs } from "./features/blogs/blogsSlice";
import "@fortawesome/fontawesome-free/css/all.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { getCareers, getDepartments } from "./features/careers/careersSlice";
import { getSpecialOffers } from "./features/specialOffers/specialOffersSlice";
import Error from "./pages/Error";
import { getOffices } from "./features/office/officeSlice";
import { getBiodatas } from "./features/biodata/biodataSlice";
import { countCartItems } from "./features/cart/cartSlice";
function App() {
	const dispatch = useDispatch();
	const { cart } = useSelector((store) => store.cart);
	useEffect(() => {
		dispatch(getCategories());
		dispatch(getHero());
		dispatch(getProducts());
		dispatch(getBlogs());
		dispatch(getOffices());
		dispatch(getCareers());
		dispatch(getDepartments());
		dispatch(getOurWorks());
		dispatch(getBiodatas());
		dispatch(getSpecialOffers());
	}, []);
	useEffect(() => {
		dispatch(countCartItems());
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Register />} />
					<Route path="/forgot-password" element={<Forget />} />
					<Route
						path="/auth/password-reset/:Uid/:Token"
						element={<ResetPassword />}
					/>
					<Route element={<LandingWrapper />}>
						<Route index element={<Home />} />
						<Route path="/services" element={<Services />} />

						<Route path="/portfolio" element={<Portfolio />} />
						{/* <Route path="/workshop" element={<Education />} /> */}

						<Route path="/products" element={<Products />} />
						<Route path="/sub-categories/:subId" element={<SubCategories />} />

						<Route path="/my-qoute-list" element={<QouteList />} />
						<Route
							path="/product-details/:productId"
							element={<ProductDetails />}
						/>
						{/* <Route
							path="/workshop-details/:workshopId"
							element={<WorkshopDetails />}
						/> */}
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/careers" element={<Careers />} />
						<Route path="/blogs" element={<Blog />} />
						<Route path="/blog/:blogId" element={<SingleBlog />} />
						<Route path="/special-offers" element={<SpecialOffers />} />
						<Route path="/privacy-policy" element={<Privacy />} />
						{/* <Route path="/singleService" element={<SingleServicePage />} /> */}
					</Route>

					{/* This routes is for the users dashboard routes/pages */}
					<Route
						path="/users-dashboard"
						element={
							<ProtectedRoute>
								<UserLayout />
							</ProtectedRoute>
						}
					>
						<Route index element={<UsersDashboard />} />
						<Route path="orders" element={<Orders />} />
						<Route path="settings" element={<Settings />} />
					</Route>
					<Route path="*" element={<Error />} />
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
}

export default App;
