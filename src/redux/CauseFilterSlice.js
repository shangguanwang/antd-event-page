import { createSlice } from "@reduxjs/toolkit";

const causeSlice = createSlice({
    name:'causeFilter',
    initialState: {
        selectedCause: "",
    },
    reducers: {
        setCause:(state, action)=>{
            return action.payload;
        }
    }
})

export const { setCause } = causeSlice.actions;
export default causeSlice.reducer;