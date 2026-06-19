import "./Achievements.css";

import img1 from "../../../assets/images/sts.jpeg";
import img2 from "../../../assets/images/webwizard.png";
import img3 from "../../../assets/images/NYLP.png";
import img4 from "../../../assets/images/IEEE.jpeg";
import img5 from "../../../assets/images/NasaSpace.png";
import img6 from "../../../assets/images/FAST_Crime.png";

const achievements = [
  {
    title: "Quify STEM Talent",
    desc: "Qualified for Round 2 among 1,500+ teams from across Pakistan.",
    img: img1,
  },
  {
    title: "WebWizard Hackathon",
    desc: "Secured 2nd place in a highly competitive hackathon.",
    img: img2,
  },
  {
    title: "NYLP Ambassador",
    desc: "Represented and led initiatives under the National Youth Leadership Program.",
    img: img3,
  },
  {
    title: "IEEE NED",
    desc: "Served as Co-Director of Marketing, leading a team of 100+ students.",
    img: img4,
  },
  {
    title: "NASA Space Apps Challenge",
    desc: "Developed innovative solutions addressing real-world global challenges.",
    img: img5,
  },
  {
    title: "FAST Crime Competition",
    desc: "Participated in a national-level problem-solving and innovation challenge.",
    img: img6,
  },
];

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="title">
        <h2>Achievements</h2>
        <p>Milestones, competitions, and leadership experiences.</p>
      </div>

      <div className="achievements-container">
        {achievements.map((item, index) => (
          <div className="ach-card" key={index}>
            <div className="ach-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="ach-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
