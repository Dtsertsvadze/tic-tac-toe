import React from "react";

const Box = ({ onClick, value }) => {
  const style = value === "X" ? "box x" : "box o";
  return (
    <button onClick={onClick} className={style}>
      {value}
    </button>
  );
};

export default Box;
