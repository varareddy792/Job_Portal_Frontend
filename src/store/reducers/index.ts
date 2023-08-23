import { combineReducers } from 'redux';
// Register
import registerSlice from './register';
import resumeHeadlineSlice from './resumeHeadline';
import keySkillsSlice from './keySkills';

export const reducer = combineReducers({
    // Register
    register: registerSlice,
    resumeHeadline: resumeHeadlineSlice,
    keySkills: keySkillsSlice,
})    