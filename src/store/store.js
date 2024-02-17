import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import categorieSlice from "../features/categories/categoriesSlice";
import productSlice from "../features/products/productSlice";
import servicesSlice from "../features/services/servicesSlice";
import blogsSlice from "../features/blogs/blogsSlice";
import officesSlice from "../features/office/officeSlice";
import careersSlice from "../features/careers/careersSlice";
import specialOffersSlice from "../features/specialOffers/specialOffersSlice";
import cartSlice from "../features/cart/cartSlice";
import biodatasSlice from "../features/biodata/biodataSlice";

const store = configureStore({
	reducer: {
		user: userSlice,
		products: productSlice,
		categories: categorieSlice,
		services: servicesSlice,
		blogs: blogsSlice,
		offices: officesSlice,
		careers: careersSlice,
		specialOffers: specialOffersSlice,
		cart: cartSlice,
		biodata: biodatasSlice,
	},
});

export default store;
