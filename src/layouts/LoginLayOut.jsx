import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayOut = () => {
    return (
        <>
            <NavigationBar />   
            <Outlet/>
        </>
    );
};

export default LoginLayOut;