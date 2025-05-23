import React from "react";
import "./About.css";
const About = ({ about }) => (
  <section id="about-section">
    <section id="about-header">
      <h2>ABOUT ME</h2>
    </section>

    <div class="about-header">
      <span class="divider"></span>
    </div>
    <div class="about-content"> 
     
      <p>{about}</p>

      <div class="photo">
        <img src="aboutme.jpg" alt="Cindy about" />
      </div>
    </div>
    <a href="#more" class="btn">
      MORE ABOUT ME →
    </a>
  </section>
);

export default About;
