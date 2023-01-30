import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// create a slice
export const languageslice = createSlice({
  name: 'language',
  initialState: {
    value: 'rus',
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    value: [],
  },
  reducers: {
    setNews: (state, action) => {
      state.value = action.payload;
    }
  }
});
// config the store
const store = configureStore({
  reducer: {
    language: languageslice.reducer,
    news: newsSlice.reducer,
  },
});

// export default the store
export default store;

// export the action
export const languageAction = languageslice.actions;

export const newsAction = newsSlice.actions;
