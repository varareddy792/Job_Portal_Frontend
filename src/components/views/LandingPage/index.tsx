import React from 'react';
import { BiSearch } from 'react-icons/bi';

const LandingPage = () => {
    return (
        <div className="bg-zinc-100 h-screen">
            <div className="px-20 pt-20">
                <div className="mb-8">
                    <h1 className="font-bold text-center text-5xl mb-3">Find your dream job now</h1>
                    <h6 className="font-medium text-center text-lg">5 lakh+ jobs for you to explore</h6>
                </div>
                <div className="w-full flex justify-center text-center">
                    <div className="relative flex items-center justify-around w-7/12 h-14 rounded-3xl focus-within:shadow-lg bg-white overflow-hidden">
                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <BiSearch size={25} />
                        </div>
                        <input
                            className="peer h-full w-4/12 outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Enter skills / designations / companies" />
                        <select placeholder='Select experience' className="peer h-full w-2/12 outline-none text-sm text-gray-700 pr-2">
                            <option value='option1'>Fresher (less than 1 year)</option>
                            <option value='option2'>1 year</option>
                            <option value='option3'>2 years</option>
                            <option value='option3'>3 years</option>
                            <option value='option3'>4 years</option>
                            <option value='option3'>5 years</option>
                            <option value='option3'>6 years</option>
                            <option value='option3'>7 years</option>
                            <option value='option3'>8 years</option>
                            <option value='option3'>9 years</option>
                            <option value='option3'>10 years</option>
                            <option value='option3'>11 years</option>
                            <option value='option3'>12 years</option>
                            <option value='option3'>13 years</option>
                            <option value='option3'>14 years</option>
                            <option value='option3'>15 years</option>
                            <option value='option3'>16 years</option>
                            <option value='option3'>17 years</option>
                            <option value='option3'>18 years</option>
                            <option value='option3'>19 years</option>
                            <option value='option3'>20 years</option>
                            <option value='option3'>21 years</option>
                            <option value='option3'>22 years</option>
                            <option value='option3'>23 years</option>
                            <option value='option3'>24 years</option>
                            <option value='option3'>25 years</option>
                            <option value='option3'>26 years</option>
                            <option value='option3'>27 years</option>
                            <option value='option3'>28 years</option>
                            <option value='option3'>29 years</option>
                            <option value='option3'>30 years</option>
                        </select>
                        <input
                            className="peer h-full w-2/12 outline-none text-sm text-gray-700 pr-2"
                            type="text"
                            id="search"
                            placeholder="Enter location" />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white px-8 py-2 rounded-3xl">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;