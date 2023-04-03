import React from "react";
import "../styles/ButtonBox.css";
function ButtonBox({ children }) {
  return <section className="buttonWrapper">{children}</section>;
}

export default ButtonBox;
