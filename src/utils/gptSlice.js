import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptModeOn: false,
  },
  reducers: {
    setGptModeOn: (state) => {
      state.gptModeOn = !state.gptModeOn;
    },
  },
});

export const { setGptModeOn } = gptSlice.actions;
export default gptSlice.reducer;
