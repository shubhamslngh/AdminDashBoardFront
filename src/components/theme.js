import React, { createContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDarkMode, setLightMode } from '../../features/theme/themeSlice';

export const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');
    const dispatch = useDispatch();

    useEffect(() => {
        if (mode === 'dark') {
            dispatch(setDarkMode());
        } else {
            dispatch(setLightMode());
        }
    }, [mode, dispatch]);

    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <ColorModeContext.Provider value={{ toggleColorMode }}>
            {children}
        </ColorModeContext.Provider>
    );
};
