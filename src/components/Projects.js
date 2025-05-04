import React from "react";

const Projects = ({ projects }) => (
  <section>
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <div key={index}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noreferrer">
          View
        </a>
      </div>
    ))}
  </section>
);

export default Projects;
