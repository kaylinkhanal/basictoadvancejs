"use client";
import React, { useEffect, useState } from "react";

const RockPaper = () => {
  const options = ["🪨", "📄", "✂️"];
  const [selectedIdComp, setSelectedIdComp] = useState(null);
  const [selectedIdUser, setSelectedIdUser] = useState(null);

  useEffect(() => {
    if (selectedIdUser) {
      const randomNum = Math.floor(Math.random() * 3);
      setSelectedIdComp(randomNum);
    }
  }, [selectedIdUser]);

  return (
    <div className="flex justify-around">
      {selectedIdUser}
      <div>
        You:{" "}
        {options.map((item, id) => {
          if (selectedIdUser && id !== selectedIdUser) return null;
          return (
            <button
              onClick={() => setSelectedIdUser(id)}
              key={item}
              className="flex flex-col text-4xl m-2 bg-pink-200 shadow-md"
            >
              {item}
            </button>
          );
        })}
      </div>
      <div>
        Computer:
        <div className="text-9xl">{options[selectedIdComp]}</div>
      </div>

      {selectedIdComp === selectedIdUser && <div>It's a tie!</div>}
      {selectedIdUser === 0 && selectedIdComp === 2 && <div>You win!</div>}
      {selectedIdUser === 2 && selectedIdComp === 1 && <div>You win!</div>}
    </div>
  );
};

export default RockPaper;
