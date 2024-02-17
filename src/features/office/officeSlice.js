import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getOfficesThunk, getSingleOfficeThunk } from "./officeThunk";

const initialState = {
	isLoading: false,
	offices: [],
	office: null,
};

export const getOffices = createAsyncThunk("offices/getOffices", getOfficesThunk);

export const getSingleOffice = createAsyncThunk(
	"offices/getSingleOffice",
	getSingleOfficeThunk
);
const officesSlice = createSlice({
	name: "offices",
	initialState,
	reducers: {
		testing: (state) => {
			console.log(state);
		},
		setOffices: (state, { payload }) => {
			state.offices = payload;
		},
		setIndex: (state, { payload }) => {
			state.index = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getOffices.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getOffices.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.offices = payload;
			})
			.addCase(getOffices.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getSingleOffice.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSingleOffice.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.office = payload;
			})
			.addCase(getSingleOffice.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const { testing, setOffice} = officesSlice.actions;
export default officesSlice.reducer;
