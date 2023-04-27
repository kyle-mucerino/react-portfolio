import React from "react";
import coverImage from "../../assets/cover-imgAlt.png";
import dracsImg from "../../assets/Dracs4.JPG";
import ProPic from "../../assets/ProPic.PNG";
import SJH from "../../assets/SanJanCoaching.PNG";


function Header(props) {
  return (
    <header className="flex-row space between px-1">
      <h1>Kyle Mucerino's Professional Portfolio</h1>
      <div className="d-flex justify-content-evenly">
        <img src={coverImage} alt="guy coding at desk" className="mx-auto img-thumbnail" style={{ maxWidth: "200px", maxHeight: "200px" }}></img> {props.children}
        <img src={dracsImg} alt="bench fball pic" className="img-thumbnail mx-auto" style={{ maxWidth: "200px", maxHeight: "200px" }}></img>
        <img src={ProPic} alt="bench fball pic" className="img-thumbnail mx-auto" style={{ maxWidth: "200px", maxHeight: "200px" }}></img>
        <img src={SJH} alt="bench fball pic" className="img-thumbnail mx-auto" style={{ maxWidth: "200px", maxHeight: "200px" }}></img>
      </div>
    </header>
  );
}

export default Header;
