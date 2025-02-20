import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    social : "https://github.com/ShariqShaikh33"
}]

export const socialSlice = createSlice({
    name : 'socialmedia', initialState,
    reducers: {
        updateSocialState: (state, action)=>{
            return action.payload;
        }
    }
})

export const {updateSocialState} = socialSlice.actions;

export default socialSlice.reducer;