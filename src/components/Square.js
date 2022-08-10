import React from "react";

function Square({ handleClick, square }) {
  return (
    <button className="square" onClick={handleClick}>
      {square}
    </button>
  );
}

export default Square;
