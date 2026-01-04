// ...existing code...
import { useState } from "react";

function App() {
  const choices = ["Rock", "Paper", "Scissors"];

  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice =
      choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("😐 Draw!");
    } else if (
      (choice === "Rock" && randomChoice === "Scissors") ||
      (choice === "Paper" && randomChoice === "Rock") ||
      (choice === "Scissors" && randomChoice === "Paper")
    ) {
      setResult("🎉 You Win!");
    } else {
      setResult("😢 Computer Wins!");
    }
  };

  return (
    <div>
      {choices.map(c => (
        <button key={c} onClick={() => playGame(c)}>{c}</button>
      ))}
      {/* ... */}
    </div>
  );
}
export default App;
// ...existing code...