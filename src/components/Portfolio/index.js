import React from "react";
import movieReview from "../../assets/movieReview.png";
import babeProfile from "../../assets/BabeProfile.png";
import "./portfolio.css";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-card-container">
        <div className="project-card">
          <img
            src={movieReview}
            alt="Project Screenshot"
            className="project-image"
          />
          <div className="project-info">
            <h2>FILM FUSE</h2>
            <p>
              Check out a recent project I've completed!{" "}
              <a
                href="https://blooming-chamber-09680.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Film Fuse
              </a>
            </p>
            <a
              href="https://blooming-chamber-09680.herokuapp.com/"
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
            src={babeProfile}
            alt="profileScreenshot"
            className="project-image"
          />
          <div className="project-info">
            <h2>Babe Laufenberg Profile</h2>
            <p>
              Former NFL quarterback Babe Laufenberg's{" "}
              <a
                href="https://babelaufenberg.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                website
              </a>
            </p>
            <a
              href="https://babelaufenberg.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn view-project-btn"
            >
              View Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
