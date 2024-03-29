import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "../user/userSlice";
import axiosInstance from "../../utils/axios";

export const getCareersThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/careers/`);

		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};
export const getDepartmentsThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/departments/`);

		return resp.data;
	} catch (error) {
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
