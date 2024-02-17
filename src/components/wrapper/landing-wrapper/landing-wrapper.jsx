import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../footer";
import Navbar from "../../navbar";
import { Container } from "./style";
import SmallSidebar from "../../MobileNavbar/SmallSidebar";

const LandingWrapper = () => {
	return (
		<Container>
			<Navbar />
			<SmallSidebar />
			<Outlet />
			<Footer />
		</Container>
	);
};

export default LandingWrapper;
