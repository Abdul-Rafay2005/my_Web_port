import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons" // Import toggle icons

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false) // State to track if mobile menu is open

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Closes mobile menu automatically when a link is clicked
    const closeMenu = () => setMenuOpen(false)

    return (
        <header className={scrolled ? "header scroll" : "header"}>
            <div className="logo">
                <h1><span>Abdul</span>Rafay</h1>
            </div>

            {/* Hamburger Toggle Button for Mobile Screens */}
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>

            {/* Navigation container that slides out on mobile */}
            <nav className={`nav-container ${menuOpen ? "open" : ""}`}>
                <ul className="links">
                    <li><a href="#hero" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#project" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
                    <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
                    <li><a href="#serv" onClick={closeMenu}>Services</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>

                <ul className="icons">
                    <li>
                        <a href="https://github.com/Abdul-Rafay2005" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/i_am_rafyy7?igsh=Y3htdTJ6dmRvbDU4" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/abdul-rafay-18bab5356/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li> 
                </ul>
            </nav>
        </header>
    )
}

export default Header