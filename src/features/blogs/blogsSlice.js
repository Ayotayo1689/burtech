import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getBlogsThunk, getSingleBlogThunk } from "./blogsThunk";

const initialState = {
	isLoading: false,
	blogs: [],
	blog: null,
	filteredBlogs: [],
	searchText: "",
};

export const getBlogs = createAsyncThunk("blogs/getBlogs", getBlogsThunk);

export const getSingleBlog = createAsyncThunk(
	"blogs/getSingleBlog",
	getSingleBlogThunk
);
const blogsSlice = createSlice({
	name: "blogs",
	initialState,
	reducers: {
		testing: (state) => {
			console.log(state);
		},
		setBlogs: (state, { payload }) => {
			state.blogs = payload;
		},
		setIndex: (state, { payload }) => {
			state.index = payload;
		},
		setSearchText: (state, { payload }) => {
			if (payload) {
				state.searchText = payload;
			} else {
				state.searchText = "";
			}
		},
		SetFilteredBlogs: (state, { payload }) => {
			let tempData = [...state.blogs];
			if (state.searchText) {
				state.filteredBlogs = tempData.filter((blog) => {
					return blog.title
						.toLowerCase()
						.includes(state.searchText.toLowerCase());
				});
			} else {
				state.filteredBlogs = tempData;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getBlogs.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getBlogs.fulfilled, (state, { payload }) => {
				state.isLoading = false;

				state.blogs = payload;
			})
			.addCase(getBlogs.rejected, (state, { payload }) => {
				state.isLoading = false;
			})
			.addCase(getSingleBlog.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSingleBlog.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.blog = payload;
			})
			.addCase(getSingleBlog.rejected, (state, { payload }) => {
				state.isLoading = false;
			});
	},
});

export const { testing, setBlog, SetFilteredBlogs, setSearchText } =
	blogsSlice.actions;
export default blogsSlice.reducer;
