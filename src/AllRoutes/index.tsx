import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from '../components/views/LandingPage';
import SignUp from '../components/views/SignUp';
import HomePage from '../components/views/HomePage';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/registration" element={<SignUp />} />
            <Route path="/homePage" element={<HomePage />} />
        </Routes>
    )
}

export default AllRoutes;