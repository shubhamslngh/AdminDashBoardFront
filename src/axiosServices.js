import axiosInstance from './axiosInstance';

const apiService = {
    login: async (username, password) => {
        const response = await axiosInstance.post('/token/', {
            username,
            password,R
        });
        localStorage.setItem('token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        return response.data;
    },

    register: async (username, email, password) => {
        const response = await axiosInstance.post('/accounts/register/', {
            username,
            email,
            password,
        });
        return response.data;
    },

    forgotPassword: async (email) => {
        const response = await axiosInstance.post('/accounts/password-reset/', {
            email,
        });
        return response.data;
    },

    getPackages: async () => {
        const response = await axiosInstance.get('/packages/packages');
        return response.data;
    },

    getPackage: async (id) => {
        const response = await axiosInstance.get(`/packages/packages${id}/`);
        return response.data;
    },

    createPackage: async (newPackage) => {
        const response = await axiosInstance.post('packages/packages/', newPackage);
        return response.data;
    },

    updatePackage: async (id, updatedPackage) => {
        const response = await axiosInstance.put(`/packages/packages${id}/`, updatedPackage);
        return response.data;
    },

    deletePackage: async (id) => {
        const response = await axiosInstance.delete(`/packages/packages${id}/`);
        return response.data;
    },

    createBooking: async (packageId, travelDate) => {
        const response = await axiosInstance.post('/bookings/', {
            package: packageId,
            travel_date: travelDate,
        });
        return response.data;
    },

    getBookings: async () => {
        const response = await axiosInstance.get('/bookings/');
        return response.data;
    },

    getBooking: async (id) => {
        const response = await axiosInstance.get(`/bookings/${id}/`);
        return response.data;
    },
};

export default apiService;
