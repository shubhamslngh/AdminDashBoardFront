import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiService from '../../axiosServices';

// Fetch packages
export const fetchPackages = createAsyncThunk('packages/fetchPackages', async () => {
    const response = await apiService.getPackages();
    return response;
});

// Create package
export const createPackage = createAsyncThunk('packages/createPackage', async (newPackage) => {
    const response = await apiService.createPackage(newPackage);
    return response;
});

// Update package
export const updatePackage = createAsyncThunk('packages/updatePackage', async (updatedPackage) => {
    const response = await apiService.updatePackage(updatedPackage.id, updatedPackage);
    return response;
});

// Delete package
export const deletePackage = createAsyncThunk('packages/deletePackage', async (packageId) => {
    await apiService.deletePackage(packageId);
    return packageId;
});

const packageSlice = createSlice({
    name: 'packages',
    initialState: {
        packages: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPackages.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPackages.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.packages = action.payload;
            })
            .addCase(fetchPackages.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(createPackage.fulfilled, (state, action) => {
                state.packages.push(action.payload);
            })
            .addCase(updatePackage.fulfilled, (state, action) => {
                const index = state.packages.findIndex((pkg) => pkg.id === action.payload.id);
                state.packages[index] = action.payload;
            })
            .addCase(deletePackage.fulfilled, (state, action) => {
                state.packages = state.packages.filter((pkg) => pkg.id !== action.payload);
            });
    },
});

export default packageSlice.reducer;
