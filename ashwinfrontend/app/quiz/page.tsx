"use client";
import React, { useState } from "react";

type Question = {
    question: string;
    answers: string[];
    correctAnswer: string;
};

const quizQuestionsAnswers: Question[] = [
    {
        question: "Which rock type is formed by cooling of magma or lava?",
        answers: ["Sedimentary", "Igneous", "Metamorphic", "Fossiliferous"],
        correctAnswer: "Igneous",
    },
    {
        question: "Which mineral is the hardest according to Mohs scale?",
        answers: ["Quartz", "Topaz", "Diamond", "Feldspar"],
        correctAnswer: "Diamond",
    },
    {
        question: "What type of rock is limestone?",
        answers: ["Igneous", "Metamorphic", "Sedimentary", "Volcanic"],
        correctAnswer: "Sedimentary",
    },
    {
        question: "Strike and dip measure what aspect of a rock formation?",
        answers: ["Orientation", "Color", "Density", "Age"],
        correctAnswer: "Orientation",
    },
    {
        question:
            "The Himalayas were primarily formed due to the collision of which tectonic plates?",
        answers: [
            "Pacific & North American",
            "Indian & Eurasian",
            "African & South American",
            "Australian & Antarctic",
        ],
        correctAnswer: "Indian & Eurasian",
    },
];

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);

    const handleAnswer = (answer: string) => {
        if (selectedAnswer) return; // prevent re-clicking
        setSelectedAnswer(answer);
        setShowFeedback(true);
        if (answer === quizQuestionsAnswers[currentQuestion].correctAnswer) {
            setScore((prev) => prev + 1);
        }
    };

    const handleNext = () => {
        setSelectedAnswer(null);
        setShowFeedback(false);
        setCurrentQuestion((prev) => prev + 1);
    };

    // quiz finished
    if (currentQuestion >= quizQuestionsAnswers.length) {
        return (
            <div className="max-w-xl mx-auto p-4 text-center">
                <h1 className="text-2xl font-bold mb-4">Quiz Completed!</h1>
                <p className="text-lg">
                    Your final score: {score} / {quizQuestionsAnswers.length}
                </p>
            </div>
        );
    }

    const question = quizQuestionsAnswers[currentQuestion];

    return (
        <div className="max-w-sm flex flex-col mx-auto p-4">
            <p className="mt-4 text-2xl text-cyan-400">Score: {score}</p>
            <h2 className="text-lg font-semibold mb-4">
                {currentQuestion + 1}. {question.question}
            </h2>
            <div className="flex flex-col gap-2">
                {question.answers.map((ans, idx) => {
                    const isSelected = selectedAnswer === ans;
                    const isCorrect = ans === question.correctAnswer;
                    return (
                        <button
                            key={idx}
                            onClick={() => handleAnswer(ans)}
                            disabled={!!selectedAnswer}
                            className={`px-4 py-2 rounded shadow-md transition-colors duration-200
                                ${isSelected
                                    ? isCorrect
                                        ? "bg-green-500 text-white"
                                        : "bg-red-400 text-white"
                                    : "bg-cyan-600 text-white hover:bg-cyan-500"
                                }`}
                        >
                            {ans}
                        </button>
                    );
                })}
            </div>

            {showFeedback && (
                <div className="mt-4">
                    <p className="font-medium">
                        {selectedAnswer === question.correctAnswer
                            ? "✅ Correct!"
                            : `❌ Wrong! Correct answer: ${question.correctAnswer}`}
                    </p>
                    <button
                        onClick={handleNext}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        Next
                    </button>
                </div>
            )}

            
        </div>
    );
}
