import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type languageState = {
  value: string;
};

const initialState: languageState = {
  value: 'rus',
};

// create a slice
export const languageslice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// export the action
export const languageAction = languageslice.actions;

export default languageslice.reducer;
