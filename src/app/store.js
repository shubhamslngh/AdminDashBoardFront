import { configureStore } from '@reduxjs/toolkit';
import packagesReducer from '../features/packages/packageSlice';

export const store = configureStore({
    reducer: {
        packages: packagesReducer,
    },
});
