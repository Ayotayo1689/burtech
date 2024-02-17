import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getBiodatasThunk, getSingleBiodataThunk } from "./biodataThunk";

const initialState = {
	isLoading: false,
	biodatas: [],
	biodata: null,
};

export const getBiodatas = createAsyncThunk("biodatas/getBiodatas", getBiodatasThunk);

export const getSingleBiodata = createAsyncThunk(
	"biodatas/getSingleBiodata",
	getSingleBiodataThunk
);
const biodatasSlice = createSlice({
	name: "biodata",
	initialState,
	reducers: {
		testing: (state) => {
			console.log(state);
		},
		setBiodatas: (state, { payload }) => {
			state.biodatas = payload;
		},
		setIndex: (state, { payload }) => {
			state.index = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getBiodatas.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getBiodatas.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.biodatas = payload;
				// console.log(payload)
			})
			.addCase(getBiodatas.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getSingleBiodata.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSingleBiodata.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.biodata = payload;
			})
			.addCase(getSingleBiodata.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const { testing, setBiodata } = biodatasSlice.actions;
export default biodatasSlice.reducer;
