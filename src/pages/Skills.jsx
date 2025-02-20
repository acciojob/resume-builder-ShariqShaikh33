import React from "react";
import Navigation from "../components/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { updateSkillState } from "../store/Reducers/skillsSlice";


const Skills=()=>{
    const dispatch = useDispatch();
    const skills = useSelector(state=>state.skill)
    const handleChange=(e)=>{
        dispatch(updateSkillState({ ...skills, [e.target.name]: e.target.value}))
    }


    return(
        <div>
            <p>Add your Skills</p>
            <form>
                <input type="text" id="skill" name="skill" placeholder="Skill*" onChange={handleChange} required></input>
            </form>

            <button id="add_skill">Add Skills</button>
            <button id="delete_skill">Delete</button>
            <Navigation prevPath="/education" nextPath="/projects"/>

        </div>
    )
}

export default Skills;