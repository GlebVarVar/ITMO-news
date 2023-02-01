import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface news {
  id: number;
  title: string;
  image_small: string;
  image_big: string;
  creation_date: string;
  date: string;
  view_count: number;
  parent_category: {
    category_id: number;
    category_title: string;
    color_title: string;
    color: string;
  };
  category: {
    category_id: number;
    category_title: string;
    color_title: string;
    color: string;
  };
  url: string;
}

interface newsState {
  value: news[];
}

const initialState: newsState = {
  value: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<news[]>) => {
      state.value = action.payload;
    },
  },
});

export const newsAction = newsSlice.actions;

export default newsSlice.reducer;
