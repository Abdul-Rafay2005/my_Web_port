import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Sends the form data using your specific EmailJS credentials
    emailjs
      .sendForm(
        "service_5s3cs9x",  // Your Service ID
        "template_cdxgx43", // Your "Contact Us" Template ID
        form.current,
        "PeqtRmxMuqTZdnGP6" // Your Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // Clears the form after success
        },
        (error) => {
          alert("Failed to send message. Check console for details.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            If you want to work together or have any questions, 
            feel free to contact me.
          </p>
          <div className="info-item">
            <FaEnvelope className="contact-icon"/>
            <span>mrabdulrafay7788@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="contact-icon"/>
            <span>+92 3152462949</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon"/>
            <span>Pakistan</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        {/* The 'ref' and 'name' attributes are critical for EmailJS */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
          />
          <input 
            type="text" 
            name="title" 
            placeholder="Subject/Title" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="6" 
            required
          ></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;