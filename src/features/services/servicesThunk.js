import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "../user/userSlice";
import axiosInstance from "../../utils/axios";

export const getServicesThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/service-details`);

		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};
export const getOurWorksThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/ourworks/`);

		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};
export const getHeroThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/hero/`);

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
