import React from "react";

function Header(props) {
  const headerStyle = {
    fontFamily: "Futura, sans-serif"
  };

  return (
    <header className="flex-row space between px-1">
      <h1 style={headerStyle}>Kyle Mucerino's Professional Portfolio</h1>
    </header>
  );
}

export default Header;
