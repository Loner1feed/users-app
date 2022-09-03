import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataAPI } from "../../api/dataAPI";
import { InitType } from "../../models/InitStateType";
import { UserAPI } from "../../models/UserAPI";

const init: InitType<UserAPI[]> = {
  error: null,
  status: null,
  data: [],
};

export const getUsers = createAsyncThunk<
  UserAPI[],
  undefined,
  { rejectValue: string }
>("users/getUsers", async (_, { rejectWithValue }) => {
  try {
    const response = await dataAPI.getUsers();
    return response as UserAPI[];
  } catch (error) {
    return rejectWithValue("An error occured");
  }
});

const userSlice = createSlice({
  name: "users",
  initialState: init,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = null;
      state.error = null;
      return state;
    });

    builder.addCase(getUsers.pending, (state, action) => {
      state.status = "pending";
      state.error = null;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.status = "rejected";
      if (action.payload) {
        state.error = action.payload;
      }
    });
  },
});

export default userSlice.reducer;
