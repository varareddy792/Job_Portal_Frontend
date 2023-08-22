import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
    name: string,
    password: string,
    email: string,
    mobileNumber: string,
    userType: string,
    workStatus: boolean
}
export interface registerUserState {
    loading: boolean;
    error: boolean;
    success: boolean;
    user: Array<User>;
    errorMessage: string | undefined;

}
const initialState: registerUserState = {
    loading: false,
    error: false,
    success: false,
    user: [],
    errorMessage: undefined,
}

export const registerUser = createAsyncThunk(
    "auth/register", async (data: User) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_PATH}/auth/register`,
                {
                    name: data.name,
                    password: data.password,
                    email: data.email,
                    mobileNumber: data.mobileNumber,
                    userType: data.userType,
                    workStatus: data.workStatus,
                });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    });

const registerSlice = createSlice({
    name: 'registerUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.loading = false;
            state.error = false;
            state.success = true;
            state.user = action.payload;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = true;
            state.success = false;
            state.user = [];
            state.errorMessage = action.error.message;
        });
    },
    reducers: {}
});
export default registerSlice.reducer;