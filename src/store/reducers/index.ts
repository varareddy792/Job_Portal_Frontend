import { combineReducers } from 'redux';
// Register
import registerSlice from './register';
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
});
