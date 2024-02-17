import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getCareersThunk, getDepartmentsThunk } from "./careersThunk";

const initialState = {
	isLoading: false,
	careers: [],
	departments: [],
};

export const getCareers = createAsyncThunk(
	"careers/getCareers",
	getCareersThunk
);
export const getDepartments = createAsyncThunk(
	"careers/getDepartments",
	getDepartmentsThunk
);

const careersSlice = createSlice({
	name: "careers",
	initialState,
	reducers: {
		testing: (state) => {
			console.log(state);
		},
		setCareers: (state, { payload }) => {
			state.careers = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCareers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getCareers.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.careers = payload;
			})
			.addCase(getCareers.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getDepartments.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getDepartments.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.departments = payload;
			})
			.addCase(getDepartments.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const { testing, setCareers } = careersSlice.actions;
export default careersSlice.reducer;
