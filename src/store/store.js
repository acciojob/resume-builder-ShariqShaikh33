import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./Reducers/profileSlice";
import educationSlice from "./Reducers/educationSlice";
import skillSlice from "./Reducers/skillsSlice";
import projectSlice from "./Reducers/projectsSlice";
import socialSlice from "./Reducers/socialmediaSlice";

export const store=configureStore({
    reducer: {
        profile : profileSlice,
        education : educationSlice,
        skills : skillSlice,
        projects : projectSlice,
        social : socialSlice
    },
})
