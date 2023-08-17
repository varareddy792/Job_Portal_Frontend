import { combineReducers } from 'redux';
// Register
import { registerSlice } from './registerSlice';

export const reducer = combineReducers({
    // Register
    register: registerSlice.reducer,
})    