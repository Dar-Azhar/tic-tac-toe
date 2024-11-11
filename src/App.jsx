import './App.css';
import React, { useState } from 'react';
import Square from './square';

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winningLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winningLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }

    return null;
  };

  const isWinner = checkWinner();
  const isDraw = state.every((square) => square !== null) && !isWinner;

  const onClick = (index) => {
    // Ignore clicks if the square is filled or if there's a winner
    if (state[index] || isWinner) return;

    const newState = [...state];
    newState[index] = isXTurn ? 'X' : 'O';
    setState(newState);
    setIsXTurn(!isXTurn);
  };

  const playAgain = () =>{
    setState(Array(9).fill(null))
  }
  return (
    <div className="board-container">
      {isWinner ? (
        <>{isWinner} won the game! <button onClick={()=>playAgain()}>Play Again</button></>
      ) : isDraw ? (
        <>Game is a Draw! <button onClick={()=>playAgain()}>Play Again</button></>
      ) : (
        <>
          <div className="board-row">
            <Square onClick={() => onClick(0)} value={state[0]} />
            <Square onClick={() => onClick(1)} value={state[1]} />
            <Square onClick={() => onClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => onClick(3)} value={state[3]} />
            <Square onClick={() => onClick(4)} value={state[4]} />
            <Square onClick={() => onClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => onClick(6)} value={state[6]} />
            <Square onClick={() => onClick(7)} value={state[7]} />
            <Square onClick={() => onClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
