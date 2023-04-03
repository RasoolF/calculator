import React from "react";
import "../styles/Header.css";
import ThemeSec from "./ThemeSec";
function Header({ themeHandler }) {
  return (
    <section className="headerWrapper">
      <h1>Calc</h1>
      <ThemeSec themeHandler={themeHandler} />
    </section>
  );
}

export default Header;
