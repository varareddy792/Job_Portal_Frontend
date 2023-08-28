import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

interface Headline {
  resumeHeadline: string,
}
export interface resumeHeadlineState {
  loading: boolean;
  error: boolean;
  success: boolean;
  user: Array<Headline>;
  errorMessage: string | undefined;

}
const initialState: resumeHeadlineState = {
  loading: false,
  error: false,
  success: false,
  user: [],
  errorMessage: undefined,
}
export const resumeHeadlineUpdate = createAsyncThunk(
  "profile/resumeHeadline", async (data: Headline) => {

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_PATH}/jobSeekerProfile/resumeHeadline`,
        {
          resumeHeadline: data.resumeHeadline,
        }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
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

const resumeHeadlineSlice = createSlice({
  name: 'resumeHeadlineUpdate',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(resumeHeadlineUpdate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(resumeHeadlineUpdate.fulfilled, (state, action: PayloadAction<Headline[]>) => {
      state.loading = false;
      state.error = false;
      state.success = true;
      state.user = action.payload;
    });
    builder.addCase(resumeHeadlineUpdate.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      state.user = [];
      state.errorMessage = action.error.message;
    });
  },
  reducers: {}
});
export default resumeHeadlineSlice.reducer;