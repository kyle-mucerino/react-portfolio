import React from "react";
import movieReview from "../assets/movieReview.png";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-card">
        <img src="screenshot.jpg" alt="Project Screenshot" />
        <div className="project-info">
          <h2>Movie Review</h2>
          <p>
            Check out a recent project I've completed!{" "}
            <a
              href="https://blooming-chamber-09680.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Movie Review
            </a>
          </p>
          <a
            href="https://blooming-chamber-09680.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}
