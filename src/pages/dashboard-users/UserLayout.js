import { Outlet } from "react-router-dom";
import Wrapper from "./styles/SharedLayout";
import SmallSidebar from "./MobileNavbar/SmallSidebar";
import BigSidebar from "./DestopSideBar/BigSidebar";
import Navbar from "./Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
	getAllUserQuotes,
	getAllOrders,
	getAllWorkshops,
} from "../../features/user/userSlice";
import { useEffect } from "react";
import axiosInstance from "../../utils/axios";
import { addUserInfo } from "../../features/user/userSlice";

const UserLayout = () => {
	const dispatch = useDispatch();
	const { user, allQuotes } = useSelector((store) => store.user);

	useEffect(() => {
		if (user?.user_id) {
			const getUser = async () => {
				try {
					const resp = await axiosInstance.get("/user-profiles/me/");
					dispatch(addUserInfo(resp.data));
				} catch (error) {
					console.log(error);
				}
			};
			getUser();
			dispatch(getAllUserQuotes(user?.user_id || ""));
			dispatch(getAllOrders(user?.user_id || ""));
			dispatch(getAllWorkshops(user?.user_id || ""));
		}
	}, []);

	return (
		<Wrapper>
			<main className="dashboard">
				<SmallSidebar />
				<BigSidebar />
				<div>
					<Navbar />
					<div className="dashboard-page">
						<Outlet />
					</div>
				</div>
			</main>
		</Wrapper>
	);
};

export default UserLayout;
