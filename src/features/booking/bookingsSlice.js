import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiService from "../../axiosServices"; // Ensure this is the correct path to your API service

export const fetchBookings = createAsyncThunk(
    "bookings/fetchBookings",
    async () => {
        const response = await apiService.getBookings();
        return response;
    }
);

const bookingsSlice = createSlice({
    name: "bookings",
    initialState: {
        bookings: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookings.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.bookings = action.payload;
            })
            .addCase(fetchBookings.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default bookingsSlice.reducer;
