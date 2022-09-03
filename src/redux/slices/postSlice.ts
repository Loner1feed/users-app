import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataAPI } from "../../api/dataAPI";
import { InitType } from "../../models/InitStateType";
import { PostAPI } from "../../models/PostAPI";

const init: InitType<PostAPI[]> = {
  error: null,
  status: null,
  data: [],
};

export const getPosts = createAsyncThunk<
  PostAPI[],
  number,
  { rejectValue: string }
>("posts/getPosts", async (userId: number, { rejectWithValue }) => {
  try {
    const response = await dataAPI.getPosts(userId);
    return response as PostAPI[];
  } catch (error) {
    return rejectWithValue("An error occured");
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState: init,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = null;
      return state;
    });

    builder.addCase(getPosts.pending, (state, action) => {
      state.status = "pending";
      state.error = null;
    });

    builder.addCase(getPosts.rejected, (state, action) => {
      state.status = "rejected";
      if (action.payload) {
        state.error = action.payload;
      }
    });
  },
});

export default postSlice.reducer;
