import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from '../components/views/HomePage';
import Profile from '../components/views/Profile/Profile';
import SignUp from '../components/views/Signup';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
}

export default AllRoutes;