import { combineReducers } from 'redux';
// Register
import registerSlice from './register';
import resumeHeadlineSlice from './jobSeekerProfile/resumeHeadline';
import keySkillsSlice from './jobSeekerProfile/keySkills';
// jobSeeker resume/profile upload 
import jobSeekerUploadReducer from './jobSeekerProfile/uploadResume';
import updateProfileDashboardSlice from './jobSeekerProfile/profileDashboardUpdate';
import getProfileDashboardSlice from './jobSeekerProfile/ProfileDashboardGet';
import jobSeekerEducation from './jobSeekerProfile/jobSeekerEducation';
import getEducationDetails from './jobSeekerProfile/getEducationDetails';
import updateCareerProfileUpdateSlice from './jobSeekerProfile/careerProfileUpdate';
import getIndustrySlice from './dropdown/industry';

export const reducer = combineReducers({
    // Register
    register: registerSlice,
    jobSeekerResumeUpload: jobSeekerUploadReducer,
    updateProfileDashboard: updateProfileDashboardSlice,
    updateCareerProfile: updateCareerProfileUpdateSlice,
    getProfileDashboard: getProfileDashboardSlice,
    resumeHeadline: resumeHeadlineSlice,
    keySkills: keySkillsSlice,
    education: jobSeekerEducation,
    educationDetails: getEducationDetails,
    getIndustry: getIndustrySlice,
});
