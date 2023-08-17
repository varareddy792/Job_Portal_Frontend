import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from '../components/views/HomePage';
import SignUp from '../components/views/SignUp';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<SignUp />} />
        </Routes>
    )
}

export default AllRoutes;