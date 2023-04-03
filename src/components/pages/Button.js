import React from "react";
import "../styles/Button.css";
function Button({ clickHandler, classname, value }) {
  return (
    <>
      <button onClick={clickHandler} className={classname}>
        {value}
      </button>
    </>
  );
}

export default Button;
