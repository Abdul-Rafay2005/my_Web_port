import "./Certificate.css";

import cert1 from "../../../assets/images/arduino.png";
import cert2 from "../../../assets/images/EthicalHacking.png";
import cert3 from "../../../assets/images/Google.png";
import cert4 from "../../../assets/images/N8N.png";
import cert5 from "../../../assets/images/SQL.png";
import cert6 from "../../../assets/images/EngineersCode.png";

const certifications = [
    {
      title: "Arduino for Engineers",
      desc: "Learned the basics of microcontrollers, Arduino programming, sensor integration, and building simple embedded systems projects.",
      img: cert1,
    },
    {
      title: "Ethical Hacking",
      desc: "Gained understanding of cybersecurity fundamentals, penetration testing techniques, vulnerability assessment, and basic network security.",
      img: cert2,
    },
    {
      title: "AI Fundamentals",
      desc: "Covered core concepts of artificial intelligence, machine learning basics, data processing, and real-world AI applications.",
      img: cert3,
    },
    {
      title: "N8N Chatbot",
      desc: "Built automation workflows and chatbots using n8n, including API integration and no-code/low-code automation techniques.",
      img: cert4,
    },
    {
      title: "SQL Training",
      desc: "Learned database fundamentals, writing SQL queries, data manipulation, joins, and managing relational databases efficiently.",
      img: cert5,
    },
    {
      title: "EngineersCode Volunteer",
      desc: "Participated in volunteer technical activities, collaboration projects, and supported engineering community initiatives.",
      img: cert6,
    },
  ];
export default function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="title">
        <h2>Certifications</h2>
        <p>Courses, trainings, and professional certifications earned.</p>
      </div>

      <div className="certifications-container">
        {certifications.map((item, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="cert-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}