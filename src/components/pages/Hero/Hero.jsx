import "./Hero.css";

import myImage from "../../../assets/images/myhalfimage2.png";
import cv from "../../../assets/images/cv/Abdul_Rafay_CV.pdf";


export default function Hero() {

  return (

    <section className="hero" id="hero">


      <div className="hero-split-display">


        <h1 className="hero-text-left">
          Hi, I'm
        </h1>



        <div className="hero-image-wrapper">

          <div className="glow-bg"></div>

          <img
            src={myImage}
            alt="Abdul Rafay"
            className="hero-avatar"
          />

        </div>



        <h1 className="hero-text-right">
          Rafay
        </h1>


      </div>





      <div className="hero-buttons-corner">


        <a
          href={cv}
          download
          className="btn btn-primary"
        >
          Download CV
        </a>



        <a
          href="#contact"
          className="btn btn-secondary"
        >
          Contact Me
        </a>


      </div>



    </section>

  );

}
