import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "../user/userSlice";
import axiosInstance from "../../utils/axios";

export const getOfficesThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/offices`);

		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const getSingleOfficeThunk = async (id, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/offices/${id}/`);
		
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
