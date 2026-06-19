import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="myimage_bg.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="myimage4.png" alt="" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
          I’m Abdul Rafay, a Computer Science student at NED University of Engineering & Technology, Karachi, Pakistan. I’m passionate about building dynamic web applications, intelligent software systems, and AI-driven solutions that solve real-world problems.

My technical stack includes full-stack web development (React.js, Node.js), Python scripting, AI API integration, and C++ desktop application development. I’ve worked on real-world projects during my internship at Aga Khan University and currently serve as an AI Engineer Intern at FlyRank (USA), where I contribute to building AI-powered systems.

Beyond development, I’m actively involved in leadership and community work. I serve as Co-Director at IEEE NEDUET and as an Ambassador at NYLP. Separately, I have also mentored and guided 500+ students in their academic and professional growth.
          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;