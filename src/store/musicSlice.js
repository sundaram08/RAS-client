import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: {
    img: null,
    title: null,
  },
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    updateCurrentSong: (state, action) => {
      state.currentSong.img = action.payload.img;
      state.currentSong.title = action.payload.title;
    },
  },
});

export const { updateCurrentSong } = musicSlice.actions;
export default musicSlice.reducer;
