import React, { useEffect, useState } from 'react'
import { FiEdit2 } from "react-icons/fi";
import Modal from '../../../commonComponents/Modal';
import CareerProfileForm from './CareerProfileForm';
import { useAppDispatch, useAppSelector } from '../../../..';
import { clearUpdateCareerProfileUpdateSlice } from '../../../../store/reducers/jobSeekerProfile/careerProfileUpdate';
import { profileDashboardGet } from '../../../../store/reducers/jobSeekerProfile/ProfileDashboardGet';

const CareerProfile = ({ profileDashboard }: any) => {
  const dispatch = useAppDispatch();
  const { success } = useAppSelector((state) => state.updateProfileDashboard);
  const [isOpen, setIsOpen] = useState(false);
  const formSummary = "This information will help the recruiters  know about your current job profile and also your desired job criteria. This will also help us personalize your job recommendations.";
  useEffect(() => {
    if (success) {
      setIsOpen(false);
      dispatch(clearUpdateCareerProfileUpdateSlice());
      dispatch(profileDashboardGet());
    }
  }, [success, dispatch]);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeDialog = () => {
    setIsOpen(false);
  };

  return (

    <div className="w-full rounded-2xl bg-white p-4 mt-5">
      <div className="flex items-center mb-2">
        <h1>Career Profile</h1><span className="ml-2 text-gray-400 hover:scale-125 cursor-pointer"> <FiEdit2 onClick={openModal} /> </span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm	text-gray-500">Current industry</div>
          <div className="text-sm font-bold text-gray-500">Analytics / KPO / Research</div>
        </div>
        <div>
          <div className="text-sm	text-gray-500">Department</div>
          <div className="text-sm font-bold text-gray-500">Production, Manufacturing &amp; Engineering</div>
        </div>
        <div>
          <div className="text-sm	text-gray-500">Role category</div>
          <div className="font-bold text-gray-500">Engineering</div>
        </div>
        <div>
          <div className="text-sm	text-gray-500">Job role</div>
          <div className="font-bold text-gray-500">Additive Manufacturing (3D Printing)</div>
        </div>
        <div >
          <div className="text-sm	text-gray-500">Desired job type</div>
          <div className="text-sm">
            <a href="javascript:;" className="font-bold text-gray-500">Add desired job type</a>
          </div>
        </div>
        <div >
          <div className="text-sm	text-gray-500">Desired employment type</div>
          <div className="text-sm"><a href="javascript:;" className="font-bold text-gray-500">Add desired employment type</a></div>
        </div>
        <div ><div className="text-sm	">Preferred shift</div>
          <div className="text-sm"><a href="javascript:;" className="text-sm font-bold text-gray-500">Add preferred shift</a></div>
        </div>
        <div ><div className="text-sm	text-gray-500">Preferred work location</div>
          <div className="text-sm font-bold text-gray-500">Bangalore/Bengaluru</div>
        </div>
        <div >
          <div className="text-sm	text-gray-500">Expected salary</div>
          <div className="text-sm font-bold text-gray-500">₹5,00,000</div>

        </div>

      </div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalBody={<CareerProfileForm formSummary={formSummary} profileDashboard={profileDashboard} closeDialog={closeDialog} />}
      />
    </div>



  )
}

export default CareerProfile