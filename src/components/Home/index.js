import React, { useState } from "react";
import '../../components/Home/home.css';

export default function Home() {
  const [isTextVisible, setTextVisible] = useState(false);

  const handleBadgeClick = () => {
    setTextVisible(true);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh"
      }}
    >
      <div style={{ maxWidth: "600px", padding: "20px" }}>
        <h1
          className={`fs-1 badge bg-primary text-wrap position-relative ${
            isTextVisible ? "d-none" : ""
          } my-custom-badge`}
          style={{
            width: "14rem",
            marginBottom: "20px",
            padding: "5px",
            cursor: "pointer"
          }}
          onClick={handleBadgeClick}
        >
          Welcome!
          {!isTextVisible && (
            <span
              className="position-absolute top-10 start-50 end-0 translate-middle"
              style={{
                fontSize: "10px",
                background: "rgba(255, 255, 255, 0.8)",
                padding: "1px",
                borderRadius: "4px",
                font: "Futura, sans-serif",
                color: "black",
                width: "54px"
              }}
            >
              (click me)
            </span>
          )}
        </h1>
        {isTextVisible && (
          <p
            style={{
              fontSize: "24px",
              fontFamily: "Futura, sans-serif"
            }}
          >
            Welcome to my professional portfolio! Please navigate around and
            find information about myself, ways to get in contact, and previous
            projects I have worked on. Thank you for taking the time out of your
            busy day to visit!
          </p>
        )}
      </div>
    </div>
  );
}
