import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import darkModeReducer from './darkModeSlice';


export const store = configureStore({
  reducer: {
    books: bookReducer,
    darkMode: darkModeReducer,
  },
});

