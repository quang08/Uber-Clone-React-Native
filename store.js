import { configureStore } from "@reduxjs/toolkit";
import navReducer from './slices/navSlice'; //navSlice: store user's info about their navigation (origin, destination,.. )

export const store = configureStore({
    reducer: {
        nav: navReducer,
    },
})