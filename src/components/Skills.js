import React from "react";

const Skills = ({ skills }) => (
  <section>
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
