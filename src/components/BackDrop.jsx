import React from "react";
import "./BackDrop.css";

const BackDrop = (props) => {
  const style = props.value === "O" ? "o" : "x";
  return (
    <div className="backdrop" onClick={props.onClick}>
      <div className="card">
        <div className="card-winner">
          <div className={style}>{props.player}</div>
          <div>won!</div>
        </div>
        <button className="button" onClick={props.onClick}>Play again</button>
      </div>
    </div>
  );
};

export default BackDrop;
