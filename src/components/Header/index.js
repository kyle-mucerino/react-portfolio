import React from "react";
import coverImage from "../../assets/cover-imgAlt.png";

function Header(props) {
  return (
    <header className="flex-row space between px-1">
      <h1>Kyle Mucerino</h1>
      <img src={coverImage} alt="cup of tea and business card" className="img-thumbnail align-self-center" style={{ maxWidth: "200px", maxHeight: "200px" }}></img>
      {props.children}
    </header>
  );
}

export default Header;
