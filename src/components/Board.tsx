import { useState } from "react";
import Block from "./Block";
import Alert from "./Alert";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<Boolean>(false);
  const [alertType, setAlertType] = useState<"draw" | "win">("win");

  const chackWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state);
    if (stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn;
    const win = chackWinner(stateCopy);
    if (win) {
      setAlertMessage(`${currentTurn} won the game`);
      setShowAlert(true);
      setAlertType("win");
      setState(Array(9).fill(null));
      return;
    }

    if (!stateCopy.includes(null)) {
      setAlertMessage(`game is draw`);
      setShowAlert(true);
      setAlertType("draw");
      setState(Array(9).fill(null));
      return;
    }
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="main">
      {showAlert && (
        <Alert
          message={alertMessage}
          onClose={handleCloseAlert}
          type={alertType}
        />
      )}
      <h1>Tic Tac Tow</h1>
      <div className="board">
        <div className="row">
          <Block onClick={() => handleBlockClick(0)} value={state[0]} />
          <Block onClick={() => handleBlockClick(1)} value={state[1]} />
          <Block onClick={() => handleBlockClick(2)} value={state[2]} />
        </div>
        <div className="row">
          <Block onClick={() => handleBlockClick(3)} value={state[3]} />
          <Block onClick={() => handleBlockClick(4)} value={state[4]} />
          <Block onClick={() => handleBlockClick(5)} value={state[5]} />
        </div>
        <div className="row">
          <Block onClick={() => handleBlockClick(6)} value={state[6]} />
          <Block onClick={() => handleBlockClick(7)} value={state[7]} />
          <Block onClick={() => handleBlockClick(8)} value={state[8]} />
        </div>
      </div>
      <button onClick={() => setState(Array(9).fill(null))}>reset</button>
    </div>
  );
};

export default Board;
