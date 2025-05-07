import React, { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { portfolioData } from "./data/portfolioData";

function App() {
  const { name, title, about, projects, skills, contact } = portfolioData;

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
      <section id="skills">
        <Skills skills={skills} />
      </section>
      <section id="contact">
        <Contact contact={contact} />
      </section>
    </div>
  );
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Detect scroll position
  const handleScroll = () => {
    console.log("Scrolling..."); // Add this line
    if (window.scrollY > 300) {
      setShowBackToTop(true); // Show the button when scrolled down
    } else {
      setShowBackToTop(false); // Hide the button when at the top
    }
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll back to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <Navbar />
      <header>
        <h1>Your Name</h1>
        <p>Your Title</p>
      </header>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>

      {/* Conditional rendering of the Back to Top button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}
    </div>
  );
}

export default App;
