"use client";
import React, { useEffect, useState } from "react";

const RockPaper = () => {
  const options = ["✊", "✋", "✌"];

  const [selectedIdUser, setSelectedIdUser] = useState<number | null>(null);
  const [selectedIdComp, setSelectedIdComp] = useState<number | null>(null);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (selectedIdUser !== null) {
      const randomNum = Math.floor(Math.random() * 3);
      setSelectedIdComp(randomNum);
    }
  }, [selectedIdUser]);

  useEffect(() => {
    if (selectedIdUser === null || selectedIdComp === null) return;

    if (selectedIdUser === selectedIdComp) {
      setResult("Draw");
    } else if (
      (selectedIdUser === 0 && selectedIdComp === 2) ||
      (selectedIdUser === 1 && selectedIdComp === 0) ||
      (selectedIdUser === 2 && selectedIdComp === 1)
    ) {
      setResult("You win!");
      setScore(score + 1);
    } else {
      setResult("Computer wins!");
    }
  }, [selectedIdUser, selectedIdComp]);

  const resetGame = () => {
    setSelectedIdUser(null);
    setSelectedIdComp(null);
    setResult("");
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <div className="flex gap-10">
        <div>
          <h2 className="text-xl mb-2">You</h2>
          <div className="flex gap-3">
            {options.map((item, id) => (
              <button
                key={id}
                onClick={() => setSelectedIdUser(id)}
                className="text-4xl p-3 bg-pink-200 rounded shadow-md hover:scale-110 transition"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl mb-2">Computer</h2>
          <div className="text-7xl">
            {selectedIdComp !== null ? options[selectedIdComp] : "❔"}
          </div>
        </div>
      </div>
      <div>
        <h3>Your Score :{score}</h3>
      </div>

      {result && <div className="text-2xl font-bold">{result}</div>}

      {result && (
        <button
          onClick={resetGame}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Play Again
        </button>
        
      )}
      
    </div>
  );
};

export default RockPaper;
