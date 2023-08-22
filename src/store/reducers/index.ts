import { combineReducers } from 'redux';
// Register
import registerSlice from './register';

export const reducer = combineReducers({
    // Register
    register: registerSlice,
})    