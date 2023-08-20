import React from "react";
import babeProfile from "../../assets/BabeProfile2.png";
import DKCalcSS from '../../assets/DKCalcSS.png';
import RWSS from '../../assets/RWSS.png';
import "./portfolio.css";

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
            src={DKCalcSS}
            alt="mortgagte calc screenshot"
            className="project-image"
          />
          <div className="project-info">
            <h2>Mortgage Calculator</h2>
            <p>An API integrated Mortgage Calculator </p>
            <a
              href="https://mortgage-calculator-2d0e477c8d36.herokuapp.com/"
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
            src={RWSS}
            alt="random workout screenshot"
            className="project-image"
          />
          <div className="project-info">
            <h2>Find a Workout</h2>
            <p>An API integrated random workout generator </p>
            <a
              href="https://random-workout-093c17b35175.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn view-project-btn"
            >
              View App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
