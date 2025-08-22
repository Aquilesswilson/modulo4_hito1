import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../Context/UserContext';

const ProtectedRoute = ({ children }) => {

    const { token } = useUser()

    if (!token) {
        return <Navigate to="/login" replace />;

    } else {
        return children;        
    }

};

export default ProtectedRoute;