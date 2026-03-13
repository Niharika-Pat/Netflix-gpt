import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptModeOn: false,
    moviesName: null,
    movieResults: null,
  },
  reducers: {
    setGptModeOn: (state) => {
      state.gptModeOn = !state.gptModeOn;
    },
    addGptMovie: (state, action) => {
      const { moviesName, movieResults } = action.payload;
      state.moviesName = moviesName;
      state.movieResults = movieResults;
    },
  },
});

export const { setGptModeOn, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
