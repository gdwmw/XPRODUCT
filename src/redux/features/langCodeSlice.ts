import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LangState {
  code: number;
}

const initialState: LangState = {
  code: 0,
};

const langCodeSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLangCode: (state, action: PayloadAction<number>) => {
      state.code = action.payload;
    },
  },
});

export const { setLangCode } = langCodeSlice.actions;
export default langCodeSlice.reducer;
