import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
	getServicesThunk,
	getOurWorksThunk,
	getHeroThunk,
} from "./servicesThunk";

const initialState = {
	isLoading: false,
	services: [],
	service: "Centrifuge",
	ourWorks: [],
	index: 0,
	hero: [],
};

export const getServices = createAsyncThunk(
	"services/getServices",
	getServicesThunk
);
export const getOurWorks = createAsyncThunk(
	"services/getOurWorks",
	getOurWorksThunk
);

export const getHero = createAsyncThunk("services/getHero", getHeroThunk);
const servicesSlice = createSlice({
	name: "services",
	initialState,
	reducers: {
		testing: (state) => {
			console.log(state);
		},
		setServices: (state, { payload }) => {
			state.services = payload;
		},
		setIndex: (state, { payload }) => {
			state.index = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getServices.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getServices.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.services = payload;
			})
			.addCase(getServices.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getOurWorks.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getOurWorks.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.ourWorks = payload;
			})
			.addCase(getOurWorks.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getHero.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getHero.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.hero = payload;
			})
			.addCase(getHero.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const { testing, setServices, setIndex } = servicesSlice.actions;
export default servicesSlice.reducer;
