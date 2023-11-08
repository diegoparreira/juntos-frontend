import React from 'react'
import { useUser } from '../context/UserContext';
import { Outlet, Navigate } from 'react-router-dom';

export const AdminRoutes = () => {
    const {user} = useUser();
    console.log(user);
    return(
        user.type !== 'student' ? <Outlet/> : <Navigate to="/home" />
    )
}
