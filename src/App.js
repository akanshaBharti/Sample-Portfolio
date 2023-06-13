import React from "react";
import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
import Skills from "./Components/skills";
import Resume from "./Components/resume";
import Projects from "./Components/projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Navbar/> */}
      <Skills/>
      <Resume/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
