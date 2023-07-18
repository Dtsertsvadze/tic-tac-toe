import React from "react";
import "./Board.css";
import Box from "./Box";

const Board = (props) => {
  const board = props.board.map((value, idx) => {
    return (
      <Box
        key={idx}
        value={value}
        board={props.board}
        onClick={() => props.onClick(idx)}
      />
    );
  });

  return <div className="board">{board}</div>;
};

export default Board;
