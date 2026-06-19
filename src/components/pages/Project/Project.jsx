import "./Project.css";

import img1 from "../../../assets/images/Cleveroad.jpg";
import img2 from "../../../assets/images/portfolio.png";
import img3 from "../../../assets/images/Arcova.png";
import img4 from "../../../assets/images/CalmOS.png";
import img5 from "../../../assets/images/TalksyAI.png";
import img6 from "../../../assets/images/bookstore.png";

const projects = [
  {
    title: "E-Commerce Website",
    img: img1,
    desc: "Modern online store with product filtering, shopping cart, and secure payment integration. Built to provide a seamless shopping experience across all devices.",
    skills: ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://your-demo-link.com",
  },

  {
    title: "Arcova",
    img: img3,
    desc: "A fictional SaaS platform built using semantic HTML5, modern CSS, and JavaScript. Focused on clean UI, responsiveness, and performance.",
    skills: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/yourusername/arcova",
    liveUrl: "https://arcova-three.vercel.app/",
  },

  {
    title: "Portfolio Website",
    img: img2,
    desc: "Personal portfolio website showcasing projects, achievements, and technical skills with a modern responsive design.",
    skills: ["HTML", "CSS", "Bootstrap"],
    githubUrl: "https://github.com/Abdul-Rafay2005/MY_Portfolio",
    liveUrl: "https://raffay.me/",
  },

  {
    title: "Digital Calm OS",
    img: img4,
    desc: "AI-powered productivity platform designed to reduce information overload across email, chat, calendar, and task management systems.",
    skills: [
      "TypeScript",
      "JavaScript",
      "CSS",
      "Firebase",
      "AI",
      "API",
    ],
    githubUrl:
      "https://github.com/Abdul-Rafay2005/Digital-Calm-OS#digital-calm-os",
    liveUrl: "https://digital-calm-os.vercel.app/",
  },

  {
    title: "Talksy AI",
    img: img5,
    desc: "AI chatbot powered by Google's Gemini API with Firebase integration for authentication and persistent conversation history.",
    skills: ["JavaScript", "CSS", "Firebase", "Gemini API"],
    githubUrl: "https://github.com/Abdul-Rafay2005/AI-Model",
    liveUrl: "https://nexa-psi.vercel.app/",
  },

  {
    title: "Book Store Management",
    img: img6,
    desc: "Python-based bookstore management system featuring inventory tracking, customer management, search functionality, and sales records.",
    skills: ["Python", "SQL", "Database"],
    githubUrl: "https://github.com/Abdul-Rafay2005/bookStore",
    liveUrl: "",
  },
];

export default function Project() {
  return (
    <section className="project" id="project">
      <div className="title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            <div className="btns">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <i className="fab fa-github"></i> GitHub
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}