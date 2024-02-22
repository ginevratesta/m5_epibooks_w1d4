import { createSlice } from '@reduxjs/toolkit';

const initialState = {isDarkMode: false};

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        handleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode
            console.log(state.isDarkMode);
        },
    },
});

export const isDarkModeActive = (state) => state.darkMode.isDarkMode;
export const {handleDarkMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;