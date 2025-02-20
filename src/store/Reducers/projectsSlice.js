import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    projectName : "To-Do List",
    techStack : "MERN",
    description :  "A Todo List"
}]

export const projectSlice=createSlice({
    name : 'projects', initialState,
    reducers: {
        updateProjectState: (state, action)=>{
            return action.payload;
        }
    }
})

export const {updateProjectState} = projectSlice.actions;

export default projectSlice.reducer;