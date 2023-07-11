import React from "react";
import classes from "./board.css";

const Box = ({ onClick, value }) => {
  const style = value === "X" ? "box x" : "box o";
  return (
    <button onClick={onClick} className={style}>
      {value}
    </button>
  );
};

export default Box;
