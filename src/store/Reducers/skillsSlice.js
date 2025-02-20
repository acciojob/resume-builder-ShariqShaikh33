import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    skill : ""
}]

export const skillSlice = createSlice({
    name : 'skills', initialState,
    reducers: {
        updateSkillState: (state, action)=>{
            return action.payload;
        }
    }
})

export const {updateSkillState} = skillSlice.actions;

export default skillSlice.reducer;