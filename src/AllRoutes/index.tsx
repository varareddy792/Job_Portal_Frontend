import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from '../components/views/HomePage';
import Shignup from '../components/views/Signup';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<Shignup />} />
        </Routes>
    )
}

export default AllRoutes;