import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    blogs: [],
    blog: {},
    edit: { blog: {}, isEdit: false },
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
}


const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        editBlog: (state, action) => {
            return {
                ...state,
                edit: { blog: action.payload, isEdit: true },
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBlogs.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blogs = action.payload
                state.isError = false
            })
            .addCase(getBlogs.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getBlog.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blog = action.payload
                state.isError = false
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(addBlog.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(addBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blogs = [action.payload, ...state.blogs]
                state.isError = false
            })
            .addCase(addBlog.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(removeBlog.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(removeBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blogs = state.blogs.filter(blog => blog._id !== action.payload._id)
                state.isError = false
            })
            .addCase(removeBlog.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateBlog.pending, (state, action) => {
                state.isLoading = true
                state.isSuccess = false
                state.isError = false
            })
            .addCase(updateBlog.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.blog = action.payload
                state.edit = { blog: {}, isEdit: false }
                state.isError = false
            })
            .addCase(updateBlog.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export default blogSlice.reducer
export const { editBlog } = blogSlice.actions


// FETCH BLOGS

export const getBlogs = createAsyncThunk("FETCHING_BLOGS", async (_, thunkAPI) => {

    try {
        const response = await axios.get('/api/blogs')
        return response.data
    } catch (error) {
        let message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)
    }

})

// FETCH BLOG

export const getBlog = createAsyncThunk("FETCHING_BLOG", async (id, thunkAPI) => {
    try {
        const response = await axios.get('/api/blogs/' + id)
        return response.data
    } catch (error) {
        let message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)
    }

})


// Add Blog
export const addBlog = createAsyncThunk("ADDING_BLOG", async (formData, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token

    try {
        let options = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        const response = await axios.post("/api/blogs", formData, options)
        return response.data
    } catch (error) {
        let message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)
    }

})

// Remove Blog
export const removeBlog = createAsyncThunk("REMOVING_BLOG", async (id, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token

    try {
        let options = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        const response = await axios.delete("/api/blogs/" + id, options)
        return response.data
    } catch (error) {
        let message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)
    }

})


// Update Blog
export const updateBlog = createAsyncThunk("UPDATING_BLOG", async (updatedBlog, thunkAPI) => {

    let token = thunkAPI.getState().auth.user.token

    try {
        let options = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        const response = await axios.put("/api/blogs/" + updatedBlog._id, updatedBlog, options)
        return response.data
    } catch (error) {
        let message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)
    }

})