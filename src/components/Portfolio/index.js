import React from "react";
import babeProfile from "../../assets/BabeProfile2.png";
import DKCalcSS from '../../assets/DKCalcSS.png';
import RWSS from '../../assets/RWSS.png';
import "./portfolio.css";
import CIDT from '../../assets/CIDT.png';

export default function Projects() {
  return (
    <div>
      <h1>
        <i>Projects</i>
      </h1>
      <div className="project-card-container">
        <div className="project-card">
          <img
            src={babeProfile}
            alt="profileScreenshot"
            className="project-image"
          />
          <div className="project-info">
            <h2>Babe Laufenberg Profile</h2>
            <p>
              Former NFL quarterback Babe Laufenberg's{" "}
              <a
                href="https://kyle-mucerino.github.io/profilebabe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                website
              </a>
            </p>
            <a
              href="https://kyle-mucerino.github.io/profilebabe/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn view-project-btn"
            >
              View App
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={CIDT}
            alt="CITD screenshot"
            className="project-image"
          />
          <div className="project-info">
            <h2>Crossing I's Dotting T's</h2>
            <p>CITD band website</p>
            <a
              href="https://cidt-44ee6451003d.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn view-project-btn"
            >
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
