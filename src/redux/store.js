import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pageSlice';
import locationReducer from './LocationFilterSlice'
import causeReducer from './CauseFilterSlice'

export const store = configureStore({
    reducer:{
        pagination: pageReducer,
        locationFilter: locationReducer,
        causeFilter: causeReducer,
    },
    preloadedState:{
        locationFilter: '',
        causeFilter: '',
    }
})

export default store;