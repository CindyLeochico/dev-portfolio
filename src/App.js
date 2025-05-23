import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
// import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { portfolioData } from "./data/portfolioData";
import WorkExperience from "./components/Works";

function App() {
  const { name, title, about, projects, contact } = portfolioData;

  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>{name}</h1>
        <p>{title}</p>
      </header>
      <section id="about">
        <About about={about} />
      </section>
      <section id="projects">
        <Projects projects={projects} />
      </section>
      <section id="works">
        <WorkExperience works={WorkExperience} />
      </section>
      {/* <section id="skills">
        <Skills skills={skills} />
      </section> */}
      <section id="contact">
        <Contact contact={contact} />
      </section>
    </div>
  );
}

export default App;
