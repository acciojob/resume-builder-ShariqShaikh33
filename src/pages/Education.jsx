import React from "react";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { updateEducationState } from "../store/Reducers/educationSlice";

const Education=()=>{
    const dispatch = useDispatch();
    const education = useSelector(state=>state.education)
    const handleChange=(e)=>{
        dispatch(updateEducationState({ ...education, [e.target.name]: e.target.value}))
    }
    
    return(
        <div>

            <p>Add your Education details</p>
            <form>
                <input type="text" id="courseName" name="courseName" placeholder="Course Name*" onChange={handleChange} required></input>
                <input type="number" id="completionYear" name="completionYear" placeholder="Completion Year*" onChange={handleChange} required></input>
                <input type="text" id="college" name="college" placeholder="College/School*" onChange={handleChange} required></input>
                <input type="number" id="percentage" name="percentage" placeholder="Percentage*" onChange={handleChange} required></input>
                
            </form>

            <Navigation prevPath="/" nextPath="/skills"/>

        </div>
    )
}

export default Education;