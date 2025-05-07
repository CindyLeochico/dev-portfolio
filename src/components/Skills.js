import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaPhp,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
  FaCode,
} from "react-icons/fa";
import {
  SiJquery,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiKotlin,
  SiCplusplus,
} from "react-icons/si";
import "./Skills.css";

// Frontend Skills
const frontendSkills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "jQuery", icon: <SiJquery /> },
  { name: "React", icon: <FaReact /> },
  { name: "PHP", icon: <FaPhp /> },
];

// Backend Skills
const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  {
    name: "REST API",
    icon: (
      <span role="img" aria-label="API">
        🌐
      </span>
    ),
  },
];

// UI/UX Tools
const uiUxTools = [{ name: "Figma", icon: <FaFigma /> }];

// Version Control
const versionControl = [{ name: "Git", icon: <FaGitAlt /> }];

// Database Management
const databaseManagement = [
  { name: "SQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
];

// Development Tools
const developmentTools = [
  { name: "VS Code", icon: <FaCode /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Jenkins", icon: <FaDocker /> }, // Replace if Jenkins icon available
  { name: "Docker", icon: <FaDocker /> },
  { name: "AWS", icon: <FaAws /> },
];

// Programming Languages
const programmingLanguages = [
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "C++", icon: <SiCplusplus /> },
];

// Combine all skills
const skills = [
  ...frontendSkills,
  ...backendSkills,
  ...uiUxTools,
  ...versionControl,
  ...databaseManagement,
  ...developmentTools,
  ...programmingLanguages,
];

const Skills = () => (
  <section id="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div className="skill-item" key={index}>
          <span className="icon">{skill.icon}</span>
          <span className="label">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
