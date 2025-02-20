import React from "react";

const ProjectComp=(prop)=>{
    return (
        <div>
            <p>{prop.projectName}</p>
            <p>{prop.techStack}</p>
            <p>{prop.description}</p>
        </div>
    )
}

export default ProjectComp;