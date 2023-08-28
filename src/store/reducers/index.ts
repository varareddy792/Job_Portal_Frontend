import { combineReducers } from 'redux';
// Register
import registerSlice from './register';
import resumeHeadlineSlice from './jobSeekerProfile/resumeHeadline';
import keySkillsSlice from './jobSeekerProfile/keySkills';
// jobSeeker resume/profile upload 
import jobSeekerUploadReducer from './jobSeekerProfile/uploadResume';
import updateProfileDashboardSlice from './jobSeekerProfile/profileDashboardUpdate';
import getProfileDashboardSlice from './jobSeekerProfile/ProfileDashboardGet';

export const reducer = combineReducers({
    // Register
    register: registerSlice,
    jobSeekerResumeUpload: jobSeekerUploadReducer,
    updateProfileDashboard: updateProfileDashboardSlice,
    getProfileDashboard: getProfileDashboardSlice,
    resumeHeadline: resumeHeadlineSlice,
    keySkills: keySkillsSlice,
});
