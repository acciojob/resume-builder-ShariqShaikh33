import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../pages/Profile";
import Education from "../pages/Education";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Socialmedia from "../pages/Socialmedia";
import FinalResume from "../pages/Final";

const Layout=()=>{
    return (
        <div className="layout">
          <h1>Resume Generator</h1>
            {/* Do not remove the main div */}
            <Routes>
              <Route path="/" element={<Profile/>}></Route>
              <Route path="education" element={<Education/>}></Route>
              <Route path="skills" element={<Skills/>}></Route>
              <Route path="projects" element={<Projects/>}></Route>
              <Route path="social" element={<Socialmedia/>}></Route>
              <Route path="final" element={<FinalResume/>}></Route>
            </Routes>
            
        </div>
      )
}

export default Layout;