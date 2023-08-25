import { combineReducers } from 'redux';
// Register
import registerSlice from './register';
// jobSeeker resume/profile upload 
import jobSeekerUploadReducer from './jobSeekerProfile/uploadResume';

export const reducer = combineReducers({
    // Register
    register: registerSlice,
    jobSeekerResumeUpload: jobSeekerUploadReducer
});
