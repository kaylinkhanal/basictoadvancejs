'use client';
import { useState } from "react";

const game = () => {
     const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 5) + 1
  );

  const checkGuess = () => {
    if (Number(guess) === randomNumber) {
      setMessage("🎉 Correct! You won!");
    } else {
      setMessage("❌ Wrong! Try again");
    }
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 5) + 1);
    setGuess("");
    setMessage("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🎮 Number Guessing Game</h2>
      <p>Guess a number between 1 and 5 </p>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter number"
      />
      <br /><br />

      <button onClick={checkGuess}>Check</button>
      <button onClick={resetGame} style={{ marginLeft: "10px" }}>
        Reset
      </button>

      <h3>{message}</h3>
    </div>
  );
};

export default game