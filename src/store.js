import { configureStore } from '@reduxjs/toolkit';
import packageReducer from '../src/features/packages/packageSlice';
import bookingReducer from '../src/features/booking/bookingsSlice';
import authReducer from "../src/features/auth/authSlice";

const store = configureStore({
    reducer: {
        packages: packageReducer,
        bookings: bookingReducer,
        auth: authReducer,
    },
});

export default store;