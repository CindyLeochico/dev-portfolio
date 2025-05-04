import React from "react";
import "./App.css";
import portfolioData from "./data/portfolioData";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const { name, title, about, projects, skills, contact } = portfolioData;

  return (
    <div className="App">
      <header>
        <h1>{name}</h1>
        <p>{title}</p>
      </header>
      <About about={about} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact contact={contact} />
    </div>
  );
}

export default App;
