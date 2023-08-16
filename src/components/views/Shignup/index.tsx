import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import white_boy from '../../assets/png/white-boy.png';
import briefcase from '../../assets/svg/briefcase.svg';
import schoolbag from '../../assets/svg/schoolbag.svg';

const Shignup = () => {
    return (
        <div className="bg-zinc-100 font-sans">
            <div className="px-20 h-[90%] py-14">
                <div className="grid grid-cols-3 h-full">
                    <div>
                        <div className="bg-white h-96 w-72 rounded-xl shadow flex flex-col justify-around items-center px-6 fixed">
                            <div className="h-1/2 w-full flex flex-col justify-center items-center">
                                <img
                                    src={white_boy}
                                    alt="white_boy"
                                    width="144px"
                                    height="144px"
                                />
                            </div>
                            <div className="h-1/2">
                                <h3 className="text-center font-semibold text-lg mb-2">On registering, you can</h3>
                                <div className="text-sm break-words font-light">
                                    <div className="mb-1 flex justify-start">
                                        <div className="m-1 ml-0">
                                            <BsCheck2Circle color="green" />
                                        </div>
                                        <p>
                                            Build your profile and let recruiters find you
                                        </p>
                                    </div>
                                    <div className="mb-1 flex justify-start">
                                        <div className="m-1 ml-0">
                                            <BsCheck2Circle color="green" />
                                        </div>
                                        <p>
                                            Get job postings delivered right to your email
                                        </p>
                                    </div>
                                    <div className="flex justify-start">
                                        <div className="m-1 ml-0">
                                            <BsCheck2Circle color="green" />
                                        </div>
                                        <p>
                                            Find a job and grow your career as well
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-2 col-end-4">
                        <div className="bg-white rounded-xl shadow p-10">
                            <h1 className="font-semibold text-xl mb-5"> Find a job & grow your career</h1>
                            <div>
                                <div className="flex justify-start items-center mb-3">
                                    <p className="mr-3">Continue with</p>
                                    <button className=" flex justify-center items-center border-2 border-blue-300 rounded-2xl px-1 py-1 hover:bg-blue-300">
                                        <FcGoogle size={25} />
                                        <span className="ml-1">Google</span>
                                    </button>
                                </div>
                                <div className="flex justify-between items-center mb-3">
                                    <hr className="w-2/5" />
                                    <p className="font-light">Or</p>
                                    <hr className="w-2/5" />
                                </div>
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold mb-2">
                                            Full name
                                        </label>
                                        <input className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="What is your name?" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold mb-2">
                                            Email ID
                                        </label>
                                        <input className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Tell us your Email ID" />
                                        <span className="font-normal text-xs text-gray-500">We'll send you relevant jobs in your mail</span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold mb-2">
                                            Password
                                        </label>
                                        <input className="shadow-sm appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Create a password for your account" />
                                        <span className="font-normal text-xs text-gray-500">Minimum 6 characters required</span>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-semibold mb-2">
                                            Mobile number
                                        </label>
                                        <div className="relative">
                                            <input className="shadow-sm appearance-none border rounded w-full py-3 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Mobile Number" />
                                            <span className="absolute top-3 left-1">+91</span>
                                        </div>
                                        <span className="font-normal text-xs text-gray-500">Recruiters will call on this number</span>
                                    </div>
                                    <div className="mb-4">
                                        <span className="block text-sm font-semibold mb-2">
                                            Work status
                                        </span>
                                        <div className="grid grid-cols-2 gap-10">
                                            <button className="border-2 border-gray-300 flex justify-center items-center px-3 py-3 rounded-xl hover:bg-gray-300">
                                                <span>
                                                    <span className="text-left m-0 block">I'm experienced</span>
                                                    <span className="break-words text-left m-0 block">I have work experience (excluding internships)</span>
                                                </span>
                                                <img
                                                    src={briefcase}
                                                    alt="briefcase"
                                                    width="50px"
                                                    height="50px"
                                                />
                                            </button>
                                            <button className="border-2 border-gray-300 flex justify-center items-center px-3 py-3 rounded-xl hover:bg-gray-300">
                                                <span>
                                                    <span className="text-left m-0 block">I'm a fresher</span>
                                                    <span className="break-words text-left m-0 block">I am a student/ Haven't worked after graduation</span>
                                                </span>
                                                <img
                                                    src={schoolbag}
                                                    alt="schoolbag"
                                                    width="50px"
                                                    height="50px"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                    <button className="bg-indigo-200 text-white font-bold px-3 py-2 rounded-3xl">Register now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Shignup;