import React from "react";

const Square = ({ onClickFunc, text }) => {
  return (
    <div className="square" onClick={onClickFunc}>
      {text}
    </div>
  )
}

export default Square;
