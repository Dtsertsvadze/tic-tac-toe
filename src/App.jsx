import "./App.css";
import Players from "./components/Players";
import Board from "./components/Board";
import { useState } from "react";
import BackDrop from "./components/backDrop";

const WINNING_VARIATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

function App() {
  const [winner, setWinner] = useState(null);
  const [reset, setReset] = useState(false);
  const [score, setScore] = useState({
    xScore: 0,
    oScore: 0,
  });

  const [xPlaying, setXPlaying] = useState();
  const [board, setBoard] = useState(Array(9).fill(null));

  const clickHandler = (id) => {
    if (board[id] != null) {
      return;
    }
    const updatedBoard = board.map((value, idx) => {
      if (id === idx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });
    const winner = checkWinner(updatedBoard);
    if (winner) {
      if (winner === "O") {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
      } else {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
      }
    }
    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WINNING_VARIATIONS.length; i++) {
      const [x, y, z] = WINNING_VARIATIONS[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setReset(true);
        setWinner(board[x]);
        return board[x];
      }
    }
  };

  const resetHandler = () => {
    setReset(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div>
      {reset ? (
        <BackDrop onClick={resetHandler} player={winner} value={winner} />
      ) : null}
      <div className="container">
        <Players score={score} />
        <div className="turn">
          <div>Turn:</div>
          {xPlaying ? (
            <div className="x-playing">X</div>
          ) : (
            <div className="o-playing">O</div>
          )}
        </div>
        <Board onClick={reset ? resetHandler : clickHandler} board={board} />
        <button className="reset" onClick={resetHandler}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
