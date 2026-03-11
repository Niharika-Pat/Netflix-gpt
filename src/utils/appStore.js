import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import MovieReducer from "./movieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movie: MovieReducer,
    gpt: gptReducer,
  },
});

export default appStore;
