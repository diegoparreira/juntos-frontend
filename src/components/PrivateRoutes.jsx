import React from 'react'
import { useUser } from '../context/UserContext';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRoutes = () => {
    const {user} = useUser();
    return(
        user ? <Outlet/> : <Navigate to="/" />
    )
}
