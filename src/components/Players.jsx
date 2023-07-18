import React from "react";
import classes from "./Players.module.css";

const Players = (props) => {
  return (
    <div className={classes["players-wrapper"]}>
      <div className={classes.player}>
        <span>
          Player <span className={classes['x-player']}>X</span>
        </span>
        <span className={classes.score}>{props.score.xScore}</span>
      </div>
      <div className={classes.player}>
        <span>
          Player <span className={classes['o-player']}>O</span>
        </span>
        <span className={classes.score}>{props.score.oScore}</span>
      </div>
    </div>
  );
};

export default Players;
