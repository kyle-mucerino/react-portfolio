import React from "react";
import '../Resume/resume.css';

function Resume() {
  return (
    <section className="my-5">
      <div className="container">
        <div className="my-2">
          <p>
            Click to see my{" "}
            <a
              href="https://drive.google.com/file/d/186ZTQvzw0S14SJmN2e6yAa_SDTXiCTwX/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </p>
          <p className="fst-italic">Skills acquired after completion of University of California, Irvine's Full Stack Web Development Boot Camp:</p>
          <div className="button-container">
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              HTML
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              CSS
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              JavaScript
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              jQuery
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              React
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              GraphQL
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Material UI
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              APIs
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Node.js
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              Express.js
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              MySQL &amp; Sequelize
            </button>
            <button
              type="button"
              className="list-group-item list-group-item-action"
            >
              MongoDB &amp; Mongoose
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
