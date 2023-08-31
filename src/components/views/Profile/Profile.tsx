import React, { useEffect } from 'react';
import { FiEdit2 } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { BsBriefcase, BsCalendar4 } from "react-icons/bs";
import Education from './Education/Education';
import ResumeHeadline from './ResumeHeadline/ResumeHeadline';
import KeySkills from './KeySkills/KeySkills';
import ProfileSummary from './ProfileSummary/ProfileSummary';
import ResumeUpload from './ResumeUpload/ResumeUpload';
import { useAppDispatch, useAppSelector } from '../../../';
import { profileDashboardGet, clearGetProfileDashboardSlice } from '../../../store/reducers/jobSeekerProfile/ProfileDashboardGet';
import CareerProfile from './CareerProfile/CareerProfile';

const Profile = () => {
  const dispatch = useAppDispatch();
  const { success, profileDashboard } = useAppSelector((state) => state.getProfileDashboard);
  useEffect(() => {
    dispatch(profileDashboardGet());
  }, [dispatch]);
  useEffect(() => {
    if (success) {
      dispatch(clearGetProfileDashboardSlice());
    }
  }, [dispatch, success]);

  return (
    <div className="bg-zinc-100 font-sans">
      <div className="px-40 py-10 flex justify-center flex-col">
        {/* card */}
        <div className="w-full rounded-2xl bg-white p-8">
          <div className="grid grid-cols-5 h-full">
            <div className="h-full w-full flex justify-start items-center">
              <div className="rounded-full h-full">
                <img src="/logo192.png" alt="logo" height="100%" />
              </div>
            </div>
            <div className="col-start-2 col-end-6">
              <div className="mb-4">
                <div className="flex items-center">
                  <h1 className="font-semibold text-2xl">Dibyalochan Parida</h1><span className="ml-2 text-gray-400 hover:scale-125 cursor-pointer"> <FiEdit2 /> </span>
                </div>
                <span><span className="font-thin text-sm">Profile last updated - </span><span className="text-sm">08Aug , 2023</span></span>
              </div>
              <hr className="mb-4" />
              <div className="grid grid-cols-2">
                <div>
                  <div className="mb-2 flex items-center text-sm font-medium text-gray-500">
                    <SlLocationPin /><span className="ml-1">Balasore, INDIA</span>
                  </div>
                  <div className="mb-2 flex items-center text-sm font-medium text-gray-500">
                    <BsBriefcase /><span className="ml-1">Fresher</span>
                  </div>
                  <div className="flex items-center text-sm font-medium text-gray-500">
                    <BsCalendar4 /><span className="ml-1">Add availability to join</span>
                  </div>
                </div>
                <div className="border-l border-gray-300">
                  <div className="ml-2">
                    <div className="mb-2 flex items-center text-sm font-medium text-gray-500">
                      <BsTelephone /><span className="ml-1 mr-1">7064772937</span><MdVerified color="green" />
                    </div>
                    <div className="flex items-center text-sm font-medium text-gray-500">
                      <HiOutlineMail /><span className="ml-1 mr-1">dibyalochanparida@gmail.com</span><MdVerified color="green" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-5">
          <div>
            {/* card */}
            <div className="mr-5 rounded-lg border bg-white p-5 sticky top-[13%]">
              <h1 className="font-semibold mb-1">Quick links</h1>
              <button className="text-sm mt-3 px-3 py-1.5 hover:bg-gray-200 hover:text-black hover:font-semibold w-full rounded-2xl flex justify-between">
                <span>Resume</span>
                <span className="text-blue-600 font-semibold">Update</span>
              </button>
              <button className="text-sm mt-3 px-3 py-1.5 hover:bg-gray-200 hover:text-black hover:font-semibold w-full rounded-2xl flex justify-between">
                <span>Resume headline</span>
              </button>
              <button className="text-sm mt-3 px-3 py-1.5 hover:bg-gray-200 hover:text-black hover:font-semibold w-full rounded-2xl flex justify-between">
                <span>Key skills</span>
              </button>
              <button className="text-sm mt-3 px-3 py-1.5 hover:bg-gray-200 hover:text-black hover:font-semibold w-full rounded-2xl flex justify-between">
                <span>Education</span>
                <span className="text-blue-600 font-semibold">Add</span>
              </button>
              <button className="text-sm mt-3 px-3 py-1.5 hover:bg-gray-200 hover:text-black hover:font-semibold w-full rounded-2xl flex justify-between">
                <span>IT skills</span>
              </button>
              <button className="text-sm mt-3 px-3 py-1.5 hover:bg-gray-200 hover:text-black hover:font-semibold w-full rounded-2xl flex justify-between">
                <span>Projects</span>
                <span className="text-blue-600 font-semibold">Add</span>
              </button>
              <button className="text-sm mt-3 px-3 py-1.5 hover:bg-gray-200 hover:text-black hover:font-semibold w-full rounded-2xl flex justify-between">
                <span>Profile summary</span>
                {!profileDashboard[0]?.profileSummary
                  &&
                  <span className="text-blue-600 font-semibold">Add</span>
                }
              </button>
              <button className="text-sm mt-3 px-3 py-1.5 hover:bg-gray-200 hover:text-black hover:font-semibold w-full rounded-2xl flex justify-between">
                <span>Accomplishments</span>
              </button>
              <button className="text-sm mt-3 px-3 py-1.5 hover:bg-gray-200 hover:text-black hover:font-semibold w-full rounded-2xl flex justify-between">
                <span>Career profile</span>
              </button>
              <button className="text-sm mt-3 px-3 py-1.5 hover:bg-gray-200 hover:text-black hover:font-semibold w-full rounded-2xl flex justify-between">
                <span>Personal details</span>
              </button>
            </div>
          </div>
          <div className="col-start-2 col-end-5">
            {/* card  profile upload*/}
            <ResumeUpload />
            {/* <div className="w-full rounded-2xl bg-white p-4">
              <h1 className="mb-4">Resume</h1>
              <p className="mb-4 text-sm text-gray-500">
                Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.
              </p>
              <div className="p-10 border border-dashed border-gray-500 rounded-2xl flex flex-col justify-center items-center">
                <label className="cursor-pointer px-3 py-1 mb-1 rounded-3xl border-2 border-blue-400">
                  <input type="file" className="hidden" />
                  Upload resume
                </label>
                <span className=" text-gray-400">Supported Formats: doc, docx, rtf, pdf, upto 2 MB</span>
              </div>
            </div> */}

            {/* card */}
            <ResumeHeadline />
            {/* card */}
            <KeySkills />
            {/* card */}
            <Education />
            <ProfileSummary />
            {/* card */}

            {/* card */}
            <CareerProfile profileDashboard={profileDashboard} />
            {/* card */}

            <div className="w-full rounded-2xl bg-white p-4 mt-5">
              <div className="flex items-center justify-between mb-4">
                <h1>Employment</h1>
                <h1 className="text-blue-600 font-medium">Add employment</h1>
              </div>
              <span className="text-sm text-gray-500">Mention your employment details including your current and previous company work experience.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;