import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let userExist = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: userExist || null,
    userLoading: false,
    userSuccess: false,
    userError: false,
    userErrorMessage: ""
}



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.userLoading = true
                state.userSuccess = false
                state.userError = false
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.userLoading = false
                state.userSuccess = true
                state.user = action.payload
                state.userError = false
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.userLoading = false
                state.userSuccess = false
                state.userError = true
                state.userErrorMessage = action.payload
            })
            .addCase(loginUser.pending, (state, action) => {
                state.userLoading = true
                state.userSuccess = false
                state.userError = false
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.userLoading = false
                state.userSuccess = true
                state.user = action.payload
                state.userError = false
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.userLoading = false
                state.userSuccess = false
                state.userError = true
                state.userErrorMessage = action.payload
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.userLoading = false
                state.userSuccess = false
                state.userError = false
                state.user = null
            })
    }
})


export default authSlice.reducer


// REGISTER USER
export const registerUser = createAsyncThunk("REGISTER_USER", async (formData, thunkAPI) => {
    try {
        const response = await axios.post('/api/auth/register', formData)
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data
    } catch (error) {
        let message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)
    }
})

// LOGIN USER
export const loginUser = createAsyncThunk("LOGIN_USER", async (formData, thunkAPI) => {
    try {
        const response = await axios.post('/api/auth/login', formData)
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data
    } catch (error) {
        let message = error.response.data.msg
        return thunkAPI.rejectWithValue(message)
    }
})

// Logout User
export const logoutUser = createAsyncThunk("AUTH/LOGOUT", async () => {
    localStorage.removeItem('user')
})
