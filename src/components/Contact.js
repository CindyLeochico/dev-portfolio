import React from "react";

const Contact = ({ contact }) => (
  <section>
    <h2>Contact</h2>
    <p>Email: {contact.email}</p>
    <p>
      <a href={contact.github} target="_blank" rel="noreferrer">
        GitHub
      </a>
    </p>
    <p>
      <a href={contact.linkedin} target="_blank" rel="noreferrer">
        LinkedIn
      </a>
    </p>
  </section>
);

export default Contact;
