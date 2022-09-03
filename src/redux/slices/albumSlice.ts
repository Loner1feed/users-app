import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataAPI } from "../../api/dataAPI";
import { AlbumAPI } from "../../models/AlbumAPI";
import { InitType } from "../../models/InitStateType";

const init: InitType<AlbumAPI[]> = {
  error: null,
  status: null,
  data: [],
};

export const getAlbums = createAsyncThunk<
  AlbumAPI[],
  number,
  { rejectValue: string }
>("albums/getAlbums", async (userId: number, { rejectWithValue }) => {
  try {
    const response = await dataAPI.getAlbums(userId);
    return response as AlbumAPI[];
  } catch (error) {
    return rejectWithValue("An error occured");
  }
});

const albumSlice = createSlice({
  name: "albums",
  initialState: init,
  reducers: {
    clearAlbums: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAlbums.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = null;
      return state;
    });

    builder.addCase(getAlbums.pending, (state, action) => {
      state.status = "pending";
      state.error = null;
    });

    builder.addCase(getAlbums.rejected, (state, action) => {
      state.status = "rejected";
      if (action.payload) {
        state.error = action.payload;
      }
    });
  },
});

export default albumSlice.reducer;

export const { clearAlbums } = albumSlice.actions;
