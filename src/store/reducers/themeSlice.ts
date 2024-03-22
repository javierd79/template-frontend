import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: localStorage.getItem('theme') as 'light' | 'dark' || 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { setThemeMode } = themeSlice.actions;

export default themeSlice.reducer;