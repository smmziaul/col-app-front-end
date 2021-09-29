import { blockStatement } from "@babel/types";
import React from "react";

const Header = () => {
  const mystyle = {
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    fontFamily: "Arial",
    textAlign: "center",
  };
  const headerStyle = {
    display: "inline-block",
  };

  return (
    <header style={mystyle}>
      <a href="/">
        <h1 style={headerStyle}>Col-App, a College-Finder App</h1>
      </a>
    </header>
  );
};

export default Header;
