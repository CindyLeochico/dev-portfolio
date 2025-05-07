import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import icons
import "./Contact.css";

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <div className="confirmation-message">
          <h3>Thank you for your message!</h3>
          <p>I will get back to you as soon as possible.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <input type="submit" value="Send Message" />
        </form>
      )}

      {/* Social Media Icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/cindy-leochico-393b891a0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/CindyLeochico"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Contact;
