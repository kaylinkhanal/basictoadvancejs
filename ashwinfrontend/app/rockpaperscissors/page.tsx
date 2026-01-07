"use client";
import React, { useState } from "react";

const options = ["🪨", "📄", "✂️"] as const;
type Choice = 0 | 1 | 2;

export default function RockPaper() {
    const [userChoice, setUserChoice] = useState<Choice | null>(null);
    const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
    const [result, setResult] = useState("");
    const [thinking, setThinking] = useState(false);

    const getResult = (user: Choice, comp: Choice) => {
        if (user === comp) return "🤝 It's a tie";
        if (
            (user === 0 && comp === 2) ||
            (user === 1 && comp === 0) ||
            (user === 2 && comp === 1)
        ) {
            return "🎉 You win!";
        }
        return "💀 You lose!";
    };

    const playGame = (choice: Choice) => {
        setUserChoice(choice);
        setThinking(true);
        setResult("");
        setComputerChoice(null);

        setTimeout(() => {
            const comp = Math.floor(Math.random() * 3) as Choice;
            setComputerChoice(comp);
            setResult(getResult(choice, comp));
            setThinking(false);
        }, 800); // suspense
    };

    const reset = () => {
        setUserChoice(null);
        setComputerChoice(null);
        setResult("");
    };

    const resultColor = result.includes("win")
        ? "text-green-500"
        : result.includes("lose")
            ? "text-red-500"
            : "text-yellow-500";

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-gray-800 text-white">
            <div className="bg-black/40 backdrop-blur rounded-2xl p-8 shadow-xl w-360px text-center space-y-6">
                <h1 className="text-2xl font-bold tracking-wide">
                    Rock · Paper · Scissors
                </h1>

                {/* Choices */}
                <div className="flex justify-between">
                    {options.map((item, id) => (
                        <button
                            key={id}
                            onClick={() => playGame(id as Choice)}
                            className="text-5xl p-3 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-110 active:scale-95 transition"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Display */}
                <div className="space-y-2 min-h-80px">
                    {thinking && (
                        <div className="animate-pulse">🤖 Computer is thinking...</div>
                    )}

                    {!thinking && userChoice !== null && computerChoice !== null && (
                        <>
                            <div className="text-lg">
                                You {options[userChoice]} vs {options[computerChoice]} Computer
                            </div>
                            <div className={`text-xl font-semibold ${resultColor}`}>
                                {result}
                            </div>
                        </>
                    )}
                </div>

                {/* Reset */}
                {(userChoice !== null || computerChoice !== null) && (
                    <button
                        onClick={reset}
                        className="w-full py-2 rounded bg-white/20 hover:bg-white/30 transition"
                    >
                        Play Again
                    </button>
                )}
            </div>
        </div>
    );
}
