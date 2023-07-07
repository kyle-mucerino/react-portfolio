import React from "react";
import babeProfile from "../../assets/BabeProfile2.png";
import "./portfolio.css";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
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
      </div>
    </div>
  );
}
