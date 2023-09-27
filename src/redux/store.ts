import { configureStore } from "@reduxjs/toolkit";
import langCodeSlice from "./features/langCodeSlice";

const store = configureStore({
  reducer: {
    lang: langCodeSlice,
  },
});
export default store;
