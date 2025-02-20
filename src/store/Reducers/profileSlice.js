import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fname : "",
    lname : "",
    phone : "",
    address : "",
    url : ""
}

export const profileSlice = createSlice({
    name: 'profile', initialState,
    reducers: {
        updateProfileState: (state, action)=>{
            return action.payload;
        }
    }
})

export const { updateProfileState }=profileSlice.actions;

export default profileSlice.reducer;