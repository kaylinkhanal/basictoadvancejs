"use client";
import React, { useState } from "react";

const Calculator = () => {
    const [answer, setAnswer] = useState("");

    const keys = [
        ["AC", "%", "⌫", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="],
    ];

    const operators = ["/", "*", "-", "+"];

    const calculate = (key: string) => {
        if (key === "AC") {
            setAnswer("");
            return;
        }

        if (key === "⌫") {
            setAnswer(answer.slice(0, -1));
            return;
        }

        if (key === "%") {
            if (!answer) return;
            setAnswer((Number(answer) / 100).toString());
            return;
        }

        if (key === "=") {
            try {
                // Using Function instead of eval (safer)
                const result = Function(`return ${answer}`)();
                setAnswer(result.toString());
            } catch {
                setAnswer("Error");
            }
            return;
        }

        // Prevent multiple operators in a row
        const lastChar = answer.slice(-1);
        if (operators.includes(lastChar) && operators.includes(key)) return;

        setAnswer(answer + key);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-800">
            <div className="w-80 bg-slate-900 rounded-3xl shadow-xl p-5">
                {/* Display */}
                <div className="bg-black text-white text-right text-3xl p-4 rounded-xl mb-4 min-h-64px overflow-hidden">
                    {answer || "0"}
                </div>

                {/* Keys */}
                {keys.map((row, rowId) => (
                    <div className="flex gap-3 mb-3" key={rowId}>
                        {row.map((key) => (
                            <button
                                key={key}
                                onClick={() => calculate(key)}
                                className={`
                    flex-1 h-14 rounded-full text-lg font-semibold
                    active:scale-95 transition
                    ${operators.includes(key) || key === "="
                                        ? "bg-pink-500 text-white"
                                        : key === "AC"
                                            ? "bg-red-500 text-white"
                                            : key === "%"
                                                ? "bg-violet-500 text-white"
                                                : "bg-orange-400 text-black"
                                    }
                    ${key === "0" ? "flex-2" : ""}
                `}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calculator;
