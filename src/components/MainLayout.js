import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import axiosInstance from '../axiosInstance';

const MainLayout = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login');
                    return;
                }
                const response = await axiosInstance.get('/user/profile/');  // Adjust this endpoint as per your API
                setUsername(response.data.username);
            } catch (err) {
                console.error(err);
                navigate('/login');
            }
        };

        fetchUserData();
    }, [navigate]);

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 ml-64">
                <Navbar username={username} />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
