import { configureStore } from '@reduxjs/toolkit';
import packageReducer from '../src/features/packages/packageSlice';
import bookingReducer from '../src/features/booking/bookingsSlice';


const store = configureStore({
    reducer: {
        packages: packageReducer,
        bookings: bookingReducer,
    },
});

export default store;