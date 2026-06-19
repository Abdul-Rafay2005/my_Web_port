import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){
  return(
    <footer className="footer">
      <div className="footer-container">
        <p> @ Abdul Rafay </p>
        
        <div className="social-icons">
          {/* Replace these # with your actual profile URLs */}
          <a href="https://github.com/Abdul-Rafay2005" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
          <a href="https://www.linkedin.com/in/abdul-rafay-18bab5356/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
          </a>
          <a href="https://www.instagram.com/i_am_rafyy7?igsh=Y3htdTJ6dmRvbDU4" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;