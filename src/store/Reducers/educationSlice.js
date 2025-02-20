import { createSlice } from "@reduxjs/toolkit";

const initialState=[{
    courseName : "",
    completionYear : "",
    college : "",
    percentage : ""
}]

export const educationSlice = createSlice({
    name : 'education', initialState,
    reducers: {
        updateEducationState: (state, action)=>{
            return action.payload;
        }
    }
})

export const {updateEducationState} = educationSlice.actions;

export default educationSlice.reducer;