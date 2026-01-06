'use client'
import React, { useEffect, useState } from 'react'

const Quiz = () => {
  const quizQuestionsAnswers = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean"
    }
  ]

  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(10)

  const question = quizQuestionsAnswers[index]

  useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion()
      return
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  const checkAns = (option) => {
    if (selectedOption !== null) return

    setSelectedOption(option)

    if (option === question.correctAnswer) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (index < quizQuestionsAnswers.length - 1) {
      setIndex(index + 1)
      setSelectedOption(null)
      setTimeLeft(10)
    } else {
      setShowResult(true)
    }
  }

  const restartQuiz = () => {
    setIndex(0)
    setScore(0)
    setSelectedOption(null)
    setShowResult(false)
    setTimeLeft(10)
  }

  if (showResult) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-cyan-300">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Quiz Finished!!</h1>
          <p className="text-xl mb-4">
            Your Score: {score} / {quizQuestionsAnswers.length}
          </p>
          <button
            onClick={restartQuiz}
            className="border-2 px-4 py-2 rounded-md hover:bg-cyan-300"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-300">
      <div className="w-[700px] bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-4">Quiz App</h1>

        <div className="flex justify-between mb-4">
          <span>Question {index + 1} / {quizQuestionsAnswers.length}</span>
          <span>⏱ {timeLeft}s</span>
        </div>

        <h2 className="text-xl font-bold mb-4">{question.question}</h2>

        <ul>
          {question.options.map((option) => {
            let bg = "border-2"

            if (selectedOption) {
              if (option === question.correctAnswer) bg = "bg-green-300"
              else if (option === selectedOption) bg = "bg-red-300"
            }

            return (
              <li
                key={option}
                onClick={() => checkAns(option)}
                className={`${bg} rounded-md p-2 m-2 cursor-pointer text-center`}
              >
                {option}
              </li>
            )
          })}
        </ul>

        <div className="flex justify-end mt-4">
          <button
            onClick={nextQuestion}
            className="border-2 px-6 py-2 rounded-md hover:bg-cyan-300"
            >
             Next
          </button>
        </div>

      </div>
    </div>
  )
}

export default Quiz
