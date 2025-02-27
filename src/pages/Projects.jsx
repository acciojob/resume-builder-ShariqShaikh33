import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Projects=()=>{
    return(
        <div>

            <p>Add your project details</p>
            <form>
                <input type="text" id="projectName" name="projectName" placeholder="Project Name*" required></input>
                <input type="text" id="techStack" name="techStack" placeholder="Tech Stack" required></input>
                <input type="text" id="description" name="description" placeholder="Description" required></input>
            </form>

            <h1>Projects</h1>
            <Navigation prevPath="/projects" nextPath="/social"/>

        </div>
    )
}

export default Projects;