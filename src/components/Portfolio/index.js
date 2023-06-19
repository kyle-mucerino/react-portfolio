import React from "react";
import movieReview from "../../assets/movieReview.png";
import babeProfile from "../../assets/BabeProfile2.png";
import LakersOffseason from "../../assets/LakersOffseason SS.png";
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
          <img src={LakersOffseason} alt="Lakers Offseason App" className="project-image" />
          <div className="project-info">
            <h2>Lakers Offseason App</h2>
            <p>
              A React-based front end app that uses Amazon Web Services on the back end for data storage. What should the Los Angeles Lakers do this offseason? An app for Lakers fans to give their perspective on the NBA's most popular franchise.
              </p>
              <a 
                href="http://ec2-18-222-200-199.us-east-2.compute.amazonaws.com/"
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
