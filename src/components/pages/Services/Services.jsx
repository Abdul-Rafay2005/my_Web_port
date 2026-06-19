import "./Services.css";
import {
  FaRobot,
  FaLayerGroup,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="serv">
      <div className="title">
        <h2>Services</h2>
      </div>

      <div className="services-container">
        <div className="service-card">
          <FaRobot className="service-icon" />

          <h3>AI Solutions & Automation</h3>

          <p>
            I integrate AI-powered features into applications and business
            workflows, including chatbots, intelligent assistants, automation
            systems, recommendation engines, and AI-driven tools using modern
            APIs and machine learning technologies.
          </p>
        </div>

        <div className="service-card">
          <FaLayerGroup className="service-icon" />

          <h3>Full-Stack Development</h3>

          <p>
            Building complete web applications from frontend to backend.
            I develop scalable solutions using modern technologies, APIs,
            databases, authentication systems, and cloud services to deliver
            reliable end-to-end products.
          </p>
        </div>

        <div className="service-card">
          <FaCode className="service-icon" />

          <h3>Software Development</h3>

          <p>
            Designing and developing custom software solutions focused on
            performance, maintainability, and security. From business tools
            to specialized applications, I create software tailored to your
            requirements.
          </p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="service-icon" />

          <h3>Web Development</h3>

          <p>
            Creating responsive, modern, and user-friendly websites that
            deliver excellent user experiences. From landing pages and
            portfolios to business websites and web platforms, I build
            solutions optimized for all devices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;