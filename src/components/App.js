import React, { useState } from "react";
import './../styles/App.css';
import Layout from "./Layout";
import Navigation from "./Navigation";

const App = () => {
  return (
    <div className="App">
        {/* Do not remove the main div */}
        <div className="hero"><h1>Resume Generator</h1></div>
        
        <Layout />
    </div>
  )
}

export default App
