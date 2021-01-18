import React, { useState} from "react";
import Square from "./Square";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] !== null &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)


  const onSquareClick = (index) => {
    const winner = calculateWinner(squares);
    const newSquares = [...squares];
    if (newSquares[index] !== null || winner !== null) {
      return;
    }

    newSquares[index] = xIsNext ? "X" : "0";
    setSquares(newSquares)
    setXIsNext(!xIsNext)
  }

  const winner = calculateWinner(squares);

  return (
    <div>
      {winner ? <div className="winner">
        <span>{winner}</span> is the Winner!
      </div> : <div className="status">
          Next player: {xIsNext ? "X" : "O"}
        </div>}
      <div className="board">{
        squares.map((value, index) => {
          return (
            <Square
              key={index}
              text={value}
              onClickFunc={() => {onSquareClick(index)}}
            />
          );
        })}
      </div>
    </div>
  )

}

export default Board
