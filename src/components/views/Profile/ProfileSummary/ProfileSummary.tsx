import { useState, useEffect } from 'react';
import Modal from '../../../commonComponents/Modal';
import ProfileSummaryForm from './ProfileSummaryForm';
import { useAppSelector, useAppDispatch } from '../../../../';
import { clearUpdateProfileDashboardSlice } from '../../../../store/reducers/jobSeekerProfile/profileDashboardUpdate';
import { profileDashboardGet } from '../../../../store/reducers/jobSeekerProfile/ProfileDashboardGet';

const ProfileSummary = ({ id, profileSummary }: any) => {
    const dispatch = useAppDispatch();
    const { success } = useAppSelector((state) => state.updateProfileDashboard);
    const [isOpen, setIsOpen] = useState(false);
    const testSummary = "Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.";

    useEffect(() => {
        if (success) {
            setIsOpen(false);
            dispatch(clearUpdateProfileDashboardSlice());
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
        <div className="w-full rounded-2xl bg-white p-4 mt-5" >
            <div className="flex items-center justify-between mb-4">
                <h1>Profile summary</h1>
                <h1 className="text-blue-600 font-medium cursor-pointer" onClick={openModal}>Add profile summary</h1>
            </div>
            <span className="text-sm text-gray-500">
                {!profileSummary && testSummary}
                {profileSummary}
            </span>
            <Modal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                modalBody={<ProfileSummaryForm testSummary={testSummary} id={id} defaultProfileSummary={profileSummary} closeDialog={closeDialog} />}
            />
        </div>
    )
}

export default ProfileSummary;