import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="bg-[#fff] shadow sticky top-0 h-[10%] flex z-50 font-sans">
            <div className="px-20 w-screen flex items-center justify-between">
                {/* Logo or site name  */}
                <div className="flex space-x-14 items-center">
                    <Link className="text-black text-2xl font-bold" to="/">JOB PORTAL</Link>
                    {/* Navigation Link*/}
                    <div className="flex space-x-6">
                        <Link to="/home" className="text-black hover:border-b-2 hover:border-orange-400">Jobs</Link>
                        <Link to="#" className="text-black hover:border-b-2 hover:border-orange-400">Companies</Link>
                        <Link to="#" className="text-black hover:border-b-2 hover:border-orange-400">Services</Link>
                    </div>
                </div>
                <div className="flex space-x-4 items-center">
                    <button className="rounded-3xl border-2 border-blue-300 px-5 py-1.5">
                        Login
                    </button>
                    <Link to="/registration" className="
                      group 
                      relative 
                      overflow-hidden 
                      rounded-3xl 
                    bg-orange-500
                      px-5 
                      py-1.5
                      before:absolute 
                      before:inset-0 
                      before:origin-bottom 
                      before:scale-y-[0.1] 
                      before:bg-orange-600
                      before:transition
                      before:duration-300
                      hover:before:scale-y-100"
                    >
                        <span className="relative text-base text-white">
                            Register
                        </span>
                    </Link>
                    <div className="border border-gray-200 h-5"></div>
                    <button className="">For employers</button>
                </div>
            </div>
        </nav>
    )
}
export default Header;