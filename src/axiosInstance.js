import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correctly import the named export

const axiosInstance = axios.create({
    baseURL: 'https://thsdashboard-uue5tgbgyq-uc.a.run.app/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refreshToken = localStorage.getItem('refresh_token');

            if (refreshToken) {
                const tokenParts = jwtDecode(refreshToken);
                const now = Math.ceil(Date.now() / 1000);

                if (tokenParts.exp > now) {
                    try {
                        const response = await axiosInstance.post('/token/refresh/', { refresh: refreshToken });
                        localStorage.setItem('token', response.data.access);
                        axiosInstance.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
                        originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;
                        return axiosInstance(originalRequest);
                    } catch (err) {
                        console.error('Refresh token failed', err);
                        localStorage.removeItem('token');
                        localStorage.removeItem('refresh_token');
                        window.location.href = '/login'; // Redirect to login
                        return Promise.reject(err);
                    }
                } else {
                    console.log('Refresh token is expired');
                    localStorage.removeItem('token');
                    localStorage.removeItem('refresh_token');
                    window.location.href = '/login'; // Redirect to login
                }
            } else {
                console.log('Refresh token not available.');
                window.location.href = '/login'; // Redirect to login
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
