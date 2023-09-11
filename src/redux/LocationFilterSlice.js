import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name:'locationFilter',
    initialState: {
        selectedLocation: "",
    },
    reducers: {
        setLocation:(state, action)=>{
            return action.payload;
        }
    }
})

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;