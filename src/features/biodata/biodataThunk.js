import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { logoutUser } from "../user/userSlice";
import axiosInstance from "../../utils/axios";

export const getBiodatasThunk = async (name, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/bio-data`);

        // console.log('resp.data')
        // console.log(resp.data)
		return resp.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response.data.msg);
	}
};

export const getSingleBiodataThunk = async (id, thunkAPI) => {
	try {
		const resp = await axiosInstance.get(`/bio-data/${id}/`);
		
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
