import React, { useState } from "react";
import "../styles/ThemeSec.css";
function ThemeSec({ themeHandler }) {
  const [activeTheme, setActiveTheme] = useState(1);
  const changeCurrentTheme = (id) => {
    setActiveTheme(id);
    switch (id) {
      case 1:
        themeHandler("theme1");
        break;
      case 2:
        themeHandler("theme2");
        break;
      case 3:
        themeHandler("theme3");
        break;
    }
  };
  return (
    <div className="themeSecWrapper">
      <section className="top">
        <section className="themeNums">
          <span onClick={() => changeCurrentTheme(1)}>1</span>
          <span onClick={() => changeCurrentTheme(2)}>2</span>
          <span onClick={() => changeCurrentTheme(3)}>3</span>
        </section>
      </section>
      <section className="bottom">
        <h1>THEME</h1>
        <section className="themeIndicator">
          <span className={activeTheme === 1 ? "active" : ""}></span>
          <span className={activeTheme === 2 ? "active" : ""}></span>
          <span className={activeTheme === 3 ? "active" : ""}></span>
        </section>
      </section>
    </div>
  );
}

export default ThemeSec;
