import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EducationComp from "../components/FinalComponents/EducationComp";
import ProfileComp from "../components/FinalComponents/ProfileComp";
import SkillsComp from "../components/FinalComponents/SkillsComp";
import ProjectComp from "../components/FinalComponents/ProjectComp";
import SocialComp from "../components/FinalComponents/SocialComp";
import Navigation from "../components/Navigation";


const FinalResume = ()=>{
    const profile = useSelector((state)=>state.profile);
    const education = useSelector((state)=>state.education);
    const skill = useSelector((state)=>state.skills);
    const project = useSelector((state)=>state.projects);
    const social = useSelector((state)=>state.social);

    return (
        <div>
            <Navigation prevPath="/social" nextPath="/"/>

            <div className="Profile">
                {
                    <ProfileComp key={profile.phone} fname={profile.fname} lname={profile.lname} address={profile.address} phone={profile.phone} url={profile.url}/>
                }
            </div>

            <div className="Education">
                {
                    education.map((e)=>{
                        return <EducationComp key={e.percentage} course={e.courseName} graduationYear={e.completionYear} college={e.college} percentage={e.percentage}/>
                    })
                }
            </div>

            <div className="Skill">
                <h1>Skills</h1>
                {
                    skill.map((e)=>{
                        return <SkillsComp key={e.skill} skill={e.skill}/>
                    })
                }
            </div>

            <div className="Project">
                <h1>Projects</h1>
                
                {
                    project.map((e)=>{
                        return <ProjectComp key={e.projectName} projectName={e.projectName} techStack={e.techStack} description={e.description}/>
                    })
                }
            </div>
            
            
            <div className="Social">
                <h1>Social Links</h1>
                {
                    social.map((e)=>{
                        return <SocialComp key={e.social} social={e.social}/>
                    })
                }
            </div>
        </div>
    )
}

export default FinalResume;