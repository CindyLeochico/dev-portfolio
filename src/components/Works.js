import React from "react";
import "./Works.css";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Ecashpay Asia Inc.",
    location: "Quezon City, Philippines",
    period: "March 2020 – October 2020",
    responsibilities: [
      "Developed and maintained responsive front-end components.",
      "Collaborated with design and backend teams for new features.",
      "Debugged and resolved UI issues across platforms.",
    ],
  },
  {
    role: "IT Professor",
    company: "National University, Quezon City University & STI College",
    location: "Philippines",
    period: "June 2014 – July 2023",
    responsibilities: [
      "Taught web development, programming, and software engineering.",
      "Supervised student capstone projects and bootcamps.",
      "Created industry-aligned curricula and mentoring programs.",
    ],
  },
];

const WorkExperience = () => (
  <section id="work" className="work-experience">
    <h2>Work Experience</h2>
    <div className="work-cards">
      {experiences.map((exp, index) => (
        <div key={index} className="work-card">
          <h3>{exp.role}</h3>
          <p className="company">
            {exp.company} — {exp.location}
          </p>
          <p className="period">{exp.period}</p>
          <ul>
            {exp.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default WorkExperience;
