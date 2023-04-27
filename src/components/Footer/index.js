import React from 'react';
import { BsCaretRightFill } from "react-icons/bs";


function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/kyle-mucerino"
    },
    {
      name: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/kyle-mucerino-95b112184/'
    }
  ]

  return (
    <footer className="flex-row space between px-1">
      {icons.map((icon) => (
        <div key={icon.name}>
          <BsCaretRightFill />
          <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer">
            <i className={icon.name} onClick={() => window.open(icon.link, "_blank")}></i>
          </a>
        </div>
      ))}
    </footer>
  );
}

export default Footer;