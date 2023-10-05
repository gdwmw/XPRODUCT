import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // pilih penyimpanan yang sesuai dengan kebutuhan Anda
import langCodeSlice from "./features/langCodeSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, langCodeSlice);

const store = configureStore({
  reducer: {
    lang: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
