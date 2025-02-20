import React from "react";

const EducationComp = (prop)=>{
    return(
        <>
           <h1>Education</h1>
            <h2>{prop.college}</h2>
            <p>Graduation Year: {prop.graduationYear}</p>
            <p>{prop.course}</p>
            <p>Percentage: {prop.percentage}</p> 
        </>
    )
}

export default EducationComp;