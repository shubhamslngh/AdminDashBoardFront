// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../axiosServices";

export const login = createAsyncThunk("auth/login", async ({ username, password }) => {
    const response = await apiService.login(username, password);
    return response;
});

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: localStorage.getItem("token") || null,
        status: "idle",
        error: null,
    },
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            localStorage.removeItem("refresh_token");
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = "loading";
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem("token", action.payload.token);
                state.token = action.payload.token;
                state.status = "succeeded";
                state.error = null;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;