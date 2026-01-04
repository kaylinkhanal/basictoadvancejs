"use client";

import React, { useState } from 'react';

const Game = () => {

  const choices = ["rock", "paper", "scissors"];
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const playGame = (choice) => {
    const computer = choices[Math.floor(Math.random() * 3)];
    setUserChoice(choice); 
    setComputerChoice(computer);

    if (choice === computer) {
      setResult("🤝 Draw");
    } else if (
      (choice === "rock" && computer === "scissors") ||
      (choice === "paper" && computer === "rock") ||
      (choice === "scissors" && computer === "paper")
    ) {
      setResult("🏆 You win!");
      setScore(score + 1);
    } else {
      setResult("😓 You lose!");
    }
  };

  return (
    <>
    <div className='bg-gray-600 h-120 w-110 m-20'>
      <div className="text-center color-white bg-blue-600 h-10 p-2 m-10 rounded-xl"> <b>🪨Rock 📃Paper ✂️Scissors</b></div>
      <div className="text-center font-[20px]">
        <button onClick={() => playGame("rock")} 
        className="bg-green-700 m-3 rounded-xl h-10 w-20 ">🪨Rock</button>
        <button onClick={() => playGame("paper")} 
        className="bg-green-700 m-5 rounded-xl h-10 w-20 ">📃Paper</button>
        <button onClick={() => playGame("scissors")} 
        className="bg-green-700 rounded-xl m-5 h-10 w-25">✂️Scissors</button>
      </div>

      <div className="text-center m-30 font-[20px]">
        <p><b>Your choice:</b> {userChoice}</p>
        <p><b>Computer choice:</b> {computerChoice}</p>
        <h2>{result}</h2>
        <h3> Your Score: {score}</h3>
      </div>
      </div>
    </>
  );
};

export default Game;