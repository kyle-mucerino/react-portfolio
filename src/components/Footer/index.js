import React from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import '../Footer/footer.css';

function Footer() {
  const icons = [
    {
      icon: FaGithub,
      link: "https://github.com/kyle-mucerino"
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/kyle-mucerino-95b112184/"
    }
  ];

  return (
    <footer
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <BsCaretRightFill style={{ color: "black", fontSize: "30px", marginRight: "10px" }} />
        <span
          style={{ color: "black", fontSize: "20px", fontWeight: "bold", lineHeight: "30px" }}
        >
          Connect with Me:
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {icons.map((icon, index) => {
          const IconComponent = icon.icon;

          return (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 10px",
                transition: "0.3s"
              }}
            >
              <IconComponent
                style={{ fontSize: "30px" }}
                className="social-icon"
              />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
