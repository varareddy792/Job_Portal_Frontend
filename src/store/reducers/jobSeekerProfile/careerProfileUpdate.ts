import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

interface CareerProfileUpdate {
  id: number,
  profileSummary: string | null
}
export interface registerUserState {
  loading: boolean;
  error: boolean;
  success: boolean;
  profileDashboard: Array<CareerProfileUpdate>;
  errorMessage: string | undefined;
}

const initialState: registerUserState = {
  loading: false,
  error: false,
  success: false,
  profileDashboard: [],
  errorMessage: undefined,
}


export const careerProfileUpdate = createAsyncThunk(
  "profileDashboard", async (data: CareerProfileUpdate) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_PATH}/jobSeekerProfile/profileDashboard`,
        data,
        {
          headers: {
            'Authorization': `Bearer ${Cookies.get('token')}`
          }
        }
      );
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
    } catch (error) {
      throw error;
    }
  });

const updateCareerProfileUpdateSlice = createSlice({
  name: 'profileDashboard',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(careerProfileUpdate.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = false;
    });
    builder.addCase(careerProfileUpdate.fulfilled, (state, action: PayloadAction<CareerProfileUpdate[]>) => {
      state.loading = false;
      state.success = true;
      state.error = false;
      state.profileDashboard = action.payload;
    });
    builder.addCase(careerProfileUpdate.rejected, (state, action) => {
      state.success = false;
      state.loading = false;
      state.error = true;
      state.profileDashboard = [];
      state.errorMessage = action.error.message;
    });
  },
  reducers: {
    clearUpdateCareerProfileUpdateSlice: (state) => {
      state.loading = false;
      state.error = false;
      state.success = false;
      return state;
    },
  }
});
export default updateCareerProfileUpdateSlice.reducer;
export const { clearUpdateCareerProfileUpdateSlice } = updateCareerProfileUpdateSlice.actions;