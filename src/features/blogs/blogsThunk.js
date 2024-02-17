import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "../user/userSlice";
import axiosInstance from "../../utils/axios";

export const getBlogsThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/blog`);

		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const getSingleBlogThunk = async (id, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/blog/${id}/`);
		
		// console.log(resp)
		return resp.data;
	} catch (error) {
		// console.log(error.response)
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const clearStoreThunk = async (message, thunkAPI) => {
	try {
		thunkAPI.dispatch(logoutUser(message));
		return Promise.resolve();
	} catch (error) {
		return Promise.reject();
	}
};
