import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pageSlice';
import locationReducer from './LocationFilterSlice'

export const store = configureStore({
    reducer:{
        pagination: pageReducer,
        locationFilter: locationReducer,
    },
    preloadedState:{
        locationFilter: '',
    }
})

export default store;